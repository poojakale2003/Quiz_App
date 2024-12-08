const questions = [
  {
    id: 1,
    question: "What is the purpose of the <!DOCTYPE> declaration in HTML?",
    options: [
      "To define the document type and version of HTML.",
      "To include external stylesheets.",
      "To validate the document against W3C standards.",
      "To create a responsive design.",
    ],
    correctAnswer: "To define the document type and version of HTML.",
    category: "HTML",
  },
  {
    id: 2,
    question: "What is the main purpose of semantic HTML elements?",
    options: [
      "To style elements with CSS.",
      "To define the structure and meaning of the content.",
      "To create dynamic behavior with JavaScript.",
      "To add metadata to the webpage.",
    ],
    correctAnswer: "To define the structure and meaning of the content.",
    category: "HTML",
  },
  {
    id: 3,
    question: "Which HTML tag is used to display a hyperlink?",
    options: ["<a>", "<link>", "<url>", "<href>"],
    correctAnswer: "<a>",
    category: "HTML",
  },
  {
    id: 4,
    question: "What does the 'alt' attribute in the <img> tag specify?",
    options: [
      "The image alignment on the webpage.",
      "An alternate text description for the image.",
      "The source of the image file.",
      "The dimensions of the image.",
    ],
    correctAnswer: "An alternate text description for the image.",
    category: "HTML",
  },
  {
    id: 5,
    question: "Which tag is used to define a table row in HTML?",
    options: ["<row>", "<td>", "<tr>", "<th>"],
    correctAnswer: "<tr>",
    category: "HTML",
  },
  {
    id: 6,
    question: "What is the default display property of the <div> element?",
    options: ["inline", "block", "inline-block", "flex"],
    correctAnswer: "block",
    category: "HTML",
  },
  {
    id: 7,
    question:
      "Which tag is used to include JavaScript code in an HTML document?",
    options: ["<script>", "<code>", "<js>", "<javascript>"],
    correctAnswer: "<script>",
    category: "HTML",
  },
  {
    id: 8,
    question: "How can you create an ordered list in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctAnswer: "<ol>",
    category: "HTML",
  },
  {
    id: 9,
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<hr>"],
    correctAnswer: "<br>",
    category: "HTML",
  },
  {
    id: 10,
    question:
      "Which attribute is used to specify the language of the document in the <html> tag?",
    options: ["lang", "language", "locale", "xml:lang"],
    correctAnswer: "lang",
    category: "HTML",
  },
  {
    id: 1,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style System",
      "Creative Styling Syntax",
      "Cascading Sheet Styles",
    ],
    correctAnswer: "Cascading Style Sheets",
    category: "CSS",
  },
  {
    id: 2,
    question:
      "Which property is used to change the background color of an element?",
    options: ["color", "bgcolor", "background-color", "background"],
    correctAnswer: "background-color",
    category: "CSS",
  },
  {
    id: 3,
    question: "What is the correct syntax to make all <p> elements bold?",
    options: [
      "p {font-weight: bold;}",
      "p {text-bold: true;}",
      "p {bold: true;}",
      "p {style: bold;}",
    ],
    correctAnswer: "p {font-weight: bold;}",
    category: "CSS",
  },
  {
    id: 4,
    question: "Which property is used to control the text size in CSS?",
    options: ["font-size", "text-size", "size", "text-style"],
    correctAnswer: "font-size",
    category: "CSS",
  },
  {
    id: 5,
    question: "What is the default positioning of elements in CSS?",
    options: ["static", "relative", "absolute", "fixed"],
    correctAnswer: "static",
    category: "CSS",
  },
  {
    id: 6,
    question:
      "Which CSS property is used to make an element invisible without removing it from the document flow?",
    options: [
      "visibility: hidden;",
      "display: none;",
      "opacity: 0;",
      "hidden: true;",
    ],
    correctAnswer: "visibility: hidden;",
    category: "CSS",
  },
  {
    id: 7,
    question: "What is the correct syntax for a CSS comment?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "** This is a comment **",
    ],
    correctAnswer: "/* This is a comment */",
    category: "CSS",
  },
  {
    id: 8,
    question:
      "Which property is used to add space between the content and the border of an element?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correctAnswer: "padding",
    category: "CSS",
  },
  {
    id: 9,
    question: "Which CSS property is used to make text uppercase?",
    options: [
      "text-style: uppercase;",
      "font-case: uppercase;",
      "text-transform: uppercase;",
      "text-case: uppercase;",
    ],
    correctAnswer: "text-transform: uppercase;",
    category: "CSS",
  },
  {
    id: 10,
    question: "How can you apply a CSS rule to a class?",
    options: [
      "By using a dot (.) before the class name.",
      "By using a hash (#) before the class name.",
      "By using the element name directly.",
      "By using the @class directive.",
    ],
    correctAnswer: "By using a dot (.) before the class name.",
    category: "CSS",
  },
  {
    id: 1,
    question:
      "What is the correct syntax for referring to an external JavaScript file?",
    options: [
      "<script href='filename.js'></script>",
      "<script src='filename.js'></script>",
      "<script name='filename.js'></script>",
      "<script file='filename.js'></script>",
    ],
    correctAnswer: "<script src='filename.js'></script>",
    category: "Javascript",
  },
  {
    id: 2,
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "def myFunction() {}",
      "func myFunction() {}",
      "function:myFunction() {}",
    ],
    correctAnswer: "function myFunction() {}",
    category: "Javascript",
  },
  {
    id: 3,
    question: "How do you call a function named 'myFunction'?",
    options: [
      "call myFunction();",
      "myFunction();",
      "call function myFunction();",
      "execute myFunction();",
    ],
    correctAnswer: "myFunction();",
    category: "Javascript",
  },
  {
    id: 4,
    question: "What is the output of: console.log(typeof null);?",
    options: ["'object'", "'null'", "'undefined'", "'boolean'"],
    correctAnswer: "'object'",
    category: "Javascript",
  },
  {
    id: 5,
    question: "Which of the following is not a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Float"],
    correctAnswer: "Float",
    category: "Javascript",
  },
  {
    id: 6,
    question: "What is the result of 2 + '2' in JavaScript?",
    options: ["4", "'22'", "NaN", "undefined"],
    correctAnswer: "'22'",
    category: "Javascript",
  },
  {
    id: 7,
    question: "How do you declare a variable in JavaScript?",
    options: ["var name;", "let name;", "const name;", "All of the above"],
    correctAnswer: "All of the above",
    category: "Javascript",
  },
  {
    id: 8,
    question:
      "Which method is used to convert a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.objectify()",
    ],
    correctAnswer: "JSON.parse()",
    category: "Javascript",
  },
  {
    id: 9,
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "'==' compares values only, while '===' compares values and types.",
      "'===' compares values only, while '==' compares values and types.",
      "Both compare values and types.",
      "There is no difference.",
    ],
    correctAnswer:
      "'==' compares values only, while '===' compares values and types.",
    category: "Javascript",
  },
  {
    id: 10,
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "To refer to the current object.",
      "To refer to the global object.",
      "To declare a variable.",
      "To call a function.",
    ],
    correctAnswer: "To refer to the current object.",
    category: "Javascript",
  },
  {
    id: 1,
    question: "What is React primarily used for?",
    options: [
      "Building server-side applications",
      "Building user interfaces",
      "Creating databases",
      "Managing network requests",
    ],
    correctAnswer: "Building user interfaces",
    category: 'React'
  },
  {
    id: 2,
    question: "What is a component in React?",
    options: [
      "A reusable piece of UI",
      "A type of database",
      "A CSS style sheet",
      "A server-side element",
    ],
    correctAnswer: "A reusable piece of UI",
    category: 'React'
  },
  {
    id: 3,
    question: "What is the use of the 'useState' hook in React?",
    options: [
      "To handle state in class components",
      "To handle state in functional components",
      "To make API calls",
      "To navigate between routes",
    ],
    correctAnswer: "To handle state in functional components",
    category: 'React'
  },
  {
    id: 4,
    question:
      "Which method is used to update the state in a React class component?",
    options: ["updateState()", "setState()", "changeState()", "modifyState()"],
    correctAnswer: "setState()",
    category: 'React'
  },
  {
    id: 5,
    question: "What is JSX in React?",
    options: [
      "A syntax extension for JavaScript",
      "A library for managing state",
      "A CSS preprocessor",
      "A tool for testing React applications",
    ],
    correctAnswer: "A syntax extension for JavaScript",
    category: 'React'
  },
  {
    id: 6,
    question: "What is the Virtual DOM in React?",
    options: [
      "A copy of the actual DOM that React uses to optimize updates",
      "A database for storing UI data",
      "A plugin for managing components",
      "A method to directly manipulate the real DOM",
    ],
    correctAnswer:
      "A copy of the actual DOM that React uses to optimize updates",
      category: 'React'
  },
  {
    id: 7,
    question: "What is the purpose of 'props' in React?",
    options: [
      "To store and manage state",
      "To pass data from parent to child components",
      "To style components",
      "To fetch data from APIs",
    ],
    correctAnswer: "To pass data from parent to child components",
    category: 'React'
  },
  {
    id: 8,
    question: "What does the 'key' attribute in a list do in React?",
    options: [
      "Identifies unique elements for efficient rendering",
      "Styles the list items",
      "Connects list items to state",
      "Defines the order of list items",
    ],
    correctAnswer: "Identifies unique elements for efficient rendering",
    category: 'React'
  },
  {
    id: 9,
    question: "What is the use of the 'useEffect' hook in React?",
    options: [
      "To manage state in functional components",
      "To perform side effects like fetching data",
      "To create reusable UI components",
      "To handle user input events",
    ],
    correctAnswer: "To perform side effects like fetching data",
    category: 'React'
  },
  {
    id: 10,
    question: "What is the default behavior of React when the state changes?",
    options: [
      "It re-renders the entire application.",
      "It re-renders only the components that rely on the updated state.",
      "It does not re-render any components.",
      "It refreshes the browser window.",
    ],
    correctAnswer:
      "It re-renders only the components that rely on the updated state.",
      category: 'React'
  },
];

