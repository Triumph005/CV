// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Theme Toggle Function
const toggleTheme = () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  themeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
};

// Load Saved Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = 'Light Mode';
}

// Event Listener
themeToggle.addEventListener('click', toggleTheme);

// Add CV Download Button
const cvDownloadButton = document.createElement('button');
cvDownloadButton.textContent = 'Download CV';
cvDownloadButton.id = 'cv-download';
themeToggle.insertAdjacentElement('afterend', cvDownloadButton);

// CV Download Alert
cvDownloadButton.addEventListener('click', () => {
  alert('CV downloaded');
});
