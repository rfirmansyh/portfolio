"use client";

import BadgeBase from "./badge-base";
import Tailwind from "@/public/icon/brand/tailwind.svg";

const BadgeTailwind = () => {
  return (
    <BadgeBase
      icon={<Tailwind />}
      rootClass="border-[#25BABD]"
      label="Tailwind"
    />
  );
};

export default BadgeTailwind;
