import React from 'react'
import { FaGraduationCap } from 'react-icons/fa6'

export const Education = () => {
  return (
    <section id="education" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FaGraduationCap className="mx-auto inline-block w-10 mb-4 h-auto" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Education
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Currently, I am in my fourth year of the Software Engineering degree at UPC 
          University. Throughout my academic journey, I've had the opportunity to delve 
          into various aspects of software development and engineering principles. 
          At UPC, I've been involved in numerous projects ranging from web development 
          to mobile application design. I'm excited to showcase the projects 
          I've developed and the skills I've honed during my time at the university.
          </p>
        </div>
        {/* <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
              <div className="flex relative m-8" style={{width: "34rem"}} key={project.image}>
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
                  <div className="grid">
                    {
                      project.linkDemo?
                      <a
                      href={project.linkDemo}
                      target="_blank"
                      className="text-nowrap hover:text-white">
                        Demo: {project.linkDemo}
                      </a>
                      :''
                    }
                    {
                      project.backendRepo?
                      <a
                      href={project.backendRepo}
                      target="_blank"
                      className="text-nowrap hover:text-white">
                        Backend: {project.backendRepo}
                      </a>
                      :''
                    }
                    {
                      project.frontendRepo?
                      <a
                      href={project.frontendRepo}
                      target="_blank"
                      className="text-nowrap hover:text-white">
                        Frontend: {project.frontendRepo}
                      </a>
                      :''
                    }
                  </div>
                </div>
              </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
