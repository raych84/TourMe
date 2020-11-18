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
        duration: " 5-DAY TOUR",
        location: "Railay Beach, Krabi Province, Thailand",
        date: "June 2021",
        price: "$2897 per person",
        details: "",
        itinerary: "",
        image: "https://abrokenbackpack.com/wp-content/uploads/2019/04/Railay-Beach-Thailand-min.png"
    }, {
        title: "THE FOREST HIKER",
        duration: " 4-DAY TOUR",
        location: "Kauai, Hawaii, USA",
        date: "September 2021",
        price: "$2497 per person",
        details: "From the hustle and bustle of Oahu to the romance of Maui and off-the-beaten-path adventures on Lanai and Molokai. The Hawaiian Islands are pure paradise. Explore colorful canyons and waterfalls and eat your body weight in fresh poke.",
        itinerary: "",
        image: "https://s29081.pcdn.co/wp-content/uploads/2018/02/best-hikes-on-kauai-hawaii-00875.jpg"
    }, {
        title: "THE PARK CAMPER",
        duration: " 4-DAY TOUR",
        location: "Yosemite National Park, California, USA",
        date: "April 2021",
        price: "$797 per person",
        details: "Stand in awe of natural wonders like Half Dome and Yosemite Falls. Take in the panoramic views from outlooks like Glacier Point and the Tunnel View. ",
        itinerary: "",
        image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/image/2016/09/main/yosemite-camping.jpg"
    }, {
        title: "THE CITY WANDERER",
        duration: " 7-DAY TOUR",
        location: "New York City, New York, USA",
        date: "May 2021",
        price: "$1397 per person",
        details: "With charming upstate scenery, world-class cuisine and culture and more things to do than you could fit in one lifetime. The city’s five boroughs all have special features; it’s almost impossible to narrow it down",
        itinerary: "",
        image: "https://1.bp.blogspot.com/-klHXHFbBkcg/Vh_oH8aFeyI/AAAAAAAADkI/WvdVpR4LWTc/s640/CORT-NYC-StudyUSA07.jpg"
    }, {
        title: "THE SNOW ADVENTURER",
        duration: " 5-DAY TOUR",
        location: "Patagonia, Argentina",
        date: "January 2022",
        price: "$3597 per person",
        details: "Otherworldly landscapes await you in Southern Patagonia, while endangered species (think: Magellanic penguins) roam Península Valdés– a UNESCO World Heritage Site.",
        itinerary: "",
        image: "https://www.americasquarterly.org/wp-content/uploads/2014/07/Panoramasix510X340_0.jpg"
    }, {
        title: "THE SURF LOVER",
        duration: " 4-DAY TOUR",
        location: "California, USA",
        date: "June 2021",
        price: "$1597 per person",
        details: "In a city with year-round sunshine, glam bars, beaches and hikes, there are endless incredible experiences to enjoy",
        itinerary: "",
        image: "https://cache.mrporter.com/content/images/cms/ycm/resource/blob/476348/b6ef6d47026243d09813d1de1bc73623/7daf69dd-f6ac-41c1-ba10-441656405fb2-data.jpg/w1200_q80.jpg"
    }, {
        title: "THE WINE TASTER",
        duration: " 10-DAY TOUR",
        location: "Tuscany, Italy",
        date: "July 2021",
        price: "$2397 per person",
        details: "Exquisite wines, scenic views, exclusive barrel tastings, and much more",
        itinerary: "",
        image: "https://escapebeyond.com.au/wp-content/uploads/2017/08/BLOG1-2-1200x565.jpg"
    }, {
        title: "THE NORTHERN LIGHTS",
        duration: " 7-DAY TOUR",
        location: "Tromso, Norway",
        date: "December 2021",
        price: "$4297 per person",
        details: "Walk in snowy landscapes and experience the cold and crisp air with a view of the Northern Lights",
        itinerary: "",
        image: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/08/ccimage-shutterstock_445057963.jpg"
    }, {
        title: "THE MOUNTAIN WALKER",
        duration: " 5-DAY TOUR",
        location: "Grand Canyon National Park, Arizona, USA",
        date: "March 2021",
        price: "$1597 per person",
        details: "Exploring the jaw-dropping US east coast by foot, with spectacular views.",
        itinerary: "",
        image: "https://www.imaginemag.ch/wp-content/uploads/2018/11/No-7_Grand_Canyon_Viewpoint_c-Joel-Grimes_Arizona-Office-of-Tourism_cmyk_s.jpg"
    }, {
        title: "THE MOUNTAIN EXPLORER",
        duration: " 5-DAY TOUR",
        location: "Banff National Park, Canada",
        date: "April 2021",
        price: "$2197 per person",
        details: "Breathtaking hike through the Canadian Banff National Park",
        itinerary: "",
        image: "https://www.thehotelguru.com/_images/2b/77/2b77229ffbc317f3477dfb2be8ed2831/600x422.jpg"
    },
    {
        title: "THE SAFARI EXPLORER",
        duration: " 10-DAY TOUR",
        location: "Kruger National Park, South Africa",
        date: "April 2021",
        price: "$3997 per person",
        details: "Vast space in northeastern South Africa that is home to a huge array of wildlife. The park has safari experiences of all kinds, allowing you the opportunity to escape busy city living and get back to nature",
        itinerary: "",
        image: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/22d8dd5c4ae3a3626e0cf30b0cc97e48bc14c72d/big-5b902d4507219d542102a964d62a091b.jpg"
    }, {
        title: "THE ISLAND GETTER",
        duration: " 7-DAY TOUR",
        location: "Laucala Island Resort, Fiji",
        date: "April 2021",
        price: "$3597 per person",
        details: "In one of three small islands off the northeast coast of Taveuni in Fiji. There are coconut trees, a sustainable farm and miles of beach, as well as coral reefs, postcard-perfect beaches and lush rainforest.",
        itinerary: "",
        image: "https://www.elitetraveler.com/wp-content/uploads/2016/07/Laucala-Island-Resort-Fiji-726x480.jpg"
    },
    {
        title: "THE TIME TRAVELER",
        duration: " 7-DAY TOUR",
        location: "Havana, Cuba",
        date: "May 2021",
        price: "$2397 per person",
        details: "A country stuck in time with a riot of colors. Brightly painted buildings and vintage cars make Havana a photogenic dream.",
        itinerary: "",
        image: "https://www.plansouthamerica.com/wp-content/uploads/2019/12/Cuba-Havana-main-street.jpg"
    }, {
        title: "THE ANCIENT HISTORIAN",
        duration: " 10-DAY TOUR",
        location: "Cairo, Egypt",
        date: "October 2021",
        price: "$3897 per person",
        details: "Cairo is one of the most ancient cities in the world. Sitting on the Nile river with wonderful museums, vibrant culture and friendly locals, it makes for a great holiday.",
        itinerary: "",
        image: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/742807a813a1671b73f251da0f8f079407347853/big-1eede168469b1f6f821be21b9127c78b.jpg"
    }, {
        title: "THE LOST IN THE CITY",
        duration: " 10-DAY TOUR",
        location: "Machu Picchu, Peru",
        date: "August 2021",
        price: "$2497 per person",
        details: "Arrive at Machu Picchu in style on the 360° Train that will bring you through the Peruvian countryside to the lost city. The wide, panoramic windows are perfect for soaking up the view, plus they serve Pisco Sours on board.",
        itinerary: "",
        image: "https://images.dailyhive.com/20181212122006/Machu-Picchu-and-llama.jpg"
    },{
        title: "THE CITY WATCHER",
        duration: " 10-DAY TOUR",
        location: "Rio de Janeiro, Brazil",
        date: "Febuaray 2021",
        price: "$2497 per person",
        details: "In the Marvelous City, you can revel in the sounds of samba in the Lapa neighborhood after strolling along the cobblestone streets of Santa Teresa, and experience the Carnival",
        itinerary: "",
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
