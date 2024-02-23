import { FaBootstrap, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";

export const projects = [
    {
        title: 'Portfolio',
        skills: 
            <>
                <FaReact className="h-auto text-4xl"/>
                &nbsp; 
                <SiJavascript className="h-auto text-4xl"/>
                &nbsp; 
                <SiTailwindcss className="h-auto text-4xl"/>
            </>,
        linkDemo: '',
        backendRepo: '',
        frontendRepo: 'https://github.com/ljferreyrac/my-portfolio',
        image: 'https://res.cloudinary.com/x-app-react-x/image/upload/v1708584675/portfolio/825078e8-61a3-42ed-ba40-5cc49442f934.png',
        description: 'My portfolio'
    },
    {
        title: 'Calendar App',
        skills: 
            <>
                <FaReact className="h-auto text-4xl"/>
                &nbsp; 
                <FaNodeJs className="h-auto text-4xl"/>
                &nbsp; 
                <SiJavascript className="h-auto text-4xl"/>
                &nbsp; 
                <FaBootstrap className="h-auto text-4xl"/>
                &nbsp; 
                <SiRedux className="h-auto text-4xl"/>
                &nbsp; 
                <SiMongodb className="h-auto text-4xl"/>
                &nbsp; 
                <SiExpress className="h-auto text-4xl"/>
            </>,
        linkDemo: 'https://leo-calendar-app.vercel.app/',
        backendRepo: 'https://github.com/ljferreyrac/calendar-app-backend',
        frontendRepo: 'https://github.com/ljferreyrac/calendar-app-frontend',
        image: 'https://res.cloudinary.com/x-app-react-x/image/upload/v1708568455/portfolio/0103cd96-340a-44c3-a586-320ab3f77bf1.png',
        description: 'A web application where you can create events and share them in a same calendar with everyone'
    },
    {
        title: 'Journal App',
        skills: 
            <>
                <FaReact className="h-auto text-4xl"/>
                &nbsp; 
                <SiJavascript className="h-auto text-4xl"/>
                &nbsp; 
                <FaBootstrap className="h-auto text-4xl"/>
                &nbsp; 
                <SiRedux className="h-auto text-4xl"/>
                &nbsp; 
                <SiFirebase className="h-auto text-4xl"/>
            </>,
        linkDemo: 'https://leojfc-journal-app.vercel.app/',
        backendRepo: '',
        frontendRepo: 'https://github.com/ljferreyrac/journal-app',
        image: 'https://res.cloudinary.com/x-app-react-x/image/upload/v1708573846/portfolio/a508099c-1230-424f-b35d-928ad808ab9d.png',
        description: 'A web application where you can create notes and upload/attach images to them'
    },
    {
        title: 'Heroes App',
        skills: 
            <>
                <FaReact className="h-auto text-4xl"/>
                &nbsp; 
                <SiJavascript className="h-auto text-4xl"/>
                &nbsp; 
                <FaBootstrap className="h-auto text-4xl"/>
            </>,
        linkDemo: 'https://leojfc-heroes-spa.netlify.app/',
        backendRepo: '',
        frontendRepo: 'https://github.com/ljferreyrac/heroes-single-page-app',
        image: 'https://res.cloudinary.com/x-app-react-x/image/upload/v1708669166/portfolio/3dc44de3-ae2f-451d-a8e6-875118637060.png',
        description: 'A web application where you can see information about some superheroes'
    },
    {
        title: 'Gif App',
        skills: 
            <>
                <FaReact className="h-auto text-4xl"/>
                &nbsp; 
                <SiJavascript className="h-auto text-4xl"/>
                &nbsp; 
                <FaBootstrap className="h-auto text-4xl"/>
            </>,
        linkDemo: 'https://gif-expert-leonardojfc.netlify.app/',
        backendRepo: '',
        frontendRepo: 'https://github.com/ljferreyrac/gif-expert-app',
        image: 'https://res.cloudinary.com/x-app-react-x/image/upload/v1708663210/portfolio/64565737-06a5-4203-86c5-78f8fe55932b.png',
        description: 'A web application where you can search as many gifs as you want'
    },
]