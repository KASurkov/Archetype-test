let questions = [];
let currentQuestionIndex = 0;
let score_orphan = 0;
let score_warrior = 0;
let score_caregiver = 0;
let score_seeker = 0;
let score_destroyer = 0;
let score_lover = 0;
let score_creator = 0;
let score_ruler = 0;
let score_magician = 0;
let score_sage = 0;
let score_fool = 0;
let score_innocent = 0;

// Функция для загрузки вопросов из JSON-файла
async function loadQuestions() {
    try {
        const response = await fetch('Questions.json'); // Загружаем файл questions.json
        if (!response.ok) throw new Error("Не удалось загрузить вопросы");
        
        questions = await response.json(); // Парсим JSON в массив объектов
        loadQuestion(); // Загружаем первый вопрос
    } catch (error) {
        console.error("Ошибка загрузки вопросов:", error);
    }
}

function loadQuestion() {
    const questionElement = document.querySelector('.question');
    const optionsContainer = document.querySelector('.option');

    const question = questions.question[currentQuestionIndex];
    questionElement.innerText = question;
    optionsContainer.innerHTML = question.map((option, answer) => 
        `<label class="option">
            <input type="radio" name="option" value="${answer}"> ${option}
        </label>`
    ).join('');
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return alert("Выберите ответ!");

    const isOrphan = questions.type[currentQuestionIndex].split(" ")[1] === "orphan";
    const isWarrior = questions.type[currentQuestionIndex].split(" ")[1] === "warrior";
    const isCaregiver = questions.type[currentQuestionIndex].split(" ")[1] === "caregiver";
    const isSeeker = questions.type[currentQuestionIndex].split(" ")[1] === "seeker";
    const isDestroyer = questions.type[currentQuestionIndex].split(" ")[1] === "destroyer";
    const isLover = questions.type[currentQuestionIndex].split(" ")[1] === "lover";
    const isCreator = questions.type[currentQuestionIndex].split(" ")[1] === "creator";
    const isRuler = questions.type[currentQuestionIndex].split(" ")[1] === "ruler";
    const isMagician = questions.type[currentQuestionIndex].split(" ")[1] === "magician";
    const isSage = questions.type[currentQuestionIndex].split(" ")[1] === "sage";
    const isFool = questions.type[currentQuestionIndex].split(" ")[1] === "fool";
    const isInnocent = questions.type[currentQuestionIndex].split(" ")[1] === "innocent";

    if (isOrphan) score_orphan += selectedOption.value;
    if (isWarrior) score_warrior += selectedOption.value;
    if (isCaregiver) score_caregiver += selectedOption.value;
    if (isSeeker) score_seeker += selectedOption.value;
    if (isDestroyer) score_destroyer += selectedOption.value;
    if (isLover) score_lover += selectedOption.value;
    if (isCreator) score_creator += selectedOption.value;
    if (isRuler) score_ruler += selectedOption.value;
    if (isMagician) score_magician += selectedOption.value;
    if (isSage) score_sage += selectedOption.value;
    if (isFool) score_fool += selectedOption.value;
    if (isInnocent) score_innocent += selectedOption.value;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.question.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.chart-container').style.display = 'block';

    const data = {
        labels: ['Сирота', 'Воин', 'Опекун', 'Искатель', 'Разрушитель', 'Влюбленный', 'Созидатель', 'Правитель', 'Маг', 'Мудрец', 'Дурак', 'Невинный'],
        datasets: [{
            label: 'Результаты теста',
            data: [score_orphan, score_warrior, score_caregiver, score_seeker, score_destroyer, score_lover, score_creator, score_ruler, score_magician, score_sage, score_fool, score_innocent],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 30
                }
            }
        }
    };

    const ctx = document.getElementById('resultsChart').getContext('2d');
    new Chart(ctx, config);
}

// Инициализация загрузки вопросов
loadQuestions();
