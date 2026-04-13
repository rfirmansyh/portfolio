"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type ThumbnailPreviewerProps = {
  src: StaticImageData | string;
  srcHD: StaticImageData | string;
  alt: string;
  companyName: string;
  role: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
};

export function ThumbnailPreviewer({
  src,
  srcHD,
  alt,
  companyName,
  role,
  containerRef,
}: ThumbnailPreviewerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Clickable thumbnail */}
      <button
        type="button"
        aria-label={`Preview ${companyName} thumbnail`}
        onClick={() => setOpen(true)}
        className="group relative flex-none w-[8.4em] h-[4.8em] text-[8px] rounded-[4px] overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#145DD9] focus-visible:ring-offset-2"
      >
        <Image
          fill
          src={src}
          alt={alt}
          style={{ objectFit: "cover" }}
          sizes="84px"
        />
        {/* hover overlay */}
        <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </span>
      </button>

      {/* Modal dialog — portalled into containerRef when provided */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="p-0 overflow-hidden border-0 bg-transparent shadow-none gap-0"
          {...(containerRef?.current
            ? { container: containerRef.current }
            : {})}
        >
          {/* visually hidden title for a11y */}
          <DialogTitle className="sr-only">
            {companyName} — {role}
          </DialogTitle>

          <div className="relative aspect-video rounded-t-[10px] overflow-hidden shadow-2xl ring-1 ring-black/10">
            <Image
              fill
              src={srcHD}
              alt={alt}
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* caption bar */}
          <div className="rounded-b-[10px] pt-[18px] pb-[12px] px-[20px] bg-white/90 backdrop-blur-sm">
            <p className="text-[13px] font-semibold text-[#1A1A1A] leading-snug">
              {role} at {companyName}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
