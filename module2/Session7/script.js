let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); // For debugging purposes

function guessNumber() {
    let guess = document.getElementById("guessInput").ariaValueMax;
    let result = document.getElementById("result");
    
    if (guess < randomNumber) {
        result.textContent = "Too low!";
    } else if (guess > randomNumber) {
        result.textContent = "Too high!";
    } else {
        result.textContent = "Correct! Youguessed the number!";
    }
}