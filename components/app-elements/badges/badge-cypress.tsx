"use client";

import BadgeBase from "./badge-base";
import Cypress from "@/public/icon/brand/cypress.svg";

const BadgeCypress = () => {
  return (
    <BadgeBase
      icon={<Cypress />}
      rootClass="border-[#315C55]"
      label="Cypress"
    />
  );
};

export default BadgeCypress;
