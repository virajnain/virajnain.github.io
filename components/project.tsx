"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from 
"framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  date,
  index,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
    initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 2, ease: "easeOut", delay: index * 0.3 + 1 }}
    className="group mb-3 sm:mb-8 last:mb-0"
    >


      <section className="max-w-[30rem] h-[15rem] relative overflow-hidden rounded-lg hover:border-white/50 bg-transparent backdrop-blur-md transition hover:shadow-xl hover:bg-gray-100 hover:translate-y-1 hover:translate-x-1 duration-700">
        <div className="pt-4 pb-7 pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full mr-20">
          <h3 className="text-lg font-semibold hover:translate-x-1 hover:text-[#CF9FFF] transition cursor-pointer delay-300 duration-1000">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 text-xs dark:text-white/70">
    {description}
  </p>

  <div className="mt-4 flex justify-between flex-wrap gap-2 sm:mt-auto">
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <li
          key={index}
          className="bg-gray-100 px-1 py-1 text-[0.7rem] tracking-wider text-gray-700 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition hover:bg-[#CF9FFF] hover:text-white duration-500"
        >
          {tag}
        </li>
      ))}
    </ul>

    <a className="mt-2 text-gray-700 text-xs">{date}
    </a>
  </div>
</div>
      </section>
    </motion.div>
  );
}