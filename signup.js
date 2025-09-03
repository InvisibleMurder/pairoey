Document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const newUsernameInput = document.getElementById('newUsername');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const ageInput = document.getElementById('age'); // เพิ่มสำหรับ Age
    const birthdateInput = document.getElementById('birthdate'); // เพิ่มสำหรับ Birthdate
    const signupMessage = document.getElementById('signup-message');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // ดึงค่าทั้งหมด
        const username = newUsernameInput.value;
        const password = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const age = ageInput.value;
        const birthdate = birthdateInput.value;

        // --- เงื่อนไขสำหรับความ "ปั่น" และเงื่อนไขที่ "ใช้งานได้จริง" ---
        // 1. ตรวจสอบเงื่อนไขที่ไม่ถูกต้อง (ให้ผู้ใช้สับสน)
        if (password.length < 8) {
            signupMessage.textContent = 'Password is too short. Try harder.';
            signupMessage.style.color = '#e74c3c';
            return;
        }

        if (password !== confirmPassword) {
            signupMessage.textContent = 'Passwords do not match. Are you a robot?';
            signupMessage.style.color = '#e74c3c';
            return;
        }

        if (age < 18) {
            signupMessage.textContent = 'You are too young for this game.';
            signupMessage.style.color = '#e74c3c';
            return;
        }
        
        // 2. เงื่อนไขที่ถูกต้องจริง ๆ (ที่ซ่อนอยู่)
        const birthYear = new Date(birthdate).getFullYear();
        if (username === 'admin' && password === '12345678' && birthYear === 2000) {
            // ถ้ากรอกถูกต้องทั้งหมด
            signupMessage.textContent = 'Registration successful! Proceed to login.';
            signupMessage.style.color = '#2ecc71';

            // ล้างฟอร์มและนำทางไปหน้า Login
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);

        } else {
            // 3. ถ้ากรอกผิด เงื่อนไขกวนๆ ที่ตั้งใจหลอก
            const prankMessages = [
                'Sorry, this information is just not unique enough.',
                'Please consult your birth certificate and try again.',
                `Username "${username}" is already taken. We're very popular.`,
                'Your age and birthdate seem to contradict each other.',
                'An unknown error has occurred. Blame the server.'
            ];
            const randomIndex = Math.floor(Math.random() * prankMessages.length);
            signupMessage.textContent = prankMessages[randomIndex];
            signupMessage.style.color = '#e74c3c';
            
            // ล้างช่องรหัสผ่านและข้อมูลใหม่
            newPasswordInput.value = '';
            confirmPasswordInput.value = '';
            ageInput.value = '';
            birthdateInput.value = '';
        }
    });
});
