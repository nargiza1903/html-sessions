document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('greating-form');
    const greatingMessage = document.getElementById('greating-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        greatingMessage.textContent = `Hello, ${name}! Welcome to my website!`;
    });
});