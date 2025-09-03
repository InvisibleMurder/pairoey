document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const newUsernameInput = document.getElementById('newUsername');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const signupMessage = document.getElementById('signup-message');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ

        // --- ลูกเล่นกวนประสาท: Password ไม่ตรงตามเงื่อนไข (เสมอ) ---
        signupMessage.textContent = 'Password does not meet the requirements: must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character (and probably more).';
        signupMessage.style.color = '#e74c3c'; // สีแดงสำหรับข้อผิดพลาด

        // --- ลูกเล่นกวนประสาท: Username ไม่ว่าง (เสมอ) ---
        setTimeout(() => {
            if (newUsernameInput.value) { // ถ้าผู้ใช้กรอก Username
                signupMessage.textContent = `Sorry, the username "${newUsernameInput.value}" is already taken. Please try another one (even if it's unique).`;
                signupMessage.style.color = '#e74c3c';
            }
        }, 2000); // แสดงข้อความนี้หลังจาก 2 วินาที เพื่อให้ดูเหมือนกำลังตรวจสอบ


        // ล้างช่องรหัสผ่านเสมอ
        newPasswordInput.value = '';
        confirmPasswordInput.value = '';
    });
});
