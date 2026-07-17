/* =========================================================
   DATA · 40 VERBOS IRREGULARES
   ========================================================= */
const VERBS = [
  { v: "set",     p: "set",     pp: "set",     m: "establecer" },
  { v: "hit",     p: "hit",     pp: "hit",     m: "golpear" },
  { v: "have",    p: "had",     pp: "had",     m: "tener" },
  { v: "drive",   p: "drove",   pp: "driven",  m: "conducir" },
  { v: "ring",    p: "rang",    pp: "rung",    m: "sonar / llamar" },
  { v: "swim",    p: "swam",    pp: "swum",    m: "nadar" },
  { v: "break",   p: "broke",   pp: "broken",  m: "romper" },
  { v: "say",     p: "said",    pp: "said",    m: "decir" },
  { v: "hurt",    p: "hurt",    pp: "hurt",    m: "doler / herir" },
  { v: "speak",   p: "spoke",   pp: "spoken",  m: "hablar" },
  { v: "drink",   p: "drank",   pp: "drunk",   m: "beber" },
  { v: "spit",    p: "spat",    pp: "spat",    m: "escupir" },
  { v: "sink",    p: "sank",    pp: "sunk",    m: "hundir" },
  { v: "win",     p: "won",     pp: "won",     m: "ganar" },
  { v: "keep",    p: "kept",    pp: "kept",    m: "mantener" },
  { v: "wake",    p: "woke",    pp: "woken",   m: "despertar" },
  { v: "write",   p: "wrote",   pp: "written", m: "escribir" },
  { v: "run",     p: "ran",     pp: "run",     m: "correr" },
  { v: "make",    p: "made",    pp: "made",    m: "hacer / fabricar" },
  { v: "sing",    p: "sang",    pp: "sung",    m: "cantar" },
  { v: "begin",   p: "began",   pp: "begun",   m: "empezar" },
  { v: "choose",  p: "chose",   pp: "chosen",  m: "elegir" },
  { v: "ride",    p: "rode",    pp: "ridden",  m: "montar (bici/caballo)" },
  { v: "spring",  p: "sprang",  pp: "sprung",  m: "brotar / saltar" },
  { v: "pay",     p: "paid",    pp: "paid",    m: "pagar" },
  { v: "send",    p: "sent",    pp: "sent",    m: "enviar" },
  { v: "freeze",  p: "froze",   pp: "frozen",  m: "congelar" },
  { v: "steal",   p: "stole",   pp: "stolen",  m: "robar" },
  { v: "cut",     p: "cut",     pp: "cut",     m: "cortar" },
  { v: "bet",     p: "bet",     pp: "bet",     m: "apostar" },
  { v: "rise",    p: "rose",    pp: "risen",   m: "elevarse / subir" },
  { v: "spin",    p: "spun",    pp: "spun",    m: "girar / hilar" },
  { v: "let",     p: "let",     pp: "let",     m: "permitir / dejar" },
  { v: "put",     p: "put",     pp: "put",     m: "poner" },
  { v: "read",    p: "read",    pp: "read",    m: "leer" },
  { v: "meet",    p: "met",     pp: "met",     m: "conocer / encontrarse" },
  { v: "spend",   p: "spent",   pp: "spent",   m: "gastar / pasar tiempo" },
  { v: "sleep",   p: "slept",   pp: "slept",   m: "dormir" },
  { v: "cost",    p: "cost",    pp: "cost",    m: "costar" },
  { v: "quit",    p: "quit",    pp: "quit",    m: "renunciar / salir" }
];

/* =========================================================
   DATA · SECCIÓN B (carta de Cesc, Briggs-Rauscher, ejercicios)
   ========================================================= */
