"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="container px-4 max-w-[980px] mx-auto pt-[180px]">
      <motion.h1 className="font-semibold capped-text-heading tracking-tighter text-neutral-1200 w-auto">
        <motion.span
          initial={{ opacity: 0, filter: "blur(4px)", scale: 0.98 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: "inline-block" }}
        >
          Upload video.
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, filter: "blur(4px)", scale: 0.98 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ display: "inline-block" }}
        >
          Download captions.
        </motion.span>
      </motion.h1>

      <div className="pt-6"></div>

      <motion.p
        initial={{ opacity: 0, filter: "blur(4px)", scale: 0.99 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="font-semibold capped-text-subheading tracking-tight text-neutral-900 w-auto text-balance"
      >
        Transcribe and create captions for your videos.
      </motion.p>

      <div className="pt-16"></div>

      <div
        className="border border-neutral-600 w-full min-h-[400px] rounded-2xl bg-neutral-100 grid place-items-center px-8"
        style={{ boxShadow: "0 0 7px 0 rgba(0, 0, 0, 0.05)" }}
      >
        <div className="flex flex-col items-center">
          <p className="text-center font-semibold capped-text-subheading text-neutral-1200 tracking-tight text-balance">
            Drag and drop a file to create captions
          </p>

          <div className="pt-4"></div>

          <p className="text-center capped-text-body text-neutral-900 text-balance">
            You can upload a .mp3, .mp4, .wav and .mov file.
          </p>

          <div className="pt-6"></div>

          <button
            className="text-white bg-neutral-1200 hover:bg-neutral-1100 transition-colors ease-(--ease-out-quint) duration-200 flex items-center gap-2 px-6 min-h-11 rounded-lg focus-visible:outline-accent-900 outline-offset-2 outline-2 cursor-pointer select-none"
            type="button"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 256 256"
              style={{ width: "18px", height: "18px" }}
            >
              <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z"></path>
            </svg>

            <span>Upload file</span>
          </button>
        </div>
      </div>
    </div>
  );
}
