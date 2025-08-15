"use client";

import React from "react";
import {motion} from "framer-motion"

export default function Header() {
    return (
        <header className="z-[999] relative">
            <motion.div className="fixed top-0 left-1/2 -translate-x-1/2 h-[2rem] w-[50%] rounded-full bg-[#ffffff] shadow-lg shadow-black/30"
                initial={{ y: -100, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
            ></motion.div>
      </header>
    );
  }