"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About", 1);
  return (
    <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
            After graduating with a Bachelors degree in{" "}
            <span className="underline">Computer Engineering</span> from <span className="underline">Stevens Institute of Technology</span> and a Masters degree in <span className="underline">Computer Science</span> from <span className="underline">University of Southern California</span>.,
            I am currently working as a software engineer for 3 years at <span className="underline">Network to Code</span>.
        </p>
        <p>
            My core stack is{" "}
            <span className="underline font-bold">
            React, Python/Java/Node.js, and PostgreSQL/MongoDB
            </span>.
            I am also familiar with <span className="underline font-bold">TypeScript</span>.
            I am currently looking for a <span className="underline font-bold">full-stack/backend</span> software engineer position.
        </p>
    </motion.section>
  )
}
