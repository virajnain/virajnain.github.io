"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import { motion } from 'framer-motion';
import Project from "@/components/project";

export default function Projects() {

  return (
    <section id="projects" className="px-4 flex flex-col items-center">
      <motion.div
      className="-mt-20 font-medium text-gray-700 cursor-pointer"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <a className="hover:text-[#CF9FFF] hover:translate-x-1 duration-500"
      href="/">Home</a>
    </motion.div>



  <div className="w-full max-w-4xl text-center">
    <motion.p
      className="mb-1 mt-20 font-medium !leading-[1.5] text-gray-700"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="text-2xl font-semibold">Project Portfolio</span>
    </motion.p>

    <motion.p
      className="mb-10 mt-2 text-xl !leading-[1.5] text-gray-700"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <span>things I've built/worked on</span>
    </motion.p>
  </div>

  <div className="w-full max-w-4xl flex flex-col items-center gap-8">
    {projectsData.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </div>
</section>


  );
}