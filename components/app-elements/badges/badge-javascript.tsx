"use client";

import BadgeBase from "./badge-base";
import Javascript from "@/public/icon/brand/javascript.svg";

const BadgeJavascript = () => {
  return (
    <BadgeBase
      icon={<Javascript />}
      rootClass="border-[#F7DF1E]"
      label="Javascript"
    />
  );
};

export default BadgeJavascript;
