// Projects.jsx
import { projects } from "../data";

function Projects() {
  
  return (
    <div className="">
    <section id="projects" className="pt-36 py-16 text-center">
      <div className="absolute h-full w-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <h2 className="text-2xl md:text-3xl font-bold mb-16 bg-white shadow-lg border-2 border-black text-black rounded-2xl w-[95%] mx-auto p-4">
        Projects
      </h2>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <div
      
       className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 mx-4 md:mx-10 auto-rows-[300px]">
        
        {projects.map((project, i) => (
          <div key={i} className="rounded-xl p-6 flex flex-col items-center justify-center bg-white shadow-lg border-2 border-black text-black transition-transform transform">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <ul className="flex justify-center space-x-2 md:space-x-3">
              {project.stack.map((tech, j) => (
                <li key={j} className="px-2 py-1 md:px-3 md:py-1 border-2 border-black rounded-full">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Projects;
