"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
};

export function ScrollReveal({
  children,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start 90%", "start 30%"],
  })

  const y = useTransform(scrollYProgress, [0,1], [80,0])



  return (
    <motion.div
    ref={ref}
      style={{
        y,
      }}
      // initial={{
      //   opacity: 0,
      //   y: 80,
      // }}
      // whileInView={{
      //   opacity: 1,
      //   y: 0,
      // }}
      // viewport={{
      //   once: true,
      //   amount: 0.2,
      // }}
      // transition={{
      //   duration: 0.8,
      //   delay,
      //   ease: [0.22, 1, 0.36, 1],
      // }}
    >
      {children}
    </motion.div>
  );
}