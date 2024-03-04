const quizData = [
  {
    question: "How old is Imran?",
    a: 10,
    b: 20,
    c: 30,
    d: 45,
    correct: "30"
  },

  {
    question: "What is the most used programming language?",
    a: "Javascript",
    b: "java",
    c: "Python",
    d: "C++",
    correct: "Javascript"
  },

  {
    question: "Who is the president of US?",
    a: "Donald Trump",
    b: "Joe Byden",
    c: "Barak Obama",
    d: "Imran",
    correct: "Joe Byden"
  },

  {
    question: "What does stand for HTML?",
    a: "HyperText Markup Language",
    b: "Cascadin style sheet",
    c: "Json",
    d: "Application programming interface",
    correct: "HyperText Markup Language"
  },

  {
    question: "What Year was javacsript launched?",
    a: 1985,
    b: 1971,
    c: 1995,
    d: 1999,
    correct: "1995"
  }
];

const quizContainer = document.querySelector(".quiz-container");
const nextBtn = document.querySelector(".next_btn");
const headerText = document.querySelector(".quiz-header");
const a_text = document.querySelector(".a_text");
const b_text = document.querySelector(".b_text");
const c_text = document.querySelector(".c_text");
const d_text = document.querySelector(".d_text");
const reload_btn = document.querySelector(".reload_btn");
const answerels = document.querySelectorAll(".answer");

let count = 0;
let score = 0;
let answer = false;

nextBtn.addEventListener("click", nxtBtnFunc);

function loadquiz() {
  answerels.forEach((answerel) => {
    answerel.checked = false;
  });

  headerText.innerText = quizData[count].question;
  a_text.innerText = quizData[count].a;
  b_text.innerText = quizData[count].b;
  c_text.innerText = quizData[count].c;
  d_text.innerText = quizData[count].d;
}

function getSelected() {
  let elem;
  for (let i = 0; i < answerels.length; i++) {
    if (answerels[i].checked) {
      elem = answerels[i].nextElementSibling.innerText;
      answer = true;
      break;
    } else {
      answer = false;
    }
  }

  if(elem == quizData[count].correct) {
    score++;
  }

  return answer;
}

function nxtBtnFunc() {
  if (count < quizData.length - 1 && getSelected()) {
    count++;
    loadquiz();
  } else if (!getSelected()) {
    alert("You have to check one event");
  } else if (count >= quizData.length - 1) {
    quizContainer.innerHTML = `<h1 class="score">You answered correctly ${score}</h1><button class="reload-btn" onclick = location.reload()>Reload</button>`;
  }
}

loadquiz();
