const containers = document.querySelectorAll('.container');

function showOnScroll() {
  containers.forEach(c => {
    const rect = c.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      c.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();
