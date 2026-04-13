"use client";

import BadgeBase from "./badge-base";
import Jest from "@/public/icon/brand/jest.svg";

const BadgeJest = () => {
  return (
    <BadgeBase icon={<Jest />} rootClass="border-[#99425B]" label="Jest" />
  );
};

export default BadgeJest;
