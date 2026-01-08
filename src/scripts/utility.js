export function createElement(type, className, content) {
  const element = document.createElement(type);
  element.classList.add(className);
  element.textContent = content;
  return element;
}

export function createList(listItems) {
  const list = createElement('ul', 'content-container__list');
  listItems.forEach((item) => {
    const listItem = createElement('li', 'hours-list__item', item);
    list.appendChild(listItem);
  });
  return list;
}

export function createContainer(containerTitle) {
  const container = createElement('div', 'content-container');
  const title = createElement('h2', 'content-container__title', containerTitle);
  container.append(title);
  return container;
}
