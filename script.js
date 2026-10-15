const questionBank = {
  tech: {
    easy: [
      q("What does CPU stand for?", ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing User"], 0, "The CPU executes instructions and processes data."),
      q("Which language styles a web page?", ["HTML", "CSS", "SQL", "Python"], 1, "CSS controls colors, spacing, layout and visual design."),
      q("Which one is a cloud platform?", ["Notepad", "AWS", "Paint", "Calculator"], 1, "AWS provides computing, storage, databases and many other cloud services."),
      q("Which one is a web browser?", ["Excel", "Chrome", "MySQL", "Linux"], 1, "A browser retrieves and displays websites."),
      q("What does HTML define?", ["Web page structure", "Network cables", "Database backups", "CPU speed"], 0, "HTML provides the structure and content of a web page."),
      q("Which device is used to type text?", ["Monitor", "Speaker", "Keyboard", "Projector"], 2, "A keyboard is a common input device."),
      q("What does HTTPS help protect?", ["Screen brightness", "Data in transit", "Battery life", "File names"], 1, "HTTPS encrypts communication between the browser and the website."),
      q("Which is a programming language?", ["Python", "HDMI", "USB", "Wi-Fi"], 0, "Python is a general-purpose programming language.")
    ],
    medium: [
      q("Which service model provides ready-to-use software over the internet?", ["IaaS", "PaaS", "SaaS", "DNS"], 2, "SaaS stands for Software as a Service."),
      q("What does CSS stand for?", ["Creative Style System", "Cascading Style Sheets", "Computer Styled Sections", "Colorful Site Syntax"], 1, "CSS means Cascading Style Sheets."),
      q("Which cloud model combines private and public cloud environments?", ["Community only", "Hybrid cloud", "Single-user cloud", "Local cloud"], 1, "Hybrid cloud combines private and public cloud infrastructure."),
      q("What is the main purpose of a database?", ["Style a page", "Organize and store data", "Cool a CPU", "Encrypt every website automatically"], 1, "Databases store and organize data for retrieval and updates."),
      q("What does URL stand for?", ["Uniform Resource Locator", "Universal Record Link", "User Reference Location", "Uniform Read Language"], 0, "A URL identifies the location of a resource on the web."),
      q("Which service model provides a platform to develop and deploy applications?", ["SaaS", "PaaS", "IaaS", "HTTP"], 1, "PaaS offers a managed application development and deployment platform."),
      q("What is Git primarily used for?", ["Version control", "Image editing", "Cloud cooling", "Creating passwords"], 0, "Git tracks changes in files and source code."),
      q("What does responsive web design aim to do?", ["Only work on desktops", "Adapt to different screen sizes", "Require a database", "Prevent all cyberattacks"], 1, "Responsive layouts adapt to mobile, tablet and desktop screens.")
    ],
    hard: [
      q("Which principle gives users only the access they need?", ["Open access", "Least privilege", "Shared passwords", "Default admin"], 1, "Least privilege reduces unnecessary permissions and limits risk."),
      q("What does a CDN primarily improve?", ["Content delivery speed", "Password complexity", "Database normalization", "Source code readability"], 0, "A content delivery network serves content from locations closer to users."),
      q("Which HTTP method is commonly used to retrieve a resource?", ["POST", "GET", "PATCH", "DELETE"], 1, "GET requests a representation of a resource."),
      q("What is the main purpose of a hash function in password storage?", ["Recover the original password", "Create a one-way derived value", "Send passwords by email", "Increase screen resolution"], 1, "Passwords should be stored using a suitable salted password-hashing algorithm."),
      q("What is horizontal scaling?", ["Adding more instances", "Adding more RAM to one server only", "Compressing images", "Changing CSS"], 0, "Horizontal scaling adds instances or machines to distribute workload."),
      q("Which is a benefit of version control?", ["It removes all bugs", "It tracks changes and supports collaboration", "It replaces testing", "It guarantees zero downtime"], 1, "Version control records changes and helps teams collaborate."),
      q("What does serverless computing mean?", ["No servers exist", "The provider manages server infrastructure", "Apps run without computers", "Only offline applications work"], 1, "Servers still exist, but the provider manages much of the infrastructure."),
      q("Why should secrets not be placed in public client-side JavaScript?", ["They make pages colorful", "Visitors can inspect the code", "They prevent responsive design", "Browsers cannot run JavaScript"], 1, "Client-side code is delivered to users and can be inspected.")
    ]
  },
  science: {
    easy: [
      q("Which planet is known as the Red Planet?", ["Venus", "Mars", "Jupiter", "Mercury"], 1, "Iron-rich dust gives Mars its reddish appearance."),
      q("What gas do plants absorb during photosynthesis?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"], 2, "Plants use carbon dioxide, water and light to make sugars."),
      q("What is the chemical formula for water?", ["CO₂", "H₂O", "O₂", "NaCl"], 1, "A water molecule contains two hydrogen atoms and one oxygen atom."),
      q("Which force pulls objects toward Earth?", ["Friction", "Magnetism", "Gravity", "Buoyancy"], 2, "Gravity attracts objects with mass."),
      q("Which organ pumps blood around the body?", ["Lungs", "Heart", "Kidneys", "Stomach"], 1, "The heart pumps blood through the circulatory system."),
      q("At sea level, water boils at approximately what temperature?", ["50°C", "75°C", "100°C", "150°C"], 2, "Pure water boils at about 100°C at standard atmospheric pressure."),
      q("Which star is closest to Earth?", ["Sirius", "The Sun", "Polaris", "Vega"], 1, "The Sun is our solar system's star."),
      q("What is the basic unit of life?", ["Atom", "Cell", "Organ", "Tissue"], 1, "Cells are the basic structural and functional units of living organisms.")
    ],
    medium: [
      q("Which particle has a negative electric charge?", ["Proton", "Neutron", "Electron", "Photon"], 2, "Electrons carry negative electric charge."),
      q("What is the approximate speed of light in vacuum?", ["300 km/s", "3,000 km/s", "300,000 km/s", "3 million km/s"], 2, "Light travels at about 300,000 kilometres per second in a vacuum."),
      q("Which molecule carries genetic information in most living organisms?", ["DNA", "Glucose", "ATP only", "Cellulose"], 0, "DNA stores hereditary information."),
      q("What is the pH of a neutral solution at 25°C?", ["0", "5", "7", "14"], 2, "A neutral aqueous solution has a pH of 7 at 25°C."),
      q("Which layer of Earth is liquid and surrounds the inner core?", ["Crust", "Mantle", "Outer core", "Inner core"], 2, "Earth's outer core is mainly liquid iron and nickel."),
      q("What process changes a liquid into a gas at its surface?", ["Condensation", "Evaporation", "Freezing", "Deposition"], 1, "Evaporation occurs at a liquid's surface."),
      q("Which vitamin can the body produce with sufficient sunlight exposure?", ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], 3, "UVB exposure helps the skin synthesize vitamin D."),
      q("What is the SI unit of force?", ["Joule", "Watt", "Newton", "Pascal"], 2, "Force is measured in newtons.")
    ],
    hard: [
      q("Which law states that energy cannot be created or destroyed in an isolated system?", ["Newton's first law", "Conservation of energy", "Ohm's law", "Boyle's law"], 1, "Energy changes form, but total energy is conserved in an isolated system."),
      q("Which type of bond involves sharing electron pairs?", ["Ionic", "Covalent", "Metallic only", "Hydrogen only"], 1, "Covalent bonds form when atoms share electron pairs."),
      q("What is the powerhouse of the cell commonly called?", ["Ribosome", "Mitochondrion", "Golgi body", "Lysosome"], 1, "Mitochondria produce much of the cell's usable energy in the form of ATP."),
      q("Which phenomenon explains the bending of light as it enters another medium?", ["Reflection", "Refraction", "Diffusion", "Interference only"], 1, "Refraction occurs because light changes speed between media."),
      q("What is the approximate value of Avogadro's constant?", ["6.022 × 10²³ mol⁻¹", "3.00 × 10⁸ m/s", "9.81 m/s²", "1.602 × 10⁻¹⁹ C"], 0, "Avogadro's constant is approximately 6.022 × 10²³ entities per mole."),
      q("Which blood cells are primarily responsible for oxygen transport?", ["Platelets", "Red blood cells", "White blood cells", "Plasma cells"], 1, "Haemoglobin in red blood cells binds and transports oxygen."),
      q("Which quantity is measured in watts?", ["Force", "Power", "Pressure", "Electric charge"], 1, "A watt is the SI unit of power."),
      q("What does a catalyst do in a chemical reaction?", ["Always raises product energy", "Lowers activation energy pathway", "Gets consumed completely", "Changes equilibrium constant"], 1, "A catalyst provides a pathway with lower activation energy and is regenerated.")
    ]
  }
};

