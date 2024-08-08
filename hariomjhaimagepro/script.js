const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateMainImage(index) {
    mainImage.src = images[index];
    thumbnails.forEach(thumb => thumb.classList.remove('selected'));
    thumbnails[index].classList.add('selected');
    prevButton.disabled = index === 0;
    nextButton.disabled = index === images.length - 1;
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateMainImage(currentIndex);
    });
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateMainImage(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateMainImage(currentIndex);
    }
});

// Initialize the gallery
updateMainImage(currentIndex);
