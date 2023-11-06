"use client";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
// import Project from "@/components/Project";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Background />
      {/* <section id="project">
        <Project />
      </section> */}
      <Footer />
    </div>
  );
}
