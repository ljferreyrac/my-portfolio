import { Provider } from "react-redux";
import { motion } from "framer-motion";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { store } from "./store/store";

export const Portfolio = () => {
  return (
    <Provider store={store}>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-gray-400 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen"
      >
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </div>
      </motion.main>
    </Provider>
  );
};
