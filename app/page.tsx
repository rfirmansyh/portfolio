import ExpMengantar from "@/public/experiences/mengantar.png";
import ExpKappa from "@/public/experiences/kappa.png";
import ExpRootpixel from "@/public/experiences/rootpixel.png";
import ExpMengantarHD from "@/public/experiences/mengantar-hd.jpg";
import ExpKappaHD from "@/public/experiences/kappa-hd.jpg";
import ExpRootpixelHD from "@/public/experiences/rootpixel-hd.jpg";
import ViewPage from "@/components/view-page";

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

const Home = () => {
  return (
    <ViewPage
      dataExperiences={dataExperiences}
      reasoningSteps={reasoningSteps}
    />
  )
}

export default Home