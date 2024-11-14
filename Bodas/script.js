const images = document.querySelectorAll('.carrusel img');
let currentIndex = 0;

function showImage(index) {
    images.forEach(image => {
        image.style.display = 'none';
        image.style.opacity = 0;
    });
    images[index].style.display = 'block';
    images[index].style.opacity = 1;
}

// Show the first image on page load
showImage(currentIndex);

// Button event listeners
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);   

});