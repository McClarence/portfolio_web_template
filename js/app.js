// Dark / Light Mode Toggle
const toggleMode = document.getElementById('toggleMode');
toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    toggleMode.innerHTML = document.body.classList.contains('dark')
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navLinks.style.display = navLinks.classList.contains('active') ? 'flex' : 'none';
});
