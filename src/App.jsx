import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { TraceDivider } from "./components/SignalReadout";
import AIChat from "./components/AIChat";
import Certificates from "./components/Certificates"

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TraceDivider />
      <About />
      <TraceDivider />
      <Skills />
      <TraceDivider />
      <Certificates />
       <TraceDivider />
      <Projects />
      <TraceDivider />
      <Experience />
      <TraceDivider />
      <Contact />
      <Footer />
      <AIChat />
    </>
  );
}
