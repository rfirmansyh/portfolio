"use client";

import BadgeBase from "./badge-base";
import Typescript from "@/public/icon/brand/typescript.svg";

const BadgeTypescript = () => {
  return (
    <BadgeBase
      icon={<Typescript />}
      rootClass="border-[#007ACC]"
      label="Typescript"
    />
  );
};

export default BadgeTypescript;
