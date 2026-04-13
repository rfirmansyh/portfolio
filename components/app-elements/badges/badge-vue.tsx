"use client";

import BadgeBase from "./badge-base";
import Vue from "@/public/icon/brand/vue.svg";

const BadgeVue = () => {
  return <BadgeBase icon={<Vue />} rootClass="border-[#41B883]" label="Vue" />;
};

export default BadgeVue;
