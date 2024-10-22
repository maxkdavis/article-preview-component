// activate strict mode
'use strict';

//store the share button into a variable
const btnShare = document.querySelector('.btn__share');

//store the .content__info-wrap <div> in a variable
const contentInfoContainerEl = document.querySelector('.content__info-wrap');
//store the .content__social-links-wrap <div> in a variable
const contentSocialLinksContainerEl = document.querySelector('.content__social-links-wrap');

//When the Share button is clicked we should toggle the .display-toggle class for the Info Container and the SocialLinks Container

btnShare.addEventListener('click', function () {
  contentInfoContainerEl.classList.toggle('display-toggle');
  contentSocialLinksContainerEl.classList.toggle('display-toggle');
});
