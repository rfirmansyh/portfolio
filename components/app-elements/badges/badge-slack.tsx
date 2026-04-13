"use client";

import BadgeBase from "./badge-base";
import Slack from "@/public/icon/brand/slack.svg";

const BadgeSlack = () => {
  return (
    <BadgeBase icon={<Slack />} rootClass="border-[#35C5F0]" label="Slack" />
  );
};

export default BadgeSlack;
