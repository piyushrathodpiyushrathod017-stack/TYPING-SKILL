// Netlify Function: ga-summary
// Securely fetches summary analytics from Google Analytics Data API v1.
//
// Required environment variables (set in Netlify Dashboard):
//   GA_PROPERTY_ID  - e.g. "properties/123456789"
//   GA_CLIENT_EMAIL - Service account email from Google Cloud
//   GA_PRIVATE_KEY  - Private key for the service account (base64 or raw)
//
// NEVER hardcode these values. Set them in Netlify environment variables.
//
// To set up:
// 1. Create a Google Cloud service account with "Analytics Viewer" role
// 2. Add the service account email as a viewer in GA4 property settings
// 3. Generate a JSON key and extract client_email / private_key
// 4. Set GA_CLIENT_EMAIL, GA_PRIVATE_KEY, GA_PROPERTY_ID in Netlify dashboard
//
// This function returns real data if env vars are configured,
// otherwise returns a safe placeholder indicating not connected.

const https = require("https");

const PLACEHOLDER_RESPONSE = {
  connected: false,
  message:
    "Connect Google Analytics Data API using Netlify environment variables. Set GA_PROPERTY_ID, GA_CLIENT_EMAIL, and GA_PRIVATE_KEY in Netlify dashboard.",
};

async function getAccessToken(clientEmail, privateKey) {
  const jwtHeader = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const jwtClaim = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const base64Url = (obj) =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64")
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

  const signatureInput = base64Url(jwtHeader) + "." + base64Url(jwtClaim);

  const { createSign } = await import("crypto");
  const sign = createSign("RSA-SHA256");
  sign.update(signatureInput);
  const signature = sign
    .sign(privateKey, "base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  const jwt = signatureInput + "." + signature;

  return new Promise((resolve, reject) => {
    const postData = `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`;
    const req = https.request(
      {
        hostname: "oauth2.googleapis.com",
        path: "/token",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data).access_token);
          } catch {
            reject(new Error("Failed to parse token response"));
          }
        });
      }
    );
    req.on("error", reject);
    req.write(postData);
    req.end();
  });
}

async function fetchGAData(propertyId, accessToken) {
  const body = JSON.stringify({
    dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
    metrics: [
      { name: "activeUsers" },
      { name: "screenPageViews" },
      { name: "sessions" },
    ],
    dimensions: [
      { name: "pagePath" },
      { name: "sessionSource" },
      { name: "deviceCategory" },
    ],
    limit: 10,
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "analyticsdata.googleapis.com",
        path: `/v1beta/${propertyId}:runReport`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            reject(new Error("Failed to parse GA response"));
          }
        });
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

exports.handler = async (event, context) => {
  const propertyId = process.env.GA_PROPERTY_ID;
  const clientEmail = process.env.GA_CLIENT_EMAIL;
  const privateKey = process.env.GA_PRIVATE_KEY;

  if (!propertyId || !clientEmail || !privateKey) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(PLACEHOLDER_RESPONSE),
    };
  }

  try {
    const accessToken = await getAccessToken(clientEmail, privateKey);
    const rawData = await fetchGAData(propertyId, accessToken);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        connected: true,
        propertyId,
        metrics: {
          activeUsers: rawData.rows?.[0]?.metricValues?.[0]?.value || "0",
          pageviews: rawData.rows?.[0]?.metricValues?.[1]?.value || "0",
          sessions: rawData.rows?.[0]?.metricValues?.[2]?.value || "0",
        },
        raw: rawData,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        connected: false,
        error: err.message,
        message: "GA Data API request failed. Check your credentials.",
      }),
    };
  }
};
