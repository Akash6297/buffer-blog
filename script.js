const menuButton = document.querySelector('.mobile-menu-button');
const navMenu = document.querySelector('.site-nav');

if (menuButton && navMenu) {
  menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

const articleLinks = document.querySelectorAll('.site-nav a');
articleLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

console.log('Blog UI loaded from script.js');
