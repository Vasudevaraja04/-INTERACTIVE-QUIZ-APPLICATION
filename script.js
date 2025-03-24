const questions = [
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Central Program Unit", "Computer Processing Unit", "Central Performance Unit"], answer: 0 },
    { question: "Which of the following is a programming language?", options: ["HTML", "CSS", "Python", "HTTP"], answer: 2 },
    { question: "What is the main function of an operating system?", options: ["Word Processing", "Managing Hardware and Software", "Browsing the Internet", "Creating Spreadsheets"], answer: 1 },
    { question: "Which company developed the Windows operating system?", options: ["Apple", "IBM", "Microsoft", "Google"], answer: 2 },
    { question: "What does RAM stand for?", options: ["Random Access Memory", "Read-Only Memory", "Rapid Access Module", "Run-time Allocation Memory"], answer: 0 },
    { question: "Which of the following is not an input device?", options: ["Keyboard", "Monitor", "Mouse", "Scanner"], answer: 1 },
    { question: "What is the full form of HTML?", options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Hyper Transfer Markup Language", "Hyperlink and Text Management Language"], answer: 0 },
    { question: "Which of the following storage devices has no moving parts?", options: ["HDD", "SSD", "CD-ROM", "Floppy Disk"], answer: 1 },
    { question: "What does IP stand for in networking?", options: ["Internet Protocol", "Internal Process", "Input Procedure", "Information Path"], answer: 0 },
    { question: "Which of these is an example of open-source software?", options: ["Windows 10", "Adobe Photoshop", "Linux", "Microsoft Office"], answer: 2 }
];

let currentQuestionIndex = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next");

startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    quizContainer.style.display = "block";
    loadQuestion();
});

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsElement.appendChild(button);
    });
    nextButton.style.display = "none";
}

function selectAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedIndex === correctAnswer) {
        score++;
    }
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = `<h2>Final Score: ${score}/${questions.length}</h2>`;
        nextButton.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    quizContainer.style.display = "none";
    nextButton.addEventListener("click", nextQuestion);
});
