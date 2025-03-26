import {
  boldo,
  people01,
  people02,
  people03,
  person01,
  person02,
  person03,
  presto,
  prod01,
  prod02,
  prod03,
  services01,
  services02,
  services03,
  servicesc01,
  servicesGB1,
  servicesGB2,
} from "../assets";

import { FaEye, FaSun, FaThermometer, HiCheck } from "../assets/icon";

export const navLinks = [
  {
    id: "services",
    title: "Services",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "login",
    title: "Login",
  },
];

export const clients = [
  {
    id: "boldo",
    title: "Boldo",
    logo: boldo,
  },
  {
    id: "presto",
    title: "Presto",
    logo: presto,
  },
];

export const duplicatedClients = [];

for (let i = 0; i < 3; i++) {
  duplicatedClients.push(...clients);
}

export const services = [
  {
    id: "services-1",
    img: services01,
    title: "Cool feature title",
    content: "Learning curve network effects return on investment.",
    link: "https://boldo.com/services/",
  },
  {
    id: "services-2",
    img: services02,
    title: "Cool feature title 2",
    content: "Learning curve network effects return on investment.",
    link: "https://boldo.com/services/",
  },
  {
    id: "services-3",
    img: services03,
    title: "Cool feature title 3",
    content: "Learning curve network effects return on investment.",
    link: "https://boldo.com/services/",
  },
];

export const servicesGroupB = [
  {
    id: "services-1",
    img: servicesGB1,
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    link: "https://boldo.com/services/",
    content: [
      {
        icon: HiCheck,
        content: "We connect our customers with the best.",
      },
      {
        icon: HiCheck,
        content: "Advisor success customer launch party.",
      },
      {
        icon: HiCheck,
        content: "Business-to-consumer long tail.",
      },
    ],
  },
  {
    id: "services-2",
    img: servicesGB2,
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    link: "#",
    content: [
      {
        icon: FaThermometer,
        content: "We connect our customers with the best.",
      },
      {
        icon: FaEye,
        content: "Advisor success customer launch party.",
      },
      {
        icon: FaSun,
        content: "Business-to-consumer long tail.",
      },
    ],
  },
];

export const servicesGroupC = [
  {
    id: "servicesC-1",
    img: servicesc01,
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    content: [
      {
        icon: HiCheck,
        sub: "We connect our customers with the best?",
      },
      {
        icon: HiCheck,
        sub: "Android research & development rockstar?",
      },
    ],
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Buyer buzz partner network disruptive non-disclosure agreement business.",
    name: "Albus Dumbledore",
    title: "Manager @ Howarts",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
    name: "Severus Snape",
    title: "Manager @ Slytherin",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Release facebook responsive web design business model canvas seed money monetization.",
    name: "Harry Potter",
    title: "Team Leader @ Gryffindor",
    img: people03,
  },
];

export const products = [
  {
    id: "products-1",
    type: "Category",
    date: "November 21, 2021",
    content: "Pitch termsheet backing validation focus release.",
    person: "Chandler Bing",
    img: person01,
    imgProduct: prod01,
  },
  {
    id: "products-2",
    type: "Category",
    date: "November 22, 2021",
    content:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    person: "Rachel Green",
    img: person02,
    imgProduct: prod02,
  },
  {
    id: "products-3",
    type: "Category",
    date: "November 23, 2021",
    content:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    person: "Monica Geller",
    img: person03,
    imgProduct: prod03,
  },
];

export const footerLinks = [
  {
    title: "Landings",
    links: [
      {
        name: "Home",
        link: "#",
      },
      {
        name: "Products",
        link: "#",
      },
      {
        name: "Services",
        link: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Home",
        link: "#",
      },
      {
        name: "Careers",
        info: "Hiring!",
        link: "#",
      },
      {
        name: "Services",
        link: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Products",
        link: "#",
      },
      {
        name: "Services",
        link: "#",
      },
    ],
  },
];
