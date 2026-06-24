(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`Web Scripting II Portfolio Starter.`,t=new Date().getFullYear(),n=[{id:1,text:`Learn modern JavaScript tools and workflow`,status:`in progress`},{id:2,text:`Build and deploy a Vite project`,status:`in progress`},{id:3,text:`Understand JavaScript modules and imports`,status:`in progress`},{id:4,text:`Complete all Web Scripting II projects`,status:`not started`},{id:5,text:`Deploy everything to GitHub Pages`,status:`not started`}],r=[`SQL`,`Python`,`JavaScript`,`HTML & CSS`,`Power Query`,`Git & GitHub`,`Qlik`,`Power Automate`,`ETL / MES Integration`],i=[`React`,`TypeScript`,`REST APIs`,`Power BI`,`Node.js`,`Data Visualization`,`Chart.js`],a=`all`;function o(){let e=a===`all`?n:n.filter(e=>e.status===a);return e.length===0?`<p class="empty">No goals in this category.</p>`:e.map(e=>`
    <li class="goal-item">
      <span class="goal-text">${e.text}</span>
      <span class="goal-status ${e.status.replace(` `,`-`)}">${e.status}</span>
    </li>
  `).join(``)}function s(e){return e.map(e=>`<li>${e}</li>`).join(``)}function c(){document.querySelector(`#app`).innerHTML=`
    <header>
      <h1>John Moore</h1>
      <p>${e}</p>
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
          <button class="pill ${a===`all`?`active`:``}" data-filter="all">All</button>
          <button class="pill ${a===`in progress`?`active`:``}" data-filter="in progress">In Progress</button>
          <button class="pill ${a===`not started`?`active`:``}" data-filter="not started">Not Started</button>
        </div>
        <ul class="goals-list">
          ${o()}
        </ul>
      </section>

      <section class="section" id="skills-known">
        <h2>Skills I Already Know</h2>
        <ul class="skills-list">
          ${s(r)}
        </ul>
      </section>

      <section class="section" id="skills-learning">
        <h2>Skills I Want to Learn</h2>
        <ul class="skills-list">
          ${s(i)}
        </ul>
      </section>
    </main>

    <footer>
      <p>John Moore © ${t} — Web Scripting II</p>
    </footer>
  `,document.querySelectorAll(`.pill`).forEach(e=>{e.addEventListener(`click`,()=>{a=e.dataset.filter,c()})})}document.getElementById(`date-chip`)&&(document.getElementById(`date-chip`).textContent=new Date().toLocaleDateString(`en-US`,{weekday:`short`,month:`short`,day:`numeric`})),c();