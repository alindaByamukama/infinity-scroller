const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'J9rs2HZMPm9f-iwc4NRmCK1XtF0PW3r1FGFysjX3xi4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper function to set attributes and DOM elelemnts
function setAttributes(key, attributes) {
    for (const key in attributes) {
        element.setAttributes(key, attributes[key]);
    }
}

// create elelemtns for links, photos & add to DOM
function displayPhotos(){
    photosArray.forEach((photo) => {
        // create anchor element to link to unsplash
        const item = document.createElement('a');
        setAttributes(item,{
            href: photo.links.html,
            target: '_blank',
        });
        
        // create image element for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
        });

        // add image to anchor & anchor to image container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


// get photos from api
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // error catcher
    }
}

// ON LOAD
getPhotos();