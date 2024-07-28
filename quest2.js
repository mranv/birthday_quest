document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      question: "Who is the all-time top scorer for Real Madrid? (full name)",
      answer: "cristiano ronaldo",
    },
    { question: "In which year was Real Madrid founded?", answer: "1902" },
    {
      question: "What was the name of Real Madrid's first stadium?",
      answer: "campo de o'donnell",
    },
    {
      question: "Who was Real Madrid's first president? (full name)",
      answer: "juan padrós rubió",
    },
    {
      question: "How many UEFA Champions League/European Cup titles has Real Madrid won?",
      answer: "14",
    },
    {
      question: "In what year did Real Madrid first wear its famous all-white kit?",
      answer: "1902",
    },
    {
      question: "Who did Real Madrid play against in their first ever official match?",
      answer: "barcelona fc",
    },
    { question: "What was the score of Real Madrid's first official match?", answer: "3-1" },
    { question: "How many professional football clubs are in Madrid?", answer: "3" },
    { question: "Who is the biggest fan of Real Madrid?", answer: "prakriti tiwari" },
  ];

  const progressBar = document.getElementById("progressBar");
  const questionContainer = document.getElementById("questionContainer");
  const answerInput = document.getElementById("answerInput");
  const submitBtn = document.getElementById("submitBtn");
  const feedback = document.getElementById("feedback");
  const game = document.getElementById("game");
  let currentQuestion = 0;

  function showQuestion() {
    questionContainer.textContent = questions[currentQuestion].question;
  }

  function showFeedback(message, color) {
    feedback.textContent = message;
    feedback.style.color = color;
    feedback.style.display = "block";
    game.style.display = "none";

    setTimeout(function () {
      feedback.style.display = "none";
      game.style.display = "block";
    }, 2000);
  }

  function updateProgressBar() {
    const percentage = (currentQuestion / questions.length) * 100;
    progressBar.style.width = percentage + "%";
    progressBar.style.color = "white";
    progressBar.textContent = percentage + "%";
  }

  submitBtn.addEventListener("click", function () {
    const userAnswer = answerInput.value.trim().toLowerCase();

    if (userAnswer === questions[currentQuestion].answer) {
      currentQuestion++;
      updateProgressBar();
      answerInput.value = "";

      if (currentQuestion < questions.length) {
        showFeedback("CORRECT", "green");
        setTimeout(function () {
          showQuestion();
        }, 2000);
      } else {
        showFeedback("CORRECT", "green");
        setTimeout(function () {
          location.href = "quest3.html";
        }, 1000);
      }
    } else {
      showFeedback("TRY AGAIN", "red");
    }
  });

  showQuestion();
});
