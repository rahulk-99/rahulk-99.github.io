
/**
* Dark Mode Toggle
*/
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleButton.querySelector('i');

// Check local storage
const currentTheme = localStorage.getItem('theme');

// Default to dark mode if no theme is saved, or if 'dark' is explicitly saved
if (!currentTheme || currentTheme === 'dark') {
  body.classList.add('dark-mode');
  icon.classList.remove('bi-moon');
  icon.classList.add('bi-sun');
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('bi-moon');
    icon.classList.add('bi-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.remove('bi-sun');
    icon.classList.add('bi-moon');
    localStorage.setItem('theme', 'light');
  }
});
