(function () {
  'use strict';

  function safeGet(key, fallback) {
    try {
      var val = localStorage.getItem(key);
      return val ? JSON.parse(val) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function safeSet(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {}
  }

  function updateGreeting() {
    var el = document.getElementById('dash-greeting');
    if (!el) return;
    var h = new Date().getHours();
    var msg = 'Good ';
    if (h < 12) msg += 'morning';
    else if (h < 17) msg += 'afternoon';
    else msg += 'evening';
    el.textContent = msg + '! Your typing progress at a glance.';
  }

  function updateBadges() {
    var data = safeGet('typeskill_progress', {});
    var lessons = safeGet('typeskill_lessons', {});
    var badges = {
      'first-lesson': false,
      'accuracy-starter': false,
      'speed-builder': false,
      'streak-7': false,
      'game-starter': false
    };

    var completedCount = 0;
    var bestAccuracy = 0;
    var bestWpm = 0;
    for (var k in lessons) {
      if (lessons[k] && lessons[k].completed) completedCount++;
      if (lessons[k] && lessons[k].bestAccuracy && lessons[k].bestAccuracy > bestAccuracy) bestAccuracy = lessons[k].bestAccuracy;
      if (lessons[k] && lessons[k].bestWpm && lessons[k].bestWpm > bestWpm) bestWpm = lessons[k].bestWpm;
    }

    if (completedCount >= 1) badges['first-lesson'] = true;
    if (bestAccuracy >= 90) badges['accuracy-starter'] = true;
    if (bestWpm >= 20) badges['speed-builder'] = true;
    if ((data.streak || 0) >= 7) badges['streak-7'] = true;
    if ((data.totalGames || 0) >= 1) badges['game-starter'] = true;

    var items = document.querySelectorAll('.badge-item');
    items.forEach(function(item) {
      var badge = item.getAttribute('data-badge');
      if (badges[badge]) {
        item.classList.add('earned');
        item.classList.remove('locked');
      } else {
        item.classList.add('locked');
        item.classList.remove('earned');
      }
    });
  }

  function updateActivity() {
    var data = safeGet('typeskill_progress', {});
    var lessons = safeGet('typeskill_lessons', {});
    var listEl = document.getElementById('activity-list');
    if (!listEl) return;

    var activities = [];

    var lastPractice = data.lastPractice;
    if (lastPractice) {
      try {
        var d = new Date(lastPractice);
        activities.push({ text: 'Last practice: ' + d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), color: 'green' });
      } catch(e) {}
    }

    var tests = data.totalTests || 0;
    if (tests > 0) activities.push({ text: tests + ' speed test' + (tests > 1 ? 's' : '') + ' taken', color: 'blue' });

    var games = data.totalGames || 0;
    if (games > 0) activities.push({ text: games + ' game' + (games > 1 ? 's' : '') + ' played', color: 'orange' });

    var completedCount = 0;
    for (var k in lessons) {
      if (lessons[k] && lessons[k].completed) completedCount++;
    }
    if (completedCount > 0) activities.push({ text: completedCount + ' lesson' + (completedCount > 1 ? 's' : '') + ' completed', color: 'green' });

    if (activities.length === 0) {
      activities.push({ text: 'No activity yet. Start practicing!', color: 'blue' });
    }

    listEl.innerHTML = '';
    activities.forEach(function(a) {
      var item = document.createElement('div');
      item.className = 'activity-item';
      item.innerHTML = '<span class="activity-dot ' + a.color + '"></span>' + a.text;
      listEl.appendChild(item);
    });
  }

  function updateProgressBars() {
    var lessons = safeGet('typeskill_lessons', {});
    var data = safeGet('typeskill_progress', {});
    var totalLessons = 30;

    var completedCount = 0;
    var bestWpm = 0;
    var bestAccuracy = 0;
    for (var k in lessons) {
      if (lessons[k] && lessons[k].completed) completedCount++;
      if (lessons[k] && lessons[k].bestWpm && lessons[k].bestWpm > bestWpm) bestWpm = lessons[k].bestWpm;
      if (lessons[k] && lessons[k].bestAccuracy && lessons[k].bestAccuracy > bestAccuracy) bestAccuracy = lessons[k].bestAccuracy;
    }

    var testWpm = data.bestWpm || 0;
    var testAccuracy = data.bestAccuracy || 0;
    var overallBestWpm = Math.max(bestWpm, testWpm);
    var overallBestAccuracy = Math.max(bestAccuracy, testAccuracy);

    var lessonPct = Math.round((completedCount / totalLessons) * 100);
    var speedPct = Math.min(100, Math.round((overallBestWpm / 60) * 100));
    var accuracyPct = Math.min(100, overallBestAccuracy);

    var bar1 = document.getElementById('progress-lessons-bar');
    var bar2 = document.getElementById('progress-speed-bar');
    var bar3 = document.getElementById('progress-accuracy-bar');
    var text1 = document.getElementById('progress-lessons-pct');
    var text2 = document.getElementById('progress-speed-text');
    var text3 = document.getElementById('progress-accuracy-text');

    if (bar1) bar1.style.width = lessonPct + '%';
    if (bar2) bar2.style.width = speedPct + '%';
    if (bar3) bar3.style.width = accuracyPct + '%';
    if (text1) text1.textContent = lessonPct + '%';
    if (text2) text2.textContent = overallBestWpm + ' WPM';
    if (text3) text3.textContent = overallBestAccuracy + '%';
  }

  function updateSuggestion() {
    var data = safeGet('typeskill_progress', {});
    var lessons = safeGet('typeskill_lessons', {});
    var completedCount = 0;
    var lastLessonId = null;
    for (var k in lessons) {
      if (lessons[k] && lessons[k].completed) { completedCount++; lastLessonId = k; }
    }

    var sugEl = document.getElementById('dash-suggestion');
    if (!sugEl) return;

    if (completedCount === 0) {
      sugEl.innerHTML = '&#x1F4A1; Start your first lesson to begin tracking progress';
    } else {
      sugEl.innerHTML = '&#x1F4A1; ' + completedCount + ' lessons done — ' + (data.streak || 0) + ' day streak. Keep going!';
    }
  }

  function loadDashboard() {
    var data = safeGet('typeskill_progress', {});
    var lessons = safeGet('typeskill_lessons', {});

    var completedCount = 0;
    var bestLessonWpm = 0;
    var bestLessonAccuracy = 0;
    for (var k in lessons) {
      if (lessons[k] && lessons[k].completed) completedCount++;
      if (lessons[k] && lessons[k].bestWpm && lessons[k].bestWpm > bestLessonWpm) bestLessonWpm = lessons[k].bestWpm;
      if (lessons[k] && lessons[k].bestAccuracy && lessons[k].bestAccuracy > bestLessonAccuracy) bestLessonAccuracy = lessons[k].bestAccuracy;
    }

    var hasData = completedCount > 0 || (data.bestWpm || 0) > 0 || (data.totalGames || 0) > 0;

    var emptyEl = document.getElementById('dash-empty');
    var contentEl = document.getElementById('dash-content');
    if (emptyEl) emptyEl.classList.toggle('hidden', hasData);
    if (contentEl) contentEl.classList.toggle('hidden', !hasData);

    if (!hasData) return;

    var bestWpm = Math.max(data.bestWpm || 0, bestLessonWpm);
    var bestAccuracy = Math.max(data.bestAccuracy || 0, bestLessonAccuracy);

    var elWpm = document.getElementById('dash-wpm');
    var elAccuracy = document.getElementById('dash-accuracy');
    var elLessons = document.getElementById('dash-lessons');
    var elStreak = document.getElementById('dash-streak');
    var elGames = document.getElementById('dash-games');
    var elCerts = document.getElementById('dash-certificates');

    if (elWpm) elWpm.textContent = bestWpm || 0;
    if (elAccuracy) elAccuracy.textContent = (bestAccuracy || 0) + '%';
    if (elLessons) elLessons.textContent = completedCount || 0;
    if (elStreak) elStreak.textContent = (data.streak || 0) + ' days';
    if (elGames) elGames.textContent = data.bestGameScore || 0;
    if (elCerts) elCerts.textContent = data.certificates || 0;

    updateBadges();
    updateActivity();
    updateProgressBars();
    updateSuggestion();
  }

  window.saveProgress = function(extra) {
    try {
      var today = new Date().toISOString().split('T')[0];
      var data = safeGet('typeskill_progress', {});
      var lastPractice = data.lastPractice;
      data.lastPractice = today;

      if (lastPractice) {
        var lastDate = new Date(lastPractice);
        var todayDate = new Date(today);
        lastDate.setHours(0,0,0,0);
        todayDate.setHours(0,0,0,0);
        var diff = Math.round((todayDate - lastDate) / (1000 * 60 * 60 * 24));
        if (diff === 1) {
          data.streak = (data.streak || 0) + 1;
        } else if (diff > 1) {
          data.streak = 0;
        }
      } else {
        data.streak = (data.streak || 0) + 1;
      }

      if (extra) {
        for (var key in extra) {
          if (extra.hasOwnProperty(key)) data[key] = extra[key];
        }
      }

      safeSet('typeskill_progress', data);
    } catch(e) {}
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      updateGreeting();
      loadDashboard();
    });
  } else {
    updateGreeting();
    loadDashboard();
  }
})();