import imgProj from '../img/projeto.png';
const projectsData = [
  {
    titulo: "Meu Portfolio",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem: imgProj, 
    linkRepo: "#",
    linkDeploy: "#"
  },
  {
    titulo: "Meu Portfolio - React",
    tecnologias: ["React", "CSS", "Vite"],
    imagem: imgProj, 
    linkRepo: "#",
    linkDeploy: "#"
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="section">
      <h3 className="section-title">Projetos em Destaque</h3>
      <div className="projects-grid">
        {projectsData.map((proj, index) => (
          <div key={index} className="project-card">
            <img 
              src={proj.imagem} 
              alt={proj.titulo} 
              className="project-img" 
              onError={(e) => e.target.src='https://via.placeholder.com/600x400?text=Sem+Imagem'}
            />
            <div className="project-content">
              <h4>{proj.titulo}</h4>
              <div className="tech-stack">
                {proj.tecnologias.map(tech => <span key={tech}>{tech}</span>)}
              </div>
              <div className="project-links">
                <a href={proj.linkRepo} target="_blank" rel="noreferrer">GitHub</a>
                {proj.linkDeploy && (
                  <> | <a href={proj.linkDeploy} target="_blank" rel="noreferrer">Acessar ↗</a></>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;