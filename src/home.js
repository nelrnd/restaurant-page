export default function createHome() {
  const home = document.createElement('div');
  const heading = document.createElement('h1');
  const copy = document.createElement('p');

  home.classList.add('centered');

  heading.classList.add('heading');
  heading.textContent = 'The best pizzeria in town!';

  copy.textContent = 'Not convinced? Come and eat at our restaurant to no longer doubt it. We have been cooking pizzas since 1952, passing on our know-how from generation to generation.';

  home.appendChild(heading);
  home.appendChild(copy);

  return home;
}