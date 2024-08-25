function submitQuiz() {
    let score = "0";

    let question1 = document.querySelector('input[name="question1"]:checked').value;
    if (question1 == "10") {
        score++;
    }

    let question2 = document.querySelector('input[name="question2"]:checked').value;
    if (question2 == "20") {
        score++;
    }

    let finalFeedback = document.getElementById('final-feedback');
    if (score == "2") {
        finalFeedback.innerHTML = "You got all the answers correct! Great job!";
    } else {
        finalFeedback.innerHTML = "You got " + score +" out of 2 correct. Keep practicing!";
    }
}