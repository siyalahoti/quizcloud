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
  },
  math: {
    easy: [
      q("What is 12 × 8?", ["86", "96", "108", "88"], 1, "12 × 8 = 96."),
      q("What is 25% of 200?", ["25", "40", "50", "75"], 2, "25% of 200 is 50."),
      q("What is the square root of 144?", ["10", "11", "12", "14"], 2, "12 × 12 = 144.")
    ],
    medium: [
      q("Solve: 3x = 27.", ["6", "8", "9", "12"], 2, "Divide both sides by 3 to get x = 9."),
      q("What is the mean of 4, 6 and 8?", ["5", "6", "7", "8"], 1, "The mean is (4 + 6 + 8) / 3 = 6."),
      q("What is 2⁵?", ["10", "16", "25", "32"], 3, "2 multiplied by itself five times equals 32.")
    ],
    hard: [
      q("What is the derivative of x²?", ["x", "2x", "x³", "2"], 1, "The derivative of x² is 2x."),
      q("What is the probability of rolling a 6 on a fair die?", ["1/2", "1/3", "1/6", "1/12"], 2, "One of six equally likely outcomes is a 6."),
      q("What is the determinant of [[1,2],[3,4]]?", ["-2", "2", "10", "0"], 0, "The determinant is 1×4 − 2×3 = -2.")
    ]
  },
  geography: {
    easy: [
      q("What is the capital of India?", ["Mumbai", "New Delhi", "Kolkata", "Chennai"], 1, "New Delhi is India's capital."),
      q("Which is the largest ocean?", ["Atlantic", "Indian", "Arctic", "Pacific"], 3, "The Pacific Ocean is the largest."),
      q("Which continent is India in?", ["Europe", "Asia", "Africa", "Australia"], 1, "India is in South Asia.")
    ],
    medium: [
      q("Which river flows through Egypt?", ["Amazon", "Nile", "Danube", "Thames"], 1, "The Nile flows through Egypt."),
      q("Mount Everest belongs to which mountain range?", ["Andes", "Alps", "Himalayas", "Rockies"], 2, "Mount Everest is in the Himalayas."),
      q("Which country has the city of Kyoto?", ["China", "Japan", "Thailand", "Nepal"], 1, "Kyoto is a historic city in Japan.")
    ],
    hard: [
      q("Which strait separates Europe and Africa near Spain?", ["Bering", "Gibraltar", "Malacca", "Hormuz"], 1, "The Strait of Gibraltar separates Spain and Morocco."),
      q("What is the world's largest inland body of water by area?", ["Lake Superior", "Caspian Sea", "Lake Victoria", "Black Sea"], 1, "The Caspian Sea is the largest inland body of water."),
      q("Which country is completely surrounded by South Africa?", ["Lesotho", "Botswana", "Namibia", "Eswatini"], 0, "Lesotho is an enclave surrounded by South Africa.")
    ]
  },
  history: {
    easy: [
      q("Who was the first Prime Minister of India?", ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "B. R. Ambedkar"], 1, "Jawaharlal Nehru became India's first Prime Minister in 1947."),
      q("In which year did India gain independence?", ["1942", "1945", "1947", "1950"], 2, "India became independent on 15 August 1947."),
      q("Where did the ancient Olympic Games begin?", ["Rome", "Greece", "Egypt", "Persia"], 1, "The ancient Olympic Games originated in Greece.")
    ],
    medium: [
      q("Who founded the Maurya Empire?", ["Ashoka", "Chandragupta Maurya", "Harsha", "Akbar"], 1, "Chandragupta Maurya founded the Maurya Empire."),
      q("The French Revolution began in which year?", ["1776", "1789", "1815", "1848"], 1, "The French Revolution began in 1789."),
      q("Who was known as the Iron Man of India?", ["Subhas Chandra Bose", "Sardar Vallabhbhai Patel", "Bhagat Singh", "Lal Bahadur Shastri"], 1, "Sardar Patel was widely known as the Iron Man of India.")
    ],
    hard: [
      q("Which treaty ended World War I between Germany and the Allied Powers?", ["Treaty of Versailles", "Treaty of Paris", "Treaty of Rome", "Treaty of Tordesillas"], 0, "The Treaty of Versailles was signed in 1919."),
      q("Who wrote the Arthashastra?", ["Kalidasa", "Kautilya", "Banabhatta", "Tulsidas"], 1, "Kautilya is traditionally credited with the Arthashastra."),
      q("The Renaissance began in which European country?", ["Italy", "Norway", "Russia", "Portugal"], 0, "The Renaissance began in Italy.")
    ]
  },
  sports: {
    easy: [
      q("How many players from one cricket team are on the field?", ["9", "10", "11", "12"], 2, "A cricket team fields 11 players."),
      q("Which sport uses a shuttlecock?", ["Tennis", "Badminton", "Squash", "Hockey"], 1, "Badminton is played using a shuttlecock."),
      q("How many rings appear in the Olympic symbol?", ["4", "5", "6", "7"], 1, "The Olympic symbol has five interlocking rings.")
    ],
    medium: [
      q("How many points is a goal worth in football?", ["1", "2", "3", "6"], 0, "Each goal counts as one goal."),
      q("In tennis, what does 'love' mean?", ["One point", "Zero points", "Match point", "A tie-break"], 1, "Love means zero in tennis scoring."),
      q("Which country won the first men's Cricket World Cup in 1975?", ["India", "Australia", "West Indies", "England"], 2, "West Indies won the inaugural men's Cricket World Cup.")
    ],
    hard: [
      q("What is the length of a standard Olympic swimming pool?", ["25 metres", "50 metres", "75 metres", "100 metres"], 1, "An Olympic-size pool is 50 metres long."),
      q("In chess, which piece moves in an L-shape?", ["Bishop", "Rook", "Knight", "Queen"], 2, "The knight moves in an L-shape."),
      q("How many points is a free throw worth in basketball?", ["1", "2", "3", "4"], 0, "A successful free throw is worth one point.")
    ]
  },
  ai: {
    easy: [
      q("What does AI stand for?", ["Automated Internet", "Artificial Intelligence", "Advanced Input", "Applied Interface"], 1, "AI stands for Artificial Intelligence."),
      q("Which is an example of AI?", ["A plain ruler", "A voice assistant", "A paper notebook", "A light switch"], 1, "Voice assistants use AI to interpret requests."),
      q("What does a chatbot do?", ["Interacts with users", "Prints money", "Repairs hardware", "Charges batteries"], 0, "Chatbots communicate with users through text or voice.")
    ],
    medium: [
      q("What does machine learning use to learn patterns?", ["Data", "Paint", "Cables", "Screenshots only"], 0, "Machine learning models learn patterns from data."),
      q("Which AI field helps computers interpret images?", ["Computer vision", "Word processing", "Audio playback", "File compression"], 0, "Computer vision processes images and video."),
      q("What can generative AI create?", ["Only folders", "New content", "Electricity", "Physical hardware"], 1, "Generative AI can create text, images and other content.")
    ],
    hard: [
      q("What is overfitting?", ["Memorizing training patterns too closely", "Having no data", "Increasing screen size", "Deleting a model"], 0, "An overfit model may perform poorly on unseen data."),
      q("What does NLP stand for?", ["Natural Language Processing", "Network Link Program", "Numeric Learning Process", "New Logic Protocol"], 0, "NLP helps computers process human language."),
      q("Why is biased training data a concern?", ["It may cause unfair predictions", "It guarantees accuracy", "It removes all errors", "It always protects privacy"], 0, "Biased data can lead to unfair or unreliable AI results.")
    ]
  },
  data: {
    easy: [
      q("What does CSV stand for?", ["Comma-Separated Values", "Computer Storage Version", "Central System View", "Column Sorting Value"], 0, "CSV is a format for tabular data."),
      q("Which Python library is commonly used for data analysis?", ["Pandas", "Pygame", "Turtle", "Tkinter"], 0, "Pandas provides tools for working with data."),
      q("Which chart is useful for comparing categories?", ["Bar chart", "Audio track", "Password list", "Folder tree"], 0, "Bar charts compare values across categories.")
    ],
    medium: [
      q("What is a missing value?", ["Unavailable data", "Always zero", "A chart title", "A column heading"], 0, "A missing value means information is not available."),
      q("What does data visualization do?", ["Displays data graphically", "Deletes all records", "Repairs hardware", "Encrypts every file"], 0, "Charts help people understand data."),
      q("What is a duplicate record?", ["A repeated record", "A new chart", "A missing column", "A formula"], 0, "Duplicates repeat information already present in a dataset.")
    ],
    hard: [
      q("What does correlation measure?", ["Association between variables", "Computer size", "Number of folders", "Internet speed only"], 0, "Correlation measures the direction and strength of association."),
      q("What is an outlier?", ["A value far from the general pattern", "The dataset title", "A missing column", "The average"], 0, "Outliers are observations that differ notably from others."),
      q("Why should data be cleaned before analysis?", ["To improve consistency and reliability", "To make every value identical", "To remove all columns", "To avoid using charts"], 0, "Cleaning helps prevent errors and misleading results.")
    ]
  },
  gk: {
    easy: [
      q("What is the capital of Australia?", ["Sydney", "Canberra", "Melbourne", "Perth"], 1, "Canberra is Australia's capital."),
      q("How many days are in a leap year?", ["364", "365", "366", "367"], 2, "A leap year has 366 days."),
      q("Which is the largest planet in our solar system?", ["Earth", "Jupiter", "Mars", "Venus"], 1, "Jupiter is the largest planet.")
    ],
    medium: [
      q("What is the currency of Japan?", ["Won", "Yuan", "Yen", "Rupee"], 2, "Japan uses the yen."),
      q("Where is the United Nations headquarters?", ["New York City", "London", "Rome", "Tokyo"], 0, "The UN headquarters is in New York City."),
      q("Which organisation is India's national space agency?", ["ISRO", "RBI", "SEBI", "FSSAI"], 0, "ISRO leads India's space programme.")
    ],
    hard: [
      q("Which element has the chemical symbol W?", ["Tungsten", "Tin", "Titanium", "Tantalum"], 0, "W is the chemical symbol for tungsten."),
      q("Which strait separates Asia and North America?", ["Bering Strait", "Gibraltar", "Malacca", "Dover"], 0, "The Bering Strait separates Russia and Alaska."),
      q("Which organisation publishes the Human Development Report?", ["UNDP", "WHO", "WTO", "UNICEF"], 0, "The United Nations Development Programme publishes the report.")
    ]
  },
  english: {
    easy: [
      q("What is the plural of 'child'?", ["Childs", "Children", "Childes", "Childrens"], 1, "The plural of child is children."),
      q("Which word is a noun?", ["Quickly", "Beautiful", "Teacher", "Run"], 2, "Teacher names a person."),
      q("Choose the opposite of 'ancient'.", ["Old", "Historic", "Modern", "Past"], 2, "Modern is the opposite of ancient.")
    ],
    medium: [
      q("Choose the correct sentence.", ["She go to college.", "She goes to college.", "She going college.", "She gone college."], 1, "The correct sentence is 'She goes to college.'"),
      q("What is a synonym of 'brief'?", ["Lengthy", "Concise", "Distant", "Confusing"], 1, "Concise means short and clear."),
      q("What is the past tense of 'write'?", ["Writed", "Written", "Wrote", "Writing"], 2, "The simple past tense is wrote.")
    ],
    hard: [
      q("What does 'ambiguous' mean?", ["Having more than one possible meaning", "Easy to measure", "Completely unrelated", "Always correct"], 0, "Ambiguous wording can have more than one interpretation."),
      q("Choose the correct passive voice: 'The team completed the project.'", ["The project completed the team.", "The project was completed by the team.", "The team was completed by the project.", "The project completing the team."], 1, "The object becomes the subject in passive voice."),
      q("Which word means to make something less severe?", ["Aggravate", "Mitigate", "Complicate", "Prolong"], 1, "Mitigate means to make something less severe.")
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
  
const categoryNames = {
  tech: "TECH & CS",
  science: "SCIENCE",
  math: "MATH & LOGIC",
  geography: "GEOGRAPHY",
  history: "HISTORY",
  sports: "SPORTS",
  ai: "AI & MACHINE LEARNING",
  data: "DATA SCIENCE",
  gk: "GENERAL KNOWLEDGE",
  english: "ENGLISH"
};
$("category-label").textContent = categoryNames[state.category] || "QUIZ";
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
  $("result-subtitle").textContent =`You completed the ${state.difficulty} ${categoryNames[state.category] || "Quiz"} challenge.`;
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
