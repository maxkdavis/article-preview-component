// activate strict mode
'use strict';

//store the share button element into a JS variable
const btnShare = document.querySelector('.btn__share');
const contactSection = document.querySelector('.contact');

btnShare.addEventListener('click', function () {
  contactSection.style.display = 'none';
});
