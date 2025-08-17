import React from "react";

export default function AboutMe() {
  return (
    <section className="p-10">
      <a
        href="/"
        className="inline-block px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
      >
        Back to Home
      </a>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700">
        Hi! I’m Viraj, a CS student at UChicago, passionate about programming and math. Previously I was studying applied mathematics at the University of Georgia.
      </p>
    </section>
  );
}
