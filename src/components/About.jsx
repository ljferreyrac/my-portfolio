import { useTranslation } from "react-i18next"
import { useLngStore } from "../hooks/useLngStore"

export const About = () => {
  const {t} = useTranslation()
  const { actualLng } = useLngStore()
  const pdfFilename = "CV_Leonardo.pdf"
  const pdfUrl = actualLng == 'en' ? "./CV_LeonardoFerreyra_ENG.pdf" : "./CV_LeonardoFerreyra_ESP.pdf"

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {t('About.Greetings')}
            <br className="inline-block" />{t('About.LoveBuild')}
          </h1>
          <p className="mb-8 leading-relaxed">
          {t('About.Me')}
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              {t('About.WorkWMe')}
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              {t('About.PreviousW/P')}
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
      <div className="flex justify-center">  
        <a
          href={pdfUrl}
          download={pdfFilename}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
          {t('About.CV')}
        </a>
      </div>
    </section>
  )
}
