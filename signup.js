document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const newUsernameInput = document.getElementById('newUsername');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const signupMessage = document.getElementById('signup-message');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        signupMessage.textContent = 'Password does not meet the requirements: must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character (and probably more).';
        signupMessage.style.color = '#e74c3c';

        setTimeout(() => {
            if (newUsernameInput.value) {
                signupMessage.textContent = `Sorry, the username "${newUsernameInput.value}" is already taken. Please try another one (even if it's unique).`;
                signupMessage.style.color = '#e74c3c';
            }
        }, 2000);

        newPasswordInput.value = '';
        confirmPasswordInput.value = '';
    });
});
