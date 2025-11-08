const tourData = {
    'paris-01': {
        id: 'paris-01',
        title: 'Parisian Wonders',
        description: 'Experience the magic of Paris, from the Eiffel Tower to the Louvre.',
        price: 2500,
        priceFormatted: '$2,500',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760c0341?q=80&w=1470&auto=format&fit=crop',
        itinerary: [
            'Day 1: Arrival & Eiffel Tower Visit',
            'Day 2: Louvre Museum & Seine River Cruise',
            'Day 3: Palace of Versailles Day Trip',
            'Day 4: Montmartre & Sacré-Cœur',
            'Day 5: Departure'
        ],
        guide: {
            name: 'Sophie Dubois',
            image: 'https://placehold.co/100x100/6366f1/ffffff?text=Sophie',
            bio: 'Paris native with 10 years of experience guiding art and history tours.'
        }
    },
    'tokyo-02': {
        id: 'tokyo-02',
        title: 'Tokyo Express',
        description: 'Explore the vibrant mix of ancient tradition and futuristic technology in Tokyo.',
        price: 3200,
        priceFormatted: '$3,200',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1470&auto=format&fit=crop',
        itinerary: [
            'Day 1: Arrival in Shinjuku',
            'Day 2: Senso-ji Temple & Akihabara',
            'Day 3: Shibuya Crossing & Meiji Shrine',
            'Day 4: Tsukiji Fish Market & Ginza',
            'Day 5: TeamLab Planets & Departure'
        ],
        guide: {
            name: 'Kenji Tanaka',
            image: 'https://placehold.co/100x100/3b82f6/ffffff?text=Kenji',
            bio: 'Food and culture expert who loves showing visitors the real Tokyo.'
        }
    },
    'rome-03': {
        id: 'rome-03',
        title: 'Roman Holiday',
        description: 'Walk through history in the eternal city, visiting the Colosseum, Vatican, and more.',
        price: 2800,
        priceFormatted: '$2,800',
        image: 'https://images.unsplash.com/photo-1552832230-c01970855658?q=80&w=1374&auto=format&fit=crop',
        itinerary: [
            'Day 1: Arrival & Colosseum Tour',
            'Day 2: Vatican City: St. Peter\'s & Museum',
            'Day 3: Roman Forum & Trevi Fountain',
            'Day 4: Trastevere Food Tour',
            'Day 5: Departure'
        ],
        guide: {
            name: 'Marco Rossi',
            image: 'https://placehold.co/100x100/10b981/ffffff?text=Marco',
            bio: 'Roman historian and archaeologist. Has a passion for ancient history.'
        }
    },
    'nyc-04': {
        id: 'nyc-04',
        title: 'NYC Big Apple',
        description: 'From Broadway to the Statue of Liberty, experience the city that never sleeps.',
        price: 2900,
        priceFormatted: '$2,900',
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1374&auto=format&fit=crop',
        itinerary: [
            'Day 1: Arrival & Times Square',
            'Day 2: Statue of Liberty & Ellis Island',
            'Day 3: Central Park & Museum of Natural History',
            'Day 4: Broadway Show & 9/11 Memorial',
            'Day 5: Departure'
        ],
        guide: {
            name: 'Emily Chen',
            image: 'https://placehold.co/100x100/f59e0b/ffffff?text=Emily',
            bio: 'A theater enthusiast and NYC local who knows all the best spots.'
        }
    },
    'sydney-05': {
        id: 'sydney-05',
        title: 'Sydney Opera',
        description: 'Enjoy the stunning harbor, iconic Opera House, and beautiful beaches.',
        price: 3100,
        priceFormatted: '$3,100',
        image: 'https://images.unsplash.com/photo-1524293581273-755a29487630?q=80&w=1470&auto=format&fit=crop',
        itinerary: [
            'Day 1: Arrival & Circular Quay',
            'Day 2: Sydney Opera House & Harbour Bridge',
            'Day 3: Bondi Beach & Coastal Walk',
            'Day 4: Taronga Zoo & The Rocks',
            'Day 5: Departure'
        ],
        guide: {
            name: 'Chris Wilson',
            image: 'https://placehold.co/100x100/ef4444/ffffff?text=Chris',
            bio: 'A surfer and wildlife expert who loves sharing the beauty of Sydney.'
        }
    }
};

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return null;
}

saveToStorage('tourData', tourData);

document.addEventListener('DOMContentLoaded', () => {
    const logoutLink = document.getElementById('link-logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            localStorage.removeItem('currentBooking');
            localStorage.removeItem('selectedTour');
            
            console.log('User logged out from nav.');
            window.location.href = 'login.html';
        });
    }
});