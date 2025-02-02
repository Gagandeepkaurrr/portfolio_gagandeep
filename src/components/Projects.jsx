import './Projects.scss';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Weather App</h3>
          <a href="https://gagandeepkaurrr.github.io/weatherApp/" target="_blank" rel="noopener noreferrer">Click to view!</a>
          <p>This is a simple weather application built using HTML, CSS, and JavaScript. It allows users to enter the name of a city and retrieve real-time weather information.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
