(function () {
  'use strict';

  var testTexts = {
    1: 'The quick brown fox jumps over the lazy dog near the riverbank. She sells seashells by the seashore and practice makes perfect every single day. Learning to type is a valuable skill for students and professionals around the world.',
    3: 'Typing is an essential skill in the modern digital world. Students who learn to type quickly and accurately can complete their assignments faster and with less effort. Practice is the key to improvement and consistency matters more than speed in the beginning. Focus on placing your fingers on the home row keys and using all ten fingers. With regular practice your typing speed will improve naturally over time. Remember to take short breaks to avoid strain and keep your posture correct while typing.',
    5: 'Typing is a fundamental skill that opens doors in education and career development. When students master the keyboard they can express their ideas more freely and complete digital tasks with confidence. The journey to becoming a proficient typist begins with learning the correct finger placement on the home row keys. From there practice common letter combinations and gradually increase your speed. Accuracy is just as important as speed because making fewer mistakes means less time spent correcting errors. Use online typing tools and regular practice sessions to build your muscle memory. Set aside fifteen to twenty minutes each day for focused typing practice. Over time you will notice significant improvements in both speed and accuracy. Remember that everyone learns at their own pace so be patient with yourself. The goal is steady consistent progress rather than overnight perfection. Good typing habits formed early will serve you well throughout your academic and professional life.'
  };

  var timerEl = document.getElementById('timer');
  var textDisplay = document.getElementById('text-display');
  var userInput = document.getElementById('user-input');
  var startBtn = document.getElementById('start-btn');
  var restartBtn = document.getElementById('restart-btn');
  var timeBtns = document.querySelectorAll('.time-btn');
  var resultCard = document.getElementById('result-card');

  var timerFill = document.getElementById('timer-fill');
  var resultMessage = document.getElementById('result-message');
  var tryAgainBtn = document.getElementById('try-again-btn');

  var wpmEl = document.getElementById('wpm-result');
  var accuracyEl = document.getElementById('accuracy-result');
  var mistakesEl = document.getElementById('mistakes-result');
  var charsTypedEl = document.getElementById('char-typed-result');

  if (!timerEl || !textDisplay || !userInput || !startBtn) return;

  var activeBtn = document.querySelector('.time-btn.active');
  var selectedTime = activeBtn ? parseInt(activeBtn.getAttribute('data-time'), 10) : 3;
  var timer = null;
  var timeLeft = 60;
  var isRunning = false;
  var isFinished = false;
  var startTime = null;
  var charIndex = 0;
  var mistakes = 0;
  var totalTyped = 0;

  function init() {
    showText(selectedTime);
    userInput.disabled = true;

    startBtn.addEventListener('click', startTest);
    if (restartBtn) restartBtn.addEventListener('click', resetTest);

    timeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (isRunning) return;
        timeBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        selectedTime = parseInt(btn.getAttribute('data-time'), 10);
        showText(selectedTime);
        resetTest();
      });
    });

    userInput.addEventListener('input', function () {
      if (!isRunning && !isFinished) return;
      checkInput();
    });
  }

  function showText(minutes) {
    var text = testTexts[String(minutes)] || testTexts[1];
    textDisplay.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var span = document.createElement('span');
      span.className = 'char';
      if (i === 0) span.classList.add('current');
      span.textContent = text[i];
      textDisplay.appendChild(span);
    }
    userInput.value = '';
    userInput.maxLength = text.length;
    charIndex = 0;
    mistakes = 0;
    totalTyped = 0;
  }

  function startTest() {
    if (isRunning) return;
    isRunning = true;
    isFinished = false;
    startBtn.disabled = true;
    userInput.disabled = false;
    userInput.value = '';
    userInput.focus();
    charIndex = 0;
    mistakes = 0;
    totalTyped = 0;

    timeLeft = selectedTime * 60;
    updateTimer();
    updateTimerFill();

    timer = setInterval(function () {
      timeLeft--;
      updateTimer();
      updateTimerFill();
      if (timeLeft <= 0) {
        endTest();
      }
    }, 1000);

    showText(selectedTime);
  }

  function updateTimer() {
    var displayTime = Math.max(0, timeLeft);
    var mins = Math.floor(displayTime / 60);
    var secs = displayTime % 60;
    timerEl.textContent = mins + ':' + (secs < 10 ? '0' : '') + secs;
  }

  function updateTimerFill() {
    if (!timerFill) return;
    var totalTime = selectedTime * 60;
    var pct = Math.max(0, (timeLeft / totalTime) * 100);
    timerFill.style.width = pct + '%';
  }

  function checkInput() {
    var text = getCurrentText();
    var input = userInput.value;
    var chars = textDisplay.querySelectorAll('.char');

    totalTyped = input.length;
    mistakes = 0;

    for (var i = 0; i < chars.length; i++) {
      chars[i].classList.remove('correct', 'incorrect', 'current');
    }

    for (var i = 0; i < input.length; i++) {
      if (i < chars.length) {
        if (input[i] === text[i]) {
          chars[i].classList.add('correct');
        } else {
          chars[i].classList.add('incorrect');
          mistakes++;
        }
      }
    }

    if (input.length < chars.length) {
      chars[input.length].classList.add('current');
    }

    charIndex = input.length;

    if (input.length >= text.length) {
      endTest();
    }
  }

  function getCurrentText() {
    return testTexts[String(selectedTime)] || testTexts[1];
  }

  function endTest() {
    if (isFinished) return;
    isFinished = true;
    isRunning = false;
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    userInput.disabled = true;
    startBtn.disabled = false;

    showResults();
    saveProgress();
  }

  function showResults() {
    if (!resultCard) return;
    var text = getCurrentText();
    var elapsed = (selectedTime * 60) - timeLeft;
    var minutes = elapsed / 60 || 1;

    var correctChars = totalTyped - mistakes;
    var wpm = Math.round((correctChars / 5) / minutes);
    var accuracy = totalTyped > 0 ? Math.round(((totalTyped - mistakes) / totalTyped) * 100) : 0;

    if (wpmEl) wpmEl.textContent = wpm || 0;
    if (accuracyEl) accuracyEl.textContent = (accuracy || 0) + '%';
    if (mistakesEl) mistakesEl.textContent = mistakes || 0;
    if (charsTypedEl) charsTypedEl.textContent = totalTyped || 0;

    if (resultMessage) {
      if (wpm >= 60 && accuracy >= 95) {
        resultMessage.textContent = 'Excellent work! You are a highly proficient typist.';
        resultMessage.className = 'result-message excellent';
      } else if (wpm >= 40 && accuracy >= 90) {
        resultMessage.textContent = 'Good job! You have solid typing skills with room to grow.';
        resultMessage.className = 'result-message good';
      } else if (wpm >= 25 && accuracy >= 80) {
        resultMessage.textContent = 'You are making good progress. Keep practicing to improve speed and accuracy.';
        resultMessage.className = 'result-message average';
      } else {
        resultMessage.textContent = 'Keep practicing! Regular lessons and accuracy drills will help you improve quickly.';
        resultMessage.className = 'result-message practice';
      }
    }

    resultCard.classList.remove('hidden');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function saveProgress() {
    try {
      var text = getCurrentText();
      var elapsed = (selectedTime * 60) - timeLeft;
      var minutes = elapsed / 60 || 1;
      var correctChars = totalTyped - mistakes;
      var wpm = Math.round((correctChars / 5) / minutes) || 0;
      var accuracy = totalTyped > 0 ? Math.round(((totalTyped - mistakes) / totalTyped) * 100) : 0;

      var saved = JSON.parse(localStorage.getItem('typeskill_progress') || '{}');
      saved.bestWpm = Math.max(saved.bestWpm || 0, wpm);
      saved.bestAccuracy = Math.max(saved.bestAccuracy || 0, accuracy);
      saved.lastPractice = new Date().toISOString();
      saved.totalTests = (saved.totalTests || 0) + 1;
      localStorage.setItem('typeskill_progress', JSON.stringify(saved));
      if (typeof window.saveProgress === 'function') {
        window.saveProgress({ totalTests: saved.totalTests, bestWpm: saved.bestWpm, bestAccuracy: saved.bestAccuracy });
      }
    } catch (e) {}
  }

  function resetTest() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    isRunning = false;
    isFinished = false;
    startBtn.disabled = false;
    userInput.disabled = true;
    userInput.value = '';
    timeLeft = selectedTime * 60;
    updateTimer();
    showText(selectedTime);
    if (resultCard) resultCard.classList.add('hidden');
    if (timerFill) timerFill.style.width = '100%';
    charIndex = 0;
    mistakes = 0;
    totalTyped = 0;
  }

  if (tryAgainBtn) {
    tryAgainBtn.addEventListener('click', function() {
      resetTest();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
