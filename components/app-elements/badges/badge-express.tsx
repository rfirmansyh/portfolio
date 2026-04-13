"use client";

import BadgeBase from "./badge-base";
import Express from "@/public/icon/brand/express.svg";

const BadgeExpress = () => {
  return (
    <BadgeBase
      icon={<Express />}
      rootClass="border-[#242938]"
      label="Express.js"
    />
  );
};

export default BadgeExpress;
