import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import movieRecsImg from "@/public/movierecs.png";

export const experiencesData = [
  {
    title: "Deep Learning Researcher",
    location: "University of Georgia",
    description:
      "researched.",
    icon: React.createElement(FaReact),
    date: "Jan 2025 - May 2025",
  },
  {
    title: "Computational Geometry Researcher",
    location: "University of Georgia",
    description:
      "researched.",
    icon: React.createElement(FaReact),
    date: "Sep 2024 - May 2025",

  },
] as const;

export const projectsData = [
  {
    title: "Movie Recommendation System",
    description:
      "Created and trained a model using MovieLens dataset to  provide personalized film suggesstions based on genres and ratings.",
    tags: ["PyTorch", "Flask", "HTML", "CSS", "+1"],
    imageUrl: movieRecsImg,
    date: 2025,
    link: "www.github.com",
    index: 1,
  },
  {
    title: "Image Denoising Model",
    description:
      "Contributed to NODE-ImgNet, a PDE and neural network based image denoising model. Worked on regularization.",
    tags: ["PyTorch", "NumPy", "Pandas", "matplotlib", "+2"],
    imageUrl: movieRecsImg,
    date: 2025,
    link: "",
    index: 2,
  },
  {
    title: "Erdos-Szekeres Problem",
    description:
      "Coded a proof to the 7-point case of the Erdos Szekeres problem of convex n-gons using Glucose42 SAT Solver.",
    tags: ["C++", "CMake", "Glucose42"],
    imageUrl: movieRecsImg,
    date: 2024,
    link: "",
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
