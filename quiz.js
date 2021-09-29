const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector(".btn-check");
const output = document.querySelector(".result");

const correctAnswers = ["B", "C", "B", "A", "B"];

function calculateScore() {
    var score = 0;
    var index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {

        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "your score is " + score + "/5";


}

submitButton.addEventListener("click", calculateScore);