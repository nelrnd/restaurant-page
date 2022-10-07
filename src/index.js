import createNavbar from './navbar.js';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';
import './style.css';

const content = document.querySelector('#content');
const navbar = createNavbar();
const home = createHome();
const menu = createMenu();
const contact = createContact();

document.body.insertBefore(navbar, content);
content.appendChild(home);

document.querySelector('li#home').addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(home);
});
document.querySelector('li#menu').addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(menu);
});
document.querySelector('li#contact').addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(contact);
});