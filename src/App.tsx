import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GridSquares from "./components/ui/GridSquares";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SpaceBackground from "./components/SpaceBg";

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white">
        Skip to main content
      </a>
      <Navbar />
 
      <main id="main-content">
        {GridSquares}
        <SpaceBackground />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
