let questions = [
    {
        "question": "Я воспринимаю информацию без осуждения и оценки.",
        "type": "sage",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Многочисленные изменения в жизни совершенно сбивают меня с толку.",
        "type": "destroyer",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Процесс моего самоисцеления позволяет мне помогать людям в их исцелении.",
        "type": "magician",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Мне случалось подводить других.",
        "type": "destroyer",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я чувствую себя в безопасности.",
        "type": "innocent",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я отбрасываю страх и делаю то, что необходимо.",
        "type": "warrior",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я ставлю потребности других выше своих нужд.",
        "type": "caregiver",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я стараюсь быть верным (-ой) себе в любой ситуации.",
        "type": "creator",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Когда жизнь становится скучной, я предпочитаю устроить себе встряску.",
        "type": "fool",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я нахожу удовлетворение в заботе о других.",
        "type": "caregiver",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Люди считают меня веселым (-ой).",
        "type": "fool",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я чувствую себя сексуальным (-ой).",
        "type": "lover",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я верю, что на самом деле люди не хотят причинять боль друг другу.",
        "type": "innocent",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "В детстве я переживал (-а) насилие или эмоциональную заброшенность.",
        "type": "orphan",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Мне больше нравится отдавать, чем получать.",
        "type": "caregiver",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я согласен (-на) с утверждением: «Лучше любить и потерять любовь, чем никогда не испытать этого чувства».",
        "type": "lover",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я полностью принимаю жизнь.",
        "type": "lover",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я просчитываю на несколько шагов вперед.",
        "type": "sage",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я творец своей жизни.",
        "type": "creator",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я убежден (-а), что есть множество верных точек зрения на один предмет.",
        "type": "sage",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я уже не тот человек, кем считал (-а) себя когда-то.",
        "type": "destroyer",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Жизнь — это нескончаемая череда страданий.",
        "type": "orphan",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Моя эффективность отчасти связана с помощью высших сил.",
        "type": "magician",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Мне проще делать что-то для других, чем для себя.",
        "type": "caregiver",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я нахожу удовлетворение в отношениях.",
        "type": "lover",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Другие обращаются ко мне, чтобы я их направил (-а).",
        "type": "ruler",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я опасаюсь тех, кто обладает властью.",
        "type": "orphan",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я не слишком серьезно отношусь к правилам.",
        "type": "fool",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я люблю помогать людям находить взаимопонимание.",
        "type": "lover",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я чувствую себя брошенным (-ой).",
        "type": "orphan",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Бывает, я достигаю значительных результатов без особых усилий.",
        "type": "creator",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "У меня есть лидерские качества.",
        "type": "ruler",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я стараюсь самосовершенствоваться.",
        "type": "seeker",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я могу рассчитывать, что другие позаботятся обо мне.",
        "type": "innocent",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я предпочитаю руководить.",
        "type": "ruler",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я стараюсь развеять иллюзии и найти за ними истину.",
        "type": "sage",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я верю, что, меняя образ мыслей, я меняю и свою жизнь.",
        "type": "magician",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я развиваю ресурсы, человеческие или природные.",
        "type": "ruler",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я готов (-а) пойти на риск, чтобы отстоять свои убеждения.",
        "type": "warrior",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Если что-то не так, я не могу сидеть сложа руки и наблюдать со стороны, не пытаясь ничего изменить.",
        "type": "warrior",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я стремлюсь к объективности.",
        "type": "sage",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Мое присутствие становится катализатором изменений.",
        "type": "magician",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Мне нравится смешить людей.",
        "type": "fool",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я дисциплинирую себя, чтобы достигать целей.",
        "type": "warrior",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я люблю людей.",
        "type": "lover",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я хорошо вижу способности людей и понимаю, какая задача кому по силам.",
        "type": "ruler",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Для меня очень важно сохранять свою независимость.",
        "type": "seeker",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я верю, что все и всё в мире взаимосвязаны.",
        "type": "magician",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Мир — безопасное место.",
        "type": "innocent",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Меня предавали люди, которым я доверял (-а).",
        "type": "orphan",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я испытываю тревогу.",
        "type": "seeker",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я отпускаю то, что мне уже не подходит.",
        "type": "destroyer",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Мне нравится разряжать обстановку, если люди выглядят слишком серьезно.",
        "type": "fool",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Легкий хаос полезен для души.",
        "type": "fool",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я считаю, что самопожертвование и помощь другим сделали меня лучше.",
        "type": "caregiver",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я ощущаю спокойствие.",
        "type": "sage",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я даю отпор людям, которые ведут себя агрессивно и оскорбляют меня.",
        "type": "warrior",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Мне нравится трансформировать ситуации.",
        "type": "magician",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я убежден (-а), что дисциплина — ключ к успеху во всех сферах жизни.",
        "type": "warrior",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Мне легко испытать вдохновение, я не прикладываю усилий, чтобы найти его.",
        "type": "creator",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я не оправдываю собственных ожиданий.",
        "type": "destroyer",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "У меня есть ощущение, что где-то меня ждет лучший мир.",
        "type": "seeker",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я считаю, что людям, которые встречаются на моем пути, можно доверять.",
        "type": "innocent",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я экспериментирую, превращая свои мечты в реальность.",
        "type": "creator",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я знаю, что мои потребности будут удовлетворены.",
        "type": "innocent",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "У меня такое чувство, будто я вот-вот что-то разрушу.",
        "type": "destroyer",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я стараюсь управлять ситуацией, помня об идее всеобщего блага.",
        "type": "ruler",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Мне тяжело говорить «нет».",
        "type": "caregiver",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "У меня гораздо больше прекрасных идей, чем времени, чтобы претворять их в жизнь.",
        "type": "creator",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Я постоянно ищу место, где солнце ярче, а трава зеленее.",
        "type": "seeker",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Значимые для меня люди подводили меня.",
        "type": "orphan",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    },
    {
        "question": "Поиск для меня так же важен, как и обретение.",
        "type": "seeker",
        "option": ["Это совсем не про меня", "Изредка это про меня", "Иногда это про меня", "Зачастую это про меня", "Это точно про меня"]
    }
    ];
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
    let isOrphan = Boolean(false);
    let isWarrior = Boolean(false);
    let isCaregiver = Boolean(false);
    let isSeeker = Boolean(false);
    let isDestroyer = Boolean(false);
    let isLover = Boolean(false);
    let isCreator = Boolean(false);
    let isRuler = Boolean(false);
    let isMagician = Boolean(false);
    let isSage = Boolean(false);
    let isFool = Boolean(false);
    let isInnocent = Boolean(false);
    
    // Функция для загрузки вопросов из JSON-файла
    async function loadQuestions() {
        try {
            const response = await fetch('Questions.json'); // Загружаем файл Questions.json
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
    
        const question = questions[currentQuestionIndex].question;
        questionElement.innerText = question;
        const options = questions[currentQuestionIndex].option;
        optionsContainer.innerHTML = options.map((option, index) => 
            `<label class="option">
                <input type="radio" name="option" value="${index + 1}"> ${option} <br>
            </label>`
        ).join('');
    }
    
    function nextQuestion() {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (!selectedOption) return alert("Выберите ответ!");
    
        isOrphan = questions[currentQuestionIndex].type === "orphan";
        isWarrior = questions[currentQuestionIndex].type === "warrior";
        isCaregiver = questions[currentQuestionIndex].type === "caregiver";
        isSeeker = questions[currentQuestionIndex].type === "seeker";
        isDestroyer = questions[currentQuestionIndex].type === "destroyer";
        isLover = questions[currentQuestionIndex].type === "lover";
        isCreator = questions[currentQuestionIndex].type === "creator";
        isRuler = questions[currentQuestionIndex].type === "ruler";
        isMagician = questions[currentQuestionIndex].type === "magician";
        isSage = questions[currentQuestionIndex].type === "sage";
        isFool = questions[currentQuestionIndex].type === "fool";
        isInnocent = questions[currentQuestionIndex].type === "innocent";
    
        if (isOrphan) {score_orphan += Number(selectedOption.value); isOrphan=Boolean(false)};
        if (isWarrior) {score_warrior += Number(selectedOption.value); isWarrior=Boolean(false)};
        if (isCaregiver) {score_caregiver += Number(selectedOption.value); isCaregiver=Boolean(false)};
        if (isSeeker) {score_seeker += Number(selectedOption.value); isSeeker=Boolean(false)};
        if (isDestroyer) {score_destroyer += Number(selectedOption.value); isDestroyer=Boolean(false)};
        if (isLover) {score_lover += Number(selectedOption.value); isLover=Boolean(false)};
        if (isCreator) {score_creator += Number(selectedOption.value); isCreator=Boolean(false)};
        if (isRuler) {score_ruler += Number(selectedOption.value); isRuler=Boolean(false)};
        if (isMagician) {score_magician += Number(selectedOption.value); isMagician=Boolean(false)};
        if (isSage) {score_sage += Number(selectedOption.value); isSage=Boolean(false)};
        if (isFool) {score_fool += Number(selectedOption.value); isFool=Boolean(false)};
        if (isInnocent) {score_innocent += Number(selectedOption.value); isInnocent=Boolean(false)};
    
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
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
    loadQuestion();
    