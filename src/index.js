import createNavbar from './navbar.js';
import createHome from './home.js';
import createMenu from './menu.js';
import './style.css';

const content = document.querySelector('#content');
const navbar = createNavbar();
const home = createHome();
const menu = createMenu();

document.body.insertBefore(navbar, content);

content.appendChild(menu);