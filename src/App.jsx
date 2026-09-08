import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contacts />
      </main>
      <a
        className="floating-resume"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open resume"
        title="Open Resume"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 2.75h8.2L19.25 7.8V21.25H6z" />
          <path d="M14 2.75v5.1h5.1" />
          <path d="M8.8 12.1h7.4M8.8 15.3h7.4M8.8 18.5h4.7" />
        </svg>
      </a>
      <Footer />
    </>
  );
}

export default App;
