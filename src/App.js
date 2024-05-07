import Header from "./components/Header";
import Intro from "./pages/Intro";
import About from "./pages/About";

function App() {
  
  return (
    <div className="flex flex-col w-full h-auto">
      <Header />
      <Intro />
      <About />
    </div>
  );
}

export default App;