const READING_POOL = [
  // ---- Parte I: forma positiva / negativa (texto libre) ----
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple POSITIVO de 'have'.", accept: ["had"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple NEGATIVO de 'have'.", accept: ["did not have"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple POSITIVO de 'be'.", accept: ["was", "were"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple NEGATIVO de 'be'.", accept: ["was not", "were not"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple POSITIVO de 'keep'.", accept: ["kept"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple NEGATIVO de 'keep'.", accept: ["did not keep"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple POSITIVO de 'call'.", accept: ["called"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple NEGATIVO de 'call'.", accept: ["did not call"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple POSITIVO de 'say'.", accept: ["said"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple NEGATIVO de 'say'.", accept: ["did not say"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple POSITIVO de 'put'.", accept: ["put"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple NEGATIVO de 'put'.", accept: ["did not put"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple POSITIVO de 'give'.", accept: ["gave"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple NEGATIVO de 'give'.", accept: ["did not give"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple POSITIVO de 'mix'.", accept: ["mixed"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple NEGATIVO de 'mix'.", accept: ["did not mix"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple POSITIVO de 'stay'.", accept: ["stayed"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple NEGATIVO de 'stay'.", accept: ["did not stay"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple POSITIVO de 'watch'.", accept: ["watched"] },
  { type: "text", tag: "Parte I", prompt: "Escribe el Past Simple NEGATIVO de 'watch'.", accept: ["did not watch"] },

  // ---- Carta de Cesc: huecos numerados (opción múltiple) ----
  { type: "mc", tag: "Carta", prompt: "\"We (1) ___ to do an experiment in our Science lesson today.\"", options: ["had", "has", "having"], correct: "had" },
  { type: "mc", tag: "Carta", prompt: "\"We (2) ___ on gloves and aprons.\"", options: ["put", "puts", "putting"], correct: "put" },
  { type: "mc", tag: "Carta", prompt: "\"'It's very important to be safe in the lab,' (3) ___ Mr Torres.\"", options: ["said", "says", "saying"], correct: "said" },
  { type: "mc", tag: "Carta", prompt: "\"We also (4) ___ on goggles.\"", options: ["put", "puts", "putted"], correct: "put" },
  { type: "mc", tag: "Carta", prompt: "\"Mr Torres (5) ___ each of us a beaker and three special liquids.\"", options: ["gave", "gived", "given"], correct: "gave" },
  { type: "mc", tag: "Carta", prompt: "\"We (6) ___ the three liquids together and then we (7) ___ them.\" (primer hueco)", options: ["mixed", "mixt", "mix"], correct: "mixed" },
  { type: "mc", tag: "Carta", prompt: "\"We mixed the three liquids together and then we (7) ___ them.\"", options: ["watched", "watch", "watching"], correct: "watched" },
  { type: "mc", tag: "Carta", prompt: "\"The liquids (8) ___ the same colour: they changed colour from blue to white to grey to orange to blue.\"", options: ["weren't", "wasn't", "didn't"], correct: "weren't" },
  { type: "mc", tag: "Carta", prompt: "\"They (9) ___ changing colour for a few minutes.\"", options: ["kept", "keep", "keeping"], correct: "kept" },
  { type: "mc", tag: "Carta", prompt: "\"It (10) ___ brilliant! It's called The Briggs-Rauscher reaction.\"", options: ["was", "were", "is"], correct: "was" },

  // ---- Parte II: formular la pregunta correcta ----
  { type: "mc", tag: "Parte II", prompt: "¿Cuál es la pregunta correcta para: 'Yes, I visited London.'?", options: ["Did you visit London?", "Do you visit London?", "Were you visit London?"], correct: "Did you visit London?" },
  { type: "mc", tag: "Parte II", prompt: "¿Cuál es la pregunta correcta para: 'No, I didn't go on the London Eye.'?", options: ["Did you go on the London Eye?", "Did you went on the London Eye?", "Do you go on the London Eye?"], correct: "Did you go on the London Eye?" },
  { type: "mc", tag: "Parte II", prompt: "¿Cuál es la pregunta correcta para: 'No, she didn't help me.'?", options: ["Did she help you?", "Did she helped you?", "Does she help you?"], correct: "Did she help you?" },
  { type: "mc", tag: "Parte II", prompt: "¿Cuál es la pregunta correcta para: 'Yes, I gave her a present.'?", options: ["Did you give her a present?", "Did you gave her a present?", "Do you give her a present?"], correct: "Did you give her a present?" },
  { type: "mc", tag: "Parte II", prompt: "¿Cuál es la pregunta correcta para: 'Yes, Steve passed his driving test.'?", options: ["Did Steve pass his driving test?", "Did Steve passed his driving test?", "Does Steve pass his driving test?"], correct: "Did Steve pass his driving test?" },
  { type: "mc", tag: "Parte II", prompt: "¿Cuál es la pregunta correcta para: 'No, we didn't play football.'?", options: ["Did you play football?", "Did you played football?", "Do you play football?"], correct: "Did you play football?" },

  // ---- Parte III: completar con el verbo correcto (respuesta escrita) ----
  { type: "text", tag: "Parte III", prompt: "Completa: 'My parents ___ me the new PSP for my birthday.' (buy)", accept: ["bought"] },
  { type: "text", tag: "Parte III", prompt: "Completa: 'This morning I ___ breakfast at 7.' (have)", accept: ["had"] },
  { type: "text", tag: "Parte III", prompt: "Completa: 'Megan ___ the piano really well when she was 7.' (play)", accept: ["played"] },
  { type: "text", tag: "Parte III", prompt: "Completa: 'The rain ___ and we could go out.' (stop)", accept: ["stopped"] },
  { type: "text", tag: "Parte III", prompt: "Completa: 'Last night, we ___ to the cinema.' (go)", accept: ["went"] },
  { type: "text", tag: "Parte III", prompt: "Completa: 'The man ___ English and French fluently.' (speak)", accept: ["spoke"] },

  // ---- Parte IV: ordenar palabras (opción múltiple) ----
  { type: "mc", tag: "Parte IV", prompt: "Ordena: went / Jenny / last Sunday / to the cinema", options: ["Jenny went to the cinema last Sunday.", "Went Jenny to the cinema last Sunday.", "Jenny to the cinema went last Sunday."], correct: "Jenny went to the cinema last Sunday." },
  { type: "mc", tag: "Parte IV", prompt: "Ordena: my father / in his office / last weekend / worked", options: ["My father worked in his office last weekend.", "My father in his office worked last weekend.", "Worked my father in his office last weekend."], correct: "My father worked in his office last weekend." },
  { type: "mc", tag: "Parte IV", prompt: "Ordena: bought / I / a new computer / last month", options: ["I bought a new computer last month.", "Bought I a new computer last month.", "I a new computer bought last month."], correct: "I bought a new computer last month." },
  { type: "mc", tag: "Parte IV", prompt: "Ordena: They / in the library / did / their / homework", options: ["They did their homework in the library.", "They in the library did their homework.", "Did they their homework in the library."], correct: "They did their homework in the library." },
  { type: "mc", tag: "Parte IV", prompt: "Ordena: soccer / last Saturday / we / played", options: ["We played soccer last Saturday.", "We soccer played last Saturday.", "Played we soccer last Saturday."], correct: "We played soccer last Saturday." },
  { type: "mc", tag: "Parte IV", prompt: "Ordena: late / the plane / arrived", options: ["The plane arrived late.", "Arrived the plane late.", "The plane late arrived."], correct: "The plane arrived late." },
  { type: "mc", tag: "Parte IV", prompt: "Ordena: My mother / early / got up / today", options: ["My mother got up early today.", "My mother early got up today.", "Got up my mother early today."], correct: "My mother got up early today." },
  { type: "mc", tag: "Parte IV", prompt: "Ordena: coffee and bread / had / for breakfast / I", options: ["I had coffee and bread for breakfast.", "I coffee and bread had for breakfast.", "Had I coffee and bread for breakfast."], correct: "I had coffee and bread for breakfast." }
];

const QUESTIONS_PER_EXAM = 20;
const PASS_SCORE = 15;

const PASS_MESSAGES = [
  "¡Excelente! Dominas el simple past mejor de lo que crees. Sigue así.",
  "Muy bien hecho. Esa nota demuestra que el repaso está funcionando.",
  "¡Aprobado con buen margen! Tu memoria de verbos irregulares ya es sólida.",
  "Gran trabajo. Podrías enseñarle esto a un compañero y le quedaría claro.",
  "Sólido resultado. Un poco más de práctica y lo tendrás automatizado."
];

const FAIL_MESSAGES = [
  "No llegaste esta vez, pero cada intento te deja más cerca. Vuelve a intentarlo.",
  "Casi lo logras. Repasa los verbos que fallaste y vas a mejorar rápido.",
  "No pasa nada, equivocarse es parte de aprender. Con un repaso más lo consigues.",
  "Te faltó poco. Tómate un minuto para repasar y vuelve a intentarlo con calma.",
  "Sigue practicando: cada repetición fija más los verbos en tu memoria."
];

/* =========================================================
   UTILIDADES
   ========================================================= */
function shuffle(arr){
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(arr, n){
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

function normalize(str){
  return String(str)
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/n't/g, " not")
    .replace(/[^a-z\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function formatTime(totalSeconds){
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/* =========================================================
   GENERACIÓN DE PREGUNTAS
   ========================================================= */
function buildVerbQuestionPool(){
  const pool = [];
  VERBS.forEach(entry => {
    pool.push({ kind: "past", verb: entry });
    pool.push({ kind: "participle", verb: entry });
  });
  return pool;
}

function makeVerbQuestion(item){
  const isPast = item.kind === "past";
  const correct = isPast ? item.verb.p : item.verb.pp;
  const formLabel = isPast ? "Past Simple" : "Past Participle";

  const otherForms = VERBS
    .filter(v => v.v !== item.verb.v)
    .map(v => (isPast ? v.p : v.pp))
    .filter(f => f !== correct);
  const distractors = sample([...new Set(otherForms)], 2);

  const options = shuffle([correct, ...distractors]);

  return {
    type: "mc",
    tag: "Verbos",
    prompt: `¿Cuál es el ${formLabel} del verbo '${item.verb.v}' (${item.verb.m})?`,
    options,
    correct
  };
}

function generateExamQuestions(examType){
  if(examType === "verbs"){
    const pool = buildVerbQuestionPool();
    const chosen = sample(pool, QUESTIONS_PER_EXAM);
    return chosen.map(makeVerbQuestion);
  }
  // reading
  const chosen = sample(READING_POOL, QUESTIONS_PER_EXAM);
  return chosen.map(q => {
    if(q.type === "mc"){
      return { type: "mc", tag: q.tag, prompt: q.prompt, options: shuffle(q.options), correct: q.correct };
    }
    return { type: "text", tag: q.tag, prompt: q.prompt, accept: q.accept };
  });
}

/* =========================================================
   ESTADO GLOBAL
   ========================================================= */
const state = {
  examType: null,
  durationMinutes: 10,
  questions: [],
  index: 0,
  correctCount: 0,
  answeredCurrent: false,
  timeLeftSeconds: 0,
  timerId: null,
  startedAt: null
};

/* =========================================================
   NAVEGACIÓN DE VISTAS
   ========================================================= */
const views = ["home", "config", "exam", "result", "history"];

function showView(name){
  views.forEach(v => {
    document.getElementById(`view-${v}`).classList.toggle("hidden", v !== name);
  });
  if(name === "history") renderHistory();
}

document.querySelectorAll("[data-nav]").forEach(btn => {
  btn.addEventListener("click", () => {
    if(btn.dataset.nav === "home" && state.timerId){
      stopTimer();
    }
    showView(btn.dataset.nav);
  });
});

/* =========================================================
   CONFIG VIEW
   ========================================================= */
const CONFIG_COPY = {
  verbs: {
    title: "Sección A · 40 Verbos Irregulares",
    desc: "Se te preguntará el Past Simple o el Past Participle de verbos tomados al azar de tu lista de 40. Elige cuánto tiempo quieres darte."
  },
  reading: {
    title: "Sección B · Reading & Grammar",
    desc: "Preguntas sobre la carta de Cesc, la reacción Briggs-Rauscher y los ejercicios de preguntas, huecos y orden de palabras."
  }
};

document.querySelectorAll("[data-start]").forEach(btn => {
  btn.addEventListener("click", () => {
    state.examType = btn.dataset.start;
    const copy = CONFIG_COPY[state.examType];
    document.getElementById("config-title").textContent = copy.title;
    document.getElementById("config-desc").textContent = copy.desc;
    showView("config");
  });
});

document.getElementById("btn-launch").addEventListener("click", () => {
  const input = document.getElementById("duration-input");
  let minutes = parseInt(input.value, 10);
  if(isNaN(minutes) || minutes < 1) minutes = 1;
  if(minutes > 120) minutes = 120;
  input.value = minutes;
  state.durationMinutes = minutes;
  startExam();
});

/* =========================================================
   EXAM ENGINE
   ========================================================= */
function startExam(){
  state.questions = generateExamQuestions(state.examType);
  state.index = 0;
  state.correctCount = 0;
  state.timeLeftSeconds = state.durationMinutes * 60;
  state.startedAt = Date.now();

  document.getElementById("exam-section-label").textContent =
    state.examType === "verbs" ? "Sección A · Verbos irregulares" : "Sección B · Reading & Grammar";

  updateBeaker(0.5);
  showView("exam");
  renderQuestion();
  startTimer();
}

function startTimer(){
  stopTimer();
  updateTimerDisplay();
  state.timerId = setInterval(() => {
    state.timeLeftSeconds--;
    updateTimerDisplay();
    if(state.timeLeftSeconds <= 0){
      stopTimer();
      finishExam();
    }
  }, 1000);
}

function stopTimer(){
  if(state.timerId){
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateTimerDisplay(){
  const el = document.getElementById("exam-timer");
  el.textContent = formatTime(Math.max(0, state.timeLeftSeconds));
  el.classList.toggle("is-low", state.timeLeftSeconds <= 30);
}

function updateBeaker(accuracy){
  // Recorre la paleta de la reacción Briggs-Rauscher según el desempeño
  const liquid = document.getElementById("beaker-liquid");
  let color;
  if(accuracy >= 0.85) color = "#3457a6";       // azul: casi perfecto
  else if(accuracy >= 0.65) color = "#e4e0d2";  // incoloro/blanco: bien
  else if(accuracy >= 0.4) color = "#8f8b7c";   // gris: regular
  else color = "#dc7a34";                        // naranja: hay que repasar
  liquid.style.fill = color;
}

function renderQuestion(){
  const q = state.questions[state.index];
  state.answeredCurrent = false;

  document.getElementById("exam-progress-text").textContent =
    `Pregunta ${state.index + 1} / ${state.questions.length}`;
  document.getElementById("exam-progress-fill").style.width =
    `${(state.index / state.questions.length) * 100}%`;

  document.getElementById("question-tag").textContent = q.tag;
  document.getElementById("question-prompt").textContent = q.prompt;
  document.getElementById("question-feedback").textContent = "";
  document.getElementById("question-feedback").className = "feedback";

  const optionsWrap = document.getElementById("question-options");
  const textWrap = document.getElementById("question-textwrap");
  const textInput = document.getElementById("question-textinput");

  optionsWrap.innerHTML = "";
  textInput.value = "";
  textInput.className = "";

  const btnCheck = document.getElementById("btn-check");
  const btnNext = document.getElementById("btn-next");
  btnCheck.classList.remove("hidden");
  btnNext.classList.add("hidden");
  btnCheck.disabled = true;

  if(q.type === "mc"){
    textWrap.classList.add("hidden");
    optionsWrap.classList.remove("hidden");
    q.options.forEach(opt => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "option";
      b.textContent = opt;
      b.addEventListener("click", () => {
        optionsWrap.querySelectorAll(".option").forEach(o => o.classList.remove("is-selected"));
        b.classList.add("is-selected");
        q._selected = opt;
        btnCheck.disabled = false;
      });
      optionsWrap.appendChild(b);
    });
  } else {
    optionsWrap.classList.add("hidden");
    textWrap.classList.remove("hidden");
    textInput.addEventListener("input", () => {
      btnCheck.disabled = textInput.value.trim().length === 0;
    }, { once: false });
    setTimeout(() => textInput.focus(), 50);
  }
}

function checkAnswer(){
  const q = state.questions[state.index];
  if(state.answeredCurrent) return;

  let isCorrect = false;
  const optionsWrap = document.getElementById("question-options");
  const textInput = document.getElementById("question-textinput");
  const feedback = document.getElementById("question-feedback");

  if(q.type === "mc"){
    const selected = q._selected;
    isCorrect = selected === q.correct;
    optionsWrap.querySelectorAll(".option").forEach(o => {
      o.disabled = true;
      if(o.textContent === q.correct) o.classList.add("is-correct");
      else if(o.textContent === selected && !isCorrect) o.classList.add("is-wrong");
    });
  } else {
    const userVal = normalize(textInput.value);
    isCorrect = q.accept.some(acc => normalize(acc) === userVal);
    textInput.disabled = true;
    textInput.classList.add(isCorrect ? "is-correct" : "is-wrong");
    if(!isCorrect){
      feedback.textContent = `Respuesta correcta: ${q.accept[0]}`;
    }
  }

  if(isCorrect){
    state.correctCount++;
    feedback.textContent = feedback.textContent || "¡Correcto!";
    feedback.classList.add("ok");
  } else {
    feedback.classList.add("bad");
  }

  updateBeaker(state.correctCount / (state.index + 1));

  state.answeredCurrent = true;
  document.getElementById("btn-check").classList.add("hidden");
  const btnNext = document.getElementById("btn-next");
  btnNext.classList.remove("hidden");
  btnNext.textContent = (state.index + 1 >= state.questions.length) ? "Ver resultados" : "Siguiente pregunta";
  btnNext.focus();
}

document.getElementById("btn-check").addEventListener("click", checkAnswer);

document.getElementById("question-textinput").addEventListener("keydown", (e) => {
  if(e.key === "Enter" && !document.getElementById("btn-check").disabled){
    checkAnswer();
  }
});

document.getElementById("btn-next").addEventListener("click", () => {
  state.index++;
  if(state.index >= state.questions.length){
    finishExam();
  } else {
    renderQuestion();
  }
});

function finishExam(){
  stopTimer();
  document.getElementById("exam-progress-fill").style.width = "100%";

  const total = state.questions.length;
  const score20 = Math.round((state.correctCount / total) * 20);
  const passed = score20 >= PASS_SCORE;
  const secondsUsed = state.durationMinutes * 60 - Math.max(0, state.timeLeftSeconds);

  saveAttempt({
    date: new Date().toISOString(),
    type: state.examType,
    score: score20,
    passed
  });

  renderResult(score20, passed, secondsUsed);
  showView("result");
}

function renderResult(score20, passed, secondsUsed){
  document.getElementById("result-kicker").textContent =
    state.examType === "verbs" ? "Resultado · Sección A" : "Resultado · Sección B";
  document.getElementById("result-score-number").textContent = score20;

  const statusEl = document.getElementById("result-status");
  statusEl.textContent = passed ? "Aprobado" : "No aprobado";
  statusEl.className = "result-status " + (passed ? "pass" : "fail");

  const pool = passed ? PASS_MESSAGES : FAIL_MESSAGES;
  document.getElementById("result-message").textContent = pool[Math.floor(Math.random() * pool.length)];

  document.getElementById("result-correct").textContent = state.correctCount;
  document.getElementById("result-incorrect").textContent = state.questions.length - state.correctCount;
  document.getElementById("result-time").textContent = formatTime(secondsUsed);
}

document.getElementById("btn-retry").addEventListener("click", startExam);

/* =========================================================
   HISTORIAL (localStorage)
   ========================================================= */
const HISTORY_KEY = "examVirtualHistory";

function getHistory(){
  try{
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch(e){
    return [];
  }
}

function saveAttempt(attempt){
  const history = getHistory();
  history.unshift(attempt);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function renderHistory(){
  const history = getHistory();
  const body = document.getElementById("history-body");
  const empty = document.getElementById("history-empty");
  const statsWrap = document.getElementById("history-stats");

  body.innerHTML = "";

  if(history.length === 0){
    empty.classList.remove("hidden");
    statsWrap.innerHTML = "";
    return;
  }
  empty.classList.add("hidden");

  history.forEach(item => {
    const tr = document.createElement("tr");
    const date = new Date(item.date);
    const dateStr = date.toLocaleDateString("es-PE", { day: "2-digit", month: "short", year: "numeric" }) +
      " · " + date.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" });

    tr.innerHTML = `
      <td>${dateStr}</td>
      <td>${item.type === "verbs" ? "A · Verbos" : "B · Reading"}</td>
      <td>${item.score} / 20</td>
      <td><span class="pill ${item.passed ? "pass" : "fail"}">${item.passed ? "Aprobado" : "No aprobado"}</span></td>
    `;
    body.appendChild(tr);
  });

  const totalAttempts = history.length;
  const bestScore = Math.max(...history.map(h => h.score));
  const avgScore = (history.reduce((sum, h) => sum + h.score, 0) / totalAttempts).toFixed(1);

  statsWrap.innerHTML = `
    <div class="history-stat"><span>${totalAttempts}</span><p>intentos totales</p></div>
    <div class="history-stat"><span>${bestScore}/20</span><p>mejor nota</p></div>
    <div class="history-stat"><span>${avgScore}/20</span><p>promedio</p></div>
  `;
}

document.getElementById("btn-clear-history").addEventListener("click", () => {
  if(confirm("¿Seguro que quieres borrar todo tu historial de intentos?")){
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
  }
});

/* =========================================================
   INICIO
   ========================================================= */
showView("home");