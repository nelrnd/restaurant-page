export default function loadPage() {
  const content = document.querySelector('#content');
  const heading = document.createElement('h1');
  const copy = document.createElement('p');

  heading.classList.add('heading');
  heading.textContent = 'The best pizzeria in town';

  copy.textContent = 'Not convinced? Come and eat at our restaurant to no longer doubt it. We have been cooking pizzas since 1952, passing on our know-how from generation to generation.';

  content.appendChild(heading);
  content.appendChild(copy);
}