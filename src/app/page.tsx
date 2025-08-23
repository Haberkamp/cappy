"use client";

import { motion } from "motion/react";
import {
  transcribe,
  canUseWhisperWeb,
  resampleTo16Khz,
  downloadWhisperModel,
} from "@remotion/whisper-web";
import { useEffect, useState } from "react";
import { Button, DropZone, FileTrigger, Text } from "react-aria-components";

const modelToUse = "tiny.en";

const ALLOWED_FILE_TYPES = [
  "audio/mp3",
  "audio/mpeg",
  "audio/mp4",
  "audio/wav",
  "video/mp4",
  "video/mov",
] as const;

const MotionDropZone = motion.create(DropZone);

export default function Home() {
  const [downloadProgress, setDownloadProgress] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const downloadModel = async () => {
      const { supported: doesSupportWhisper, detailedReason } =
        await canUseWhisperWeb(modelToUse);

      if (!doesSupportWhisper) {
        throw new Error(
          "Failed to download AI model; The browser does not support downloading the model. Reason: " +
            detailedReason
        );
      }

      downloadWhisperModel({
        model: modelToUse,
        onProgress: ({ progress }) => {
          setDownloadProgress(Math.round(progress * 100));
        },
      });
    };

    downloadModel();
  }, []);

  return (
    <div className="container px-4 max-w-[980px] mx-auto py-16 md:py-32 lg:py-[180px]">
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
        className="font-semibold capped-text-subheading tracking-tight text-neutral-900 w-fit text-balance"
      >
        Transcribe and create captions for your videos.
      </motion.p>

      <div className="pt-16"></div>

      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)", scale: 0.99, y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="relative"
      >
        <MotionDropZone
          getDropOperation={(types) =>
            ALLOWED_FILE_TYPES.some((type) => types.has(type))
              ? "copy"
              : "cancel"
          }
          className={({ isDropTarget, isFocusVisible }) =>
            "relative z-20 border w-full min-h-[400px] rounded-2xl grid place-items-center px-8 " +
            (isDropTarget
              ? " bg-accent-100 border-accent-600 outline-4 outline-accent-600/25"
              : "border-neutral-600 bg-neutral-100") +
            (isFocusVisible
              ? " outline-2 outline-accent-900 outline-offset-2"
              : "")
          }
          style={{ boxShadow: "0 0 7px 0 rgba(0, 0, 0, 0.05)" }}
        >
          {({ isDropTarget }) => (
            <div className="flex flex-col items-center">
              <Text
                slot="label"
                className={
                  "text-center font-semibold capped-text-subheading tracking-tight text-balance " +
                  (isDropTarget ? " text-accent-1200" : "text-neutral-1200")
                }
              >
                Drag and drop a file to create captions
              </Text>

              <div className="pt-4"></div>

              <p
                className={
                  "text-center capped-text-body text-balance " +
                  (isDropTarget ? " text-accent-1100" : "text-neutral-900")
                }
              >
                You can upload a .mp3, .mp4, .wav and .mov file.
              </p>

              <div className="pt-6"></div>

              <FileTrigger
                allowsMultiple={false}
                acceptedFileTypes={ALLOWED_FILE_TYPES}
                onSelect={(fileList) => {
                  const file = fileList?.[0];

                  if (!file) {
                    throw new Error("Failed to upload file; No file selected.");
                  }

                  console.log({ file });
                }}
              >
                <Button
                  className={({ isFocusVisible, isHovered }) =>
                    "text-white transition-colors ease-(--ease-out-quint) duration-200 flex items-center gap-2 px-6 min-h-11 rounded-lg focus-visible:outline-accent-900 outline-offset-2 outline-2 cursor-pointer select-none" +
                    (isFocusVisible
                      ? " outline-2 outline-accent-900 outline-offset-2"
                      : "") +
                    (isHovered ? " bg-neutral-1100" : " bg-neutral-1200")
                  }
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
                </Button>
              </FileTrigger>
            </div>
          )}
        </MotionDropZone>

        <motion.div
          initial={{ y: -36 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: 2.4,
            type: "spring",
            mass: 0.5,
            damping: 19.8,
            stiffness: 400,
          }}
          className="flex items-center h-[36px] z-10 absolute left-1/2 -translate-x-1/2 top-[100%] w-9/10 bg-neutral-300 border border-t-0 border-neutral-600 rounded-b-lg py-3 px-3 flex items-center justify-between"
          style={{ boxShadow: "0 2px 3px rgba(0, 0, 0, 0.05)" }}
        >
          {typeof downloadProgress === "number" ? (
            <p className="capped-text-body text-neutral-1200 tabular-nums">
              Downloading AI: {downloadProgress}%
            </p>
          ) : null}
        </motion.div>
      </motion.div>
    </div>
  );
}
