import './style.css'
import { welcomeMessage, currentYear } from './messages.js';

document.querySelector('#app').innerHTML = `
  <h1>John Moore</h1>
  <p>${welcomeMessage}</p>
  <footer>© ${currentYear}</footer>
`