import { type FC } from "react";
import BadgeNuxt from "./badge-nuxt";
import BadgeBase from "./badge-base";
import Empty from "@/public/icon/brand/empty.svg";
import BadgeExpress from "./badge-express";
import BadgeSlack from "./badge-slack";
import BadgeGithub from "./badge-github";
import BadgeJira from "./badge-jira";
import BadgeJavascript from "./badge-javascript";
import BadgeTypescript from "./badge-typescript";
import BadgeReact from "./badge-react";
import BadgeNext from "./badge-next";
import BadgeVue from "./badge-vue";
import BadgePlaywright from "./badge-playwright";
import BadgeJest from "./badge-jest";
import BadgeCypress from "./badge-cypress";
import BadgeTailwind from "./badge-tailwind";
import BadgeScss from "./badge-scss";
import BadgeStyled from "./badge-styled";
import BadgeMaterialUI from "./badge-materialui";
import BadgeShadCN from "./badge-shadcn";

export type BadgeSlug =
  | "nuxt"
  | "express"
  | "slack"
  | "github"
  | "jira"
  | "javascript"
  | "typescript"
  | "react"
  | "next"
  | "vue"
  | "playwright"
  | "jest"
  | "cypress"
  | "tailwind"
  | "scss"
  | "styled"
  | "materialui"
  | "shadcn"; // "nuxt" | "express" | ...

export type BadgesProps = {
  slug: BadgeSlug;
};
const Badges: FC<BadgesProps> = ({ slug }) => {
  switch (slug) {
    case "nuxt":
      return <BadgeNuxt />;
    case "express":
      return <BadgeExpress />;
    case "slack":
      return <BadgeSlack />;
    case "github":
      return <BadgeGithub />;
    case "jira":
      return <BadgeJira />;
    case "javascript":
      return <BadgeJavascript />;
    case "typescript":
      return <BadgeTypescript />;
    case "react":
      return <BadgeReact />;
    case "next":
      return <BadgeNext />;
    case "vue":
      return <BadgeVue />;
    case "playwright":
      return <BadgePlaywright />;
    case "jest":
      return <BadgeJest />;
    case "cypress":
      return <BadgeCypress />;
    case "tailwind":
      return <BadgeTailwind />;
    case "scss":
      return <BadgeScss />;
    case "styled":
      return <BadgeStyled />;
    case "materialui":
      return <BadgeMaterialUI />;
    case "shadcn":
      return <BadgeShadCN />;
    default:
      return (
        <BadgeBase
          icon={<Empty />}
          rootClass="border-[#7F7F7F]"
          label="No Label"
        />
      );
  }
};

export default Badges;
