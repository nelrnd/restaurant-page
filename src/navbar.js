export default function createNavbar() {
  const navbar = document.createElement('div');
  const logo = document.createElement('h1');
  const navList = document.createElement('ul');

  navbar.classList.add('navigation-bar');

  logo.classList.add('logo');
  logo.textContent = 'Pizza Ponzi';
  navbar.appendChild(logo);

  const homeLink = document.createElement('li');
  homeLink.id = 'home';
  homeLink.classList.add('current');
  homeLink.textContent = 'HOME';
  navList.appendChild(homeLink);

  const menuLink = document.createElement('li');
  menuLink.id = 'menu';
  menuLink.textContent = 'MENU';
  navList.appendChild(menuLink);
  
  const contactLink = document.createElement('li');
  contactLink.id = 'contact';
  contactLink.textContent = 'CONTACT';
  navList.appendChild(contactLink);

  navbar.appendChild(navList);

  return navbar;
};