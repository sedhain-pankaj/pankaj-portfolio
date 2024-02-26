"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-6">
        I graduated with a degree in{" "}
        <span className="font-medium">Information Technology</span>,
        specializing in{" "}
        <span className="font-medium">Software Development</span>. My passion
        for programming led me to a role as a{" "}
        <span className="italic">software developer</span> at a{" "}
        <span className="font-medium">JukeBox Company</span>. To broaden my
        skills, I&apos;ve attended several{" "}
        <span className="font-medium">full-stack web development</span>{" "}
        bootcamps and online courses. I enjoy the{" "}
        <span className="underline">problem-solving aspect</span> of programming
        and the satisfaction of finding solutions. My primary technologies are{" "}
        <span className="font-medium">React, NextJS, PHP, and MySQL</span>, and
        I have experience with TypeScript and phpMyAdmin. I&apos;m always eager
        to learn and apply new technologies to enhance my projects. Currently,
        I&apos;m seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        Outside of programming, I enjoy{" "}
        <span className="italic">
          online gaming, watching Netflix, and evening walks
        </span>
        . I like to challenge myself with{" "}
        <span className="font-medium">brain-storming puzzles</span>. I&apos;m
        also very interested in{" "}
        <span className="font-medium">History & Global Politics</span> and
        learning to play the piano.
      </p>
    </motion.section>
  );
}
