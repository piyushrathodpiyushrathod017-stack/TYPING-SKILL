# TypeSkill

A free, mobile-first educational typing website built with pure HTML, CSS, and JavaScript. No frameworks, no build tools, no external dependencies.

## Features

- Typing Speed Test (1, 3, 5 minute options)
- Accuracy Test with real-time character feedback
- Typing Word Practice (3 difficulty levels)
- Student Dashboard & Progress Tracker (localStorage)
- Printable Typing Certificate
- Educational Typing Games (Falling Words, Timed Challenge)
- 20 Educational Blog Articles
- 20+ Pages of Original Content
- Fully Responsive Mobile-First Design

## Quick Start

### Method 1: Using npx (requires Node.js)

```bash
npx serve . -p 1111
```

### Method 2: Using Python

```bash
python -m http.server 1111
```

Then open http://localhost:1111 in your browser.

## Project Structure

```
typeskill-academy/
├── index.html                    # Homepage
├── lessons.html                  # Typing lessons overview
├── beginner-course.html          # Full beginner typing course
├── speed-test.html               # Typing speed test tool
├── accuracy-test.html            # Accuracy test tool
├── typing-practice.html          # Word practice tool
├── kids-typing.html              # Kids typing resources
├── student-dashboard.html        # Progress dashboard
├── typing-games.html             # Typing games
├── certificate.html              # Certificate generator
├── progress-tracker.html         # Progress tracking
├── keyboard-basics.html          # Keyboard fundamentals
├── computer-basics.html          # Computer basics guide
├── digital-literacy.html         # Digital literacy resources
├── exam-typing-practice.html     # Exam preparation
├── blog.html                     # Blog listing
├── about.html                    # About us
├── contact.html                  # Contact form
├── privacy-policy.html           # Privacy policy
├── terms.html                    # Terms of use
├── disclaimer.html               # Disclaimer
├── cookie-policy.html            # Cookie policy
├── accessibility.html            # Accessibility statement
├── sitemap.html                  # Site sitemap
├── 404.html                      # Error page
├── robots.txt                    # SEO robots.txt
├── sitemap.xml                   # XML sitemap
├── blog/                         # Blog articles
│   ├── why-typing-speed-matters.html
│   ├── improve-typing-accuracy.html
│   ├── beginner-touch-typing-guide.html
│   ├── daily-typing-routine.html
│   └── typing-for-students.html
└── assets/
    ├── css/
    │   └── style.css             # Complete design system
    ├── js/
    │   ├── main.js               # Navigation & utilities
    │   ├── typing-test.js        # Speed test logic
    │   ├── practice.js           # Word practice & accuracy
    │   ├── dashboard.js          # Dashboard & progress
    │   ├── games.js              # Typing games
    │   └── certificate.js        # Certificate generator
    └── img/
        ├── logo.svg              # Site logo
        └── favicon.svg            # SVG favicon
```

## Testing Mobile Responsiveness

1. Open the site on a mobile device or use browser DevTools
2. Toggle device toolbar (Ctrl+Shift+M in Chrome)
3. Test at 375px, 768px, and 1024px widths
4. Verify navigation menu works on mobile
5. Test all typing tools on touch devices

## Deployment

### Deploy on Netlify

1. Create a Netlify account
2. Click "Add new site" > "Deploy manually"
3. Drag and drop the `typeskill-academy` folder
4. Netlify will deploy instantly
5. (Optional) Set a custom domain

### Deploy on Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` from the project folder
3. Follow the prompts

### Deploy on GitHub Pages

1. Push the project to a GitHub repository
2. Go to Settings > Pages
3. Select main branch and root folder
4. Save and wait for deployment

## Customization

### Updating Content

- Edit any `.html` file directly
- Update styles in `assets/css/style.css`
- Modify typing test paragraphs in `assets/js/typing-test.js`
- Update word lists in `assets/js/practice.js`

### Adding Blog Articles

1. Create a new HTML file in the `blog/` directory
2. Link to it from `blog.html` in the blog grid
3. Add the URL to `sitemap.xml`

### Changing Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
  --primary: #2563EB;
  --text: #111827;
  --bg: #F9FAFB;
  --accent: #22C55E;
  /* ... */
}
```

## SEO Checklist

- [x] Unique title tags on every page
- [x] Unique meta descriptions on every page
- [x] One H1 per page
- [x] Semantic HTML structure
- [x] Open Graph meta tags
- [x] JSON-LD schema on homepage
- [x] robots.txt
- [x] sitemap.xml
- [x] sitemap.html
- [x] Clean URL structure
- [x] Internal linking between pages

## AdSense Preparation

- [x] Privacy Policy page
- [x] Terms of Use page
- [x] Disclaimer page
- [x] Cookie Policy page
- [x] Accessibility Statement
- [x] Contact page with email
- [x] About page with mission
- [x] Footer links to all policies
- [x] Original content throughout
- [x] No copyrighted material
- [x] No adult/gambling/violence content
- [x] No fake testimonials or claims
- [x] Clean, professional design
- [x] Mobile-friendly

### Troubleshooting

**404 errors after deployment**
Make sure `_redirects` or `netlify.toml` is in the root folder. Netlify uses these for custom 404 handling.

**LocalStorage data not saving**
TypeSkill uses browser localStorage for progress. If data isn't saving, check that:
- You're not in private/incognito mode (some browsers restrict localStorage)
- Your browser storage isn't full
- You're accessing via http:// or https:// (not file:// protocol)

**Port 1111 already in use**
If port 1111 is busy, use a different port:
```bash
python -m http.server 8080
```
Then open http://localhost:8080.

**Mobile menu not working**
The hamburger menu requires JavaScript. Ensure JavaScript is enabled in your browser. The menu toggle button has `aria-label="Toggle navigation menu"` for accessibility.

**Certificate not printing correctly**
Use the Print Certificate button. For best results, set your browser's margins to "Default" and enable "Background graphics" in print settings.

## License

Educational use. All content is original and owned by TypeSkill.
