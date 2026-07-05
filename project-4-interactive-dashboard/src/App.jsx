import { useState } from 'react';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import ProjectCard from './components/ProjectCard';
import GoalList from './components/GoalList';
import Skills from './components/Skills';
import { projects, currentSkills, learningSkills, goals } from './data';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');
  const [goalFilter, setGoalFilter] = useState('all');

  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter(p => p.tech === projectFilter);

  const completeCount = goals.filter(g => g.status === 'complete').length;

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Header
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(!darkMode)}
      />

      <main className="main">
        <StatsBar
          projectCount={projects.length}
          skillCount={currentSkills.length + learningSkills.length}
          goalCount={goals.length}
          completeCount={completeCount}
        />

        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="filter-row">
            {['all', 'HTML/CSS/JS', 'Vite/JS', 'React', 'Python'].map(f => (
              <button
                key={f}
                className={projectFilter === f ? 'pill active' : 'pill'}
                onClick={() => setProjectFilter(f)}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>
          {filteredProjects.length === 0 ? (
            <p className="empty">No projects match this filter.</p>
          ) : (
            <div className="project-grid">
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  link={project.link}
                />
              ))}
            </div>
          )}
        </section>

        <section className="section">
          <h2 className="section-title">Course Goals</h2>
          <GoalList
            goals={goals}
            filter={goalFilter}
            onFilterChange={setGoalFilter}
          />
        </section>

        <section className="section">
          <h2 className="section-title">Skills</h2>
          <Skills
            currentSkills={currentSkills}
            learningSkills={learningSkills}
          />
        </section>
      </main>
    </div>
  );
}

export default App;