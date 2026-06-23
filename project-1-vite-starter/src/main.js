import './style.css';
import { welcomeMessage, currentYear } from './messages.js';
import { goals } from './goals.js';

function renderGoals() {
  return goals.map(goal => `
    <li class="goal-item">
      <span class="goal-text">${goal.text}</span>
      <span class="goal-status ${goal.status.replace(' ', '-')}">${goal.status}</span>
    </li>
  `).join('');
}

document.querySelector('#app').innerHTML = `
  <header>
    <h1>John Moore</h1>
    <p>${welcomeMessage}</p>
  </header>

  <main>
    <section class="section">
      <h2>About Me</h2>
      <p>Continuous Improvement Operations Specialist at Graphic Packaging International. Finishing an AAS in Computer Programming at Lake Land College. Looking to transition into data analytics and business intelligence.</p>
    </section>

    <section class="section">
      <h2>Course Goals</h2>
      <ul class="goals-list">
        ${renderGoals()}
      </ul>
    </section>

    <section class="section">
      <h2>Skills</h2>
      <p>Languages and tools I already work with:</p>
      <ul class="skills-list">
        <li>JavaScript</li>
        <li>SQL</li>
        <li>Python</li>
        <li>HTML & CSS</li>
        <li>Power Query</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>John Moore © ${currentYear} — Web Scripting II</p>
  </footer>
`;