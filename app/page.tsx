'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineMail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaPen } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-start px-4 gap-1 mt-10">

      <div className="text-left max-w-xs">
        <motion.p
          className="mb-1 mt-4 font-medium !leading-[1.5] text-gray-700"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

        >
          <span className="text-2xl font-bold">Viraj Nain</span>
        </motion.p>

        <motion.p
          className="mb-5 mt-3 text-xl !leading-[1.5] text-gray-700"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}

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
        transition={{ delay: 1, duration: 1 }}
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
          <a className="absolute top-full mt-1 text-sm text-[#50C878] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 z-10"
          href="mailto:vnain@uchicago.edu"
          target="_blank">
            Contact
          </a>
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
          <a className="absolute top-full mt-1 text-sm text-[#0077B5] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 z-10"
          href="https://linkedin.com/in/viraj-nain"
            target="_blank">
            LinkedIn
          </a>
        </div>

        {/* GitHub */}
        <div className="relative flex flex-col items-center group">
          <a
            className="p-4 text-gray-700 flex items-center justify-center text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
            href="https://github.com/virajnain"
            target="_blank"
          >
            <FaGithubSquare className="text-4xl" />
          </a>
          <a className="absolute top-full mt-1 text-sm text-gray-950 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 z-10"
          href="https://github.com/virajnain"
          target="_blank">
            GitHub
          </a>
        </div>
      </motion.div>
      <motion.div className="flex flex-row items-center justify-center gap-5 mt-10 text-sm font-medium"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      >

        {/* Projects */}
        <Link
        href="/projects"
        className="group relative overflow-hidden bg-gray-200 px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition hover:bg-black hover:text-white"
        >
        <span className="absolute top-0 left-0 w-[50%] h-full opacity-0 group-hover:opacity-100 pointer-events-none"></span>

        projects <FaCode className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>


        {/* About Me */}
        <a
            href="/about"
            className="group relative overflow-hidden bg-gray-200 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack hover:bg-black hover:text-white"
        >
            <span className="absolute left-[-75%] top-0 w-1/2 h-full -rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-500">
            </span>

            more about me{" "}
            <IoPerson className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
        </motion.div>

            </section>
        );
}
