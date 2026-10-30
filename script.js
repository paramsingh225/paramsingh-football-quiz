const questions = [ { question: "Who is Paramsingh's favourite midfielder?", options: ["Kevin De Bruyne", "Luka Modric", "Toni Kroos", "Jude Bellingham"], answer: "Luka Modric" },

{
    question: "Who is Paramsingh's favourite attacker?",
    options: ["Lionel Messi", "Neymar Jr", "Cristiano Ronaldo", "Kylian Mbappe"],
    answer: "Cristiano Ronaldo"
},

{
    question: "Who is Paramsingh's favourite defender?",
    options: ["Virgil van Dijk", "Sergio Ramos", "Paolo Maldini", "Pepe"],
    answer: "Sergio Ramos"
},

{
    question: "Who is Paramsingh's favourite goalkeeper?",
    options: ["Manuel Neuer", "Alisson Becker", "Keylor Navas", "Thibaut Courtois"],
    answer: "Keylor Navas"
},

{
    question: "Which is Paramsingh's favourite football club?",
    options: ["Real Madrid", "Manchester United", "AC Milan", "Barcelona"],
    answer: "AC Milan"
}


];

let currentQuestion = 0; let points = 0; let answered = false;

function startQuiz() { document.querySelector(".hero").style.display = "none"; document.getElementById("quiz").style.display = "block";

currentQuestion = 0;
points = 0;

showQuestion();


}

function showQuestion() {

answered = false;

const q = questions[currentQuestion];

document.getElementById("questionNumber").innerText =
    `Question ${currentQuestion + 1} / ${questions.length}`;

document.getElementById("question").innerText = q.question;

document.getElementById("feedback").innerText = "";

document.getElementById("nextButton").style.display = "none";

const optionsDiv = document.getElementById("options");

optionsDiv.innerHTML = "";

q.options.forEach(option => {

    const button = document.createElement("button");

    button.innerText = option;
    button.className = "option";

    button.onclick = () => checkAnswer(option, button);

    optionsDiv.appendChild(button);

});


}

function checkAnswer(selected, button) {

if (answered) return;

answered = true;

const correctAnswer = questions[currentQuestion].answer;

const allButtons = document.querySelectorAll(".option");

allButtons.forEach(btn => {

    btn.disabled = true;

    if (btn.innerText === correctAnswer) {
        btn.classList.add("correct");
    }

});

if (selected === correctAnswer) {

    points++;

    document.getElementById("feedback").innerText =
        "🔥 CORRECT! You know Paramsingh!";

    button.classList.add("correct");

} else {

    document.getElementById("feedback").innerText =
        "❌ WRONG! Correct answer: " + correctAnswer;

    button.classList.add("wrong");

}

document.getElementById("nextButton").style.display = "inline-block";

if (currentQuestion === questions.length - 1) {

    document.getElementById("nextButton").innerText =
        "SEE MY FINAL RESULT 🏆";

}


}

function nextQuestion() {

currentQuestion++;

if (currentQuestion < questions.length) {

    showQuestion();

} else {

    showResult();

}


}

function showResult() {

document.getElementById("quiz").style.display = "none";

const result = document.getElementById("result");

result.style.display = "block";

document.getElementById("score").innerText =
    `YOUR SCORE: ${points} / ${questions.length}`;

let title = "";
let message = "";

if (points === 5) {

    title = "🏆 BEST FRIEND STATUS UNLOCKED!";

    message = "GOAT FRIEND! You know Paramsingh better than anyone. You are officially his BEST FRIEND! ❤️⚽";

} else if (points >= 3) {

    title = "🔥 REAL FOOTBALL FAN!";

    message = "You know quite a lot about Paramsingh, but you still have more to learn!";

} else if (points >= 1) {

    title = "😅 CASUAL FRIEND!";

    message = "Bro, do you even know Paramsingh? Watch more football!";

} else {

    title = "💀 WHO ARE YOU?";

    message = "ZERO POINTS! You clearly don't know Paramsingh. Friendship under investigation!";

}

document.getElementById("resultTitle").innerText = title;

document.getElementById("resultMessage").innerText = message;


}

function restartQuiz() {

document.getElementById("result").style.display = "none";

document.querySelector(".hero").style.display = "block";

currentQuestion = 0;
points = 0;


}