// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const gameScreen = document.getElementById('game-screen');
    const loginStatus = document.getElementById('login-status');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validateLogin(username, password)) {
            loginScreen.style.display = 'none';
            gameScreen.style.display = 'flex';
            if (typeof init === 'function') {
                init(); // Inicia o jogo da forca
            } else {
                console.error('Função init não encontrada.');
            }
        } else {
            loginStatus.textContent = 'Usuário ou senha incorretos.';
        }
    });

    function validateLogin(username, password) {
        
        const validUsername = 'icaro';
        const validPassword = '1234';
        return username === validUsername && password === validPassword;
    }
});