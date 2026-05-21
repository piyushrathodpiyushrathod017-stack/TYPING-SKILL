(function () {
  'use strict';

  var words = [
    'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had',
    'her', 'was', 'one', 'our', 'out', 'has', 'have', 'from', 'they', 'been',
    'some', 'what', 'when', 'where', 'which', 'their', 'there', 'could', 'would',
    'about', 'after', 'also', 'into', 'just', 'like', 'make', 'more', 'over',
    'than', 'them', 'then', 'time', 'very', 'were', 'with', 'well', 'back', 'call',
    'help', 'keep', 'kind', 'know', 'last', 'life', 'long', 'many', 'most', 'much'
  ];

  var canvas = document.getElementById('gameCanvas');
  var gameInput = document.getElementById('game-input');
  var gameScore = document.getElementById('game-score');
  var gameStart = document.getElementById('game-start');
  var gameOver = document.getElementById('game-over');
  var finalScore = document.getElementById('final-score');
  var gameRestart = document.getElementById('game-restart');
  var gameTimer = document.getElementById('game-timer');

  var ctx = canvas ? canvas.getContext('2d') : null;
  var fallingWords = [];
  var animationId = null;
  var gameActive = false;
  var score = 0;
  var gameTimeLeft = 60;
  var gameTimerInterval = null;
  var spawnInterval = null;
  var canvasWidth = 600;
  var canvasHeight = 400;

  function resizeCanvas() {
    if (!canvas) return;
    var wrapper = canvas.parentElement;
    if (wrapper) {
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.width = wrapper.clientWidth || 600;
      canvas.height = wrapper.clientHeight || 400;
      canvasWidth = canvas.width;
      canvasHeight = canvas.height;
    }
  }

  function initFallingGame() {
    if (!canvas || !ctx) return;
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (gameStart) {
      gameStart.addEventListener('click', startFallingGame);
    }
    if (gameRestart) {
      gameRestart.addEventListener('click', function () {
        if (gameOver) gameOver.classList.add('hidden');
        startFallingGame();
      });
    }
    if (gameInput) {
      gameInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && gameActive) {
          e.preventDefault();
          checkFallingWord();
        }
      });
      gameInput.disabled = true;
    }
  }

  function startFallingGame() {
    if (gameTimerInterval) { clearInterval(gameTimerInterval); gameTimerInterval = null; }
    if (spawnInterval) { clearInterval(spawnInterval); spawnInterval = null; }
    if (animationId) { cancelAnimationFrame(animationId); animationId = null; }
    gameActive = true;
    resizeCanvas();
    score = 0;
    gameTimeLeft = 60;
    fallingWords = [];
    if (gameScore) gameScore.textContent = '0';
    if (gameOver) gameOver.classList.add('hidden');
    if (gameInput) { gameInput.value = ''; gameInput.disabled = false; gameInput.focus(); }
    if (gameStart) gameStart.disabled = true;

    updateGameTimer();

    gameTimerInterval = setInterval(function () {
      if (!gameActive) {
        endFallingGame();
        return;
      }
      gameTimeLeft--;
      updateGameTimer();
      if (gameTimeLeft <= 0) {
        endFallingGame();
      }
    }, 1000);

    spawnInterval = setInterval(function () {
      if (gameActive) {
        spawnWord();
      }
    }, 2000);

    animate();
  }

  function spawnWord() {
    var word = words[Math.floor(Math.random() * words.length)];
    var x = 50 + Math.random() * (canvasWidth - 100);
    fallingWords.push({
      text: word,
      x: x,
      y: 0,
      speed: 0.8 + Math.random() * 0.5,
      width: word.length * 12,
      height: 20
    });
  }

  function animate() {
    if (!ctx || !gameActive) return;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, canvasHeight - 20);
    ctx.lineTo(canvasWidth, canvasHeight - 20);
    ctx.stroke();

    var wordHitBottom = false;
    for (var i = fallingWords.length - 1; i >= 0; i--) {
      var w = fallingWords[i];
      w.y += w.speed;

      ctx.fillStyle = '#2563EB';
      ctx.font = '16px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(w.text, w.x, w.y);

      ctx.strokeStyle = 'rgba(37, 99, 235, 0.2)';
      ctx.strokeRect(w.x - w.width / 2 - 4, w.y - 16, w.width + 8, 22);

      if (w.y > canvasHeight + 20) {
        wordHitBottom = true;
        fallingWords.splice(i, 1);
      }
    }

    if (wordHitBottom) {
      endFallingGame();
      return;
    }

    if (gameActive) {
      animationId = requestAnimationFrame(animate);
    }
  }

  function checkFallingWord() {
    if (!gameInput || !gameActive) return;
    var typed = gameInput.value.trim().toLowerCase();
    if (typed === '') return;

    for (var i = 0; i < fallingWords.length; i++) {
      if (fallingWords[i].text === typed) {
        fallingWords.splice(i, 1);
        score++;
        if (gameScore) gameScore.textContent = score;
        gameInput.value = '';
        return;
      }
    }

    gameInput.value = '';
    gameInput.style.borderColor = '#EF4444';
    setTimeout(function () {
      if (gameInput) gameInput.style.borderColor = '';
    }, 200);
  }

  function updateGameTimer() {
    if (gameTimer) {
      var m = Math.floor(gameTimeLeft / 60);
      var s = gameTimeLeft % 60;
      gameTimer.textContent = m + ':' + (s < 10 ? '0' : '') + s;
    }
  }

  function endFallingGame() {
    gameActive = false;
    if (gameTimerInterval) { clearInterval(gameTimerInterval); gameTimerInterval = null; }
    if (spawnInterval) { clearInterval(spawnInterval); spawnInterval = null; }
    if (animationId) { cancelAnimationFrame(animationId); animationId = null; }
    if (gameInput) gameInput.disabled = true;
    if (gameStart) gameStart.disabled = false;

    if (finalScore) finalScore.textContent = score;
    if (gameOver) gameOver.classList.remove('hidden');

    try {
      var saved = JSON.parse(localStorage.getItem('typeskill_progress') || '{}');
      saved.lastPractice = new Date().toISOString();
      saved.totalGames = (saved.totalGames || 0) + 1;
      saved.bestGameScore = Math.max(saved.bestGameScore || 0, score);
      localStorage.setItem('typeskill_progress', JSON.stringify(saved));
    } catch (e) {}
  }

  var challengeStart = document.getElementById('challenge-start');
  var challengeInput = document.getElementById('challenge-input');
  var challengeWord = document.getElementById('challenge-word');
  var challengeScore = document.getElementById('challenge-score');
  var challengeTimer = document.getElementById('challenge-timer');
  var challengeResult = document.getElementById('challenge-result');
  var challengeFinal = document.getElementById('challenge-final');
  var challengeRestart = document.getElementById('challenge-restart');

  var challengeActive = false;
  var challengeScoreVal = 0;
  var challengeTimeLeft = 30;
  var challengeInterval = null;

  function initChallenge() {
    if (!challengeStart) return;

    challengeStart.addEventListener('click', startChallenge);
    if (challengeRestart) {
      challengeRestart.addEventListener('click', function () {
        if (challengeResult) challengeResult.classList.add('hidden');
        startChallenge();
      });
    }
    if (challengeInput) {
      challengeInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && challengeActive) {
          e.preventDefault();
          checkChallengeWord();
        }
      });
      challengeInput.disabled = true;
    }
  }

  function startChallenge() {
    if (challengeInterval) { clearInterval(challengeInterval); challengeInterval = null; }
    challengeActive = true;
    challengeScoreVal = 0;
    challengeTimeLeft = 30;
    if (challengeScore) challengeScore.textContent = '0';
    if (challengeResult) challengeResult.classList.add('hidden');
    if (challengeStart) challengeStart.disabled = true;
    if (challengeInput) { challengeInput.value = ''; challengeInput.disabled = false; challengeInput.focus(); }

    showChallengeWord();
    updateChallengeTimer();

    challengeInterval = setInterval(function () {
      challengeTimeLeft--;
      updateChallengeTimer();
      if (challengeTimeLeft <= 0) {
        endChallenge();
      }
    }, 1000);
  }

  function showChallengeWord() {
    if (challengeWord) {
      challengeWord.textContent = words[Math.floor(Math.random() * words.length)];
    }
  }

  function checkChallengeWord() {
    if (!challengeInput || !challengeWord) return;
    var typed = challengeInput.value.trim().toLowerCase();
    if (typed === challengeWord.textContent) {
      challengeScoreVal++;
      if (challengeScore) challengeScore.textContent = challengeScoreVal;
    }
    challengeInput.value = '';
    showChallengeWord();
  }

  function updateChallengeTimer() {
    if (challengeTimer) {
      challengeTimer.textContent = challengeTimeLeft + 's';
    }
  }

  function endChallenge() {
    challengeActive = false;
    if (challengeInterval) { clearInterval(challengeInterval); challengeInterval = null; }
    if (challengeInput) challengeInput.disabled = true;
    if (challengeStart) challengeStart.disabled = false;
    if (challengeFinal) challengeFinal.textContent = challengeScoreVal;
    if (challengeResult) challengeResult.classList.remove('hidden');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initFallingGame();
      initChallenge();
    });
  } else {
    initFallingGame();
    initChallenge();
  }

})();
