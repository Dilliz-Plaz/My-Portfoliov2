const track = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slides = track.children;

let currentIndex = 0;
const totalSlides = slides.length;

function updateSliderHeight(currentSlideIndex) {
  const activeSlideHeight = slides[currentSlideIndex].offsetHeight;
  track.style.height = `${activeSlideHeight}px`;
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;

  // Update the height at the exact same time the slide changes
  updateSliderHeight(currentIndex);
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

setTimeout(() => {
  updateSliderHeight(currentIndex);
}, 50);
