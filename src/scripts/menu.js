import { createElement, createList, createContainer } from './utility.js';

export function menu() {
  const content = document.getElementById('content');
  content.textContent = '';
  const mainTitle = createElement('h1', 'content__title', 'Menu');
  const appetizerListItems = [
    'Very Legitimate Appetizer',
    'Definitely A Real Appetizer',
    "The Realest Appetizer You'll Find",
  ];
  const appetizerDiv = createContainer('Appetizers');
  const appetizersList = createList(appetizerListItems);
  appetizerDiv.appendChild(appetizersList);

  const mainListItems = [
    'Cool & Legit Dish',
    'Savory & Real Dish',
    'Certainly Not A Fake Dish',
  ];
  const mainDiv = createContainer('Main Course');
  const mainList = createList(mainListItems);
  mainDiv.appendChild(mainList);

  const desertsListItems = [
    'Chocolate Fake Cake',
    'Vanilla Unreal Ice Cream',
    'Honey Glazed Imaginary Pancakes',
  ];
  const desertsDiv = createContainer('Deserts');
  const desertList = createList(desertsListItems);
  desertsDiv.appendChild(desertList);

  const drinksItemsArr = [
    'Cool & Legit Dish',
    'Savory & Real Dish',
    'Certainly Not A Fake Dish',
  ];
  const drinksDiv = createContainer('Drinks');
  const drinksList = createList(drinksItemsArr);
  drinksDiv.appendChild(drinksList);

  content.append(mainTitle, appetizerDiv, mainDiv, desertsDiv, drinksDiv);
}
