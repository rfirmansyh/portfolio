'use client';

import Background from "@/components/app-elements/background";
import { Activity, useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { useMediaQuery } from "@/lib/hooks/use-media-query";
import dynamic from "next/dynamic";

const DesktopVersion = dynamic(() => import('@/components/desktop-version'), { ssr: false })
const MobileVersion = dynamic(() => import('@/components/mobile-version'), { ssr: false })

// gsap.registerPlugin(useGSAP);

const ViewPage = ({
  dataExperiences,
  reasoningSteps
}: {
  dataExperiences: any[],
  reasoningSteps: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery("(max-width: 1150px)")

  const [loaded, setLoaded] = useState(false);
  const [content, setContent] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0);
  const [tokens, setTokens] = useState<string[]>([]);

  const [experiences, setExperiences] = useState(dataExperiences);

  const handleDesktopSetter = () => {
    // profile
    gsap.set("#profile", {
      boxShadow: "unset",
      borderColor: 'transparent',
      backgroundColor: "transparent",
      top: 'calc(50% - 362px)',
      left: 'calc(50% - 186px)',
      position: 'absolute'
    });
    gsap.set("#profile-img", {
      xPercent: 50,
      width: 160,
      height: 160,
    });
    gsap.set("#profile-content-bio", {
      alignItems: "center",
      y: 145,
      x: -100,
    });
    gsap.set("#profile-content-status", {
      visibility: "hidden",
    });
    gsap.set("#profile-content-divider", {
      visibility: "hidden",
    });
    gsap.set("#profile-content-links", {
      visibility: "hidden",
    });
    gsap.set("#profile-content-button", {
      visibility: "hidden",
    });

    // content
    gsap.set("#content", {
      top: 'calc(50% - 62px)',
      left: 'calc(50% - (760px / 2))',
      position: 'absolute'
    });

    // techstack
    gsap.set("#techstack", {
      visibility: "hidden",
      top: '100%',
      position: 'absolute'
    });

    // latest-update
    gsap.set("#latest-update", {
      visibility: "hidden",
      top: '100%',
      position: 'absolute'
    });

    // content-generate-experience
    gsap.set("#content-generate-experience", {
      visibility: "hidden",
      yPercent: 10,
    });
  }
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
    experiences.forEach((_, idx) => {
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
    experiences.forEach((_, idx) => {
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
  // const { contextSafe } = useGSAP(
  //   () => {
  //     console.log('loaded', loaded)
  //     if (isMobile) {
  //       if (loaded && !isStreaming) {
  //         handleMobileAnimation()
  //       }
  //     } else {
  //       // handleDesktopSetter()
  //       if (loaded && !isStreaming) {
  //         console.log('loaded', loaded)
  //         handleDesktopAnimation()
  //       }
  //     }
  //   },
  //   { scope: containerRef, dependencies: [loaded, isMobile, isStreaming] },
  // );

  // Function to chunk text into fake tokens of 3-4 characters
  const chunkIntoTokens = useCallback((text: string): string[] => {
    const tokens: string[] = [];
    let i = 0;
    while (i < text.length) {
      const chunkSize = Math.floor(Math.random() * 2) + 3; // Random size between 3-4
      tokens.push(text.slice(i, i + chunkSize));
      i += chunkSize;
    }
    return tokens;
  }, []);
  const showExp = useCallback((open: boolean, editedIdx: number) => {
    setExperiences((prev) => {
      return prev.map((exp, idx) =>
        (idx === editedIdx ? { ...exp, showDetail: open } : exp)
      )
    })
  }, [])


  useEffect(() => {
    const onReady = () => {
      // Defer slightly to ensure dynamically imported components have rendered
      setTimeout(() => {
        setLoaded(true);
        if (isMobile) {
          handleMobileAnimation()
        } else {
          handleDesktopAnimation()
        }
      }, 1000);
    };

    onReady();
  }, []);
  useEffect(() => {
    const tokenizedSteps = chunkIntoTokens(reasoningSteps);

    if (loaded) {
      // eslint-disable-next-line
      setTokens(tokenizedSteps);
      setContent("");
      setCurrentTokenIndex(0);
      setIsStreaming(true);
    }
  }, [loaded, chunkIntoTokens]);
  useEffect(() => {
    if (!isStreaming || currentTokenIndex >= tokens.length) {
      if (isStreaming) {
        // eslint-disable-next-line
        setIsStreaming(false);
      }
      return;
    }

    const timer = setTimeout(() => {
      setContent((prev) => prev + tokens[currentTokenIndex]);
      setCurrentTokenIndex((prev) => prev + 1);
    }, 25); // Faster interval since we're streaming smaller chunks

    return () => clearTimeout(timer);
  }, [isStreaming, currentTokenIndex, tokens]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-dvh min-w-dvw bg-white flex items-start xl:p-6 pt-6 lg:pt-[64px]!"
    >
      <Background />

      <Activity mode={isMobile ? 'visible' : 'hidden'}>
        <MobileVersion
          content={{
            isActive: isStreaming,
            experiences,
            content,
            showExp,
            containerRef,
          }}
        />
      </Activity>
      <Activity mode={!isMobile ? 'visible' : 'hidden'}>
        <DesktopVersion
          content={{
            isActive: isStreaming,
            experiences,
            content,
            showExp,
            containerRef,
          }}
        />
      </Activity>
    </div>
  );
}

export default ViewPage