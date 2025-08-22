"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="container px-4 max-w-[980px] mx-auto pt-[180px]">
      <motion.h1
        className="font-semibold capped-text-heading tracking-tighter text-neutral-1200"
        style={{ width: "max-content" }}
      >
        <motion.span
          initial={{ opacity: 0, filter: "blur(4px)", scale: 0.98 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "inline-block" }}
        >
          Upload video.
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, filter: "blur(4px)", scale: 0.98 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: "inline-block" }}
        >
          Download captions.
        </motion.span>
      </motion.h1>

      <div className="pt-6"></div>

      <motion.p
        initial={{ opacity: 0, filter: "blur(4px)", scale: 0.99 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="font-semibold capped-text-subheading tracking-tight text-neutral-900"
        style={{ width: "max-content" }}
      >
        Transcribe and create captions for your videos.
      </motion.p>
    </div>
  );
}
