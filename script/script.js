const toggleButton = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const body = document.body;
const logoImage = document.querySelector('.logo img'); 


toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        toggleIcon.textContent = 'dark_mode';

        logoImage.src = './img/logo.png';
    } 
    else {
        body.classList.add('dark-theme');
        toggleIcon.textContent = 'light_mode';

        logoImage.src = './img/logo-white.png'; 
    }
});