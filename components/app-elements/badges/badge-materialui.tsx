"use client";

import BadgeBase from "./badge-base";
import MaterialUI from "@/public/icon/brand/materialui.svg";

const BadgeMaterialUI = () => {
  return (
    <BadgeBase
      icon={<MaterialUI />}
      rootClass="border-[#007FFF]"
      label="MaterialUI"
    />
  );
};

export default BadgeMaterialUI;