function q(question, options, answer, explanation) {
  return { question, options, answer, explanation };
}

const tips = [
  "Read every option before you lock in your answer.",
  "Eliminate options that clearly don't fit.",
  "A calm mind spots details a rushed mind misses.",
  "Use the explanation to learn, not just to score.",
  "One question at a time. Keep your focus."
];

const state = {
  category: "tech",
  difficulty: "medium",
  timed: true,
  questions: [],
  index: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  selected: null,
  answered: false,
  seconds: 15,
  interval: null,
  sound: false,
  history: []
};

const $ = id => document.getElementById(id);
const welcomeScreen = $("welcome-screen");
const quizScreen = $("quiz-screen");
const resultScreen = $("result-screen");
const answerList = $("answer-list");
const nextButton = $("next-btn");
const timerWrap = $("timer-wrap");
const toast = $("toast");

document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    state.category = button.dataset.category;
  });
});

document.querySelectorAll("[data-level]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-level]").forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    state.difficulty = button.dataset.level;
  });
});

$("timer-toggle").addEventListener("click", () => {
  state.timed = !state.timed;
  $("timer-toggle").setAttribute("aria-pressed", String(state.timed));
  $("timer-toggle").querySelector("b").textContent = state.timed ? "15 sec" : "Off";
});

$("sound-toggle").addEventListener("click", () => {
  state.sound = !state.sound;
  $("sound-toggle").style.color = state.sound ? "#ffb86b" : "";
  showToast(state.sound ? "Sound cues enabled where supported." : "Sound cues muted.");
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  clearInterval(state.interval);
  state.questions = shuffle(questionBank[state.category][state.difficulty]).slice(0, 8);
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.history = [];
  welcomeScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  $("category-label").textContent = state.category === "tech" ? "TECH & CS" : state.category === "science" ? "SCIENCE" : "MIXED BAG";
  if (state.category === "mixed") {
    state.questions = shuffle([
      ...questionBank.tech[state.difficulty],
      ...questionBank.science[state.difficulty]
    ]).slice(0, 10);
  }
  renderQuestion();
}

function renderQuestion() {
  clearInterval(state.interval);
  state.selected = null;
  state.answered = false;
  state.seconds = 15;
  const current = state.questions[state.index];
  $("question-number").innerHTML = `QUESTION ${String(state.index + 1).padStart(2, "0")} <span>/ ${state.questions.length}</span>`;
  $("main-progress-fill").style.width = `${(state.index / state.questions.length) * 100}%`;
  $("question-text").textContent = current.question;
  $("answer-feedback").textContent = "";
  $("answer-feedback").className = "answer-feedback";
  $("streak-count").textContent = state.streak;
  $("correct-count").textContent = state.score;
  $("accuracy-count").textContent = state.index ? `${Math.round(state.score / state.index * 100)}%` : "—";
  $("xp-count").textContent = state.score * 100;
  $("tip-text").textContent = tips[state.index % tips.length];
  nextButton.disabled = true;
  nextButton.innerHTML = state.index === state.questions.length - 1 ? 'See results <span>→</span>' : 'Lock it in <span>→</span>';
  answerList.replaceChildren();

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);
    const label = document.createElement("span");
    label.textContent = option;
    button.append(letter, label);
    button.addEventListener("click", () => selectAnswer(index, false));
    answerList.appendChild(button);
  });

  timerWrap.classList.toggle("hidden", !state.timed);
  if (state.timed) {
    updateTimer();
    state.interval = window.setInterval(() => {
      state.seconds--;
      updateTimer();
      if (state.seconds <= 0) {
        clearInterval(state.interval);
        if (!state.answered) selectAnswer(null, true);
      }
    }, 1000);
  }
}

