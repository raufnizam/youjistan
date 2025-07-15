// Projects.jsx
import { projects } from "../data";
import { FaGithub } from "react-icons/fa";

function Projects() {
  
  return (
    <div className="">
    <section id="projects" className="pt-36 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-16 bg-white shadow-lg border-2 border-black text-black rounded-2xl w-[95%] mx-auto p-4">
        Projects
      </h2>

      <div
      
       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-4 md:mx-10">
        
        {projects.map((project, i) => (
          <a href={project.github} key={i} target="_blank" rel="noopener noreferrer">
            <div className="rounded-xl p-6 flex flex-col items-center justify-center bg-white shadow-lg border-2 border-black text-black transition-transform transform hover:scale-105 h-full">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <ul className="flex flex-wrap justify-center space-x-2 md:space-x-3 mb-4">
                {project.stack.map((tech, j) => (
                  <li key={j} className="px-2 py-1 md:px-3 md:py-1 border-2 border-black rounded-full mb-2">
                    {tech}
                  </li>
                ))}
              </ul>
              <FaGithub className="text-3xl mt-auto" />
            </div>
          </a>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Projects;
