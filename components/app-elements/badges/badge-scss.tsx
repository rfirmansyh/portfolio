"use client";

import BadgeBase from "./badge-base";
import Scss from "@/public/icon/brand/scss.svg";

const BadgeScss = () => {
  return (
    <BadgeBase icon={<Scss />} rootClass="border-[#CC6699]" label="Scss" />
  );
};

export default BadgeScss;
