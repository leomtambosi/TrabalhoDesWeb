// script.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loginModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('loginForm');
    
    // Função para abrir o modal
    const openModal = () => {
        modal.style.display = 'block';
    };

    // Função para fechar o modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Função para validar o formulário
    const validateForm = (event) => {
        event.preventDefault();

        let valid = true;

        const username = document.getElementById('username');
        const password = document.getElementById('password');

        // Limpar mensagens de erro
        document.getElementById('usernameError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        // Validação
        if (username.value.trim() === '') {
            document.getElementById('usernameError').textContent = 'Por favor, insira o usuário.';
            valid = false;
        }

        if (password.value.trim() === '') {
            document.getElementById('passwordError').textContent = 'Por favor, insira a senha.';
            valid = false;
        }

        if (valid) {
            // Submissão bem-sucedida, por exemplo:
            alert('Formulário enviado com sucesso!');
            closeModal();
        }
    };

    // Eventos
    openModalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    form.addEventListener('submit', validateForm);
});