let username = "";
let category = "";
let questionCount = 0;
let shuffledQuestions = [];
let timer;
let score = 0;

function getName(event) {
  event.preventDefault(); // Prevent form submission

  username = document.getElementById("name-input").value.trim();
  if (!username) {
    alert("Name is required!");
    return;
  }

  document.getElementById("welcome-note").innerHTML = `<p>Welcome ${username}! You can start the quiz now.</p>`;
  document.getElementById("name-input").value = "";
}

function startQuiz(event) {
  if (!username) {
    alert("Please enter your name first!");
    return;
  }

  category = event.target.value;
  questionCount = 0;
  shuffledQuestions = shuffleArray(questions.filter((q) => q.category === category));

  container.style.backgroundColor = "rgb(8, 60, 145)"; // Example color for the result page
  container.classList.add("hidden");

  document.getElementById("container").innerHTML = `
    <h1>${category}</h1>
    <div class="quiz-header">
      <div id="timer">Time left:5:00</div>
      <div id="score">Score: 0</div>
    </div>
    <div id="question-count">1/10</div>
    <div id="question-container"></div>
    <div id="option-container"></div>
    <button onclick="nextQuestion()">Next</button>
  `;

  displayQuestion();
  startTimer();
}

function displayQuestion() {
  if (questionCount >= shuffledQuestions.length) return endQuiz();

  const currentQuestion = shuffledQuestions[questionCount];
  document.getElementById("question-count").textContent = `${questionCount + 1}/10`;
  document.getElementById("question-container").textContent = currentQuestion.question;

  displayOptions(currentQuestion);
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function displayOptions(question) {
  const optionContainer = document.getElementById("option-container");
  optionContainer.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "option-button";
    button.onclick = () => checkAnswer(button, question.correctAnswer);
    optionContainer.appendChild(button);
  });
}

