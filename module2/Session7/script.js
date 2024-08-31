let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 3;

function guessNumber() {
    let guess = document.getElementById("guessInput").value;
    let result = document.getElementById("result");
    attempts++;
    
    if (attempts <= maxAttempts) {
        if (guess < randomNumber) {
            result.textContent = `Too low! Attempts: ${attempts}`;
        } else if (guess > randomNumber) {
            result.textContent = `Too high! Attempts: ${attempts}`;
        } else {
            result.textContent = `Correct! You guessed the number in ${attempts} attempts!`;
        }
    } else {
        result.textContent = `Game over! The number was ${randomNumber}. Refresh to play again.`;
    }
}     