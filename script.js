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
      q("What is 12 × 8?", ["86", "96", "108", "88"], 1, "12 multiplied by 8 equals 96."),
      q("What is 25% of 200?", ["25", "40", "50", "75"], 2, "One quarter of 200 is 50."),
      q("How many sides does a hexagon have?", ["5", "6", "7", "8"], 1, "A hexagon has six sides."),
      q("What is the value of 9²?", ["18", "72", "81", "99"], 2, "9 squared means 9 × 9 = 81."),
      q("Which is an even number?", ["17", "23", "31", "42"], 3, "42 is divisible by 2."),
      q("What is 144 ÷ 12?", ["10", "11", "12", "14"], 2, "144 divided by 12 equals 12.")
    ],
    medium: [
      q("Solve: 3x + 5 = 20.", ["x = 3", "x = 5", "x = 7", "x = 15"], 1, "Subtract 5, then divide 15 by 3; x = 5."),
      q("What is the area of a triangle with base 10 cm and height 6 cm?", ["16 cm²", "30 cm²", "60 cm²", "32 cm²"], 1, "Area = ½ × base × height = 30 cm²."),
      q("What is the mean of 4, 6, 8 and 10?", ["6", "7", "8", "9"], 1, "Their sum is 28; 28 ÷ 4 = 7."),
      q("What is √169?", ["11", "12", "13", "14"], 2, "13 × 13 = 169."),
      q("A fair die is rolled. What is the probability of getting a 6?", ["1/2", "1/3", "1/6", "1/12"], 2, "One of six equally likely outcomes is a 6."),
      q("What is the slope between (0, 1) and (2, 5)?", ["1", "2", "3", "4"], 1, "Slope = (5 − 1) ÷ (2 − 0) = 2.")
    ],
    hard: [
      q("What is the derivative of x² with respect to x?", ["x", "2x", "x²", "2"], 1, "By the power rule, d(x²)/dx = 2x."),
      q("What is the determinant of [[2, 1], [3, 4]]?", ["5", "8", "11", "−5"], 0, "The determinant is (2 × 4) − (1 × 3) = 5."),
      q("If log₁₀( x ) = 2, what is x?", ["10", "20", "100", "1000"], 2, "A base-10 logarithm of 2 means 10² = 100."),
      q("What is the sum of the first 10 positive integers?", ["45", "50", "55", "100"], 2, "The sum is n(n + 1)/2 = 10 × 11 / 2 = 55."),
      q("For a quadratic ax² + bx + c, what is the discriminant?", ["b² − 4ac", "b² + 4ac", "a² − 4bc", "4ac − b"], 0, "The discriminant is b² − 4ac."),
      q("What is the integral of 2x with respect to x?", ["x + C", "x² + C", "2x² + C", "2 + C"], 1, "The antiderivative of 2x is x² + C.")
    ]
  },
  geography: {
    easy: [
      q("What is the capital of Japan?", ["Seoul", "Tokyo", "Beijing", "Bangkok"], 1, "Tokyo is the capital of Japan."),
      q("Which is the largest ocean on Earth?", ["Atlantic", "Indian", "Arctic", "Pacific"], 3, "The Pacific Ocean is the largest."),
      q("On which continent is Egypt mostly located?", ["Asia", "Africa", "Europe", "South America"], 1, "Most of Egypt lies in northeastern Africa."),
      q("Which river flows through London?", ["Seine", "Thames", "Danube", "Rhine"], 1, "The River Thames flows through London."),
      q("What is the capital of India?", ["Mumbai", "New Delhi", "Kolkata", "Jaipur"], 1, "New Delhi is India's capital."),
      q("Which country is famous for the city of Rio de Janeiro?", ["Brazil", "Spain", "Mexico", "Portugal"], 0, "Rio de Janeiro is a major city in Brazil.")
    ],
    medium: [
      q("Which mountain range traditionally separates Europe and Asia?", ["Andes", "Alps", "Ural Mountains", "Himalayas"], 2, "The Ural Mountains are a conventional boundary between Europe and Asia."),
      q("Which country has the most natural lakes?", ["Canada", "Australia", "Egypt", "Japan"], 0, "Canada has a very large number of natural lakes."),
      q("The Equator passes through which continent?", ["Europe", "Antarctica", "South America", "Australia only"], 2, "The Equator crosses northern South America."),
      q("Which Indian state is known as the Land of Five Rivers historically?", ["Punjab", "Kerala", "Assam", "Goa"], 0, "Punjab's name is associated with five rivers."),
      q("What is the world's largest hot desert?", ["Gobi", "Sahara", "Thar", "Kalahari"], 1, "The Sahara is the largest hot desert."),
      q("Which line is at 0° longitude?", ["Equator", "Tropic of Cancer", "Prime Meridian", "International Date Line"], 2, "The Prime Meridian defines 0° longitude.")
    ],
    hard: [
      q("Which strait connects the Persian Gulf with the Gulf of Oman?", ["Malacca Strait", "Strait of Hormuz", "Bering Strait", "Gibraltar Strait"], 1, "The Strait of Hormuz is the narrow exit from the Persian Gulf."),
      q("Which is the deepest known oceanic trench?", ["Java Trench", "Puerto Rico Trench", "Mariana Trench", "Tonga Trench"], 2, "The Mariana Trench contains the deepest known point in the ocean."),
      q("Which African country was formerly known as Abyssinia?", ["Ethiopia", "Ghana", "Namibia", "Tunisia"], 0, "Abyssinia is a historical name for Ethiopia."),
      q("Which river carries the greatest average discharge?", ["Nile", "Amazon", "Danube", "Mekong"], 1, "The Amazon has the greatest average river discharge."),
      q("Which sea has no land coastline and is defined by ocean currents?", ["Baltic Sea", "Sargasso Sea", "Red Sea", "Black Sea"], 1, "The Sargasso Sea is bounded by currents in the North Atlantic."),
      q("Which country contains the region of Transylvania?", ["Romania", "Poland", "Greece", "Belgium"], 0, "Transylvania is a historical region of Romania.")
    ]
  },
  history: {
    easy: [
      q("Who was the first Prime Minister of independent India?", ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"], 1, "Jawaharlal Nehru became India's first Prime Minister in 1947."),
      q("The Taj Mahal was built by which Mughal emperor?", ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"], 2, "Shah Jahan commissioned the Taj Mahal."),
      q("In which year did World War II end?", ["1918", "1939", "1945", "1950"], 2, "World War II ended in 1945."),
      q("Which ancient civilization built the pyramids at Giza?", ["Roman", "Egyptian", "Mayan", "Indus Valley"], 1, "The pyramids at Giza were built in ancient Egypt."),
      q("Who is widely associated with India's non-violent independence movement?", ["Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh", "Ashoka"], 0, "Mahatma Gandhi became a leading figure in non-violent resistance."),
      q("The Olympic Games originated in ancient which country?", ["Italy", "Greece", "China", "Egypt"], 1, "The ancient Olympic Games began in Greece.")
    ],
    medium: [
      q("In which year did the French Revolution begin?", ["1776", "1789", "1815", "1848"], 1, "The French Revolution began in 1789."),
      q("Who was the first emperor of the Maurya Empire?", ["Ashoka", "Chandragupta Maurya", "Harsha", "Kanishka"], 1, "Chandragupta Maurya founded the Maurya Empire."),
      q("Which document was adopted in the United States in 1776?", ["Magna Carta", "Declaration of Independence", "Bill of Rights", "Constitution"], 1, "The Declaration of Independence was adopted in 1776."),
      q("Who led the Salt March in 1930?", ["Jawaharlal Nehru", "Mahatma Gandhi", "B. R. Ambedkar", "Bal Gangadhar Tilak"], 1, "Gandhi led the Salt March to protest the British salt tax."),
      q("Which civilization developed cuneiform writing?", ["Sumerians", "Vikings", "Aztecs", "Incas"], 0, "Cuneiform was developed by the Sumerians in Mesopotamia."),
      q("The Renaissance began in which European country?", ["Italy", "Norway", "Russia", "Ireland"], 0, "The Renaissance began in Italy before spreading through Europe.")
    ],
    hard: [
      q("Which 1648 settlement is associated with the modern state-sovereignty principle in Europe?", ["Treaty of Versailles", "Peace of Westphalia", "Congress of Vienna", "Treaty of Utrecht"], 1, "The Peace of Westphalia ended the Thirty Years' War in 1648."),
      q("Who was the founder of the Mughal Empire in India?", ["Akbar", "Babur", "Humayun", "Sher Shah Suri"], 1, "Babur established Mughal rule after the First Battle of Panipat in 1526."),
      q("Which empire built the road network known as the Royal Road in ancient Persia?", ["Achaemenid Persian Empire", "Ottoman Empire", "Mali Empire", "Byzantine Empire"], 0, "The Achaemenid rulers developed the Royal Road across their empire."),
      q("The Meiji Restoration began in which year?", ["1603", "1750", "1868", "1912"], 2, "The Meiji Restoration began in 1868 and transformed Japan's government."),
      q("Which treaty formally ended the state of war between Germany and the Allied Powers after World War I?", ["Treaty of Versailles", "Treaty of Tordesillas", "Treaty of Paris 1763", "Treaty of Ghent"], 0, "The Treaty of Versailles was signed in 1919."),
      q("Which ancient Indian text is traditionally attributed to Kautilya?", ["Arthashastra", "Rajatarangini", "Indica", "Mudrarakshasa"], 0, "The Arthashastra is traditionally attributed to Kautilya, also called Chanakya.")
    ]
  },
  sports: {
    easy: [
      q("How many players from one team are on the field in a standard football (soccer) match?", ["9", "10", "11", "12"], 2, "A football team fields 11 players, including the goalkeeper."),
      q("In cricket, how many runs is a boundary worth if the ball crosses the rope after bouncing?", ["2", "3", "4", "6"], 2, "A ball reaching the boundary after bouncing scores four runs."),
      q("Which sport uses a shuttlecock?", ["Tennis", "Badminton", "Squash", "Table tennis"], 1, "Badminton is played with a shuttlecock."),
      q("How many rings are on the Olympic symbol?", ["4", "5", "6", "7"], 1, "The Olympic symbol contains five interlaced rings."),
      q("Which sport is played at Wimbledon?", ["Golf", "Tennis", "Rugby", "Hockey"], 1, "Wimbledon is a major tennis tournament."),
      q("In basketball, how many points is a free throw worth?", ["1", "2", "3", "4"], 0, "A successful free throw is worth one point.")
    ],
    medium: [
      q("How many legal balls are in a standard over in cricket?", ["4", "5", "6", "8"], 2, "A standard over consists of six legal deliveries."),
      q("What is the maximum score with one dart in a standard darts board?", ["20", "50", "60", "100"], 2, "Triple 20 scores 60 points with one dart."),
      q("In tennis, what score comes after deuce when a player wins the next point?", ["Game", "Advantage", "Set", "Love"], 1, "Winning a point at deuce gives that player advantage."),
      q("How long is a standard Olympic swimming pool?", ["25 metres", "50 metres", "75 metres", "100 metres"], 1, "An Olympic-size pool is 50 metres long."),
      q("Which chess piece moves in an L-shape?", ["Bishop", "Rook", "Knight", "Queen"], 2, "The knight moves two squares in one direction and one perpendicular."),
      q("In volleyball, how many players per team are on court in indoor play?", ["5", "6", "7", "8"], 1, "Indoor volleyball teams have six players on court.")
    ],
    hard: [
      q("In Formula One, what does a blue flag usually indicate to a driver being lapped?", ["Pit immediately", "A faster car is approaching to pass", "The race is stopped", "The driver has won"], 1, "A blue flag warns that a faster car is about to lap or pass."),
      q("Which country won the first men's FIFA World Cup in 1930?", ["Brazil", "Italy", "Uruguay", "Argentina"], 2, "Uruguay hosted and won the inaugural tournament."),
      q("In baseball, how many strikes normally make a batter out?", ["Two", "Three", "Four", "Five"], 1, "A batter is normally out after three strikes."),
      q("Which Grand Slam tennis tournament is played on clay courts?", ["Australian Open", "Wimbledon", "US Open", "French Open"], 3, "The French Open is played on clay courts."),
      q("In rugby union, how many points is a try worth under current standard scoring?", ["3", "5", "6", "7"], 1, "A try is worth five points; a conversion is separate."),
      q("What is the standard marathon distance?", ["40 km", "42.195 km", "45 km", "50 km"], 1, "The official marathon distance is 42.195 kilometres.")
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
  $("category-label").textContent = state.category === "tech" ? "TECH & CS" : state.category === "science" ? "SCIENCE" : state.category === "math" ? "MATH & LOGIC" : state.category === "geography" ? "GEOGRAPHY" : state.category === "history" ? "HISTORY" : state.category === "sports" ? "SPORTS";
  if (state.category === "mixed") {
    state.questions = shuffle(Object.keys(questionBank).filter(key => key !== "mixed").flatMap(key => questionBank[key][state.difficulty])).slice(0, 10);
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
  $("result-subtitle").textContent = `You completed the ${state.difficulty} ${state.category === "tech" ? "Tech & CS" : state.category === "science" ? "Science" : state.category === "math" ? "Math & Logic" : state.category === "geography" ? "Geography" : state.category === "history" ? "History" : state.category === "sports" ? "Sports" : "Mixed Bag"} challenge.`;
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
