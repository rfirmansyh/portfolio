"use client";

import BadgeBase from "./badge-base";
import Github from "@/public/icon/brand/github.svg";

const BadgeGithub = () => {
  return (
    <BadgeBase icon={<Github />} rootClass="border-[#49475F]" label="Github" />
  );
};

export default BadgeGithub;
