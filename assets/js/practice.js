(function () {
  'use strict';

  var wordLists = {
    beginner: [
      'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had',
      'her', 'was', 'one', 'our', 'out', 'has', 'have', 'from', 'they', 'been',
      'some', 'what', 'when', 'where', 'which', 'their', 'there', 'could', 'would',
      'about', 'after', 'also', 'into', 'just', 'like', 'make', 'more', 'over',
      'than', 'them', 'then', 'time', 'very', 'were', 'with', 'well', 'back', 'call'
    ],
    common: [
      'education', 'important', 'students', 'practice', 'typing', 'keyboard',
      'learning', 'digital', 'computer', 'writing', 'reading', 'knowledge',
      'academy', 'skills', 'develop', 'improve', 'accuracy', 'speed', 'lesson',
      'school', 'college', 'university', 'teacher', 'information', 'technology',
      'science', 'mathematics', 'language', 'history', 'geography', 'subjects',
      'progress', 'certificate', 'dashboard', 'challenge', 'exercise', 'typing',
      'fingers', 'position', 'correct', 'mistakes', 'review', 'continue', 'finish'
    ],
    student: [
      'Education is the most powerful tool for changing the world and building a better future.',
      'Typing is an essential skill that helps students complete their work faster and more efficiently.',
      'Practice makes progress and consistent effort leads to improvement over time.',
      'Learning to type with all ten fingers will increase your speed and reduce fatigue.',
      'Setting aside time each day for typing practice will help you build strong habits.',
      'Accuracy is just as important as speed when learning to type on a keyboard.',
      'The home row keys are the foundation of touch typing and proper finger placement.',
      'Reading comprehension and writing skills go hand in hand with typing ability.',
      'Students who type well can focus more on their ideas and less on the keyboard.',
      'Taking short breaks during practice helps maintain focus and prevents strain.',
      'Digital literacy is a key skill for success in modern education and careers.',
      'Typing tests measure both speed and accuracy to help track your improvement.',
      'Regular practice of common words builds muscle memory for faster typing.',
      'A comfortable typing posture includes sitting straight with feet flat on the floor.',
      'Using online resources and typing tools can supplement your learning journey.'
    ]
  };

  var accuracySentence = document.getElementById('accuracy-sentence');
  var accuracyInput = document.getElementById('accuracy-input');
  var accuracyDisplay = document.getElementById('accuracy-display');
  var accuracyResult = document.getElementById('accuracy-result');
  var accuracyRestart = document.getElementById('accuracy-restart');
  var accuracyPercent = document.getElementById('accuracy-percent');
  var totalCharsEl = document.getElementById('total-chars');
  var wrongCharsEl = document.getElementById('wrong-chars');

  var currentAccuracySentence = '';

  function initAccuracy() {
    if (!accuracySentence) return;
    loadAccuracySentence();
    if (accuracyInput) {
      accuracyInput.addEventListener('input', checkAccuracy);
      accuracyInput.disabled = false;
    }
    if (accuracyRestart) {
      accuracyRestart.addEventListener('click', function () {
        loadAccuracySentence();
        accuracyInput.value = '';
        accuracyInput.disabled = false;
        accuracyInput.focus();
        if (accuracyResult) accuracyResult.classList.add('hidden');
        if (accuracyDisplay) accuracyDisplay.innerHTML = '';
      });
    }
  }

  function loadAccuracySentence() {
    var sentences = wordLists.student;
    currentAccuracySentence = sentences[Math.floor(Math.random() * sentences.length)];
    if (accuracySentence) {
      accuracySentence.textContent = currentAccuracySentence;
    }
    if (accuracyDisplay) {
      accuracyDisplay.innerHTML = '';
      for (var i = 0; i < currentAccuracySentence.length; i++) {
        var span = document.createElement('span');
        span.className = 'char-pending';
        span.textContent = currentAccuracySentence[i];
        span.setAttribute('data-index', i);
        accuracyDisplay.appendChild(span);
      }
    }
  }

  function checkAccuracy() {
    if (!accuracyInput || !accuracyDisplay) return;
    var input = accuracyInput.value;

    if (input.length === 0) {
      if (accuracyResult) accuracyResult.classList.add('hidden');
    }

    var chars = accuracyDisplay.querySelectorAll('span');
    var wrong = 0;

    for (var i = 0; i < chars.length; i++) {
      chars[i].className = 'char-pending';
    }

    for (var i = 0; i < input.length; i++) {
      if (i < chars.length) {
        if (input[i] === currentAccuracySentence[i]) {
          chars[i].className = 'char-correct';
        } else {
          chars[i].className = 'char-incorrect';
          wrong++;
        }
      }
    }

    if (input.length >= currentAccuracySentence.length) {
      var accuracy = Math.round(((input.length - wrong) / input.length) * 100);
      if (accuracyPercent) accuracyPercent.textContent = (accuracy || 0) + '%';
      if (totalCharsEl) totalCharsEl.textContent = input.length || 0;
      if (wrongCharsEl) wrongCharsEl.textContent = wrong || 0;
      if (accuracyResult) accuracyResult.classList.remove('hidden');
      accuracyInput.disabled = true;
    }
  }

  var wordDisplay = document.getElementById('word-display');
  var wordInput = document.getElementById('word-input');
  var wordStart = document.getElementById('word-start');
  var wordRestart = document.getElementById('word-restart');
  var wordResult = document.getElementById('word-result');
  var wordWpm = document.getElementById('word-wpm');
  var wordAccuracy = document.getElementById('word-accuracy');
  var wordTimer = document.getElementById('word-timer');
  var levelBtns = document.querySelectorAll('.level-btn');

  var currentWords = [];
  var wordIndex = 0;
  var wordMistakes = 0;
  var wordCorrect = 0;
  var wordTimerInterval = null;
  var wordSeconds = 0;
  var wordRunning = false;
  var wordSelectedLevel = 'beginner';

  function initWordPractice() {
    if (!wordDisplay) return;

    loadWords(wordSelectedLevel);

    if (wordStart) {
      wordStart.addEventListener('click', startWordPractice);
    }
    if (wordRestart) {
      wordRestart.addEventListener('click', resetWordPractice);
    }
    if (wordInput) {
      wordInput.addEventListener('keydown', function (e) {
        if (e.key === ' ') {
          e.preventDefault();
          checkWord();
        }
      });
      wordInput.disabled = true;
    }

    levelBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (wordRunning) return;
        levelBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        wordSelectedLevel = btn.getAttribute('data-level') || 'beginner';
        loadWords(wordSelectedLevel);
        resetWordPractice();
      });
    });
  }

  function loadWords(level) {
    var list = wordLists[level] || wordLists.beginner;
    currentWords = [];
    for (var i = 0; i < 30; i++) {
      currentWords.push(list[Math.floor(Math.random() * list.length)]);
    }
    renderWords();
  }

  function renderWords() {
    if (!wordDisplay) return;
    wordDisplay.innerHTML = '';
    currentWords.forEach(function (word, idx) {
      var span = document.createElement('span');
      span.className = 'word';
      if (idx === 0) span.classList.add('active');
      span.textContent = word;
      span.setAttribute('data-index', idx);
      wordDisplay.appendChild(span);
    });
  }

  function startWordPractice() {
    if (wordRunning) return;
    wordRunning = true;
    wordIndex = 0;
    wordMistakes = 0;
    wordCorrect = 0;
    wordSeconds = 0;
    wordInput.disabled = false;
    wordInput.value = '';
    wordInput.focus();
    if (wordStart) wordStart.disabled = true;
    if (wordResult) wordResult.classList.add('hidden');

    loadWords(wordSelectedLevel);
    updateWordTimer();

    wordTimerInterval = setInterval(function () {
      wordSeconds++;
      updateWordTimer();
      if (wordSeconds >= 60) {
        endWordPractice();
      }
    }, 1000);
  }

  function updateWordTimer() {
    if (wordTimer) {
      var m = Math.floor(wordSeconds / 60);
      var s = wordSeconds % 60;
      wordTimer.textContent = m + ':' + (s < 10 ? '0' : '') + s;
    }
  }

  function checkWord() {
    if (!wordInput || !wordDisplay) return;
    var typed = wordInput.value.trim();
    if (typed === '') return;

    var wordEls = wordDisplay.querySelectorAll('.word');
    if (wordIndex < wordEls.length) {
      var currentWord = currentWords[wordIndex];
      if (typed === currentWord) {
        wordEls[wordIndex].classList.add('correct');
        wordCorrect++;
      } else {
        wordEls[wordIndex].classList.add('incorrect');
        wordMistakes++;
      }
      wordEls[wordIndex].classList.remove('active');

      wordIndex++;
      if (wordIndex < wordEls.length) {
        wordEls[wordIndex].classList.add('active');
      }
    }

    wordInput.value = '';

    if (wordIndex >= currentWords.length) {
      endWordPractice();
    }
  }

  function endWordPractice() {
    wordRunning = false;
    if (wordTimerInterval) {
      clearInterval(wordTimerInterval);
      wordTimerInterval = null;
    }
    if (wordInput) wordInput.disabled = true;
    if (wordStart) wordStart.disabled = false;

    var total = wordCorrect + wordMistakes;
    var accuracy = total > 0 ? Math.round((wordCorrect / total) * 100) : 0;
    var minutes = wordSeconds / 60 || 1;
    var wpm = Math.round(wordCorrect / minutes);

    if (wordWpm) wordWpm.textContent = wpm || 0;
    if (wordAccuracy) wordAccuracy.textContent = (accuracy || 0) + '%';
    if (wordResult) wordResult.classList.remove('hidden');

    try {
      var saved = JSON.parse(localStorage.getItem('typeskill_progress') || '{}');
      saved.bestWpm = Math.max(saved.bestWpm || 0, wpm);
      saved.bestAccuracy = Math.max(saved.bestAccuracy || 0, accuracy);
      saved.lastPractice = new Date().toISOString();
      saved.totalPractices = (saved.totalPractices || 0) + 1;
      localStorage.setItem('typeskill_progress', JSON.stringify(saved));
    } catch (e) {}
  }

  function resetWordPractice() {
    wordRunning = false;
    if (wordTimerInterval) {
      clearInterval(wordTimerInterval);
      wordTimerInterval = null;
    }
    wordSeconds = 0;
    wordIndex = 0;
    wordMistakes = 0;
    wordCorrect = 0;
    if (wordInput) { wordInput.value = ''; wordInput.disabled = true; }
    if (wordStart) wordStart.disabled = false;
    if (wordResult) wordResult.classList.add('hidden');
    if (wordTimer) wordTimer.textContent = '0:00';
    loadWords(wordSelectedLevel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initAccuracy();
      initWordPractice();
    });
  } else {
    initAccuracy();
    initWordPractice();
  }

})();
