// Sélectionnez l'élément du bouton de la barre de navigation avec la classe navbar-toggle
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarDropdown = document.querySelector('.navbar-dropdown');
navbarToggle.addEventListener('click', function() {
    // Basculez la visibilité du menu déroulant en ajoutant ou supprimant la classe "active"
    navbarDropdown.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var position = section.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            section.classList.add('active');
        }
    }
});
// Script pour faire défiler les images du carrousel
const carousel = document.getElementById('carousel');
let slideIndex = 0;

function showSlides() {
    const carousel = document.getElementById('carousel');
    const slides = carousel.getElementsByTagName('img');
    let slideIndex = 0;

    function hideAllSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
    }
    function showSlide() {
        hideAllSlides();
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlide, 3000); // Défilement toutes les 2 secondes
    }
    showSlide();
}
document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});

const fillElement = document.querySelector('.fill');
const percentageElement = document.querySelector('.percentage');
const percentageValue = 50; // Modifier cette valeur pour changer le pourcentage affiché sur la jauge

const updateGauge = (percentage) => {
  const angle = (percentage / 100) * 360;
  fillElement.style.transform = `rotate(${angle}deg)`;
  percentageElement.textContent = `${percentage}%`;
};

updateGauge(percentageValue);



