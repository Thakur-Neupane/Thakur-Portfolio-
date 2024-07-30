import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./body/home/Home";
import AboutMe from "./body/about-me/About";
import Projects from "./body/projects/Projects";
import Contact from "./body/contact/Contact";
import ParticlesAnimation from "./animation/ParticlesBG";
import Experience from "./body/experience/Experience";
import Skills from "./body/skills/Skills";

function App() {
  return (
    <div className="bg-slate-700 overflow-hidden">
      <ParticlesAnimation />
      <Header />
      <main className="max-w-7xl mx-auto relative">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
