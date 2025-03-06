const images = [
    'image1.jpeg',
    'image2.jpeg',
    'image3.jpeg',
    'image4.jpeg',
    'image5.jpeg',
    'image6.jpeg'
];

let currentIndex = 0;
const slider = document.querySelector('.slider');

function changeBackgroundImage() {
    slider.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackgroundImage();
setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds
