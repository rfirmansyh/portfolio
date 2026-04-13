"use client";

import BadgeBase from "./badge-base";
import ShadCN from "@/public/icon/brand/shadcn.svg";

const BadgeShadCN = () => {
  return (
    <BadgeBase icon={<ShadCN />} rootClass="border-[#000000]" label="ShadCN" />
  );
};

export default BadgeShadCN;
