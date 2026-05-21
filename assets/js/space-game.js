(function () {
  'use strict';

  var words = {
    short: ['the','and','for','are','but','not','you','all','can','had','her','was','one','our','out','has','get','see','use','try','way','new','now','how','its','two','let','run','set','put','end','did','say','own','old','too','any','day','may','far','big','hot','yet','law','few','top','bad','red','eat','cut','hit','win','buy','die','fly','grow','hope','jump','keep','lead','left','life','like','lost','love','make','more','move','much','name','need','next','open','past','plan','play','read','real','rest','rich','safe','save','send','sure','take','tell','test','they','this','true','view','wait','walk','want','warm','wash','wear','week','wild','will','wish','word','work','year'],
    medium: ['about','above','abuse','accept','access','across','action','active','actual','advice','affect','afford','afraid','agency','almost','amount','animal','annual','answer','appeal','appear','around','artist','assess','assign','assist','assume','attach','attack','attend','author','barely','battle','beauty','become','before','behalf','behave','behind','belong','beside','beyond','bitter','border','borrow','bottle','bottom','bounce','branch','breath','bridge','bright','broken','bronze','bubble','bucket','budget','bullet','bundle','burden','butter','button','camera','campus','cancel','carbon','career','carrier','castle','casual','caught','centre','chance','change','charge','cheese','choice','choose','chosen','church','circle','clever','client','clinic','closed','closer','coffee','colony','colour','column','combat','coming','commit','common','corner','costly','cotton','county','couple','course','create','credit','crisis','custom','damage','danger','deadly','dealer','debate','debris','decade','decent','decide','declare','decline','defeat','defend','define','degree','demand','denial','depend','deploy','deposit','deputy','derive','desert','design','desire','detail','detect','device','devote','dinner','direct','divide','doctor','dollar','domain','double','driven','driver','during','easily','editor','effect','effort','either','emerge','empire','employ','enable','ending','endure','energy','engage','engine','enough','ensure','entire','entity','equity','escape','estate','evolve','exceed','except','excuse','expand','expect','expert','export','expose','extend','extent','fabric','facial','facing','factor','fairly','fallen','family','famous','farmer','faster','father','favour','feared','fellow','female','figure','filter','final','finance','finger','finish','fiscal','flavor','flying','follow','forced','forest','forget','formal','format','former','fossil','foster','fourth','freely','freeze','friend','frozen','future','gained','galaxy','garden','gather','gender','gentle','glance','global','golden','govern','graph','gravity','greater','ground','growth','guilty','guitar','hammer','handle','happen','harbor','hardly','health','heaven','heavily','height','helmet','honest','honour','horror','hosted','hotel','humble','hunter','ignore','illegal','illness','impose','import','income','indeed','indoor','infant','inform','injury','insect','insert','inside','insist','insure','intact','intend','intent','invest','invite','island','itself','jacket','joined','jungle','junior','justice','keeper','killer','kindly','knight','launch','lawyer','layout','leader','league','lender','lesson','letter','likely','linear','liquid','listen','litter','little','lively','living','locate','lonely','losing','lovely','luxury','mainly','manage','manner','marble','margin','marker','market','matter','meadow','medium','member','memory','mental','mentor','merely','method','middle','mighty','mining','minute','mirror','mobile','modern','modest','modify','module','moment','monkey','month','mostly','mother','motion','murder','muscle','museum','mutual','myself','namely','narrow','nation','native','nature','nearby','nearly','needle','nervous','nobody','normal','notice','notion','number','object','obtain','occupy','offend','office','online','oppose','option','orange','origin','outfit','outlet','output','palace','parent','parish','partly','patent','patrol','patron','people','period','permit','person','phrase','pillar','planet','plasma','player','please','pledge','plenty','pocket','poetry','police','policy','polish','poorly','poster','potato','powder','prayer','prefer','pretty','prince','prison','private','profit','prompt','proper','proven','public','pursue','puzzle','racial','random','rarely','rather','rating','reader','reality','realize','rebels','recent','recipe','record','reduce','reform','refuse','regard','regime','region','reject','relate','relief','remain','remedy','remote','remove','render','rental','repair','repeat','report','rescue','resign','resist','resort','result','retail','retain','retire','return','reveal','review','reward','rhythm','riddle','rights','rising','ritual','rocket','roughly','routine','ruling','runner','sacred','safety','salary','saving','scheme','school','screen','script','search','season','second','secret','sector','secure','seeing','select','seller','senior','sensor','serial','server','settle','severe','shadow','shield','shifts','shoot','shore','signal','silent','silver','simple','simply','singer','single','sister','sketch','skilled','smooth','social','solely','sought','source','spare','speak','special','speech','spirit','spoken','spread','spring','square','stable','stance','statue','status','steady','stolen','strain','strand','stream','street','stress','strict','strike','string','stroke','strong','studio','submit','subtle','sudden','suffer','summer','summit','supply','surely','survey','switch','symbol','system','tablet','tackle','talent','target','temple','tenant','tender','tennis','terror','thanks','theory','thirty','threat','thrill','thrive','throne','timber','tissue','tongue','toward','travel','treaty','tribal','trophy','tunnel','twelve','twenty','unfair','unfold','unions','unique','unless','unlike','unlock','unpaid','update','useful','valley','vanish','vendor','verdict','verify','versus','vessel','viable','vibrant','victim','videos','viewer','violet','virtue','vision','visual','volume','walker','wander','warmly','wealth','weapon','weekly','weight','widely','window','winner','winter','wisdom','wonder','wooden','worker','worthy','wound','writer','yellow'],
    long: ['ability','absence','absolute','abstract','academic','academy','account','achieve','acquire','address','advance','adverse','analyze','ancient','another','anxiety','anything','applied','approach','article','attempt','attract','balance','battery','because','believe','benefit','billion','brother','browse','building','business','candidate','capable','capital','capture','career','catalog','caution','century','certain','chamber','change','chapter','charged','chicken','circuit','classic','climate','closing','closure','college','comfort','command','comment','company','compare','compete','complex','compose','concept','concern','conduct','confirm','connect','consist','consult','contact','contain','content','contest','context','control','convert','correct','council','counter','country','coupled','courage','course','create','crisis','criteria','culture','current','danger','decline','default','defense','deficit','deliver','density','deposit','despite','destiny','destroy','develop','devices','digital','dignity','dilemma','direct','discuss','disease','display','dispute','distant','diverse','divided','dynamic','economy','edition','educate','efficient','elected','element','embrace','emission','emotion','empathy','emperor','emphasize','empire','employer','enabled','endless','enemies','engaged','enhance','ensures','entirely','entrance','envelope','equally','erosion','essence','estate','eternal','ethical','evaluate','evening','evident','evolved','exactly','examine','example','excerpt','excess','execute','exempt','exhaust','exhibit','expense','explain','exploit','explore','express','extract','extreme','faculty','failure','fashion','feature','federal','fiction','fifteen','fighter','finance','fiscal','flexible','floating','focused','forever','formula','fortune','forward','founder','freedom','friends','funding','furnish','further','gallery','gateway','general','genetic','genuine','gesture','glacier','glimpse','globally','governs','gradual','graphic','gravity','greater','growing','habitat','halfway','hanging','harbour','hardware','healthy','heavily','helpful','heritage','highway','honesty','horizon','hormone','hostile','housing','hundred','hunting','husband','illegal','illness','imagine','immense','impose','improve','include','income','increase','indeed','inferno','infinite','informs','inhabit','initial','inquire','insight','insists','install','instant','instead','instinct','integer','intense','interact','interim','internal','interval','intimate','invaded','involve','isolate','journal','journey','justice','justify','keeping','keyboard','keyword','kitchen','knights','knowing','landing','language','largest','lasting','laundry','leading','learned','leather','lending','letters','leverage','licence','lightly','limited','literal','literary','locally','lodging','logical','longest','loosely','lowered','loyalty','machine','magical','magnetic','maintain','managed','mankind','mansion','mapping','massive','mastery','matched','matters','maximum','meaning','measure','medical','meeting','members','mention','mercury','message','methods','million','mineral','minimal','minimum','mining','minutes','miracle','missing','mission','mistake','mixture','modeled','modular','molecule','monitor','monster','monthly','morning','mounted','mystery','narrow','nations','natural','nearest','needing','network','neutral','notable','noticed','nourish','nuclear','numbers','obesity','objects','observe','obvious','offense','officer','ongoing','opening','operate','opinion','ordered','organic','outbreak','outcome','outdoor','outside','overall','partial','partner','passage','passing','passion','patient','pattern','payment','penalty','pending','pension','percent','perfect','perhaps','persist','persuade','picture','pioneer','placing','planned','plastic','playful','pleased','pointed','poison','police','portion','poverty','powerful','precise','predict','premier','premise','premium','presence','preserve','pressing','prestige','prevent','pricing','primary','printer','privacy','problem','proceed','process','produce','product','profile','program','prohibit','project','prolong','properly','property','proposal','prospect','protect','protein','provide','publish','purpose','pursuit','qualify','quarter','quickly','radical','raising','ranging','ranking','ratings','readily','reading','reality','realize','rebuild','receipt','receive','recover','reduced','reflect','reform','refresh','refugee','regular','related','release','remains','removal','removed','repeats','replace','reports','request','require','reserve','resolve','respond','restore','restrain','retain','retired','returns','reveal','revenue','reverse','revival','routine','running','safely','sanction','satisfy','scanner','scatter','scenario','schedule','scholar','science','scratch','section','segment','senator','sensing','sentence','separate','sequence','serious','service','session','setting','settled','several','shelter','shielded','shifting','shopping','shortly','silence','similar','sitting','skilled','slavery','slightly','smoking','society','soldier','somebody','somehow','sources','sovereign','spacious','speaking','special','specific','spending','sponsor','standing','stations','steering','stopping','straight','stranded','strategy','strength','stressed','striking','stronger','struggle','stunning','subject','substance','succeed','suffered','sufficient','suggests','suitable','superb','superior','supplied','supply','support','supposed','supreme','surface','surgeon','surgery','surplus','surround','survival','survived','suspect','sustain','symbolic','systems','tactical','talented','targeted','taxation','teaching','teamwork','tendency','terminal','terrible','terrific','territory','thankful','theories','thinking','thorough','thousand','threaten','thriller','thriving','through','throwing','timeline','tomorrow','touching','tracking','trading','tradition','traffic','tragedy','training','transfer','transform','transit','treasury','triangle','tropical','troubled','trusting','tutorial','ultimate','unable','unbiased','uncertain','uncommon','undergo','undertake','uneven','unfair','unfold','unhappy','uniform','universe','unknown','unlikely','unlucky','unmarked','unreal','unsafe','unstable','unusual','unwanted','unwilling','upcoming','upgrades','utility','utilize','vacation','vaccine','valuable','variable','variety','vastly','vehicle','venture','verified','version','veterans','vibrant','victims','victory','village','violent','visible','vitamins','volatile','volcano','voltage','volumes','warnings','warranty','warriors','watchful','weather','websites','weekends','welcome','welfare','western','whatever','whenever','whispered','whoever','wireless','withdraw','withheld','withhold','woodland','wordplay','workshop','yourself','zealous']
  };

  var canvas = document.getElementById('spaceCanvas');
  var ctx = canvas ? canvas.getContext('2d') : null;
  var gameInput = document.getElementById('space-input');
  if (!canvas || !ctx || !gameInput) return;

  var scoreEl = document.getElementById('space-score');
  var livesEl = document.getElementById('space-lives');
  var waveEl = document.getElementById('space-wave');
  var comboEl = document.getElementById('space-combo');
  var comboDisplay = document.getElementById('space-combo-display');
  var accuracyEl = document.getElementById('space-accuracy');
  var wordsEl = document.getElementById('space-words');
  var overlayEl = document.getElementById('space-overlay');
  var gameoverEl = document.getElementById('space-gameover');
  var startBtn = document.getElementById('space-start-btn');
  var restartBtn = document.getElementById('space-restart-btn');
  var finalScoreEl = document.getElementById('space-final-score');
  var finalWordsEl = document.getElementById('space-final-words');
  var finalAccuracyEl = document.getElementById('space-final-accuracy');
  var finalWaveEl = document.getElementById('space-final-wave');
  var finalComboEl = document.getElementById('space-final-combo');
  var finalMsgEl = document.getElementById('space-final-msg');
  var soundToggle = document.getElementById('space-sound-toggle');
  var diffBtns = document.querySelectorAll('.game-diff-btn');

  var W, H;
  var gameActive = false;
  var score = 0;
  var lives = 3;
  var wave = 1;
  var combo = 0;
  var maxCombo = 0;
  var wordsTyped = 0;
  var wordsMissed = 0;
  var totalAttempts = 0;
  var wordsInWave = 0;
  var wordsForWave = 10;
  var difficulty = 'easy';
  var soundOn = true;
  var animId = null;
  var spawnInterval = null;
  var screenShake = 0;
  var stars = [];
  var enemies = [];
  var lasers = [];
  var particles = [];
  var floatingTexts = [];
  var jetX = 0;
  var jetY = 0;
  var waveCompletePending = false;
  var waveCompleteTimer = 0;

  var audioCtx = null;
  function initAudio() {
    if (!audioCtx) {
      try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {}
    }
  }

  function playSound(type) {
    if (!soundOn || !audioCtx) return;
    try {
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      gain.gain.value = 0.06;
      switch (type) {
        case 'shoot':
          osc.frequency.setValueAtTime(900, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
          osc.start(audioCtx.currentTime);
          osc.stop(audioCtx.currentTime + 0.08);
          break;
        case 'hit':
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(500, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1000, audioCtx.currentTime + 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
          osc.start(audioCtx.currentTime);
          osc.stop(audioCtx.currentTime + 0.12);
          break;
        case 'combo':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, audioCtx.currentTime);
          osc.frequency.setValueAtTime(800, audioCtx.currentTime + 0.05);
          osc.frequency.setValueAtTime(1000, audioCtx.currentTime + 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
          osc.start(audioCtx.currentTime);
          osc.stop(audioCtx.currentTime + 0.15);
          break;
        case 'miss':
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(200, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.25);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
          osc.start(audioCtx.currentTime);
          osc.stop(audioCtx.currentTime + 0.25);
          break;
        case 'damage':
          osc.type = 'square';
          osc.frequency.setValueAtTime(150, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.35);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
          osc.start(audioCtx.currentTime);
          osc.stop(audioCtx.currentTime + 0.35);
          break;
        case 'wavecomplete':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(523, audioCtx.currentTime);
          osc.frequency.setValueAtTime(659, audioCtx.currentTime + 0.1);
          osc.frequency.setValueAtTime(784, audioCtx.currentTime + 0.2);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
          osc.start(audioCtx.currentTime);
          osc.stop(audioCtx.currentTime + 0.35);
          break;
        case 'gameover':
          osc.type = 'square';
          osc.frequency.setValueAtTime(400, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.6);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
          osc.start(audioCtx.currentTime);
          osc.stop(audioCtx.currentTime + 0.6);
          break;
      }
    } catch (e) {}
  }

  function resizeCanvas() {
    var wrapper = canvas.parentElement;
    if (wrapper) {
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.width = wrapper.clientWidth || 600;
      canvas.height = wrapper.clientHeight || 400;
      W = canvas.width;
      H = canvas.height;
      jetX = W / 2;
      jetY = H - 40;
    }
  }

  function initStars() {
    stars = [];
    for (var i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        size: 0.3 + Math.random() * 1.5,
        speed: 0.1 + Math.random() * 0.4,
        alpha: 0.2 + Math.random() * 0.8,
        twinkleSpeed: 0.01 + Math.random() * 0.03,
        twinkleOffset: Math.random() * Math.PI * 2
      });
    }
  }

  function getWordPool() {
    if (difficulty === 'hard') return words.long;
    if (difficulty === 'medium') return words.medium;
    return words.short;
  }

  function getEnemyCategory(word) {
    var len = word.length;
    if (len <= 4) return 'small';
    if (len <= 6) return 'medium';
    return 'large';
  }

  function spawnEnemy() {
    if (!gameActive) return;
    var pool = getWordPool();
    var word = pool[Math.floor(Math.random() * pool.length)];
    var cat = getEnemyCategory(word);
    var speedMultiplier = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 1.3 : 1.7;
    var waveSpeedBonus = 1 + (wave - 1) * 0.07;
    var speeds = { small: 0.5, medium: 0.4, large: 0.3 };
    var speed = (speeds[cat] + Math.random() * 0.25) * speedMultiplier * waveSpeedBonus;
    var width = Math.max(word.length * 9 + 20, 60);
    enemies.push({
      text: word,
      x: 30 + Math.random() * (W - 60),
      y: -30,
      speed: speed,
      width: width,
      height: 30,
      cat: cat,
      hit: false
    });
  }

  function spawnExplosion(x, y, color) {
    color = color || '#60A5FA';
    for (var i = 0; i < 20; i++) {
      var angle = Math.random() * Math.PI * 2;
      var spd = 1 + Math.random() * 4;
      particles.push({
        x: x, y: y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        life: 1,
        decay: 0.015 + Math.random() * 0.02,
        size: 2 + Math.random() * 4,
        color: Math.random() > 0.5 ? color : '#FBBF24'
      });
    }
  }

  function spawnFloatingText(x, y, text, color) {
    floatingTexts.push({
      text: text,
      x: x, y: y,
      vy: -1.5,
      life: 1,
      color: color || '#fff',
      size: 16
    });
  }

  function drawShip(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);
    var grad = ctx.createRadialGradient(0, 12, 2, 0, 12, 25);
    grad.addColorStop(0, 'rgba(96,165,250,0.5)');
    grad.addColorStop(1, 'rgba(96,165,250,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(-18, 0, 36, 30);
    ctx.fillStyle = '#60A5FA';
    ctx.beginPath();
    ctx.moveTo(0, -15);
    ctx.lineTo(-12, 10);
    ctx.lineTo(-7, 10);
    ctx.lineTo(-7, 20);
    ctx.lineTo(7, 20);
    ctx.lineTo(7, 10);
    ctx.lineTo(12, 10);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#93C5FD';
    ctx.beginPath();
    ctx.moveTo(0, -8);
    ctx.lineTo(-4, 3);
    ctx.lineTo(4, 3);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#3B82F6';
    ctx.fillRect(-12, 8, 5, 5);
    ctx.fillRect(7, 8, 5, 5);
    ctx.restore();
  }

  function roundRect2(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function drawEnemyShip(ctx, e) {
    if (e.hit) return;
    var colors = {
      small: { body: '#EF4444', glow: 'rgba(239,68,68,', accent: '#FCA5A5' },
      medium: { body: '#F59E0B', glow: 'rgba(245,158,11,', accent: '#FDE68A' },
      large: { body: '#8B5CF6', glow: 'rgba(139,92,246,', accent: '#C4B5FD' }
    };
    var c = colors[e.cat] || colors.medium;
    var halfW = e.width / 2;
    var hw = halfW;
    var hh = e.height / 2;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.fillStyle = c.glow + '0.1)';
    ctx.beginPath();
    ctx.arc(0, 0, hw + 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = c.glow + '0.2)';
    ctx.beginPath();
    ctx.moveTo(0, -hh - 6);
    ctx.lineTo(-hw - 4, hh + 2);
    ctx.lineTo(0, hh - 2);
    ctx.lineTo(hw + 4, hh + 2);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = c.body;
    roundRect2(ctx, -hw, -hh, e.width, e.height, 6);
    ctx.fill();
    ctx.fillStyle = c.accent;
    ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(e.text, 0, 1);
    ctx.fillStyle = c.glow + '0.3)';
    ctx.beginPath();
    ctx.moveTo(0, -hh - 12);
    ctx.lineTo(-5, -hh - 2);
    ctx.lineTo(5, -hh - 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawLasers() {
    lasers.forEach(function(l) {
      var progress = l.progress || 0;
      var endX = l.sx + (l.tx - l.sx) * progress;
      var endY = l.sy + (l.ty - l.sy) * progress;
      ctx.save();
      ctx.strokeStyle = 'rgba(96,165,250,0.9)';
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#60A5FA';
      ctx.beginPath();
      ctx.moveTo(l.sx, l.sy);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#93C5FD';
      ctx.beginPath();
      ctx.arc(endX, endY, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }

  function drawParticles() {
    particles.forEach(function(p) {
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function drawFloatingTexts() {
    floatingTexts.forEach(function(ft) {
      ctx.globalAlpha = Math.max(0, ft.life);
      ctx.fillStyle = ft.color;
      ctx.font = 'bold ' + ft.size + 'px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowBlur = 8;
      ctx.shadowColor = ft.color;
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.shadowBlur = 0;
    });
    ctx.globalAlpha = 1;
  }

  function drawComboIndicator() {
    if (combo < 2) return;
    ctx.save();
    ctx.fillStyle = '#FBBF24';
    ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'center';
    ctx.shadowBlur = 12;
    ctx.shadowColor = '#FBBF24';
    var pulse = 1 + Math.sin(Date.now() * 0.005) * 0.05;
    ctx.setTransform(pulse, 0, 0, pulse, W / 2, 40);
    ctx.fillText('COMBO x' + combo, 0, 0);
    ctx.restore();
  }

  function drawWaveComplete() {
    if (!waveCompletePending) return;
    waveCompleteTimer++;
    var alpha = Math.min(1, waveCompleteTimer * 0.02);
    var pulse = 1 + Math.sin(waveCompleteTimer * 0.03) * 0.02;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#60A5FA';
    ctx.font = 'bold 36px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#60A5FA';
    ctx.setTransform(pulse, 0, 0, pulse, W / 2, H / 2 - 20);
    ctx.fillText('WAVE ' + wave + ' COMPLETE', 0, 0);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.font = '16px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText('Press ENTER to continue', W / 2, H / 2 + 30);
    ctx.restore();
  }

  function startNextWave() {
    wave++;
    wordsInWave = 0;
    wordsForWave = 8 + wave * 2;
    waveCompletePending = false;
    waveCompleteTimer = 0;
    if (waveEl) waveEl.textContent = wave;
    playSound('wavecomplete');
    spawnEnemy();
    var rate = Math.max(800, 2800 - wave * 150);
    if (difficulty === 'medium') rate = Math.max(600, rate * 0.75);
    if (difficulty === 'hard') rate = Math.max(400, rate * 0.55);
    if (spawnInterval) clearInterval(spawnInterval);
    spawnInterval = setInterval(function() {
      if (gameActive && !waveCompletePending) spawnEnemy();
    }, rate);
  }

  function findEnemyByWord(word) {
    for (var i = 0; i < enemies.length; i++) {
      if (!enemies[i].hit && enemies[i].text === word) return i;
    }
    return -1;
  }

  function checkWord() {
    if (!gameActive || !gameInput || waveCompletePending) return;
    var typed = gameInput.value.trim().toLowerCase();
    if (typed === '') return;
    totalAttempts++;
    var idx = findEnemyByWord(typed);
    if (idx >= 0) {
      var enemy = enemies[idx];
      enemy.hit = true;
      combo++;
      if (combo > maxCombo) maxCombo = combo;
      var pointMultiplier = combo >= 5 ? 3 : combo >= 3 ? 2 : 1;
      var points = pointMultiplier;
      score += points;
      wordsTyped++;
      wordsInWave++;
      if (scoreEl) scoreEl.textContent = score;
      if (wordsEl) wordsEl.textContent = wordsTyped;
      if (comboEl) comboEl.textContent = combo;
      if (comboDisplay) comboDisplay.style.display = combo >= 2 ? 'inline' : 'none';
      var catColors = { small: '#EF4444', medium: '#F59E0B', large: '#8B5CF6' };
      spawnExplosion(enemy.x, enemy.y, catColors[enemy.cat]);
      playSound('shoot');
      lasers.push({
        sx: jetX, sy: jetY - 15,
        tx: enemy.x, ty: enemy.y,
        progress: 0,
        speed: 0.08
      });
      if (combo >= 3) {
        spawnFloatingText(enemy.x, enemy.y - 20, 'x' + pointMultiplier, '#FBBF24');
        if (combo >= 5) playSound('combo');
      }
      if (wordsInWave >= wordsForWave) {
        waveCompletePending = true;
        waveCompleteTimer = 0;
        if (spawnInterval) { clearInterval(spawnInterval); spawnInterval = null; }
      }
      updateAccuracy();
    } else {
      combo = 0;
      if (comboDisplay) comboDisplay.style.display = 'none';
      if (comboEl) comboEl.textContent = '0';
      gameInput.style.borderColor = '#EF4444';
      playSound('miss');
      setTimeout(function() {
        if (gameInput) gameInput.style.borderColor = '';
      }, 200);
    }
    gameInput.value = '';
  }

  function loseLife() {
    lives--;
    screenShake = 12;
    if (livesEl) livesEl.textContent = new Array(lives + 1).join('\u2764') || '\u2764';
    playSound('damage');
    if (lives <= 0) {
      endGame();
    }
  }

  function updateAccuracy() {
    if (!accuracyEl) return;
    var pct = totalAttempts > 0 ? Math.round((wordsTyped / totalAttempts) * 100) : 100;
    accuracyEl.textContent = Math.min(100, pct) + '%';
  }

  function animate() {
    if (!ctx) return;
    ctx.save();
    if (screenShake > 0) {
      ctx.translate(
        (Math.random() - 0.5) * screenShake,
        (Math.random() - 0.5) * screenShake
      );
      screenShake *= 0.85;
      if (screenShake < 0.5) screenShake = 0;
    }
    ctx.clearRect(-10, -10, W + 20, H + 20);
    var bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#0B0E1A');
    bgGrad.addColorStop(0.5, '#111827');
    bgGrad.addColorStop(1, '#0B0E1A');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);
    stars.forEach(function(s) {
      s.y += s.speed;
      if (s.y > H) { s.y = 0; s.x = Math.random() * W; }
      var twinkle = 0.5 + 0.5 * Math.sin(Date.now() * s.twinkleSpeed + s.twinkleOffset);
      ctx.fillStyle = 'rgba(255,255,255,' + (s.alpha * twinkle) + ')';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    });
    drawShip(ctx, jetX, jetY);
    enemies.forEach(function(e) { drawEnemyShip(ctx, e); });
    drawLasers();
    for (var li = lasers.length - 1; li >= 0; li--) {
      var l = lasers[li];
      l.progress += l.speed;
      if (l.progress >= 1) {
        playSound('hit');
        lasers.splice(li, 1);
      }
    }
    for (var pi = particles.length - 1; pi >= 0; pi--) {
      var p = particles[pi];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.life -= p.decay || 0.02;
      if (p.life <= 0) particles.splice(pi, 1);
    }
    drawParticles();
    for (var fi = floatingTexts.length - 1; fi >= 0; fi--) {
      var ft = floatingTexts[fi];
      ft.y += ft.vy;
      ft.life -= 0.015;
      if (ft.life <= 0) floatingTexts.splice(fi, 1);
    }
    drawFloatingTexts();
    drawComboIndicator();
    drawWaveComplete();
    for (var ei = enemies.length - 1; ei >= 0; ei--) {
      var e = enemies[ei];
      if (e.hit) { enemies.splice(ei, 1); continue; }
      e.y += e.speed;
      if (e.y > H + 40) {
        wordsMissed++;
        enemies.splice(ei, 1);
        loseLife();
        updateAccuracy();
      }
    }
    if (gameActive && !waveCompletePending) {
      animId = requestAnimationFrame(animate);
    } else if (gameActive && waveCompletePending) {
      animId = requestAnimationFrame(animate);
    }
    ctx.restore();
  }

  function startGame() {
    if (animId) cancelAnimationFrame(animId);
    if (spawnInterval) clearInterval(spawnInterval);
    initAudio();
    gameActive = true;
    score = 0;
    lives = 3;
    wave = 1;
    combo = 0;
    maxCombo = 0;
    wordsTyped = 0;
    wordsMissed = 0;
    totalAttempts = 0;
    wordsInWave = 0;
    wordsForWave = 10;
    waveCompletePending = false;
    waveCompleteTimer = 0;
    screenShake = 0;
    enemies = [];
    lasers = [];
    particles = [];
    floatingTexts = [];
    if (scoreEl) scoreEl.textContent = '0';
    if (accuracyEl) accuracyEl.textContent = '100%';
    if (wordsEl) wordsEl.textContent = '0';
    if (waveEl) waveEl.textContent = '1';
    if (comboEl) comboEl.textContent = '0';
    if (comboDisplay) comboDisplay.style.display = 'none';
    if (livesEl) livesEl.textContent = '\u2764\u2764\u2764';
    if (overlayEl) overlayEl.classList.add('hidden');
    if (gameoverEl) gameoverEl.classList.add('hidden');
    if (gameInput) { gameInput.value = ''; gameInput.disabled = false; gameInput.focus(); }
    resizeCanvas();
    initStars();
    var rate = 2800;
    if (difficulty === 'medium') rate = 2100;
    if (difficulty === 'hard') rate = 1500;
    spawnInterval = setInterval(function() {
      if (gameActive && !waveCompletePending) spawnEnemy();
    }, rate);
    animate();
  }

  function endGame() {
    gameActive = false;
    if (spawnInterval) { clearInterval(spawnInterval); spawnInterval = null; }
    if (animId) { cancelAnimationFrame(animId); animId = null; }
    if (gameInput) gameInput.disabled = true;
    playSound('gameover');
    var accuracy = totalAttempts > 0 ? Math.round((wordsTyped / totalAttempts) * 100) : 0;
    if (finalScoreEl) finalScoreEl.textContent = score;
    if (finalWordsEl) finalWordsEl.textContent = wordsTyped;
    if (finalAccuracyEl) finalAccuracyEl.textContent = Math.min(100, accuracy) + '%';
    if (finalWaveEl) finalWaveEl.textContent = wave;
    if (finalComboEl) finalComboEl.textContent = maxCombo;
    if (finalMsgEl) {
      if (score >= 50) finalMsgEl.textContent = 'Outstanding! You crushed ' + score + ' enemy words!';
      else if (score >= 30) finalMsgEl.textContent = 'Amazing! You scored ' + score + ' points!';
      else if (score >= 15) finalMsgEl.textContent = 'Great job! You scored ' + score + ' points!';
      else if (score >= 5) finalMsgEl.textContent = 'Good effort! You scored ' + score + ' points. Keep practicing!';
      else finalMsgEl.textContent = 'You scored ' + score + ' points. Try again to improve!';
    }
    if (gameoverEl) gameoverEl.classList.remove('hidden');
    try {
      var saved = JSON.parse(localStorage.getItem('typeskill_progress') || '{}');
      saved.lastPractice = new Date().toISOString();
      saved.totalGames = (saved.totalGames || 0) + 1;
      saved.bestGameScore = Math.max(saved.bestGameScore || 0, score);
      saved.bestWave = Math.max(saved.bestWave || 0, wave);
      localStorage.setItem('typeskill_progress', JSON.stringify(saved));
    } catch (e) {}
  }

  if (startBtn) {
    startBtn.addEventListener('click', function() {
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      startGame();
    });
  }
  if (restartBtn) {
    restartBtn.addEventListener('click', function() {
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      startGame();
    });
  }
  if (gameInput) {
    gameInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (waveCompletePending) {
          startNextWave();
          if (gameInput) gameInput.focus();
          return;
        }
        if (gameActive) checkWord();
      }
    });
  }
  diffBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      diffBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      difficulty = btn.getAttribute('data-diff') || 'easy';
    });
  });
  if (soundToggle) {
    try {
      var savedSound = localStorage.getItem('typeskill_sound');
      if (savedSound === 'off') {
        soundOn = false;
        soundToggle.textContent = '\uD83D\uDD07';
      }
    } catch(e) {}
    soundToggle.addEventListener('click', function() {
      soundOn = !soundOn;
      soundToggle.textContent = soundOn ? '\uD83D\uDD0A' : '\uD83D\uDD07';
      try { localStorage.setItem('typeskill_sound', soundOn ? 'on' : 'off'); } catch(e) {}
    });
  }
  resizeCanvas();
  window.addEventListener('resize', function() {
    if (!gameActive) resizeCanvas();
    if (!gameActive) initStars();
  });
})();
