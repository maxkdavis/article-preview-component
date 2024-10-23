// activate strict mode
'use strict';

//store the share button into a variable
const btnShare = document.querySelector('.btn__share');

//store the .content__info-wrap <div> in a variable
const contentInfoContainerEl = document.querySelector('.content__info-wrap');
//store the .content__social-links-wrap <div> in a variable
const contentSocialLinksContainerEl = document.querySelector('.content__social-links-wrap');
//store the .content__btn-wrap <div> in a variable
const contentBtnContainerEl = document.querySelector('.content__btn-wrap');
//store the .profile <section> in a variable
const profileContainerEl = document.querySelector('.profile');

//When the Share button is clicked we should toggle the .display-toggle class for the Info Container and the SocialLinks Container
btnShare.addEventListener('click', function () {
  contentInfoContainerEl.classList.toggle('display-toggle');
  contentSocialLinksContainerEl.classList.toggle('display-toggle');
  // contentBtnContainerEl.classList.toggle('.dark');
  // contentBtnContainerEl.style.backgroundColor = 'red';
  // profileContainerEl.classList.toggle('.dark');

  //if the btnContainer had a .dark class on then ADD background color. If it does not contain the classList then REMOVE background color.
});
