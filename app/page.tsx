"use client";

/* todo
- responsive content
*/

import ExpMengantar from "@/public/experiences/mengantar.png";
import ExpKappa from "@/public/experiences/kappa.png";
import ExpRootpixel from "@/public/experiences/rootpixel.png";
import ExpMengantarHD from "@/public/experiences/mengantar-hd.jpg";
import ExpKappaHD from "@/public/experiences/kappa-hd.jpg";
import ExpRootpixelHD from "@/public/experiences/rootpixel-hd.jpg";
import Background from "@/components/app-elements/background";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useMediaQuery } from "@/lib/hooks/use-media-query";
import dynamic from "next/dynamic";

const DesktopVersion = dynamic(() => import('@/components/desktop-version'), { ssr: false })
const MobileVersion = dynamic(() => import('@/components/mobile-version'), { ssr: false })

const reasoningSteps = [
  "As Software Engineer he is either a magician or a someone who can turn coffee and late nights into interactive and high-performance apps that make your product running smoothly and your users engaged",
].join("");

const dataExperiences = [
  {
    showDetail: true,
    thumbnail: ExpMengantar,
    thumbnailHD: ExpMengantarHD,
    companyName: "Mengantar",
    role: "Senior Front-End Developer",
    location: "Malang, Indonesia",
    type: "Full-time Remote",
    startAt: new Date(2023, 9),
    endAt: new Date(),
    careerProgressions: [
      {
        role: "Fullstack Developer",
        startAt: new Date(2026, 0),
        endAt: new Date(),
      },
      {
        role: "Senior Front-End Developer",
        startAt: new Date(2024, 9),
        endAt: new Date(2025, 11),
      },
      {
        role: "Front-End Developer",
        startAt: new Date(2023, 10),
        endAt: new Date(2024, 9),
      },
    ],
    responsibilities: [
      "Created a reusable frontend integration blueprint that centralized vendor logic, eliminating duplicated code and tech debt, significantly improving long-term maintainability.",
      "Accelerated feature delivery by optimizing the integration codebase, reducing development time from up to one month to just one week.",
      "Successfully developed the sheet-editor and cargo expedition features, significantly improving user accessibility to Mengantar.com's core services",
    ],
    tools: ["nuxt", "express", "slack", "github", "jira"],
  },
  {
    showDetail: false,
    thumbnail: ExpKappa,
    thumbnailHD: ExpKappaHD,
    companyName: "Kappa",
    role: "Front-End Web Developer",
    location: "Bucharest, Romania",
    type: "Full-time Remote",
    startAt: new Date(2022, 0),
    endAt: new Date(2023, 8),
    careerProgressions: [
      {
        role: "Front-End Web Developer",
        startAt: new Date(2022, 0),
        endAt: new Date(2023, 8),
      }
    ],
    responsibilities: [
      "Developed cross-browser compatible and mobile-responsive websites.",
      "Collaborated with designers and backend developers to implement visually appealing and user-friendly interfaces.",
      "Implemented UI/UX best practices on available website designs.",
      "Refactored code to improve readability and maintainability.",
      "Collaborated with back-end developers on complex projects to produce desired results.",
    ],
    tools: ["nuxt", "express", "slack", "github", "jira"],
  },
  {
    showDetail: false,
    thumbnail: ExpRootpixel,
    thumbnailHD: ExpRootpixelHD,
    companyName: "Rootpixel",
    role: "Front-End Web Developer",
    location: "Jember, Indonesia",
    type: "Full-time Remote",
    startAt: new Date(2019, 6),
    endAt: new Date(2021, 6),
    careerProgressions: [
      {
        role: "Front-End Web Developer",
        startAt: new Date(2019, 6),
        endAt: new Date(2021, 6),
      }
    ],
    responsibilities: [
      "Developed a responsive user interface for a website using HTML, CSS and JavaScript",
      "Collaborated with designers and backend developers to implement visually appealing and user-friendly interfaces.",
      "Worked in close collaboration with product, design, and back-end engineers",
      "Used Project management tool and Agile Software development lifecycle",
      "Used version control tools to manage source code and distribute version releases",
    ],
    tools: ["nuxt", "express", "slack", "github", "jira"],
  },
];

gsap.registerPlugin(useGSAP);

export default function Home() {
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
  const { contextSafe } = useGSAP(
    () => {
      if (isMobile) {
        if (loaded && !isStreaming) {
          handleMobileAnimation()
        }
      } else {
        // handleDesktopSetter()
        if (loaded && !isStreaming) {
          handleDesktopAnimation()
        }
      }
    },
    { scope: containerRef, dependencies: [loaded, isMobile, isStreaming] },
  );

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
  const handleLoad = () => {
    setTimeout(() => {
      setLoaded(true)
    }, 500);
  }
  const showExp = useCallback((open: boolean, editedIdx: number) => {
    setExperiences((prev) => {
      return prev.map((exp, idx) =>
        (idx === editedIdx ? { ...exp, showDetail: open } : exp)
      )
    })
  }, [])


  useEffect(() => {
    window.addEventListener('DOMContentLoaded', handleLoad);
    return () => window.removeEventListener('DOMContentLoaded', handleLoad);
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

      {isMobile
        ? (
          <MobileVersion
            content={{
              isActive: isStreaming,
              experiences,
              content,
              showExp,
              containerRef,
            }}
          />
        )
        : (
          <DesktopVersion
            content={{
              isActive: isStreaming,
              experiences,
              content,
              showExp,
              containerRef,
            }}
          />
        )}
    </div>
  );
}
