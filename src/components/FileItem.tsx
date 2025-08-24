interface FileItemProps {
  fileName: string;
  secondaryInformation: string;
  fileExtension: string;
}

export default function FileItem({
  fileName,
  secondaryInformation,
  fileExtension,
}: FileItemProps) {
  return (
    <div className="flex items-end gap-3">
      <div
        className="w-[60px] h-[72px] rounded-lg bg-neutral-300 relative"
        aria-hidden="true"
      >
        <span
          className="select-none absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-100 bg-neutral-1200 rounded-full text-sm px-2 h-4 flex items-center justify-center"
          style={{
            fontSize: "10px",
            lineHeight: 1.1,
            fontWeight: 600,
          }}
        >
          {fileExtension}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="capped-text-body text-neutral-1200 font-semibold">
          {fileName}
        </div>

        <div className="capped-text-body text-neutral-900 tabular-nums">
          {secondaryInformation}
        </div>
      </div>
    </div>
  );
}
