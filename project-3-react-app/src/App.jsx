import Header from './components/Header';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

const projects = [
  {
    id: 1,
    title: "Habit Tracker Dashboard",
    description: "State-driven dashboard built with HTML, CSS, and JavaScript. Add, complete, filter, and delete habits by category. Notes section with timestamps.",
    tech: "HTML, CSS, JavaScript",
    link: "https://jmoore19023.github.io/ITT-072/Habit-Tracker.html"
  },
  {
    id: 2,
    title: "Web Scripting II Portfolio Starter",
    description: "Vite-powered portfolio starter. Goals and skills rendered dynamically from exported arrays. Filter interaction on the goals section.",
    tech: "Vite, HTML, CSS, JavaScript",
    link: "https://jmoore19023.github.io/ITT-072/"
  },
  {
    id: 3,
    title: "Moore Plants and Pots",
    description: "Python inventory and purchase order management system. Three custom classes, JSON persistence, search, sort, and seven reports.",
    tech: "Python",
    link: "https://github.com/jmoore19023/ITT-072/tree/main/Python%20Project"
  }
];

function App() {
  return (
    <>
      <Header />
      <main>
        <About />

        <section id="projects">
          <h2>Projects</h2>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </section>

        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;