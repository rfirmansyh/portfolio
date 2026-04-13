'use client'

import SectionContent from '@/components/app-elements/section-content'
import SectionLatestUpdate from '@/components/app-elements/section-latest-update'
import SectionProfile from '@/components/app-elements/section-profile'
import SectionTechStack from '@/components/app-elements/section-techstack'
import { useGSAP, } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, type FC } from 'react'
import type { ViewVersionProps } from './desktop-version'

gsap.registerPlugin(useGSAP);

const MobileVersion: FC<ViewVersionProps> = ({
  content,
  isStreaming
}) => {
  const mainRef = useRef<HTMLDivElement>(null);

  const handleMobileAnimation = () => {
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
      top: '232',
      left: '0',
      delay: 1,
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
        handleMobileAnimation()
      }
    },
    { scope: mainRef, dependencies: [isStreaming] },
  );

  return (
    <main ref={mainRef} className="relative w-[calc(100dvw-16px)] lg:max-w-[540px] min-h-[calc(100dvh-16px)] mx-auto z-3">
      <SectionProfile view="mobile" />
      {/* <SectionTechStack />
      <SectionLatestUpdate /> */}

      <SectionContent {...content} />
    </main>
  )
}

export default MobileVersion