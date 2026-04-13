"use client";

import BadgeBase from "./badge-base";
import Playwright from "@/public/icon/brand/playwright.svg";

const BadgePlaywright = () => {
  return (
    <BadgeBase
      icon={<Playwright />}
      rootClass="border-[#EF5350]"
      label="Playwright"
    />
  );
};

export default BadgePlaywright;
