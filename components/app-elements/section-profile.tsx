"use client";

import { intervalToDuration } from "date-fns";
import { BookUser, Download } from "lucide-react";
import Image from "next/image";
import DividerLabeled from "./divider-labeled";
import FirmanPP from "@/public/firman-pp.png";

import IcLinkedlin from "@/public/icon/brand/linkedlin.svg";
import IcGmail from "@/public/icon/brand/gmail.svg";
import IcGithub from "@/public/icon/brand/github.svg";

import { Fragment, type CSSProperties, type FC } from "react";
import type { ViewProps } from "../desktop-version";
import { cn } from "@/lib/utils";

const contacts = [
  {
    icon: <IcLinkedlin width={14} />,
    link: "https://www.linkedin.com/in/rahmadfirmansyah-id/",
    text: "rahmadfirmansyah-id",
  },
  {
    icon: <IcGmail width={14} />,
    link: "mailto:rahmadfirmansyah.id@gmail.com",
    text: "rahmadfirmansyah.id",
  },
  {
    icon: <IcGithub width={14} />,
    link: "https://github.com/rfirmansyh",
    text: "rfirmansyh",
  },
];

const getYo = () => {
  const { years } = intervalToDuration({
    start: new Date(2000, 9, 10),
    end: new Date(),
  });

  return `${years}yo`;
};

const SectionProfile: FC<ViewProps & { onLoad: VoidFunction }> = ({ view = 'desktop', onLoad }) => {
  const rootClass = cn('w-full relative flex flex-col items-start gap-[16px] bg-white shadow-md rounded-[8px] border border-[#EEEDED] p-[20px]', {
    'max-w-[372px]': view === 'desktop',
  })
  const rootStyle: CSSProperties = view === 'desktop' ? {
    boxShadow: "unset",
    borderColor: 'transparent',
    backgroundColor: "transparent",
    top: 'calc(50% - 362px)',
    left: 'calc(50% - 186px)',
    position: 'absolute'
  } : {
    boxShadow: "unset",
    borderColor: 'transparent',
    backgroundColor: "transparent",
    top: 'calc(50% - 362px)',
    left: 'calc(50% - 186px)',
    position: 'absolute'
  }

  return (
    <Fragment>
      <div
        id="profile"
        className={rootClass}
        style={rootStyle}
      >
        <div className="flex items-center gap-[16px]">
          <div
            id="profile-img"
            className="bg-[#b0b0b0] relative rounded-full overflow-hidden w-[72px] h-[72px]"
            style={{
              width: 160,
              height: 160,
              transform: 'translate(50%, 0)'
            }}
          >
            <Image fill alt="Firman Profile Picture" src={FirmanPP} onLoad={onLoad} />
          </div>
          <div id="profile-content" className="flex flex-col items-start gap-[6px]">
            <div
              id="profile-content-bio"
              className="flex flex-col items-start gap-[6px]"
              style={{
                alignItems: "center",
                transform: 'translate(-100px, 145px)'
              }}
            >
              <h1 className="text-[#3E3E3E] text-nowrap text-[18px] font-mono font-semibold leading-none">
                Rahmad Firmansyah
              </h1>
              <h3 className="grid items-center auto-cols-max grid-flow-col gap-2 text-[14px] text-[#7F7F7F] font-sans font-normal">
                <span>{getYo()}</span>
                <hr className="w-[1px] bg-[#E5E5E5] h-[80%] border-none" />
                <span>Software Engineer</span>
              </h3>
            </div>

            <div
              id="profile-content-status"
              className="flex items-center gap-[6px] text-[10px] py-[2px] px-[8px] rounded-[4px] border border-[#58B865] text-[#58B865]"
              style={{
                visibility: "hidden",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12.1" cy="12.1" r="1"></circle>
              </svg>
              <span className="font-sans font-semibold">
                Open for collaboration
              </span>
            </div>
          </div>
        </div>

        <DividerLabeled
          id="profile-content-divider"
          icon={<BookUser size={10} />}
          label="Contacts"
          style={{
            visibility: "hidden",
          }}
        />

        <div
          id="profile-content-links"
          className="flex self-stretch items-center justify-between"
          style={{
            visibility: "hidden",
          }}
        >
          {contacts.map((contact) => (
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              key={contact.link}
              className="flex items-center gap-[6px] text-[10px] text-[#35495E] font-bold"
            >
              {contact.icon}
              <div>{contact.text}</div>
            </a>
          ))}
        </div>

        <a
          id="profile-content-button"
          href="/Rahmad_Firmansyah_Senior_Front-End_Developer_Profile.pdf"
          download="Rahmad_Firmansyah_Senior_Front-End_Developer_Profile.pdf"
          className="flex cursor-pointer items-center gap-[6px] text-[12px] py-[4px] px-[6px] rounded-[4px] border border-[#145DD9] text-[#145DD9]"
          style={{
            visibility: "hidden",
          }}
        >
          <Download size={14} />
          <div>Download Resume</div>
        </a>
      </div>
    </Fragment>
  );
};

export default SectionProfile;
