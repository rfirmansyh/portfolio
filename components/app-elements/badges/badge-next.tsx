"use client";

import BadgeBase from "./badge-base";
import Next from "@/public/icon/brand/next.svg";

const BadgeNext = () => {
  return (
    <BadgeBase icon={<Next />} rootClass="border-[#000000]" label="Next" />
  );
};

export default BadgeNext;
