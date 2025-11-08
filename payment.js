document.addEventListener('DOMContentLoaded', () => {
    const selectedTour = getFromStorage('selectedTour');
    const paymentForm = document.getElementById('payment-form');
    const priceElement = document.getElementById('payment-total-price');
    const backButton = document.getElementById('payment-back-btn');

    if (!selectedTour) {
        document.querySelector('main').innerHTML = `
            <h1 class="text-4xl font-bold text-red-600">Error</h1>
            <p class="mt-4 text-lg">No tour selected. Please go back to the home page and select a tour to book.</p>
            <a href="home.html" class="mt-6 inline-block rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-700">Go to Home</a>
        `;
        return;
    }

    priceElement.textContent = selectedTour.priceFormatted;
    
    backButton.href = `details.html?tourId=${selectedTour.id}`;

    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            console.log('Payment success for:', selectedTour.title);
            
            const currentBooking = {
                tour: selectedTour,
                status: 'Confirmed',
                bookingDate: new Date().toISOString()
            };
            
            saveToStorage('currentBooking', currentBooking);
            
            window.location.href = 'status.html';
        });
    }
});