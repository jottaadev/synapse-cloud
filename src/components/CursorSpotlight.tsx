"use client";

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function CursorSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const background = useTransform(
    [smoothMouseX, smoothMouseY],
    ([newX, newY]) => `radial-gradient(400px at ${newX}px ${newY}px, rgba(0, 191, 255, 0.08), transparent 80%)`
  );

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{ background }}
    />
  );
}