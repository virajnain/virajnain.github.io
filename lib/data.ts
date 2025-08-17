import React from "react";
import { FaReact } from "react-icons/fa";


export const projectsData = [
  {
    title: "Movie Recommendation System",
    description:
      "Created and trained a model using MovieLens dataset to  provide personalized film suggesstions based on genres and ratings.",
    tags: ["PyTorch", "Flask", "HTML", "CSS", "+1"],
    date: 2025,
    link: "https://github.com/virajnain/movie-recs",
    index: 1,
  },
  {
    title: "Image Denoising Model",
    description:
      "Contributed to NODE-ImgNet, a PDE and neural network based image denoising model. Worked on regularization.",
    tags: ["PyTorch", "NumPy", "Pandas", "matplotlib", "+2"],
    date: 2025,
    link: "",
    index: 2,
  },
  {
    title: "Erdos-Szekeres Problem",
    description:
      "Coded a proof to the 7-point case of the Erdos Szekeres problem of convex n-gons using Glucose42 SAT Solver.",
    tags: ["C++", "CMake", "Glucose42"],
    date: 2024,
    link: "https://www.cs.umd.edu/~gasarch/BLOGPAPERS/erdos-szekeres.pdf",
    index: 3,
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
