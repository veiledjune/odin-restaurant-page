import { createElement, createContainer } from './utility.js';

export function contact() {
  const content = document.getElementById('content');
  content.textContent = '';
  const mainTitle = createElement('h1', 'content__title', 'How to contact us?');
  const contactInfoDiv = createContainer('Contact Information');
  const contactInfoAddress = createElement(
    'address',
    'address',
    'Contact us at: +123 456 7890'
  );
  contactInfoDiv.append(contactInfoAddress);
  content.append(mainTitle, contactInfoDiv);
}
