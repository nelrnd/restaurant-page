export default function loadPage() {
  const section = document.createElement('div');
  const heading = document.createElement('h1');
  const copy = document.createElement('p');

  section.classList.add('centered');

  heading.classList.add('heading');
  heading.textContent = 'The best pizzeria in town!';

  copy.textContent = 'Not convinced? Come and eat at our restaurant to no longer doubt it. We have been cooking pizzas since 1952, passing on our know-how from generation to generation.';

  section.appendChild(heading);
  section.appendChild(copy);

  document.querySelector('#content').appendChild(section);
}