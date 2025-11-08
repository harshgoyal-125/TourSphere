document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            console.log('Registration successful');
            
            localStorage.removeItem('currentBooking');
            localStorage.removeItem('selectedTour');
            
            window.location.href = 'home.html';
        });
    }
});