"use client";
import About from "@/components/About";
import Background from "@/components/Background";
import Experience from "@/components/Flowchart/page";
import Navbar from "@/components/Navbar";
// import App from "@/components/Project";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="bg-transparent">
      <Background />
      <Navbar />
      <div className="pt-20 px-10">
        <section id="about">
          <About />
        </section>
      </div>
      <div className="px-5">
        <section id="project">
          <Project />
        </section>
        <section id="flowchart">
          <Experience />
        </section>
      </div>
    </div>
  );
}
