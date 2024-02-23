export const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Leonardo
            <br className="inline-block" />I love to build awesome apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm an enthusiast for building all kinds of projects. 
          I've successfully built apps using Vue, Angular, and React for the frontend, and .Net, Spring Boot, and Node for the backend. 
          My curiosity and quick learning ability have allowed me to acquire a wide range of skills. My goal is to continue expanding my work experience and keep learning new technologies and methodologies. 
          I'm always ready for the next challenge!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work with me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Check out my previous work / projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://res.cloudinary.com/x-app-react-x/image/upload/v1708527898/portfolio/_afcc2b76-82fc-436a-8763-30efb7ff0741-removebg-preview_g63pmx.png"
          />
        </div>
      </div>
    </section>
  )
}
