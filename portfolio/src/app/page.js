"use client";
import About from "@/components/About";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
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
        {/* <section id="project">
          <Project />
        </section> */}
      </div>
    </div>
  );
}
