// To add "scrolled" class to navbar when page is scrolled
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

//fake player
const playBtn = document.getElementById('playToggle');
let isPlaying = false;

playBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  playBtn.innerHTML = isPlaying ? '<i class="ri-pause-fill"></i>' : '<i class="ri-play-fill"></i>';
});

//feedback
document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star-rating .star');
  const ratingInput = document.getElementById('rating');
  const form = document.getElementById('feedback-form');

  const highlightStars = (value) => {
    stars.forEach(star => {
      const val = parseInt(star.dataset.value);
      star.classList.toggle('selected', val <= value);
    });
  };

  stars.forEach(star => {
    const val = parseInt(star.dataset.value);
    star.addEventListener('mouseover', () => highlightStars(val));
    star.addEventListener('mouseout', () => highlightStars(+ratingInput.value || 0));
    star.addEventListener('click', () => {
      ratingInput.value = val;
      highlightStars(val);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();              // Prevent actual form submission
    location.reload();               // Refresh the entire page
  });
});
