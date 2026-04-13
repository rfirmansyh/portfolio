"use client";

import BadgeBase from "./badge-base";
import Nuxt from "@/public/icon/brand/nuxt.svg";

const BadgeNuxt = () => {
  return (
    <BadgeBase icon={<Nuxt />} rootClass="border-[#00DC82]" label="Nuxt.js" />
  );
};

export default BadgeNuxt;
