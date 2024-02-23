import { HiCodeBracket } from "react-icons/hi2";
import { projects } from "../data/dataProjects";

export const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <HiCodeBracket className="mx-auto inline-block w-10 mb-4 h-auto" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Below you'll find a selection of applications I've developed. 
          Each one showcases my ability to design and build complete software solutions. 
          Feel free to explore!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
              <div className="flex relative m-8 w-80 lg:w-5/12" key={project.image}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 flex justify-center">
                    {project.skills}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="grid justify-center">
                    {
                      project.linkDemo?
                      <a
                      href={project.linkDemo}
                      target="_blank"
                      className="lg:text-nowrap hover:text-white">
                        Demo: {project.linkDemo}
                      </a>
                      :''
                    }
                    {
                      project.backendRepo?
                      <a
                      href={project.backendRepo}
                      target="_blank"
                      className="lg:text-nowrap hover:text-white">
                        Backend: {project.backendRepo}
                      </a>
                      :''
                    }
                    {
                      project.frontendRepo?
                      <a
                      href={project.frontendRepo}
                      target="_blank"
                      className="lg:text-nowrap hover:text-white">
                        Frontend: {project.frontendRepo}
                      </a>
                      :''
                    }
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}
