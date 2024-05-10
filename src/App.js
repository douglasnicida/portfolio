import Header from "./components/Header";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

function App() {
  
  const [isDark, setIsDark] = useState(true);

  // Monitoring if the html class attribute has been changed, if changed it gets if contains the class dark or not, and returns it to isDark
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const isDarkMode = document.documentElement.classList.contains('dark');
          setIsDark(isDarkMode);
          break;
        }
      }
    });

    // Observer configuration to watch changes inthe class attribute at html tag
    observer.observe(document.documentElement, { attributes: true });

    // Clean the observer when the component is umounted to avoid memory issues
    return () => {
      observer.disconnect();
    };
  }, []); 

  return (
    <div className="flex flex-col w-full h-auto overflow-x-hidden">
      <Header />
      <ToastContainer autoClose={3000} theme={`${isDark ? "light" : "dark"}`}/>
      <Intro />
      <About />
      {/* <Projects /> */}
      <Services />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
