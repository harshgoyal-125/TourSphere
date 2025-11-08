document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            console.log('Login successful');
            
            localStorage.setItem('userLoggedIn', 'true');
            
            localStorage.removeItem('currentBooking');
            localStorage.removeItem('selectedTour');
            
            window.location.href = 'home.html';
        });
    }
});