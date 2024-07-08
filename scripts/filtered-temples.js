const burger = document.querySelector("#burgerMenu");
const closeButton = document.querySelector("#closeButton");
const nav = document.querySelector("#menu");
const cardsContainer = document.querySelector(".container");
const homeBtn = document.querySelector("#homeBtn");
const oldBtn = document.querySelector("#oldBtn");
const newBtn = document.querySelector("#newBtn");
const largeBtn = document.querySelector("#largeBtn");
const smallBtn = document.querySelector("#smallBtn");

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    // Add more temple objects here...
    {
        templeName: "Santiago Chile",
        location: "Santiago, Chile",
        dedicated: "1983, September, 15",
        area: 20831,
        imageUrl:
            "https://churchofjesuschrist.org/imgs/b6becb4ca0c60a52ad5dc57a90ec69fe5fe7ec63/full/320%2C/0/default",
    },
    {
        templeName: "Brasilia Brasil",
        location: "Brasilia, Brasil",
        dedicated: "2023, September, 17",
        area: 32292,
        imageUrl:
            "https://churchofjesuschrist.org/imgs/95f3f3abdd4811ed920ceeeeac1e15db91037802/full/320%2C/0/default",
    },
    {
        templeName: "Tokio Japon",
        location: "Tokio, Japon",
        dedicated: "1980, October, 27",
        area: 52590,
        imageUrl:
            "https://churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/250%2C/0/default",
    },
];

let filteredTemples = [];

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    closeButton.classList.toggle("show");
});

closeButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    closeButton.classList.toggle("show");
});

function createTempleCards(temples) {
    temples.forEach((temple) => {
        const card = document.createElement("div");
        card.classList.add("templeCard");
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <div>
                <p>
                    <span class="label">Location:</span> ${temple.location} 
                </p>
                <p>
                    <span class="label">Location:</span> ${temple.dedicated} 
                </p>
                <p>
                    <span class="label">Location:</span> ${temple.area} sq ft 
                </p>
            </div>
            <figure>
                <img src=${temple.imageUrl} alt=${temple.templeName} width="200" height="300" loading="lazy">
            </figure>
        `;

        cardsContainer.append(card);
    });
}

function filterOldTemples() {
    filteredTemples = temples.filter((temple) => {
        const date = temple.dedicated.split(", ");
        const year = date[0].toString();
        return year < 1900;
    });

    cardsContainer.innerHTML = "";
    createTempleCards(filteredTemples);
}

function filterNewTemples() {
    filteredTemples = temples.filter((temple) => {
        const date = temple.dedicated.split(", ");
        const year = date[0].toString();
        return year > 2000;
    });

    cardsContainer.innerHTML = "";
    createTempleCards(filteredTemples);
}

function filterLargeTemples() {
    filteredTemples = temples.filter((temple) => temple.area > 90000);

    cardsContainer.innerHTML = "";
    createTempleCards(filteredTemples);
}

function filterSmallTemples() {
    filteredTemples = temples.filter((temple) => temple.area < 10000);

    cardsContainer.innerHTML = "";
    createTempleCards(filteredTemples);
}

homeBtn.addEventListener("click", () => createTempleCards(temples));
oldBtn.addEventListener("click", filterOldTemples);
newBtn.addEventListener("click", filterNewTemples);
largeBtn.addEventListener("click", filterLargeTemples);
smallBtn.addEventListener("click", filterSmallTemples);

createTempleCards(temples);
