import { v4 as uuidv4 } from "uuid";
import SageGardenAboutImg from "./assets/sage/about.png";
import SageGardenHomeImg from "./assets/sage/home.png";
import SageGardenServicesImg from "./assets/sage/services.png";

import CorgiImg from "./assets/corgi.png";
import FatesImg from "./assets/fates.jpg";
import HeroImg from "./assets/Hero.png";
import JimiImg from "./assets/jimi.png";
import LlamaImg from "./assets/llama.svg";
import MijaImg from "./assets/mija.svg";
import SwanImg from "./assets/swan.svg";
import WolfImg from "./assets/wolf.svg";

export const portfolio = [
  {
    name: "Sage Garden",
    mainImg: SageGardenHomeImg,
    description:
      "Website for a naturopathic doctor designed in Figma and built in Wordpress",
    gallery: [SageGardenServicesImg, SageGardenAboutImg],
    type: "website",
    link: "http://sagegardennaturalmedicine.com/",
    id: uuidv4(),
  },

  {
    name: "Fates",
    mainImg: FatesImg,
    description:
      "The drawing that started it all. It was meant to be a small project that ended up taking over a year to complete. Graphite.",
    gallery: [],
    type: "art",
    id: uuidv4(),
  },

  {
    name: "Hero",
    mainImg: HeroImg,
    description: "The drawing that solidified my love of charcoal.",
    gallery: [],
    type: "art",
    id: uuidv4(),
  },
  {
    name: "Jimi",
    mainImg: JimiImg,
    description:
      "It's a charcoal portait of Jimi Hendrix. I don't know what else you want to hear.",
    gallery: [],
    type: "art",
    id: uuidv4(),
  },
  {
    name: "Mija's Bakery",
    mainImg: MijaImg,
    description: "Logo for a California-based baker.",
    gallery: [],
    type: "art",
    id: uuidv4(),
  },
  {
    name: "Corgi",
    mainImg: CorgiImg,
    description:
      "Cute Valentine's Day Corgi created for a cryptography challenge.",
    gallery: [],
    type: "art",
    id: uuidv4(),
  },

  {
    name: "Swan Icon",
    mainImg: SwanImg,
    description: "Icon for a cyber security firm.",
    gallery: [],
    type: "art",
    id: uuidv4(),
  },
  {
    name: "Wolf Icon",
    mainImg: WolfImg,
    description: "Icon for a cyber security firm.",
    gallery: [],
    type: "art",
    id: uuidv4(),
  },
  {
    name: "Llama Icon",
    mainImg: LlamaImg,
    description: "Icon for a cyber security firm.",
    gallery: [],
    type: "art",
    id: uuidv4(),
  },
];

export const experienceData = [
  {
    company: "Seasoft",
    roles: [
      {
        title: "Senior Web Developer",
        dates: "12/24 – Present",
        achievements: [
          "Collaborated with design to modernize UI of product used by 90% of Fortune 500",
          "Led all architecture design decisions for updated TRMS Web UI",
          "Integrated front-end of database management tool with Springboot backend using TanStack Query",
          "Migrated company version control from server running git to a Linux VM hosting GitLab",
          "Served as GCP expert for joint Seasoft–Macy’s project, overseeing architecture and integration",
        ],
      },
    ],
  },
  {
    company: "Cario",
    roles: [
      {
        title: "Senior Full-Stack Engineer",
        dates: "07/24 – 12/24",
        achievements: [
          "Promoted after taking over UI/UX responsibilities and developing ML-driven title validation prototype",
          "Built front end of digital car title platform (Next.js, TypeScript, MUI)",
          "Co-developed Python NLP service using AWS Textract and LLMs for title validation",
        ],
      },
      {
        title: "Full-Stack Engineer",
        dates: "11/23 – 07/24",
        achievements: [
          "Designed Figma dashboards for DMVs to track workloads and metrics",
          "Integrated GRPC APIs to support car title creation, transfer, and lien management",
        ],
      },
      {
        title: "Front-End Developer",
        dates: "03/22 – 11/23",
        achievements: [
          "Developed front end for AI-driven vehicle buying experience, increasing engagement by 54%",
          "Practiced full Agile workflow: sprint planning, stand-ups, demos, retrospectives",
        ],
      },
    ],
  },
  {
    company: "Freelance",
    roles: [
      {
        title: "Web Developer & Graphic Designer",
        dates: "12/19 – Present",
        achievements: [
          "Created and hosted a Python app in GCP to automate backend ops for a rideshare service",
          "Designed and hosted custom websites and web apps for clients in multiple industries",
        ],
      },
    ],
  },
  {
    company: "Morgan Stanley",
    roles: [
      {
        title: "Senior Registered Service Associate",
        dates: "04/19 – 03/22",
        achievements: [
          "Managed and mentored junior associates in technologies, policies, and best practices",
          "Acted as point of contact for institutional and high net-worth client support",
        ],
      },
    ],
  },
];
