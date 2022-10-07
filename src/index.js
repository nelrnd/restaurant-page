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

const pages = {home, menu, contact};

document.body.insertBefore(navbar, content);
content.appendChild(home);

const navLinks = document.querySelectorAll('.navigation-bar li');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    content.innerHTML = '';
    content.appendChild(pages[event.target.id]);
    navLinks.forEach(link => link.classList.remove('current'));
    event.target.classList.add('current');
  });
});