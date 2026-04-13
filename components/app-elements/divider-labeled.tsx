"use client";

import { cn } from "@/lib/utils";
import type { CSSProperties, FC, ReactNode } from "react";

type DividerLabeledProps = {
  icon: ReactNode;
  id?: string;
  label: string;
  className?: string;
  style?: CSSProperties;
};
const DividerLabeled: FC<DividerLabeledProps> = ({
  id,
  icon,
  label,
  className,
  style
}) => {
  return (
    <div
      id={id}
      role="separator"
      className={cn(
        "flex self-stretch items-center text-[#7F7F7F]",
        className,
      )}
      style={style}
    >
      <div className="flex-none">{icon}</div>
      <div className="flex-none text-[10px] py-[2px] px-[8px] bg-white">
        {label}
      </div>
      <div className="flex-1 h-[1px] bg-[#F3EFEF] rounded-[1px]"></div>
    </div>
  );
};

export default DividerLabeled;
