// script.js

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const nav = document.querySelector('nav');

  // Toggle dark mode class on body and nav
  body.classList.toggle('dark-mode');
  nav.classList.toggle('dark-mode');

  // Toggle moon and sun icons
  const moonIcon = document.querySelector('.icon.fas.fa-moon');
  const sunIcon = document.querySelector('.icon.fas.fa-sun');

  moonIcon.style.display = moonIcon.style.display === 'none' ? 'inline' : 'none';
  sunIcon.style.display = sunIcon.style.display === 'none' ? 'inline' : 'none';

  // Switch stylesheet link based on dark mode
  const darkStylesheet = document.querySelector('link[href="./css/dark-styles.css"]');
  const lightStylesheet = document.querySelector('link[href="./css/style.css"]');

  if (body.classList.contains('dark-mode')) {
    darkStylesheet.removeAttribute('disabled');
    lightStylesheet.setAttribute('disabled', 'true');
  } else {
    lightStylesheet.removeAttribute('disabled');
    darkStylesheet.setAttribute('disabled', 'true');
  }
}

// Check if user has a preferred color scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toggleDarkMode();
}


function toggleMobileMenu() {
  var items = document.querySelector('.items ul');
  items.classList.toggle('active');
}


