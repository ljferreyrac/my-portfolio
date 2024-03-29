import { useTranslation } from "react-i18next";
import { HiArrowRight } from "react-icons/hi2";
import { useLngStore } from "../hooks/useLngStore";

export const Navbar = () => {
  const {t} = useTranslation()
  const { actualLng, switchLanguage } = useLngStore();
  const languages = ["en", "es"]
  
  return (
    <>
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
                    Leonardo Ferreyra
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-white">
                        {t('Navbar.Projects')}
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        {t('Navbar.Skills')}
                    </a>
                    <a href="#education" className="mr-5 hover:text-white">
                        {t('Navbar.Education')}
                    </a>
                </nav>
                <div className="inline-flex mt-5 md:mt-0">
                    {languages.map(
                        lng => (
                            <div key={lng} className="flex items-center">
                                <input 
                                    type="radio" 
                                    value={lng}
                                    id={lng} 
                                    name="languages" 
                                    checked={actualLng == lng}
                                    className="hidden peer"
                                    onChange={(e) => switchLanguage(e.target.value)}/>
                                <label
                                    className="peer-checked:bg-green-500 bg-green-800 text-white text-base rounded px-3 py-1 mx-1 hover: cursor-pointer"
                                    htmlFor={lng}>
                                    {lng.toUpperCase()}
                                </label>
                            </div>
                        )
                    )}
                </div>
                <a
                href="#contact"
                className="inline-flex items-center w-36 justify-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                {t('Navbar.HireMe')}
                <HiArrowRight className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    </>
  )
}
