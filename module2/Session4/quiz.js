function checkAnswer() {
    let userAnswer = document.getElementById('answer').value;
    let feedback = document.getElementById('feedback');

    if (userAnswer == 15) {
        feedback.innerHTML = "correct! Well done!";
    } else {
        feedback.innerHTML = "Try again!";
    }
}