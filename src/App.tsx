import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (

    <div
      className="
      min-h-screen
      overflow-x-hidden
      bg-white
      dark:bg-gray-950
      text-gray-900
      dark:text-white
      transition-colors
      duration-300
      "
    >


      <Navbar />



      <main
        className="
        scroll-smooth
        "
      >


        <Hero />


        <About />


        <Services />


        <Skills />


        <Experience />


        <Certificates />


        <Projects />


        <Contact />


      </main>





      <Footer />


    </div>

  );

}


export default App;