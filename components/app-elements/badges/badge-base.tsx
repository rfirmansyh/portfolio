"use client";

import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

type BadgeBaseProps = {
  icon: ReactNode;
  label: string;
  rootClass?: string;
};

const BadgeBase: FC<BadgeBaseProps> = ({ icon, label, rootClass }) => {
  return (
    <div
      className={cn(
        "inline-flex flex-grow-0 items-center gap-[4px] py-[4px] px-[6px] border rounded-[4px]",
        rootClass,
      )}
    >
      <div className="w-[16px] h-[16px]">{icon}</div>
      <div className="text-[12px] font-bold">{label}</div>
    </div>
  );
};

export default BadgeBase;
