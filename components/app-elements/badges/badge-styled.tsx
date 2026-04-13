"use client";

import BadgeBase from "./badge-base";
import Styled from "@/public/icon/brand/styled-component.svg";

const BadgeStyled = () => {
  return (
    <BadgeBase icon={<Styled />} rootClass="border-[#FFD35E]" label="Styled" />
  );
};

export default BadgeStyled;
