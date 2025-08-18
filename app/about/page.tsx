"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="px-4 flex flex-col items-center">
  <motion.div
    className="font-medium w-fit -mt-20 px-4 py-2 text-gray-700 cursor-pointer"
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, delay: 1.5 }}
  >
    <a
      href="/"
      className="hover:text-[#CF9FFF] duration-500 transition"
    >
      Home
    </a>
  </motion.div>

  <div className="text-left max-w-lg mt-10">
        <motion.p
          className="mb-1 mt-4 font-medium !leading-[1.5] text-gray-700"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay:0.5, duration: 2 }}

        >
          <span className="text-2xl font-bold">About Me</span>
        </motion.p>

        <motion.p
          className="mb-5 mt-3 text-lg !leading-[1.5] text-gray-700"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 2 }}

        >
          Hi! I’m Viraj, a CS student at UChicago, passionate about programming and math. <br></br><br></br>I plan on pursuing a career in research. My interests lie in theoretical computer science, algos, ml, and optimization.
        </motion.p>
      </div>
</section>

  );
}
