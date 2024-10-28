const questions = [
    {
        question: "Какой цвет небо?",
        options: ["Синий", "Зеленый", "Красный", "Желтый"],
        answer: 0  // индекс правильного ответа
    },
    {
        question: "Сколько ног у паука?",
        options: ["6", "8", "4", "10"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.querySelector('.question');
    const optionsContainer = document.querySelector('.options');
    
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    optionsContainer.innerHTML = question.options.map((option, index) => 
        `<label class="option">
            <input type="radio" name="option" value="${index}"> ${option}
        </label>`
    ).join('');
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return alert("Выберите ответ!");

    const isCorrect = parseInt(selectedOption.value) === questions[currentQuestionIndex].answer;
    if (isCorrect) score++;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.querySelector('.quiz-container').innerHTML = `<h2>Вы набрали ${score} из ${questions.length}</h2>`;
}

loadQuestion();