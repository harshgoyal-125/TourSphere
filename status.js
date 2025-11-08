document.addEventListener('DOMContentLoaded', () => {
    const contentElement = document.getElementById('status-content');
    
    const currentBooking = getFromStorage('currentBooking');

    if (currentBooking) {
        contentElement.innerHTML = `
            <div class="p-6 bg-green-100 border-l-4 border-green-500 rounded-lg">
                <h2 class="text-2xl font-semibold text-green-800">Booking Confirmed!</h2>
                <p class="mt-2 text-green-700">
                    Congratulations! Your booking for the <strong>${currentBooking.tour.title}</strong> package is confirmed.
                </p>
                <p class="mt-1 text-green-700">
                    Total amount paid: <strong>${currentBooking.tour.priceFormatted}</strong>
                </p>
                <p class="mt-1 text-green-700">
                    A confirmation email has been sent to your registered address.
                </p>
            </div>
        `;
    } else {
        contentElement.innerHTML = `
            <div class="p-6 bg-slate-100 border-l-4 border-slate-500 rounded-lg">
                <h2 class="text-2xl font-semibold text-slate-800">No Bookings Found</h2>
                <p class="mt-2 text-slate-700">
                    You have not made any bookings yet. Explore our packages to start your adventure!
                </p>
            </div>
        `;
    }
});