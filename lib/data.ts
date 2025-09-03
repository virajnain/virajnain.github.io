import React from "react";
import { FaReact } from "react-icons/fa";


export const projectsData = [
  {
    title: "Algorithmic Trading Bot",
    description:
      "Built and backtested systematic trading strategies, including Long/Short and Markov-chain-based approaches, with performance analysis and visualization.",
    tags: ["Pandas", "Matplotlib", "yfinance", "+2"],
    date: "Sep 2025",
    link: "https://github.com/virajnain/algo-trading",
    index: 1,
  },
  {
    title: "Movie Recommendation System",
    description:
      "Created and trained a model using MovieLens dataset to  provide personalized film suggesstions based on genres and ratings.",
    tags: ["PyTorch", "Flask", "HTML", "CSS", "+1"],
    date: "Jul 2025",
    link: "https://github.com/virajnain/movie-recs",
    index: 2,
  },
  {
    title: "Image Denoising Model",
    description:
      "Contributed to NODE-ImgNet, a PDE and neural network based image denoising model. Worked on regularization.",
    tags: ["PyTorch", "NumPy", "Pandas", "+2"],
    date: "May 2025",
    link: "",
    index: 3,
  },
  {
    title: "Erdos-Szekeres Problem",
    description:
      "Coded a proof to the 7-point case of the Erdos Szekeres problem of convex n-gons using Glucose42 SAT Solver.",
    tags: ["C++", "CMake", "Glucose42"],
    date: "Mar 2024",
    link: "https://github.com/virajnain/erdos-szekeres-problem",
    index: 4,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "Matlab",
  "R",
  "NumPy",
  "Pandas",
  "PyTorch",
  "Flask",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "HTML",
  "CSS",
] as const;
