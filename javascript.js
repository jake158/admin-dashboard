'use strict';

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const favoriteButtonIcon = card.querySelector('button img[alt="favorite button icon"]');
    const watchButtonIcon = card.querySelector('button img[alt="watch button icon"]');

    favoriteButtonIcon.parentElement.addEventListener('click', function () {
        if (favoriteButtonIcon.src.includes('star-outline.svg')) {
            favoriteButtonIcon.src = 'icons/star.svg';
        } else {
            favoriteButtonIcon.src = 'icons/star-outline.svg';
        }
    });

    watchButtonIcon.parentElement.addEventListener('click', function () {
        if (watchButtonIcon.src.includes('eye-outline.svg')) {
            watchButtonIcon.src = 'icons/eye.svg';
        } else {
            watchButtonIcon.src = 'icons/eye-outline.svg';
        }
    });
});
