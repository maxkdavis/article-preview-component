// activate strict mode
'use strict';

//store the share button into a variable
const btnShareEl = document.querySelector('.btn__share');
//store the .content__info-wrap <div> in a variable
const contentInfoContainerEl = document.querySelector('.content__info-wrap');
//store the .content__social-links-wrap <div> in a variable
const contentSocialLinksContainerEl = document.querySelector('.content__social-links-wrap');
//store the .content__btn-wrap <div> in a variable
const contentBtnContainerEl = document.querySelector('.content__btn-wrap');
//store the .btn__share_svg <svg> in a variable
// const btnShareSvgEl = document.querySelector('.btn__share-svg');

//When the Share button is clicked, toggle the .display-toggle class for the Info and SocialLinks Containers
btnShareEl.addEventListener('click', function () {
  contentInfoContainerEl.classList.toggle('display-toggle');
  contentSocialLinksContainerEl.classList.toggle('display-toggle');

  contentBtnContainerEl.classList.toggle('dark');
  btnShareEl.classList.toggle('dark-btn');

  // if (contentInfoContainerEl.classList.contains('display-toggle')) {
  //   contentBtnContainerEl.style.backgroundColor = 'var(--dark-gray-blue)';
  // } else {
  //   contentBtnContainerEl.style.backgroundColor = 'white';
  // }
});
