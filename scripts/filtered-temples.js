const year = document.getElementById("currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = document.lastModified;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Montreal Quebec",
      location: "Longueuil, Quebec, Canada",
      dedicated: "2000, June, 4",
      area: 11550,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montreal-quebec/1280x800/montreal-quebec-temple-1169262-wallpaper.jpg"
    },
    ,
    {
      templeName: "Vancouver British Columbia",
      location: "Langely, British Columbia, Canada",
      dedicated: "2010, May, 2",
      area: 28165,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vancouver-british-columbia/1280x800/vancouver-temple-766984-wallpaper.jpg"
    },
    ,
    {
      templeName: "Calgary Alberta",
      location: "Calgary, Alberta, Canada",
      dedicated: "2012, October, 28",
      area: 33000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/1280x800/calgary-alberta-temple-lds-1025065-wallpaper.jpg"
    }
];

const templeGrid = document.querySelector('.temple-grid');

function displayTemples(filter) {
    templeGrid.innerHTML = '';

    const filteredTemples = temples.filter(temple => {
        switch (filter) {
            case 'old':
                return new Date(temple.dedicated.split(',')[0]) < 1900;
            case 'new':
                return new Date(temple.dedicated.split(',')[0]) > 2000;
            case 'large':
                return temple.area > 90000;
            case 'small':
                return temple.area < 10000;
            default:
                return true;
        }
    });

    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('figure');
        templeCard.classList.add('temple-card');

        const templeImage = document.createElement('img');
        templeImage.classList.add('temple-image');
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.templeName;
        templeImage.loading = 'lazy';

        const figCaption = document.createElement('figcaption');
        figCaption.innerHTML = `
            <strong>${temple.templeName}</strong><br>
            Location: ${temple.location}<br>
            Dedicated: ${temple.dedicated}<br>
            Area: ${temple.area} sq ft
        `;

        templeCard.appendChild(templeImage);
        templeCard.appendChild(figCaption);
        templeGrid.appendChild(templeCard);
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = event.target.dataset.filter;
        displayTemples(filter);
    });
});

displayTemples('all');