function updateTimer() {
  $("timer-number").textContent = state.seconds;
  $("timer-fill").style.width = `${state.seconds / 15 * 100}%`;
  timerWrap.classList.toggle("urgent", state.seconds <= 5);
}

function selectAnswer(selectedIndex, timedOut) {
  if (state.answered) return;
  state.answered = true;
  state.selected = selectedIndex;
  clearInterval(state.interval);
  const current = state.questions[state.index];
  const correct = selectedIndex === current.answer;
  const buttons = [...answerList.querySelectorAll("button")];

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === current.answer) button.classList.add("correct");
    if (index === selectedIndex && !correct) button.classList.add("incorrect");
  });

  if (correct) {
    state.score++;
    state.streak++;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    $("answer-feedback").textContent = `Correct! ${current.explanation}`;
    $("answer-feedback").classList.add("good");
  } else {
    state.streak = 0;
    $("answer-feedback").textContent = timedOut
      ? `Time's up! ${current.explanation}`
      : `Not quite. ${current.explanation}`;
    $("answer-feedback").classList.add("bad");
  }

  state.history.push({
    question: current.question,
    options: current.options,
    answer: current.answer,
    selected: selectedIndex,
    correct,
    explanation: current.explanation
  });

  $("streak-count").textContent = state.streak;
  $("correct-count").textContent = state.score;
  $("accuracy-count").textContent = `${Math.round(state.score / (state.index + 1) * 100)}%`;
  $("xp-count").textContent = state.score * 100;
  $("main-progress-fill").style.width = `${((state.index + 1) / state.questions.length) * 100}%`;
  nextButton.disabled = false;
  nextButton.innerHTML = state.index === state.questions.length - 1 ? 'See results <span>→</span>' : 'Next question <span>→</span>';
}

