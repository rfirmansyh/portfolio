"use client";

import BadgeBase from "./badge-base";
import Jira from "@/public/icon/brand/jira.svg";

const BadgeJira = () => {
  return (
    <BadgeBase icon={<Jira />} rootClass="border-[#1B75F0]" label="Jira" />
  );
};

export default BadgeJira;
