(function() {
  'use strict';

  const QUESTIONS = {
    general: {
      name: 'General Knowledge', icon: '\ud83c\udf0d',
      questions: [
        { q: 'What is the capital of Australia?', a: 'Canberra', opts: ['Sydney', 'Melbourne', 'Canberra', 'Perth'] },
        { q: 'How many bones are in the adult human body?', a: '206', opts: ['204', '206', '208', '210'] },
        { q: 'What is the largest ocean on Earth?', a: 'Pacific', opts: ['Atlantic', 'Indian', 'Arctic', 'Pacific'] },
        { q: 'Who painted the Mona Lisa?', a: 'Leonardo da Vinci', opts: ['Michelangelo', 'Raphael', 'Leonardo da Vinci', 'Van Gogh'] },
        { q: 'What year did World War II end?', a: '1945', opts: ['1943', '1944', '1945', '1946'] },
        { q: 'Which planet is known as the Red Planet?', a: 'Mars', opts: ['Venus', 'Jupiter', 'Saturn', 'Mars'] },
        { q: 'What is the smallest country in the world?', a: 'Vatican City', opts: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'] },
        { q: 'How many continents are there?', a: '7', opts: ['5', '6', '7', '8'] }
      ]
    },
    science: {
      name: 'Science', icon: '\ud83d\udd2c',
      questions: [
        { q: 'What is the chemical symbol for gold?', a: 'Au', opts: ['Ag', 'Fe', 'Au', 'Cu'] },
        { q: 'What is the speed of light approximately?', a: '300,000 km/s', opts: ['150,000 km/s', '300,000 km/s', '500,000 km/s', '1,000,000 km/s'] },
        { q: 'Which gas do plants absorb from the atmosphere?', a: 'Carbon dioxide', opts: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'] },
        { q: 'What is the powerhouse of the cell?', a: 'Mitochondria', opts: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi body'] },
        { q: 'What is the pH of pure water?', a: '7', opts: ['5', '6', '7', '8'] },
        { q: 'Which element has the atomic number 1?', a: 'Hydrogen', opts: ['Helium', 'Lithium', 'Hydrogen', 'Oxygen'] },
        { q: 'What force keeps planets in orbit?', a: 'Gravity', opts: ['Magnetism', 'Gravity', 'Centrifugal', 'Friction'] },
        { q: 'How many chromosomes do humans have?', a: '46', opts: ['44', '46', '48', '23'] }
      ]
    },
    history: {
      name: 'History', icon: '\ud83d\udcdc',
      questions: [
        { q: 'In which year did the Titanic sink?', a: '1912', opts: ['1910', '1911', '1912', '1914'] },
        { q: 'Who was the first President of the United States?', a: 'George Washington', opts: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin'] },
        { q: 'The Great Wall of China was built primarily to protect against which group?', a: 'Mongols', opts: ['Japanese', 'Mongols', 'Russians', 'Persians'] },
        { q: 'Which ancient civilization built Machu Picchu?', a: 'Inca', opts: ['Maya', 'Aztec', 'Inca', 'Olmec'] },
        { q: 'What was the name of the ship that brought the Pilgrims to America?', a: 'Mayflower', opts: ['Santa Maria', 'Mayflower', 'Endeavour', 'Victoria'] },
        { q: 'Who was the first woman to fly solo across the Atlantic?', a: 'Amelia Earhart', opts: ['Harriet Quimby', 'Amelia Earhart', 'Bessie Coleman', 'Jacqueline Cochran'] },
        { q: 'The Renaissance period began in which country?', a: 'Italy', opts: ['France', 'England', 'Italy', 'Spain'] },
        { q: 'What year did the Berlin Wall fall?', a: '1989', opts: ['1987', '1988', '1989', '1990'] }
      ]
    },
    tech: {
      name: 'Technology', icon: '\ud83d\udcbb',
      questions: [
        { q: 'What does \"HTTP\" stand for?', a: 'HyperText Transfer Protocol', opts: ['HyperText Transfer Protocol', 'High Transfer Text Protocol', 'Hyper Transfer Text Protocol', 'HighText Transfer Protocol'] },
        { q: 'Who is considered the father of the World Wide Web?', a: 'Tim Berners-Lee', opts: ['Bill Gates', 'Tim Berners-Lee', 'Steve Jobs', 'Alan Turing'] },
        { q: 'What programming language is primarily used for iOS apps?', a: 'Swift', opts: ['Kotlin', 'Java', 'Swift', 'Python'] },
        { q: 'What does \"RAM\" stand for?', a: 'Random Access Memory', opts: ['Read Access Memory', 'Random Access Memory', 'Read And Memory', 'Rapid Access Memory'] },
        { q: 'Which company developed the Android operating system?', a: 'Google', opts: ['Apple', 'Microsoft', 'Google', 'Samsung'] },
        { q: 'What year was the first iPhone released?', a: '2007', opts: ['2005', '2006', '2007', '2008'] },
        { q: 'What does \"CSS\" stand for?', a: 'Cascading Style Sheets', opts: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'] },
        { q: 'Which data structure uses FIFO?', a: 'Queue', opts: ['Stack', 'Queue', 'Array', 'Tree'] }
      ]
    },
    geography: {
      name: 'Geography', icon: '\ud83d\uddfa\ufe0f',
      questions: [
        { q: 'What is the longest river in the world?', a: 'Nile', opts: ['Amazon', 'Mississippi', 'Nile', 'Yangtze'] },
        { q: 'Which country has the most natural lakes?', a: 'Canada', opts: ['USA', 'Russia', 'Canada', 'Finland'] },
        { q: 'What is the tallest mountain in the world?', a: 'Mount Everest', opts: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'] },
        { q: 'Which desert is the largest hot desert?', a: 'Sahara', opts: ['Gobi', 'Arabian', 'Sahara', 'Kalahari'] },
        { q: 'How many time zones does Russia have?', a: '11', opts: ['7', '9', '11', '13'] },
        { q: 'Which country has the most population?', a: 'India', opts: ['China', 'India', 'USA', 'Indonesia'] },
        { q: 'What is the smallest ocean?', a: 'Arctic', opts: ['Indian', 'Arctic', 'Southern', 'Atlantic'] },
        { q: 'Which European country has the most castles?', a: 'Germany', opts: ['France', 'Italy', 'Germany', 'UK'] }
      ]
    },
    entertainment: {
      name: 'Entertainment', icon: '\ud83c\udfac',
      questions: [
        { q: 'Which movie won the first Oscar for Best Animated Feature?', a: 'Shrek', opts: ['Toy Story', 'Shrek', 'Finding Nemo', 'Spirited Away'] },
        { q: 'What is the best-selling video game of all time?', a: 'Minecraft', opts: ['Grand Theft Auto V', 'Minecraft', 'Tetris', 'Wii Sports'] },
        { q: 'Which band performed \"Bohemian Rhapsody\"?', a: 'Queen', opts: ['Led Zeppelin', 'Queen', 'The Beatles', 'Pink Floyd'] },
        { q: 'Who played Iron Man in the MCU?', a: 'Robert Downey Jr.', opts: ['Chris Evans', 'Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo'] },
        { q: 'What is the highest-grossing film of all time?', a: 'Avatar', opts: ['Avengers: Endgame', 'Avatar', 'Titanic', 'Star Wars: TFA'] },
        { q: 'Which artist has the most Grammy Awards?', a: 'Beyonc\u00e9', opts: ['Michael Jackson', 'Beyonc\u00e9', 'Stevie Wonder', 'Quincy Jones'] },
        { q: 'In which year was the first Harry Potter book published?', a: '1997', opts: ['1996', '1997', '1998', '1999'] },
        { q: 'What TV show features dragons and white walkers?', a: 'Game of Thrones', opts: ['Lord of the Rings', 'Game of Thrones', 'The Witcher', 'Vikings'] }
      ]
    }
  };

  const $ = id => document.getElementById(id);
  const welcomeScreen = $('welcomeScreen');
  const quizScreen = $('quizScreen');
  const resultsScreen = $('resultsScreen');
  const categoryGrid = $('categoryGrid');
  const startBtn = $('startBtn');
  const quizCounter = $('quizCounter');
  const scoreDisplay = $('scoreDisplay');
  const streakDisplay = $('streakDisplay');
  const progressFill = $('progressFill');
  const timerRing = $('timerRing');
  const timerText = $('timerText');
  const questionText = $('questionText');
  const qCategory = $('qCategory');
  const answersContainer = $('answersContainer');
  const flashOverlay = $('flashOverlay');
  const resultsScore = $('resultsScore');
  const resultsRing = $('resultsRing');
  const resultsStars = $('resultsStars');
  const correctCount = $('correctCount');
  const wrongCount = $('wrongCount');
  const accuracyStat = $('accuracyStat');
  const resultsMsg = $('resultsMsg');
  const retryBtn = $('retryBtn');
  const homeBtn = $('homeBtn');
  const confettiContainer = $('confettiContainer');

  const CIRCUMFERENCE = 2 * Math.PI * 22;
  const RESULT_CIRCUMFERENCE = 2 * Math.PI * 48;
  const LETTERS = ['A', 'B', 'C', 'D'];

  let state = {
    category: null, questions: [], current: 0, score: 0,
    streak: 0, bestStreak: 0, correct: 0, wrong: 0,
    answered: false, timer: null, timeLeft: 15, totalTime: 0
  };

  function renderCategories() {
    categoryGrid.innerHTML = '';
    Object.entries(QUESTIONS).forEach(([key, cat]) => {
      const btn = document.createElement('button');
      btn.className = 'cat-btn';
      btn.dataset.category = key;
      btn.innerHTML = '<span class="cat-icon">' + cat.icon + '</span><span class="cat-name">' + cat.name + '</span><span class="cat-count">' + cat.questions.length + ' questions</span>';
      btn.addEventListener('click', () => selectCategory(key));
      categoryGrid.appendChild(btn);
    });
  }

  function selectCategory(key) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
    const btn = document.querySelector('[data-category="' + key + '"]');
    if (btn) btn.classList.add('selected');
    state.category = key;
    startBtn.disabled = false;
    startBtn.textContent = 'Start ' + QUESTIONS[key].icon + ' ' + QUESTIONS[key].name;
  }

  function startQuiz() {
    if (!state.category) return;
    const cat = QUESTIONS[state.category];
    state.questions = cat.questions.slice().sort(() => Math.random() - 0.5);
    state.current = 0; state.score = 0; state.streak = 0;
    state.bestStreak = 0; state.correct = 0; state.wrong = 0;
    state.answered = false; state.totalTime = 0;
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
  }

  function showQuestion() {
    const q = state.questions[state.current];
    const total = state.questions.length;
    const num = state.current + 1;
    quizCounter.textContent = 'Question ' + num + ' of ' + total;
    scoreDisplay.textContent = state.score;
    updateStreak();
    progressFill.style.width = ((num - 1) / total * 100) + '%';
    qCategory.textContent = QUESTIONS[state.category].icon + ' ' + QUESTIONS[state.category].name;
    questionText.classList.remove('slide-in');
    void questionText.offsetWidth;
    questionText.textContent = q.q;
    questionText.classList.add('slide-in');
    const opts = q.opts.slice().sort(() => Math.random() - 0.5);
    answersContainer.innerHTML = '';
    opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.dataset.answer = opt;
      btn.innerHTML = '<span class="letter">' + LETTERS[i] + '</span><span>' + opt + '</span>';
      btn.addEventListener('click', () => handleAnswer(btn, opt, q.a));
      answersContainer.appendChild(btn);
    });
    state.answered = false;
    flashOverlay.classList.remove('show', 'correct', 'wrong');
    startTimer();
  }

  function startTimer() {
    clearInterval(state.timer);
    state.timeLeft = 15;
    timerRing.classList.remove('warning', 'danger');
    timerText.classList.remove('warning', 'danger');
    updateTimerDisplay();
    state.timer = setInterval(() => {
      state.timeLeft--;
      state.totalTime++;
      updateTimerDisplay();
      if (state.timeLeft <= 5) { timerRing.classList.add('danger'); timerText.classList.add('danger'); }
      else if (state.timeLeft <= 8) { timerRing.classList.add('warning'); timerText.classList.add('warning'); }
      if (state.timeLeft <= 0) { clearInterval(state.timer); timeUp(); }
    }, 1000);
  }

  function updateTimerDisplay() {
    timerRing.style.strokeDashoffset = CIRCUMFERENCE * (1 - state.timeLeft / 15);
    timerText.textContent = state.timeLeft;
  }

  function timeUp() {
    if (state.answered) return;
    state.answered = true;
    const q = state.questions[state.current];
    state.wrong++; state.streak = 0;
    updateStreak(); playSound('wrong');
    document.querySelectorAll('.answer-btn').forEach(btn => {
      btn.classList.add('disabled');
      if (btn.dataset.answer === q.a) btn.classList.add('correct');
    });
    flashOverlay.className = 'flash-overlay wrong show';
    setTimeout(() => flashOverlay.classList.remove('show'), 400);
    setTimeout(nextQuestion, 1200);
  }

  function handleAnswer(btn, selected, correct) {
    if (state.answered) return;
    state.answered = true;
    clearInterval(state.timer);
    document.querySelectorAll('.answer-btn').forEach(b => b.classList.add('disabled'));
    const isCorrect = selected === correct;
    if (isCorrect) {
      btn.classList.add('correct');
      state.score += 10 + Math.ceil(state.timeLeft / 2) + state.streak * 2;
      state.correct++; state.streak++;
      if (state.streak > state.bestStreak) state.bestStreak = state.streak;
      flashOverlay.className = 'flash-overlay correct show';
      playSound('correct');
    } else {
      btn.classList.add('wrong');
      state.wrong++; state.streak = 0;
      document.querySelectorAll('.answer-btn').forEach(b => {
        if (b.dataset.answer === correct) b.classList.add('reveal');
      });
      flashOverlay.className = 'flash-overlay wrong show';
      playSound('wrong');
    }
    setTimeout(() => flashOverlay.classList.remove('show'), 400);
    scoreDisplay.textContent = state.score;
    updateStreak();
    setTimeout(nextQuestion, isCorrect ? 800 : 1400);
  }

  function updateStreak() {
    if (state.streak >= 2) { streakDisplay.textContent = '\ud83d\udd25 ' + state.streak + ' streak!'; streakDisplay.classList.add('active'); }
    else { streakDisplay.textContent = ''; streakDisplay.classList.remove('active'); }
  }

  function nextQuestion() {
    state.current++;
    if (state.current >= state.questions.length) showResults();
    else showQuestion();
  }

  function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    const total = state.questions.length;
    const c = state.correct;
    const w = state.wrong;
    const accuracy = total > 0 ? Math.round(c / total * 100) : 0;
    correctCount.textContent = c;
    wrongCount.textContent = w;
    accuracyStat.textContent = accuracy + '%';
    setTimeout(() => { resultsRing.style.strokeDashoffset = RESULT_CIRCUMFERENCE * (1 - accuracy / 100); }, 100);
    animateNumber(resultsScore, 0, state.score, 1200);
    const starCount = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : accuracy >= 40 ? 1 : 0;
    resultsStars.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const span = document.createElement('span');
      span.className = 'star';
      span.textContent = i < starCount ? '\u2b50' : '\u2606';
      span.style.color = i < starCount ? '#ff9f0a' : 'rgba(255,255,255,0.15)';
      resultsStars.appendChild(span);
      setTimeout(() => span.classList.add('show'), 400 + i * 250);
    }
    const msgs = { 3: '\ud83c\udf1f Outstanding! You\'re a quiz master!', 2: '\ud83d\udc4f Great job! Almost perfect!', 1: '\ud83d\udcaa Good effort! Keep practicing!', 0: '\ud83d\udcda Keep learning! You\'ll get it next time!' };
    resultsMsg.textContent = msgs[starCount] || msgs[0];
    if (starCount >= 2) setTimeout(createConfetti, 600);
  }

  function animateNumber(el, from, to, duration) {
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function createConfetti() {
    confettiContainer.innerHTML = '';
    const colors = ['#ff9f0a', '#ff5f57', '#28c840', '#5e9cff', '#febc2e', '#bf7af0', '#ff6b9d'];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 6 + Math.random() * 8;
      piece.style.cssText = 'left:' + (Math.random() * 100) + '%;width:' + size + 'px;height:' + size + 'px;background:' + color + ';border-radius:' + (Math.random() > 0.5 ? '50%' : '2px') + ';animation-delay:' + (Math.random() * 1.5) + 's;animation-duration:' + (2 + Math.random() * 2) + 's;';
      confettiContainer.appendChild(piece);
    }
    setTimeout(() => confettiContainer.innerHTML = '', 5000);
  }

  let audioCtx = null;
  function playSound(type) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain); gain.connect(audioCtx.destination);
      gain.gain.value = 0.08;
      if (type === 'correct') {
        osc.frequency.setValueAtTime(523, audioCtx.currentTime);
        osc.frequency.setValueAtTime(659, audioCtx.currentTime + 0.1);
        osc.frequency.setValueAtTime(784, audioCtx.currentTime + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.35);
      } else {
        osc.frequency.setValueAtTime(330, audioCtx.currentTime);
        osc.frequency.setValueAtTime(262, audioCtx.currentTime + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.3);
      }
    } catch(e) {}
  }

  function goHome() {
    resultsScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
    clearInterval(state.timer);
    confettiContainer.innerHTML = '';
    startBtn.disabled = true;
    startBtn.textContent = 'Select a Category to Start';
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
  }

  function retryQuiz() {
    startQuiz();
  }

  document.addEventListener('keydown', (e) => {
    if (quizScreen.classList.contains('active') && !state.answered) {
      const num = parseInt(e.key);
      if (num >= 1 && num <= 4) {
        const btns = answersContainer.querySelectorAll('.answer-btn');
        if (btns[num - 1]) btns[num - 1].click();
      }
    }
    if (e.key === 'Enter' && resultsScreen.classList.contains('active')) retryBtn.click();
    if (e.key === 'Escape' && resultsScreen.classList.contains('active')) goHome();
  });

  renderCategories();
  startBtn.addEventListener('click', startQuiz);
  retryBtn.addEventListener('click', retryQuiz);
  homeBtn.addEventListener('click', goHome);
})();