function showResults() {
  clearInterval(state.interval);
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  const total = state.questions.length;
  const percentage = Math.round(state.score / total * 100);
  $("final-score").innerHTML = `${state.score}<span>/${total}</span>`;
  $("final-percent").textContent = `${percentage}% accuracy`;
  $("final-xp").textContent = `${state.score * 100} XP`;
  $("final-streak").textContent = state.bestStreak;
  $("result-emoji").textContent = percentage >= 80 ? "🏆" : percentage >= 50 ? "🚀" : "🌱";
  $("result-title").innerHTML = percentage >= 80
    ? 'That was <span class="gradient-text">brilliant.</span>'
    : percentage >= 50
      ? 'You are <span class="gradient-text">getting there.</span>'
      : 'Every expert <span class="gradient-text">starts here.</span>';
  $("result-subtitle").textContent = `You completed the ${state.difficulty} ${state.category === "tech" ? "Tech & CS" : state.category === "science" ? "Science" : "Mixed Bag"} challenge.`;
  $("result-message").textContent = percentage >= 80
    ? "Strong work. Keep your momentum going and try a tougher challenge next."
    : percentage >= 50
      ? "Nice effort. Review the explanations, then give it another shot."
      : "Learning is progress, not perfection. Review the answers and try again.";
  $("review-panel").classList.add("hidden");
  $("review-btn").innerHTML = 'Review answers <span>↓</span>';
}

function showReview() {
  const panel = $("review-panel");
  if (!panel.classList.contains("hidden")) {
    panel.classList.add("hidden");
    $("review-btn").innerHTML = 'Review answers <span>↓</span>';
    return;
  }
  panel.replaceChildren();
  state.history.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "review-item";
    const heading = document.createElement("h3");
    heading.textContent = `${String(index + 1).padStart(2, "0")}. ${item.question}`;
    const chosen = document.createElement("p");
    chosen.className = item.correct ? "review-correct" : "review-wrong";
    chosen.textContent = `Your answer: ${item.selected === null ? "No answer (time expired)" : item.options[item.selected]}`;
    const correct = document.createElement("p");
    correct.className = "review-correct";
    correct.textContent = `Correct answer: ${item.options[item.answer]}`;
    const explanation = document.createElement("p");
    explanation.textContent = item.explanation;
    card.append(heading, chosen, correct, explanation);
    panel.appendChild(card);
  });
  panel.classList.remove("hidden");
  $("review-btn").innerHTML = 'Hide review <span>↑</span>';
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

nextButton.addEventListener("click", () => {
  if (!state.answered) return;
  if (state.index < state.questions.length - 1) {
    state.index++;
    renderQuestion();
  } else {
    showResults();
  }
});

$("start-btn").addEventListener("click", startQuiz);
$("exit-btn").addEventListener("click", () => {
  clearInterval(state.interval);
  quizScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
});
$("play-again-btn").addEventListener("click", startQuiz);
$("review-btn").addEventListener("click", showReview);


function goHome() {
  clearInterval(state.interval);
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("quiz-home-btn").addEventListener("click", goHome);
$("result-home-btn").addEventListener("click", goHome);
