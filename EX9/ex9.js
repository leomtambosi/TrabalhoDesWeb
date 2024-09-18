document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loginModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('loginForm');
    
    const openModal = () => {
        modal.style.display = 'block';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    const validateForm = (event) => {
        event.preventDefault();

        let valid = true;

        const username = document.getElementById('username');
        const password = document.getElementById('password');

        document.getElementById('usernameError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        if (username.value.trim() === '') {
            document.getElementById('usernameError').textContent = 'Por favor, insira o usuário.';
            valid = false;
        }

        if (password.value.trim() === '') {
            document.getElementById('passwordError').textContent = 'Por favor, insira a senha.';
            valid = false;
        }

        if (valid) {
            alert('Formulário enviado com sucesso!');
            closeModal();
        }
    };

    openModalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    form.addEventListener('submit', validateForm);
});
