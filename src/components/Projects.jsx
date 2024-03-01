import { HiCodeBracket } from "react-icons/hi2";
import { projects } from "../data/dataProjects";
import { useTranslation } from "react-i18next";

export const Projects = () => {

  const {t} = useTranslation();
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <HiCodeBracket className="mx-auto inline-block w-10 mb-4 h-auto" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {t("Projects.Title")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("Projects.Description")}
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {projects().map((project) => (
              <div className="flex relative m-6 w-80 md:w-5/12 md:m-8" key={project.image}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-5 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
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
