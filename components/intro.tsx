'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineMail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="flex flex-col items-center justify-start px-4 gap-1 mt-10">

      <div className="text-left max-w-xs">
        <motion.p
          className="mb-1 mt-4 font-medium !leading-[1.5] text-gray-700"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-2xl font-bold">Viraj Nain</span>
        </motion.p>

        <motion.p
          className="mb-5 mt-1 text-xl !leading-[1.5] text-gray-700"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-semibold">Computer Science</span> @{" "}
          <span className="font-semibold bg-gradient-to-r bg-clip-text text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500 animate-text">
            UChicago
          </span>
        </motion.p>
      </div>

      {/* Icons with tooltips */}
      <motion.div
        className="flex flex-row items-center justify-center gap-8 text-xl font-medium"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Email */}
        <div className="relative flex flex-col items-center group">
          <a
            className="p-4 text-gray-700 hover:text-[#50C878] flex items-center justify-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
            href="mailto:vnain@uchicago.edu"
            target="_blank"
          >
            <MdOutlineMail className="text-3xl" />
          </a>
          <span className="absolute top-full mt-1 text-sm text-[#0077B5] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 z-10">
            Contact
          </span>
        </div>

        {/* LinkedIn */}
        <div className="relative flex flex-col items-center group">
          <a
            className="p-4 text-gray-700 hover:text-[#0077B5] flex items-center justify-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
            href="https://linkedin.com/in/viraj-nain"
            target="_blank"
          >
            <BsLinkedin className="text-3xl" />
          </a>
          <span className="absolute top-full mt-1 text-sm text-[#0077B5] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 z-10">
            LinkedIn
          </span>
        </div>

        {/* GitHub */}
        <div className="relative flex flex-col items-center group">
          <a
            className="p-4 text-gray-700 flex items-center justify-center text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
            href="https://github.com/virajn"
            target="_blank"
          >
            <FaGithubSquare className="text-4xl" />
          </a>
          <span className="absolute top-full mt-1 text-sm text-gray-950 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 z-10">
            GitHub
          </span>
        </div>
      </motion.div>
      
    </section>
  );
}
