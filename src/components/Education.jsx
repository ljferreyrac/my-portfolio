import React from 'react'
import { FaGraduationCap } from 'react-icons/fa6'
import { studentProjects } from '../data/dataStudentProjects'
import { studentSkills } from '../data/dataStudentSkills'
import { HiCheckBadge } from 'react-icons/hi2'
import { institutions } from '../data/dataEducation'
import { useTranslation } from 'react-i18next'

export const Education = () => {

  const {t} = useTranslation();
  return (
    <section id="education" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FaGraduationCap className="mx-auto inline-block w-10 mb-4 h-auto" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {t("Education.Title")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("Education.Description")}
          </p>
        </div>
        <div className="grid flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center">
          {institutions().map((institution) => (
            <div className='justify-center relative m-8 w-64' key={institution.image}>
              <img
                alt="intitution"
                className='w-full h-auto'
                src={ institution.image }
              />
              <p className="my-2 leading-relaxed text-2xl font-bold text-white">
                {institution.description}
              </p>
              <p className="my-2 leading-relaxed text-base">
                {t("Education.EducationItem.DateStart")} {institution.dateStart}
              </p>
              {
                institution.dateFinished?
                <p className="my-2 leading-relaxed text-base">
                  {t("Education.EducationItem.DateEnd")} {institution.dateFinished}
                </p>
                :
                ""
              }
              {
                institution.dateExpected?
                <p className="my-2 leading-relaxed text-base">
                  {t("Education.EducationItem.DateExpected")} {institution.dateExpected}
                </p>
                :
                ""
              }

            </div>
          ))}
        </div>
        <div className="flex justify-center flex-wrap -m-4">
          {studentProjects().map((project) => (
              <div className="flex relative m-6 w-80 lg:w-5/12 lg:m-8" key={project.image}>
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
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {studentSkills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <HiCheckBadge className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white flex items-center">
                  {skill.icon}
                  &nbsp;
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
