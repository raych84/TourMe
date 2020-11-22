const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/tourmetours"
);

const tourSeed = [
    {
        title: "THE SEA EXPLORER",
        duration: " 7-DAY TOUR",
        country: "Thailand",
        city:"Railay Beach",
        state: "Krabi Province", 
        date: "June 2021",
        price: "$2897 per person",
        details: "Railay is nevertheless one of Thailand's most sought-after beach areas.",
        itinerary:[
        "Day 1: Ao Nang and its surrounds",
        "Day 2: Rock Climbing at Railay Beach and Krabi Shooting Range",
        "Day 3: Kayaking in Ao Thalane and Krabi Town",
        "Day 4: Phi Phi Islands ",
        "Day 5: Koh Lanta and Island Hopping",
        "Day 6: Klong Thom Hot Springs and Emerald Pool",
        "Day 7: Hike Tab Kak Hang Nak nature trail"
    ],
        image: "https://abrokenbackpack.com/wp-content/uploads/2019/04/Railay-Beach-Thailand-min.png"
    }, {
        title: "THE FOREST HIKER",
        duration: " 7-DAY TOUR",
        country: "USA",
        city:"Hawaii",
        state: "Kauai", 
        date: "September 2021",
        price: "$2497 per person",
        details: "From the hustle and bustle of Oahu to the romance of Maui and off-the-beaten-path adventures on Lanai and Molokai. The Hawaiian Islands are pure paradise. Explore colorful canyons and waterfalls and eat your body weight in fresh poke.",
        itinerary:[ 
        "Day 1: Arrive & Check-in; time permitting, explore locally",
        "Day 2: Waimea Canyon / Koke'e State Park",
        "Day 3: Poipu Region",
        "Day 4: Na Pali Coast Tour / Polihale State Park",
        "Day 5: Wailua Region",
        "Day 6: North Shore Region",
        "Day 7: North Shore Region."
    ],
        image: "https://s29081.pcdn.co/wp-content/uploads/2018/02/best-hikes-on-kauai-hawaii-00875.jpg"
    }, {
        title: "THE PARK CAMPER",
        duration: " 4-DAY TOUR",
        country: "USA",
        city:"Yosemite National ParkHawaii",
        state: "California",
        date: "April 2021",
        price: "$797 per person",
        details: "Stand in awe of natural wonders like Half Dome and Yosemite Falls. Take in the panoramic views from outlooks like Glacier Point and the Tunnel View. ",
        itinerary:[ 
        "Day 1 and 2: Yosemite Valley",
        "Day 3: South to Glacier Point and Wawona",
        "Day 4: North to Tuolumne Meadows",
    ],
        image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/image/2016/09/main/yosemite-camping.jpg"
    }, {
        title: "THE CITY WANDERER",
        duration: " 7-DAY TOUR",
        country: "USA",
        city:"New York",
        state: "New York City",
        date: "May 2021",
        price: "$1397 per person",
        details: "With charming upstate scenery, world-class cuisine and culture and more things to do than you could fit in one lifetime. The city’s five boroughs all have special features; it’s almost impossible to narrow it down",
        itinerary: [
        "Day 1 in New York: Uptown Manhattan",
        "Day 2 in New York City: Lower Manhattan",
        "Day 3 of 7 Days in New York: Downtown & Midtown Manhattan",
        "Day 4 in New York: Lower Manhattan & Mid Town Manhattan",
        "Day 5 in New York: Statue of Liberty & Brooklyn Bridge",
        "Day 6 in New York: Brooklyn",
        "Day 7 in NYC: Queens or Manhattan"
    ],
        image: "https://1.bp.blogspot.com/-klHXHFbBkcg/Vh_oH8aFeyI/AAAAAAAADkI/WvdVpR4LWTc/s640/CORT-NYC-StudyUSA07.jpg"
    }, {
        title: "THE SNOW ADVENTURER",
        duration: " 7-DAY TOUR",
        country: "Argentina",
        city:"Patagonia",
        date: "January 2022",
        price: "$3597 per person",
        details: "Otherworldly landscapes await you in Southern Patagonia, while endangered species (think: Magellanic penguins) roam Península Valdés– a UNESCO World Heritage Site.",
        itinerary: [
        "Day 0: Fly from Buenos Aires to El Calafate, Argentina",
        "Day 1: Perito Moreno Glacier",
        "Day 2: El Chaltén",
        "Day 3: Transfer to Ecocamp in Torres del Paine, Chile",
        "Day 4: The French Valley",
        "Day 5: EcoCamp “Miradores” Tour of Torres del Paine",
        "Day 6: Lago Azul or Base of the Torres",
        "Day 7: Depart for Santiago, Chile"
    ],
        image: "https://www.americasquarterly.org/wp-content/uploads/2014/07/Panoramasix510X340_0.jpg"
    }, {
        title: "THE SURF LOVER",
        duration: " 4-DAY TOUR",
        country: "USA",
        state: "California",
        date: "June 2021",
        price: "$1597 per person",
        details: "In a city with year-round sunshine, glam bars, beaches and hikes, there are endless incredible experiences to enjoy",
        itinerary: [
        "Day 0: Encinitas Surf Lessons at Swami’s State Beach, Encinitas", 
        "Day 1: Surfline – Windansea Beach",
        "Day 2: City of Santa Cruz – Surfing Museum",
        "Day 3:Open Ocean Surfing - Mavericks, Half Moon Bay"
    ] ,
        image: "https://cache.mrporter.com/content/images/cms/ycm/resource/blob/476348/b6ef6d47026243d09813d1de1bc73623/7daf69dd-f6ac-41c1-ba10-441656405fb2-data.jpg/w1200_q80.jpg"
    }, {
        title: "THE WINE TASTER",
        duration: " 7-DAY TOUR",
        country: "Italy",
        city:"Tuscany", 
        date: "July 2021",
        price: "$2397 per person",
        details: "Exquisite wines, scenic views, exclusive barrel tastings, and much more",
        itinerary: [
        "Day 1: Explore Florence, Tuscany's crown jewel",
        "Day 2: See more of Florence - Wine Tour",
        "Day 3: Visit Pisa and Lucca",
        "Day 4: Explore San Gimignano and Volterra",
        "Day 5: Discover Cortona and Arezzo",
        "Day 6: Tour medieval Siena - Wine Tour",
        "Day 7: Drive the Val d'Orcia"
    ],
        image: "https://escapebeyond.com.au/wp-content/uploads/2017/08/BLOG1-2-1200x565.jpg"
    }, {
        title: "THE NORTHERN LIGHTS",
        duration: " 7-DAY TOUR",
        country: "Norway",
        city:"Tromso",
        date: "December 2021",
        price: "$4297 per person",
        details: "Walk in snowy landscapes and experience the cold and crisp air with a view of the Northern Lights",
        itinerary:[ 
        "Day 1: Arrive in Tromsø Tromso's picturesque setting",
        "Day 2: Explore Tromsø & Chase the Northern Lights",
        "Day 3: Trapper's Farm Wilderness Excursion",
        "Day 4: Snowcapped scenery along Norway's most northerly coast",
        "Day 5: Dogsledding & Northern Lights",
        "Day 6: Winter Activities in Alta",
        "Day 7: Depart Norway."
    ],
        image: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/08/ccimage-shutterstock_445057963.jpg"
    }, {
        title: "THE MOUNTAIN WALKER",
        duration: " 5-DAY TOUR",
        country: "USA",
        city:"Arizona",
        state: "Grand Canyon National Park",
        date: "March 2021",
        price: "$1597 per person",
        details: "Exploring the jaw-dropping US east coast by foot, with spectacular views.",
        itinerary:[
        "Day 1-2: Zion National Park. Angel's Landing Hike",
        "Day 3: Bryce National Park",
        "Day 3: Horseshoe Bend",
        "Day 4: Antelope Canyon",
        "Day 4 Afternoon: Grand Canyon",
        "Day 5: Sedona."
    ],
        image: "https://www.imaginemag.ch/wp-content/uploads/2018/11/No-7_Grand_Canyon_Viewpoint_c-Joel-Grimes_Arizona-Office-of-Tourism_cmyk_s.jpg"
    }, {
        title: "THE MOUNTAIN EXPLORER",
        duration: " 5-DAY TOUR",
        country: "Canada",
        city:"Banff National Park",
        state: "California",
        date: "April 2021",
        price: "$2197 per person",
        details: "Breathtaking hike through the Canadian Banff National Park",
        itinerary: [
        "Day 1: Lake Louise, Grizzly Bear Watching & Peyto Lake",
        "Day 2: Moraine Lake, an epic hike and Vermillion Lakes",
        "Day 3: Waterfalls, glacier hikes and Emerald Lake",
        "Day 4: Lake Minnewanka, Fairmont Banff and a mountain top sunset",
        "Day 5: Hot springs, helicopters and canyons"
    ],
        image: "https://www.thehotelguru.com/_images/2b/77/2b77229ffbc317f3477dfb2be8ed2831/600x422.jpg"
    },
    {
        title: "THE SAFARI EXPLORER",
        duration: " 10-DAY TOUR",
        country: "South Africa",
        city:"Kruger National Park",
        state: "California",
        date: "April 2021",
        price: "$3997 per person",
        details: "Vast space in northeastern South Africa that is home to a huge array of wildlife. The park has safari experiences of all kinds, allowing you the opportunity to escape busy city living and get back to nature",
        itinerary: [
        "Day 1:	Arrive in Cape Town, City Tour & Table Mountain- Cape Town",
        "Day 2: Wine Tour in the Cape Winelands- Cape Town",
        "Day 3:	Atlantic Seaboard & Cape Peninsula- Cape Town",
        "Day 4:	Cape Town to Johannesburg & African Dinner- Johannesburg",
        "Day 5:	Soweto Township Visit, Traditional Dinner, & Local Storytelling- Johannesburg",
        "Day 6:	Safari Arrival Day, Big 5 Night Drive, & Bush Braai	Kruger National Park",
        "Day 7:	Big 5 Sunrise Bush Walk	Kruger National Park",
        "Day 8:	Full Day in Kruger National Park Kruger National Park",
        "Day 9:	Blyde River Canyon with Three Rondavels	Johannesburg",
        "Day 10: Depart Johannesburg"
    ],
        image: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/22d8dd5c4ae3a3626e0cf30b0cc97e48bc14c72d/big-5b902d4507219d542102a964d62a091b.jpg"
    }, {
        title: "THE ISLAND GETTER",
        duration: " 7-DAY TOUR",
        country: "Fiji",
        city:"Laucala Island Resort",
        date: "April 2021",
        price: "$3597 per person",
        details: "In one of three small islands off the northeast coast of Taveuni in Fiji. There are coconut trees, a sustainable farm and miles of beach, as well as coral reefs, postcard-perfect beaches and lush rainforest.",
        itinerary: [
        "Day 1 – Nadi International Airport to Denarau",
        "Day 2 – Denarau to the Mamanuca Islands",
        "Day 3 – Mamanuca Islands",
        "Day 4 – Mamanuca Islands",
        "Day 5 – Mamanuca Islands to the Yasawa Islands",
        "Day 6 – Yasawa Islands",
        "Day 7 – Yasawa Islands to Nadi International Airport"
    ],
        image: "https://www.elitetraveler.com/wp-content/uploads/2016/07/Laucala-Island-Resort-Fiji-726x480.jpg"
    },
    {
        title: "THE TIME TRAVELER",
        duration: " 7-DAY TOUR",
        country: "Cuba",
        city:"Havana",
        state: "California",
        date: "May 2021",
        price: "$2397 per person",
        details: "A country stuck in time with a riot of colors. Brightly painted buildings and vintage cars make Havana a photogenic dream.",
        itinerary:[ 
        "Day 1:	Arrive in Havana- Havana",
        "Day 2:	Walking tour of Old Havana- Havana",
        "Day 3:	Visit Viñales National Park- Havana",
        "Day 4:	Paddleboard the Zapata Peninsula- Cienfuegos",
        "Day 5:	Soak up the music in Cienfuegos- Cienfuegos",
        "Day 6:	Artists and cocktails in Trinidad- Trinidad",
        "Day 7:	Hike Topes de Collantes National Preserve",	 
        "Day 8:	Depart"
    ],
        image: "https://www.plansouthamerica.com/wp-content/uploads/2019/12/Cuba-Havana-main-street.jpg"
    }, {
        title: "THE ANCIENT HISTORIAN",
        duration: " 10-DAY TOUR",
        country: "Egypt",
        city:"Cairo",
        date: "October 2021",
        price: "$3897 per person",
        details: "Cairo is one of the most ancient cities in the world. Sitting on the Nile river with wonderful museums, vibrant culture and friendly locals, it makes for a great holiday.",
        itinerary: [
        "Day 1: Cairo – The Arrival",
        "Day 2: Cairo – All the Pyramids",
        "Day 3: Cairo – Antiquities Old and New",
        "Day 4: Luxor – Ancient City of Thebes",
        "Day 5: Luxor – West Bank",
        "Day 6 and 7: Dahabiya ",
        "Day 8: Dahabiya – Quarry and Crocodiles",
        "Day 9: Dahabiya – Daraw, the Nile, and Farewell",
        "Day 10: Aswan – Abu Simbel"
    ],
        image: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/742807a813a1671b73f251da0f8f079407347853/big-1eede168469b1f6f821be21b9127c78b.jpg"
    }, {
        title: "THE LOST IN THE CITY",
        duration: " 10-DAY TOUR",
        country: "Peru",
        city:"Machu Picchu",
        date: "August 2021",
        price: "$2497 per person",
        details: "Arrive at Machu Picchu in style on the 360° Train that will bring you through the Peruvian countryside to the lost city. The wide, panoramic windows are perfect for soaking up the view, plus they serve Pisco Sours on board.",
        itinerary: [
        "Day 1:	Arrival in Lima- Lima",
        "Day 2: Lima - Puerto Maldonado",
        "Day 3:	Wildlife Viewing at Tambopata Reserve- Puerto Maldonado",
        "Day 4:	From the Amazon to the Andes- Ollantaytambo",
        "Day 5:	Machu Picchu Excursion: Ollantaytambo & Machu Picchu- Ollantaytambo",
        "Day 6:	Sacred Valley Tour: Ollantaytambo - Moray - Maras - Cusco",
        "Day 7:	Exploring Cusco: History & San Pedro- Cusco",
        "Day 8:	Arriving at Lake Titicaca: Cusco - Puno	Puno",
        "Day 9:	Lake Titicaca Tour: Uros Floating Islands & Taquile Island- Puno",
        "Day 10:	Departing Puno"
    ],
        image: "https://images.dailyhive.com/20181212122006/Machu-Picchu-and-llama.jpg"
    },{
        title: "THE CITY WATCHER",
        duration: " 10-DAY TOUR",
        country: "Brazil",
        city:"Rio de Janeiro",
        date: "Febuaray 2021",
        price: "$2497 per person",
        details: "In the Marvelous City, you can revel in the sounds of samba in the Lapa neighborhood after strolling along the cobblestone streets of Santa Teresa, and experience the Carnival",
        itinerary:[ 
        "Day 1: Arrival in Rio de Janeiro",
        "Day 2: Rio beaches, Corcovado and Sugar Loaf",
        "Day 3: Maracanã, Santa Teresa and the centre (Lapa)",
        "Day 4: Ilha Grande: the paths of Vila do Abraão",
        "Day 5: Ilha Grande: Lopes Mendes beach",
        "Day 6: Ilha Grande: boat trip around the island",
        "Day 7: Paraty and Trindade: the Praias do Meio and Cachadaço",
        "Day 8: Paraty: boat trip through the bay",
        "Day 9: Return to Rio",
        "Day 10: Rio and flight back home"
    ],
        image: "https://www.pandotrip.com/wp-content/uploads/2013/07/Untitled-62-980x613.jpg"
    }

];

db.Tours
    .remove({})
    .then(() => db.Tours.collection.insertMany(tourSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
