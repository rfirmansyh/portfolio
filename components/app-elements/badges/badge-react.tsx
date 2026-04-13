"use client";

import BadgeBase from "./badge-base";
import React from "@/public/icon/brand/react.svg";

const BadgeReact = () => {
  return (
    <BadgeBase icon={<React />} rootClass="border-[#00D8FF]" label="React" />
  );
};

export default BadgeReact;
