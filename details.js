document.addEventListener('DOMContentLoaded', () => {
    const contentElement = document.getElementById('tour-detail-content');

    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('tourId');

    const allTours = getFromStorage('tourData');
    
    if (!tourId || !allTours || !allTours[tourId]) {
        contentElement.innerHTML = '<h1 class="text-4xl font-bold text-red-600">Tour not found!</h1><p class="mt-4 text-lg">Please go back to the home page and select a valid tour.</p>';
        return;
    }
    
    const tour = allTours[tourId];

    const itineraryHtml = tour.itinerary.map(item => `
        <li class="py-2 ml-4 list-disc text-slate-700">${item}</li>
    `).join('');
    
    contentElement.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
                <img src="${tour.image}" alt="${tour.title}" class="w-full h-auto rounded-lg shadow-lg">
                <div class="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-md">
                    <div class="flex justify-between items-center">
                        <span class="text-slate-600 text-lg">Price per person</span>
                        <span class="text-3xl font-bold text-indigo-700">${tour.priceFormatted}</span>
                    </div>
                    <button id="book-now-btn" class="mt-6 w-full rounded-md bg-green-600 py-3 px-4 text-lg font-semibold text-white shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200">
                        Book Now
                    </button>
                </div>
            </div>
            
            <div>
                <h1 class="text-5xl font-bold tracking-tight text-slate-900">${tour.title}</h1>
                <p class="mt-6 text-lg text-slate-700">${tour.description}</p>
                
                <h2 class="mt-10 text-3xl font-semibold text-slate-900 border-b border-slate-300 pb-2">Itinerary</h2>
                <ul class="mt-4 space-y-2">
                    ${itineraryHtml}
                </ul>

                <h2 class="mt-10 text-3xl font-semibold text-slate-900 border-b border-slate-300 pb-2">Your Tour Guide</h2>
                <div class="mt-4 flex items-center gap-5 p-4 bg-slate-100 rounded-lg">
                    <img src="${tour.guide.image}" alt="${tour.guide.name}" class="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md">
                    <div>
                        <h3 class="text-2xl font-semibold text-slate-800">${tour.guide.name}</h3>
                        <p class="mt-1 text-slate-600">${tour.guide.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('book-now-btn').addEventListener('click', () => {
        saveToStorage('selectedTour', tour);
        window.location.href = 'payment.html';
    });
});