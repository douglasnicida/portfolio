import Header from "./components/Header";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";

function App() {
  
  return (
    <div className="flex flex-col w-full h-auto">
      <Header />
      <Intro />
      <About />
      {/* <Projects /> */}
      <Services />
      <Skills />
    </div>
  );
}

export default App;
