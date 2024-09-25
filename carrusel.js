let currentIndex = 0;
const slides = document.querySelectorAll('.hero');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('testimony__body--show', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}


setInterval(nextSlide, 3000); 


document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('before').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
});


showSlide(currentIndex);
