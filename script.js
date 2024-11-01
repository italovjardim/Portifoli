const carouselImages = document.querySelector('.cfg');
const images = document.querySelectorAll('.cfg img');
const nextBtn = document.getElementById('n');
const prevBtn = document.getElementById('Btn');

let currentIndex = 0;
const groupSize = 5;
const totalGroups = Math.ceil(images.length / groupSize);

function updateCarousel() {
  const offset = currentIndex * (600 + 25);
  carouselImages.style.transform = `translateX(-${offset}px)`;


  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === totalGroups +2;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalGroups + 2) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});


updateCarousel();