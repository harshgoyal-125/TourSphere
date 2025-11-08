document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    const successMessage = document.getElementById('profile-success');
    
    const nameInput = document.getElementById('profile-name');
    const emailInput = document.getElementById('profile-email');

    if (nameInput && emailInput) {
        nameInput.value = 'Demo User';
        emailInput.value = 'demo@toursphere.com';
    }

    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            console.log('Profile update submitted');
            
            successMessage.classList.remove('hidden');
            
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 3000);
        });
    }

    const profileLogoutBtn = document.getElementById('link-logout-profile');
    if (profileLogoutBtn) {
        profileLogoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            localStorage.removeItem('currentBooking');
            localStorage.removeItem('selectedTour');
            
            console.log('User logged out from profile.');
            window.location.href = 'login.html';
        });
    }
});