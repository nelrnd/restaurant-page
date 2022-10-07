export default function createMenu() {
  const menu = [];

  const menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');

  class Pizza {
    constructor(title, ingredients) {
      this.title = title;
      this.ingredients = ingredients;
    }

    createCard() {
      const card = document.createElement('div');
      card.classList.add('card');

      const title = document.createElement('h2');
      title.textContent = this.title;

      const img = document.createElement('img');
      img.src = 'images/' + this.title.toLowerCase() + '.png';
      img.alt = `Photo of ${this.title} pizza`;

      const ingr = document.createElement('p');
      ingr.textContent = this.ingredients.join(', ');

      card.append(img, title, ingr);

      return card;
    }
  }

  menu.push(
    new Pizza('Chorizo', ['Sour cream', 'cheese', 'chorizo', 'peppers', 'olives'])
  );
  menu.push(
    new Pizza('Classical', ['Tomato sauce', 'cheese', 'ham'])
  );
  menu.push(
    new Pizza('Buffalo', ['Tomato', 'minced meat', 'cheese', 'peppers', 'olives'])
  );
  menu.push(
    new Pizza('Cheese', ['Tomato sauce', 'mozzarella', 'chèvre', 'emmental', 'roquefort'])
  );
  menu.push(
    new Pizza('Chicken', ['Tomato', 'cheese', 'chicken', 'salad', 'basilic'])
  );
  menu.push(
    new Pizza('Mushroom', ['Tomato', 'cheese', 'mushrooms'])
  );
  menu.push(
    new Pizza('Capricio', ['Tomato sauce', 'cheese', 'minced meat', 'peppers', 'salad', 'olives'])
  );

  menu.forEach(pizza => {
    menuGrid.appendChild(pizza.createCard());
  });

  return menuGrid;
}