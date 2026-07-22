"use client";

import { motion } from "framer-motion";

export default function ProjectAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      className="mx-auto max-w-4xl px-6 py-28 sm:px-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.main>
  );
}