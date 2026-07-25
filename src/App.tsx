import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="
        min-h-screen
        overflow-hidden
        bg-white
        dark:bg-gray-950
        text-gray-900
        dark:text-white
        transition-colors
        duration-300
      "
    >

      <Navbar />

      <main>

        <Hero />

        <About />

        <Experience />

        <Skills />

        <Projects />

        <Certificates />

        <Contact />

      </main>


      <Footer />

    </div>
  );
}

export default App;