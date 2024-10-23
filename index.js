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
const btnShareSvgEl = document.querySelector('.btn__share-svg');

//When the Share button is clicked, toggle the .display-toggle class for the Info and SocialLinks Containers
btnShareEl.addEventListener('click', function () {
  // Control display appearance
  contentInfoContainerEl.classList.toggle('display-toggle');
  contentSocialLinksContainerEl.classList.toggle('display-toggle');
  // Control button color
  contentBtnContainerEl.classList.toggle('dark-background');

  if (contentBtnContainerEl.classList.contains('dark-background')) {
    document.getElementById('path1').style.fill = 'white';
    btnShareEl.style.backgroundColor = 'var(--dark-blue)';
  } else {
    document.getElementById('path1').style.fill = '#6E8098';
    btnShareEl.style.backgroundColor = 'var(--light-gray-blue)';
  }
});
