'use client'

import SectionContent, { type SectionContentProps } from '@/components/app-elements/section-content'
import SectionLatestUpdate from '@/components/app-elements/section-latest-update'
import SectionProfile from '@/components/app-elements/section-profile'
import SectionTechStack from '@/components/app-elements/section-techstack'
import { useEffect, useRef, type FC } from 'react'
import { useGSAP, } from "@gsap/react";
import { gsap } from "gsap";

export type ViewProps = {
  view?: 'desktop' | 'mobile';
}
export type ViewVersionProps = {
  isStreaming: boolean;
  content: SectionContentProps;
}

gsap.registerPlugin(useGSAP);

const DesktopVersion: FC<ViewVersionProps> = ({
  content,
  isStreaming
}) => {
  const mainRef = useRef<HTMLDivElement>(null);

  const handleDesktopAnimation = () => {
    // profile animation
    gsap.to("#profile", {
      top: '0',
      left: '0',
      delay: 1,
    });
    gsap.to("#profile-img", {
      x: 0,
      width: 72,
      height: 72,
      delay: 1,
    })
    gsap.to("#profile", {
      boxShadow: '0 4px 6px -1px #0000001a',
      borderColor: '#EEEDED',
      backgroundColor: "white",
      autoAlpha: 1,
      duration: 0.4,
      ease: "power2.out",
      delay: 1,
    });
    gsap.to("#profile-content-bio", {
      alignItems: "flex-start",
      y: 0,
      x: 0,
      delay: 1,
      onComplete: function () {
        gsap.to("#profile-content-status", {
          autoAlpha: 1,
          visibility: 'visible',
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to("#profile-content-divider", {
          autoAlpha: 1,
          visibility: 'visible',
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to("#profile-content-links", {
          autoAlpha: 1,
          visibility: 'visible',
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to("#profile-content-button", {
          autoAlpha: 1,
          visibility: 'visible',
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });

    // content animation
    gsap.to("#content", {
      top: '0',
      left: 'calc(100% - 760px)',
      delay: 1,
      onComplete: function () {
        gsap.set("#content", {
          position: 'relative',
        })
      }
    });

    // techstack animation
    gsap.to("#techstack", {
      top: '240px',
      autoAlpha: 1,
      visibility: 'visible',
      duration: 0.4,
      ease: "power2.out",
      delay: 1.2,
    });

    // latest-update animation
    gsap.to("#latest-update", {
      top: '440',
      autoAlpha: 1,
      visibility: 'visible',
      duration: 0.4,
      ease: "power2.out",
      delay: 1.4,
    });

    // content-generate-experience animation
    gsap.to("#content-generate-experience", {
      yPercent: 0,
      autoAlpha: 1,
      visibility: 'visible',
      duration: 0.4,
      ease: "power2.out",
      delay: 1.5,
    });
    content.experiences.forEach((_, idx) => {
      gsap.set(`#content-generate-experience-${idx}`, {
        yPercent: 10,
        autoAlpha: 1,
        display: 'none',
      });
      gsap.to(`#content-generate-experience-${idx}`, {
        yPercent: 0,
        autoAlpha: 1,
        display: 'block',
        duration: .5,
        ease: "power2.out",
        delay: (1.6 + (idx / 2)),
      });
    })
  }

  useGSAP(
    () => {
      if (!isStreaming) {
        handleDesktopAnimation()
      }
    },
    { scope: mainRef, dependencies: [isStreaming] },
  );

  return (
    <main ref={mainRef} className="relative w-full lg:max-w-[1150px] min-h-[660px] mx-auto z-3">
      <SectionProfile view="desktop" />
      <SectionTechStack />
      <SectionLatestUpdate />

      <SectionContent view="desktop" {...content} />
    </main>
  )
}

export default DesktopVersion