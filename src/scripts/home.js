import { createElement, createList, createContainer } from './utility.js';
import imageSrc from '../images/owner.png';

export function home() {
  const content = document.getElementById('content');
  content.textContent = '';
  const mainTitle = createElement(
    'h1',
    'content__title',
    "Cool Guy's Restaurant"
  );
  const image = createElement('img', 'owner-img');
  image.src = imageSrc;
  const aboutDiv = createContainer('About');
  const aboutDesciption = createElement(
    'p',
    'about-description',
    "Are you cool? Well then come down to Cool Guy's Restaurant, where you get to experience flavor like never before! Cool Guy promises the best food at the coolest prices, cooked with only the finest ingredients for the coolest people."
  );
  aboutDiv.append(aboutDesciption);
  const hoursListItems = [
    'Monday - Friday: 8am - 8pm',
    'Saturday - Sunday: 8am - 5pm',
  ];
  const hoursDiv = createContainer('Hours');
  const hoursList = createList(hoursListItems);
  hoursDiv.appendChild(hoursList);
  
  const locationDiv = createContainer('Location');
  const locationSpan = createElement(
    'span',
    'location-span',
    '12345 Cool Location, Fictional City, Fiction Country'
  );
  locationDiv.append(locationSpan);

  content.append(mainTitle, image, aboutDiv, hoursDiv, locationDiv);
}
