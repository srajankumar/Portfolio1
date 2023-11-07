"use client";
import About from "@/components/About";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Image from "next/image";
// import Project from "@/components/Project";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Background />
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
