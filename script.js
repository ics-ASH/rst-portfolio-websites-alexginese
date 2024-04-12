function goBack() {
    window.history.back();
}
const images = document.querySelectorAll('.gallery-image');
let currentIndex = 0;
function showPhoto(index) {
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }
  images.forEach(img => {
    img.style.display = 'none';
  });
  images[index].style.display = 'block';
  currentIndex = index;
}
showPhoto(currentIndex);
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    showPhoto(currentIndex + 1);
  }
  else if (event.key === 'ArrowLeft') {
    showPhoto(currentIndex - 1);
  }
});
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});