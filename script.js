const questions = [
    {
        question: "Какой цвет небо?",
        options: ["Синий", "Зеленый", "Красный", "Желтый"],
        answer: 0
    },
    {
        question: "Сколько ног у паука?",
        options: ["6", "8", "4", "10"],
        answer: 1
    },
    // Можно добавить больше вопросов
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
    // Скрываем контейнер с тестом и показываем контейнер для графика
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.chart-container').style.display = 'block';

    // Данные для диаграммы
    const data = {
        labels: questions.map((_, index) => `Вопрос ${index + 1}`),
        datasets: [{
            label: 'Результаты теста',
            data: questions.map((_, index) => (index < score ? 1 : 0)), // 1 если ответ верный, иначе 0
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    // Настройки диаграммы
    const config = {
        type: 'radar',
        data: data,
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 1  // максимальное значение (верный ответ)
                }
            }
        }
    };

    // Создаем диаграмму
    const ctx = document.getElementById('resultsChart').getContext('2d');
    new Chart(ctx, config);
}

loadQuestion();