function checkAnswer(button, correctAnswer) {
  if (button.textContent === correctAnswer) {
    button.style.backgroundColor = "green";
    score++;
    updateScore();
  } else {
    button.style.backgroundColor = "red";
  }

  Array.from(document.getElementsByClassName("option-button")).forEach((btn) => {
    btn.disabled = true;
  });
}

function nextQuestion() {
  if (++questionCount >= shuffledQuestions.length) return endQuiz();

  resetTimer();
  displayQuestion();
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  const currentScore = parseInt(scoreElement.textContent.split(": ")[1]);
  scoreElement.textContent = `Score: ${currentScore + 1}`;
}

let totalTime = 300; 
let quizTimer;

function startTimer() {
  const timerElement = document.getElementById("timer");

  clearInterval(quizTimer);

  quizTimer = setInterval(() => {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;

    timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    totalTime--;

    if (totalTime < 0) {
      clearInterval(quizTimer); 
      handleQuizEnd(); 
    }
  }, 1000);
}


function resetTimer() {
  clearInterval(quizTimer);
  
  startTimer();
}

function endQuiz() {
  clearInterval(quizTimer); // Clear the timer
  showResultPage();
}

function handleQuizEnd() {
  clearInterval(quizTimer); // Clear the timer
  alert("Time's up! The quiz is over.");
  showResultPage();
}

function showResultPage() {
  const container = document.getElementById("container");
  container.style.backgroundColor = "#fff";

 
  const totalQuestions = shuffledQuestions.length;
  const attemptedQuestions = questionCount; 
  const correctAnswers = score; 
  const wrongAnswers = attemptedQuestions - correctAnswers;
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);
  const timeTaken = 300 - totalTime; 


  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  
  container.className = "result-page"; 
  container.innerHTML = ""; 

  // Create and append result content
  const resultHeading = document.createElement("h2");
  resultHeading.textContent = "Quiz Result";


  const statsList = document.createElement("ul");
  statsList.innerHTML = `
    <li><strong>Total Questions:</strong> ${totalQuestions}</li>
    <li><strong>Attempted Questions:</strong> ${attemptedQuestions}</li>
    <li><strong>Correct Answers:</strong> ${correctAnswers}</li>
    <li><strong>Wrong Answers:</strong> ${wrongAnswers}</li>
    <li><strong>Percentage:</strong> ${percentage}%</li>
    <li><strong>Time Taken:</strong> ${formattedTime}</li>
  `;

  const resultMessage = document.createElement("p");
  resultMessage.id = "result-message";
  resultMessage.textContent =
    score > totalQuestions / 2
      ? `Well done, ${username}!`
      : `Better luck next time, ${username}!`;


  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Quiz";
  restartButton.onclick = () => location.reload();

  container.appendChild(resultHeading);
  container.appendChild(resultMessage);
  container.appendChild(statsList);
  container.appendChild(restartButton);
}


function restartQuiz() {
  questionCount = 0;
  score = 0;

  const container = document.getElementById("container");
  container.innerHTML = "";

  displayQuestion();
}
