import { HiCheckBadge, HiCpuChip } from "react-icons/hi2";
import { skills } from "../data/dataSkills";

export const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <HiCpuChip className="w-10 inline-block h-auto mb-4"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills & Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Throughout my career, I've acquired a broad range of technical skills across 
            various technologies. My experience spans from frontend and backend development 
            to database management and user interface design. I'm always ready to learn 
            and adapt to new technologies to stay up-to-date with the latest trends in 
            software development.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
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
