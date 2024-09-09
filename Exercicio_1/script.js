document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'O nome é obrigatório.';
            nameInput.classList.add('invalid');
            return false;
        } else {
            nameError.textContent = '';
            nameInput.classList.remove('invalid');
            return true;
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'E-mail inválido.';
            emailInput.classList.add('invalid');
            return false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('invalid');
            return true;
        }
    }

    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'A senha deve ter pelo menos 8 caracteres.';
            passwordInput.classList.add('invalid');
            return false;
        } else {
            passwordError.textContent = '';
            passwordInput.classList.remove('invalid');
            return true;
        }
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', (event) => {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (!isNameValid || !isEmailValid || !isPasswordValid) {
            event.preventDefault();
        }
    });
});
