import { home } from './scripts/home.js';
import { menu } from './scripts/menu.js';
import { contact } from './scripts/contact.js';

function buttonEvents() {
  const homeButton = document.querySelector('.home-btn');
  const menuButton = document.querySelector('.menu-btn');
  const contactButton = document.querySelector('.contact-btn');

  homeButton.addEventListener('click', () => home());
  menuButton.addEventListener('click', () => menu());
  contactButton.addEventListener('click', () => contact());
}

buttonEvents();
