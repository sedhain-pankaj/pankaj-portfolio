"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.35);
  const { theme } = useTheme();

  const ref2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["0 1", "1.1 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <motion.div
        ref={ref2}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
      >
        <VerticalTimeline lineColor="" animate={false}>
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  borderRadius: "1rem",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: theme === "light" ? "white" : "#a8a29e",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize text-xl">{item.title}</h3>
                <p className="font-normal !mt-1 underline">{item.location}</p>
                <p className="!mt-2 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
}
