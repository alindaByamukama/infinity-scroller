const imageContainer = document.getElementById('image-container');
const loader = document.getAnimations('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'J9rs2HZMPm9f-iwc4NRmCK1XtF0PW3r1FGFysjX3xi4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function to set attributes on DOM elements
function setAttributes(element, attribute) {
    element.setAttribute(key, attributes[key]);
}

// Create Elements for Links and Photos, ADD to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo)=>{
        // Creating an <a> element to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Put <img> inside <a> - Put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();

    } catch (error) {
        // catch error here
    }
}

// On Load
getPhotos();