"use client";

import Header from "./Header";
import Articles from "./Articles";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import AboutMe from "./AboutMe";

export default function Home() {
  return (
    <div className="bg-[#f9f9ff] h-full overflow-hidden">
      <Header />
      <AboutMe />
      <Experiences />
      <Projects />
      {/* <Articles />  */}
      <Contact />
    </div>
  );
}
