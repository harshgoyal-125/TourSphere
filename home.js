document.addEventListener('DOMContentLoaded', () => {
    const listElement = document.getElementById('tour-package-list');
    
    const tourData = getFromStorage('tourData');

    if (listElement && tourData) {
        listElement.innerHTML = '';
        
        Object.values(tourData).forEach(tour => {
            const cardHtml = `
                <div class="group rounded-lg overflow-hidden shadow-lg border border-slate-200 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <div class="h-56 w-full overflow-hidden">
                        <img src="${tour.image}" alt="Image of ${tour.title}" class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105">
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold text-slate-900">${tour.title}</h3>
                        <p class="mt-2 text-slate-600">${tour.description}</p>
                        
                        <p class="mt-4 text-sm font-medium text-slate-500">
                            Hosted by: <span class="font-semibold text-indigo-700">${tour.guide.name}</span>
                        </p>
                        
                        <div class="mt-6 flex items-center justify-between">
                            <span class="text-3xl font-bold text-indigo-700">${tour.priceFormatted}</span>
                            
                            <a href="details.html?tourId=${tour.id}" class="view-details-btn rounded-md bg-indigo-600 py-2 px-5 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            `;
            listElement.innerHTML += cardHtml;
        });

    } else if (listElement) {
        listElement.innerHTML = '<p class="text-red-500">Could not load tour data.</p>';
    }
});