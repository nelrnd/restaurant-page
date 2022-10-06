import createNavbar from './navbar.js';
import createHome from './home.js';
import './style.css';

const content = document.querySelector('#content');

const navbar = createNavbar();
document.body.insertBefore(navbar, content);

const home = createHome();
content.appendChild(home);