document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        { question: 'Who is the all-time top scorer for FC Barcelona? (full name)', answer: 'lionel messi' },
        { question: 'In which year was FC Barcelona founded?', answer: '1899' },
        { question: "What was the name of FC Barcelona's first stadium?", answer: 'camp de la indústria' },
        { question: "Who scored FC Barcelona's first ever official goal? (full name)", answer: 'walter wild' },
        { question: 'How many Copa del Rey titles has FC Barcelona won, making it a record holder in this competition?', answer: '31' },
        { question: 'In what year did FC Barcelona first wear its famous "blaugrana" striped kit?', answer: '1900' },
        { question: 'Who did FC Barcelona play against in their first ever match?', answer: 'british railway workers' },
        { question: 'And was was the score?', answer: '1-0' },
        { question: 'How many football clubs are in Barcelona?', answer: '2' },
        { question: 'Who is the best fun of Barça?', answer: 'albert punti' },
    ];

    const progressBar = document.getElementById('progressBar');
    const questionContainer = document.getElementById('questionContainer');
    const answerInput = document.getElementById('answerInput');
    const submitBtn = document.getElementById('submitBtn');
    const feedback = document.getElementById('feedback');
    const game = document.getElementById('game');
    let currentQuestion = 0;

    function showQuestion() {
        questionContainer.textContent = questions[currentQuestion].question;
    }

    function showFeedback(message, color) {
        feedback.textContent = message;
        feedback.style.color = color;
        feedback.style.display = 'block';
        game.style.display = 'none';

        setTimeout(function () {
            feedback.style.display = 'none';
            game.style.display = 'block';
        }, 4000);
    }

    function updateProgressBar() {
        const percentage = (currentQuestion / questions.length) * 100;
        progressBar.style.width = percentage + '%';
        progressBar.textContent = percentage + '%';
    }

    submitBtn.addEventListener('click', function () {
        const userAnswer = answerInput.value.trim().toLowerCase();

        if (userAnswer === questions[currentQuestion].answer) {
            currentQuestion++;
            updateProgressBar();
            answerInput.value = '';

            if (currentQuestion < questions.length) {
                showFeedback('CORRECT', 'green');
                setTimeout(function () {
                    showQuestion();
                }, 2000);
            } else {
                showFeedback('CORRECT', 'green');
                setTimeout(function () {
                    location.href = 'quest3.html';
                }, 3000);
            }
        } else {
            showFeedback('TRY AGAIN', 'red');
        }
    });

    showQuestion();
});
