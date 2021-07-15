const form = document.querySelector('form');
const inputEmail = document.getElementById('email');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    if (inputEmail.value == "" || !inputEmail.validity.valid) {
        error.textContent = "Please provide a valid email address";
        e.preventDefault();
    } else {
        error.textContent = "";
    }
});