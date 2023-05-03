const questions = [
    {
        question: "What is Michael Scott's middle name?",
        choices: ["Thomas", "Gary", "Steve", "No middle name"],
        answer: "Gary"
    },
    {
        question: "What is the name of the company Michael starts?",
        choices: ["Michael Scott Paper Company", "Dunder Mifflin Infinity", "Sabre", "Athlead"],
        answer: "Michael Scott Paper Company",
    },
     {
        question: "What is the name of Michael's improv class friend?",
        choices: ["David Wallace", "Todd Packer", "Jan Levinson", "Billy Merchant"],
        answer: "Billy Merchant",
    },
     {
        question: "What is the name of the company that buys Dunder Mifflin?",
        choices: ["Sabre", "Athlead", "David Wallace Paper Company", "Michael Scott Paper Company"],
        answer: "Sabre",
    },
     {
        question: "What does Jim put in Jell-O?",
        choices: ["Dwight's stapler", "Andy's phone", "Michael's mug", "Pam's keyboard"],
        answer: "Dwight's stapler",
    },
    {
        question: "What is Pam's favorite flavor of yogurt?",
        choices: ["Strawberry", "Blueberry", "Peach", "Raspberry"],
        answer: "Strawberry",
    },
    {
        question: "Which character did not exist in the original British version of 'The Office'?",
        choices: ["Pam Beesly", "Jim Halpert", "Dwight Schrute", "Andy Bernard"],
        answer: "Jim Halpert",
    },
    {
        question: "Which actor played two different characters on the show?",
        choices: ["Rashida Jones", "Ed Helms", "Amy Adams", "BJ Novak"],
        answer: "Amy Adams",
    },
    {
        question: "Which of the following actors improvised now-iconic line 'That's what she said'",
        choices: ["Steve Carell", "Rainn Wilson", "John Krasinski", "Mindy Kaling"],
        answer: "Rainn Wilson",
    },
    {
        question: "Who is the biggest fan of 'The Office'?",
        choices: ["Tania", "Dima", "Albert", "Steve Carell"],
        answer: "Albert",
    },


];

const quizForm = document.getElementById("quizForm");
const questionContainer = document.getElementById("questionContainer");

// Recursive function to generate the quiz form
function generateQuestion(questionIndex) {
    if (questionIndex >= questions.length) {
        // No more questions, exit the function
        return;
    }

    const question = questions[questionIndex];

    // Create the question HTML elements
    const questionDiv = document.createElement("div");
    const questionText = document.createElement("p");
    questionText.textContent = question.question;
    questionDiv.appendChild(questionText);

    // Create the answer HTML elements
    const answerDiv = document.createElement("div");
    question.choices.forEach(choice => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", `q${questionIndex}`);
        radio.setAttribute("value", choice);
        label.appendChild(radio);
        label.appendChild(document.createTextNode(choice));
        answerDiv.appendChild(label);
    });

    // Add the question and answer elements to the form
    questionDiv.appendChild(answerDiv);
    questionContainer.appendChild(questionDiv);

    // Generate the next question
    generateQuestion(questionIndex + 1);
}

// Call the function to generate the quiz form
generateQuestion(0);

// Add event listener to the form submit button
quizForm.addEventListener("submit", event => {
    event.preventDefault();

    // Get all the selected answers
    const answers = [];
    for (let i = 0; i < questions.length; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selectedAnswer) {
            alert(`Please select an answer for question ${i + 1}`);
            return;
        }
        answers.push(selectedAnswer.value);
    }

    // Check if all answers are correct
    const isAllCorrect = answers.every((answer, index) => answer === questions[index].answer);

    // Show feedback to the user
    const feedback = document.createElement("p");

    // Handle result
    if (isAllCorrect) {
        // All answers are correct
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        feedback.style.display = "block";
        quizForm.appendChild(feedback);
        setTimeout(() => {
          window.location.href = "end.html";
        }, 2000);
    } else {
        // Some answers are incorrect
        feedback.textContent = "Some answer(s) is incorrect";
        feedback.style.color = "red";
        feedback.style.display = "block";
        quizForm.appendChild(feedback);

        setTimeout(() => {
            quizForm.reset();
            questionContainer.innerHTML = "";
            feedback.remove();
            generateQuestion(0);
        }, 3000);
    }
});
