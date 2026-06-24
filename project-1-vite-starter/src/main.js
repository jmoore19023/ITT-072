import './style.css';
import { welcomeMessage, currentYear } from './messages.js';
import { goals, currentSkills, learningSkills } from './goals.js';

let activeFilter = 'all';

function renderGoals() {
  const filtered = activeFilter === 'all'
    ? goals
    : goals.filter(goal => goal.status === activeFilter);

  if (filtered.length === 0) {
    return '<p class="empty">No goals in this category.</p>';
  }

  return filtered.map(goal => `
    <li class="goal-item">
      <span class="goal-text">${goal.text}</span>
      <span class="goal-status ${goal.status.replace(' ', '-')}">${goal.status}</span>
    </li>
  `).join('');
}

function renderSkills(skillsArray) {
  return skillsArray.map(skill => `<li>${skill}</li>`).join('');
}

function render() {
  document.querySelector('#app').innerHTML = `
    <header>
      <h1>John Moore</h1>
      <p>${welcomeMessage}</p>
      <nav>
        <a href="#about">About</a>
        <a href="#goals">Goals</a>
        <a href="#skills-known">Skills</a>
        <a href="#skills-learning">Learning</a>
      </nav>
    </header>

    <main>
      <section class="section" id="about">
        <h2>About Me</h2>
        <p>Continuous Improvement Operations Specialist at Graphic Packaging International, finishing an AAS in Computer Programming at Lake Land College. My goal is to move into data analytics and business intelligence — building the technical skills to work closer to the data side of operations.</p>
      </section>

      <section class="section" id="goals">
        <h2>Course Goals</h2>
        <div class="filter-row">
          <button class="pill ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">All</button>
          <button class="pill ${activeFilter === 'in progress' ? 'active' : ''}" data-filter="in progress">In Progress</button>
          <button class="pill ${activeFilter === 'not started' ? 'active' : ''}" data-filter="not started">Not Started</button>
        </div>
        <ul class="goals-list">
          ${renderGoals()}
        </ul>
      </section>

      <section class="section" id="skills-known">
        <h2>Skills I Already Know</h2>
        <ul class="skills-list">
          ${renderSkills(currentSkills)}
        </ul>
      </section>

      <section class="section" id="skills-learning">
        <h2>Skills I Want to Learn</h2>
        <ul class="skills-list">
          ${renderSkills(learningSkills)}
        </ul>
      </section>
    </main>

    <footer>
      <p>John Moore © ${currentYear} — Web Scripting II</p>
    </footer>
  `;

  document.querySelectorAll('.pill').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      render();
    });
  });
}

document.getElementById('date-chip') && (document.getElementById('date-chip').textContent = new Date().toLocaleDateString('en-US', {
  weekday: 'short', month: 'short', day: 'numeric'
}));

render();