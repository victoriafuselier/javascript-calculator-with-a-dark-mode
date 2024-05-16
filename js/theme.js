const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const body = document.querySelector('body');
const lightBackgroundSVGs = document.getElementsByClassName('light-dots');
const darkBackgroundSVGs = document.getElementsByClassName('dark-dots');

function setDarkMode() {
    body.classList.remove('light');
    body.classList.add('dark');
    moon.style.display = 'none';
    sun.style.display = 'block';
    for (let i=0; i < lightBackgroundSVGs.length; i++) {
        lightBackgroundSVGs[i].style.display = 'none';
        darkBackgroundSVGs[i].style.display = 'block';
    }
}

function setLightMode() {
    body.classList.remove('dark');
    body.classList.add('light');
    moon.style.display = 'block';
    sun.style.display = 'none';
    for (let i=0; i < darkBackgroundSVGs.length; i++) {
        darkBackgroundSVGs[i].style.display = 'none';
        lightBackgroundSVGs[i].style.display = 'block';
    }
}

moon.addEventListener('click', () => {
    setDarkMode();
});

sun.addEventListener('click', () => {
    setLightMode();
});