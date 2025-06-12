"use client";

import { motion } from "framer-motion";
import React from "react";

type AnimatedTextProps = {
  text: string;
  el?: React.ElementType;
  className?: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 }, // From 0.08 -> Faster stagger
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 300 }, // From 100 -> Snappier spring
  },
};

const AnimatedText = ({ text, el: Wrapper = "p", className }: AnimatedTextProps) => {
  return (
    <Wrapper className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label={text}
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;