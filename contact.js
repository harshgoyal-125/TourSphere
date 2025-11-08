document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('contact-success');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            console.log('Contact form submitted');
            
            successMessage.classList.remove('hidden');
            
            contactForm.reset();
            
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
        });
    }
});