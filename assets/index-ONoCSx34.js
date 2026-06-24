(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`Web Scripting II Portfolio Starter.`,t=new Date().getFullYear(),n=[{id:1,text:`Learn modern JavaScript tools and workflow`,status:`in progress`},{id:2,text:`Build and deploy a Vite project`,status:`in progress`},{id:3,text:`Understand JavaScript modules and imports`,status:`in progress`},{id:4,text:`Complete all Web Scripting II projects`,status:`not started`},{id:5,text:`Deploy everything to GitHub Pages`,status:`not started`}];function r(){return n.map(e=>`
    <li class="goal-item">
      <span class="goal-text">${e.text}</span>
      <span class="goal-status ${e.status.replace(` `,`-`)}">${e.status}</span>
    </li>
  `).join(``)}document.querySelector(`#app`).innerHTML=`
  <header>
    <h1>John Moore</h1>
    <p>${e}</p>
    <nav>
      <a href="#about">About</a>
      <a href="#goals">Goals</a>
      <a href="#skills">Skills</a>
    </nav>
  </header>

  <main>
    <section class="section" id="about">
      <h2>About Me</h2>
      <p>Continuous Improvement Operations Specialist at Graphic Packaging International. Finishing an AAS in Computer Programming at Lake Land College. Looking to transition into data analytics and business intelligence.</p>
    </section>

    <section class="section" id="goals">
      <h2>Course Goals</h2>
      <ul class="goals-list">
        ${r()}
      </ul>
    </section>

    <section class="section" id="skills">
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
    <p>John Moore © ${t} — Web Scripting II</p>
  </footer>
`;