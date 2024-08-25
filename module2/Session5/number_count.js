// Count up from 1to 10
let countUp = document.getElementById('countUp');
for(let i = 1; i <= 10; i++) {
    countUp.innerHTML += i + "";
}

// Count down from 10 to 1
let countDown = document.getElementById('countDown');
for (let i = 10; i >= 1; i--) {
    countDown.innerHTML += i + "";
}
// Display even numbers from 1 to 10 
let evenNumbers = document.getElementById('evenNumbers');
for (let i = 2; i <= 10; i += 2) {
    evenNumbers.innerHTML +=i + "";
}

// Display odd numbers from 1 to 10
let oddNumbers = document.getElementById('oddNumbers');
for (let i = 1; i <= 10; i += 2) {  
    oddNumbers.innerHTML += i + "";
}