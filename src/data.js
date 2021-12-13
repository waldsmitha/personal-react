import { v4 as uuidv4 } from "uuid";

export const portfolio = [
  {
    name: "Ignite",
    mainImg: "ignite/home.png",
    description:
      "Instructor led React.js project website that pulls from an API to dynamically render the UI. State managed with Redux.",
    gallery: [
      "ignite/upcoming.png",
      "ignite/popular.png",
      "ignite/details.png",
      "ignite/details2.png",
    ],
    link: "https://gifted-bardeen-3faafd.netlify.app/",
    type: "website",
    id: uuidv4(),
  },
  {
    name: "Heart Nouveau",
    mainImg: "heart/home.png",
    description:
      "Fake website for a fake band. It was a fun experiment in javascript-based animations using GSAP.",
    gallery: [
      "heart/home.png",
      "heart/album.png",
      "heart/tour.png",
      "heart/contact.png",
    ],
    link: "https://waldsmitha.github.io/heart/",
    type: "website",
    id: uuidv4(),
  },
  {
    name: "Sage Garden",
    mainImg: "sage/home.png",
    description:
      "Website for a naturopathic doctor designed in Figma and built in Wordpress",
    gallery: ["sage/services.png", "sage/about.png"],
    type: "website",
    link: "http://sagegardennaturalmedicine.com/",
    id: uuidv4(),
  },
  {
    name: "Capture",
    mainImg: "capture/home.png",
    description:
      "Instructor led React.js project that dives into React Router and animations using Framer Motion.",
    gallery: ["capture/athlete.png", "capture/services.png", "capture/faq.png"],
    type: "website",
    link: "https://focused-einstein-501c8e.netlify.app/",
    id: uuidv4(),
  },
  {
    name: "Fates",
    mainImg: "fates.jpg",
    description:
      "The drawing that started it all. It was meant to be a small project that ended up taking over a year to complete. Graphite.",
    gallery: [],
    type: "art",
    id: uuidv4(),
  },
  {
    name: "Hand Rider",
    mainImg: "hand-rider.JPG",
    description: "Fun foray into digital art.",
    gallery: [],
    type: "art",
    id: uuidv4(),
  },
  {
    name: "Hero",
    mainImg: "Hero.png",
    description: "The drawing that solidified my love of charcoal.",
    gallery: [],
    type: "art",
    id: uuidv4(),
  },
  {
    name: "Jimi",
    mainImg: "jimi.png",
    description:
      "It's a charcoal portait of Jimi Hendrix. I don't know what else you want to hear.",
    gallery: [],
    type: "art",
    id: uuidv4(),
  },
  {
    name: "Mija's Bakery",
    mainImg: "mija.svg",
    description: "Logo for a California-based baker.",
    gallery: [],
    type: "design",
    id: uuidv4(),
  },
  {
    name: "Corgi",
    mainImg: "corgi.PNG",
    description:
      "Cute Valentine's Day Corgi created for a cryptography challenge.",
    gallery: [],
    type: "design",
    id: uuidv4(),
  },
  {
    name: "Socio Harmonic",
    mainImg: "socio.png",
    description: "Poster design for a fake band.",
    gallery: [],
    type: "design",
    id: uuidv4(),
  },
  {
    name: "Swan Icon",
    mainImg: "swan.svg",
    description: "Icon for a cyber security firm.",
    gallery: [],
    type: "design",
    id: uuidv4(),
  },
  {
    name: "Wolf Icon",
    mainImg: "wolf.svg",
    description: "Icon for a cyber security firm.",
    gallery: [],
    type: "design",
    id: uuidv4(),
  },
  {
    name: "Llama Icon",
    mainImg: "llama.svg",
    description: "Icon for a cyber security firm.",
    gallery: [],
    type: "design",
    id: uuidv4(),
  },
];

export const serviceData = [
  {
    header: "Create a web presence with style",
    body: "A business's online presence is critical to its success & can be a defining factor in client acquisition. Together, we can create the website that best represents your brand.",
    id: uuidv4(),
    link: "View Websites",
  },
  {
    header: "Design a unique logo for your business",
    body: "A strong logo grabs attention, is memorable, and separates you from the competition. It's time to bring yours to life.",
    id: uuidv4(),
    link: "View Designs",
  },
  {
    header: "Commission a beautiful piece of art",
    body: "Physical or digital, I can create the one of a kind piece of your dreams.",
    // gallery: ["fates.jpg", "Hero.png", "corgi.PNG"],
    id: uuidv4(),
    link: "View Art",
  },
];
