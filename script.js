// Lab 4 – Prompt Quizzer – A Quiz Game

// 1. Quiz Questions Array
// Each question is an object with "question" and "answer"
var quizQuestions = [
    {
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language"
    },
    {
        question: "Which tag is used to link an external CSS file? (just write the tag name, e.g., link)",
        answer: "link"
    },
    {
        question: "Which JavaScript method is used to show a message box? (alert / print / show)",
        answer: "alert"
    },
    {
        question: "In CSS, which property is used to change the text color?",
        answer: "color"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript that can change? (var / const / class)",
        answer: "var"
    }
];

// 2. Function to Run the Quiz
function runQuiz() {
    // 3. Score Initialization
    var score = 0;

    alert("Welcome to Prompt Quizzer!\nYou will be asked " + quizQuestions.length + " questions.");

    // 4. Loop Through Questions
    for (var i = 0; i < quizQuestions.length; i++) {

        // 5. Prompt for User Input
        var userInput = prompt("Q" + (i + 1) + ": " + quizQuestions[i].question);

        // If user clicks Cancel, stop the quiz
        if (userInput === null) {
            alert("You cancelled the quiz.");
            break;
        }

        // 6. Normalize the Input (lowercase + trim)
        var normalizedInput = userInput.toLowerCase().trim();
        var correctAnswer = quizQuestions[i].answer.toLowerCase().trim();

        // 7. Check the Answer
        if (normalizedInput === correctAnswer) {
            score = score + 1;
            // 8. Provide Immediate Feedback
            alert("Correct! ✅");
        } else {
            alert("Wrong ❌\nCorrect answer: " + quizQuestions[i].answer);
        }
    }

    // 9. Display the Final Score
    alert("Quiz finished!\nYour score: " + score + " out of " + quizQuestions.length);
}

// Optional: if you want quiz to start automatically when page opens,
// uncomment the line below:
// runQuiz();
