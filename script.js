Document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.querySelector('button');
    const message = document.getElementById('message');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    const body = document.body;

    // --- Correct values for a successful login ---
    const correctUsername = 'user'; 
    const correctPassword = 'password';

    // --- Disco Background Effect ---
    function changeBackgroundColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        body.style.backgroundColor = randomColor;
    }
    setInterval(changeBackgroundColor, 500);

    // --- Moving Button Effect ---
    loginButton.addEventListener('mouseover', () => {
        loginButton.style.position = 'absolute'; 

        const containerRect = loginForm.getBoundingClientRect();
        const buttonWidth = loginButton.offsetWidth;
        const buttonHeight = loginButton.offsetHeight;
        
        const newX = Math.random() * (containerRect.width - buttonWidth);
        const newY = Math.random() * (containerRect.height - buttonHeight);

        loginButton.style.left = `${newX}px`;
        loginButton.style.top = `${newY}px`;
    });

    // --- Login Logic ---
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (usernameInput.value === correctUsername && passwordInput.value === correctPassword) {
            window.location.href = 'main_menu.html';
        } else {
            message.textContent = 'Invalid username or password.';
            message.style.color = 'red';
            
            // Move the button on a failed login attempt
            const containerRect = loginForm.getBoundingClientRect();
            const buttonWidth = loginButton.offsetWidth;
            const buttonHeight = loginButton.offsetHeight;
            
            loginButton.style.position = 'absolute';
            loginButton.style.left = `${Math.random() * (containerRect.width - buttonWidth)}px`;
            loginButton.style.top = `${Math.random() * (containerRect.height - buttonHeight)}px`;
            
            passwordInput.value = '';
        }
    });
});
