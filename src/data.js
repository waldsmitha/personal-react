import { v4 as uuidv4 } from "uuid";

export const portfolio = [
  {
    name: "Ignite",
    mainImg: "socio.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie cursus donec in turpis. Justo ultricies ultrices bibendum nisl, pellentesque est lacus blandit ac.",
    gallery: ["socio.png", "socio.png", "socio.png", "socio.png"],
    type: "website",
    id: uuidv4(),
  },
  {
    name: "Test2",
    mainImg: "corgi.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie cursus donec in turpis. Justo ultricies ultrices bibendum nisl, pellentesque est lacus blandit ac.",
    gallery: ["corgi.PNG", "corgi.PNG", "corgi.PNG", "corgi.PNG"],
    type: "art",
    id: uuidv4(),
  },
  {
    name: "Test3",
    mainImg: "crowned.JPG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie cursus donec in turpis. Justo ultricies ultrices bibendum nisl, pellentesque est lacus blandit ac.",
    gallery: ["crowned.JPG", "crowned.JPG", "crowned.JPG", "crowned.JPG"],
    type: "design",
    id: uuidv4(),
  },
];

export const serviceData = [
  {
    header: "Create a web presence with style",
    body: "Whether you want a website built in Wordpress, Webflow, or coded from scratch, I will work with you to develop your digital presence and bring your website to life.",
    gallery: ["socio.png"],
    id: uuidv4(),
  },
  {
    header: "Design a unique logo for your unique business",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sapien, elit, turpis ac scelerisque nibh vulputate risus. At quam purus lorem mauris consectetur.",
    gallery: ["socio.png"],
    id: uuidv4(),
  },
  {
    header: "Commission a beautiful, one of a kind piece of art",
    body: "Physical or digital, I can create that one of a kind piece you have been dreaming of.",
    gallery: ["socio.png", "socio.png", "socio.png"],
    id: uuidv4(),
  },
];
