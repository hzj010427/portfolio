import {
  mobile,
  backend,
  web,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  scottyBites,
  yaca,
  skyTakeOut,
  java,
  bootstrap,
  springboot,
  vue,
  python,
  django,
  express,
  oneThing,
  mightyCoupons,
  ctiOne,
  UCI,
  CMU,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export const education = [
  {
    degree: "M.S. in Electrical and Computer Engineering",
    institution: "Carnegie Mellon University",
    icon: CMU,
    date: "2023 - 2025",
    points: ["Specialized in software engineering", "GPA: 3.62 / 4.0"],
  },
  {
    degree: "B.S. in Electrical Engineering and Computer Science",
    institution: "University of California, Irvine",
    icon: UCI,
    date: "2019 - 2023",
    points: [
      "Specialized in Signal Processing",
      "Graduated with Magna Cum Laude",
      "GPA: 3.83 / 4.0",
    ],
  },
];

const experiences = [
  {
    title: "Embedded Software Engineer Intern",
    company_name: "CTI-ONE",
    icon: ctiOne,
    iconBg: "#E6DEDD",
    date: "May 2022 - Sep 2022",
    points: [
      "Designed and engineered PCBs for electric wheelchairs based on the microcontroller LPC1769 and conducted comprehensive testing.",
      "Led a team of 3, focusing on designing PCB boards tailored specifically for electric wheelchairs.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "1Thing.org",
    icon: oneThing,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      "Achieved front-end development using React, implementing features like dropdown menus and buttons, ensuring compatibility across both desktop and mobile platforms.",
      "Migrated a portion of the React-based front-end project to a selected flat file CMS, reducing web development and maintenance costs.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Mighty Coupons",
    icon: mightyCoupons,
    iconBg: "white",
    date: "May 2024 - Sep 2024",
    points: [
      "Completed front-end development using Bootstrap and HTMX, and back-end development with Django for the seller’s portal of the website, supporting the beta launch with 2 real merchants.",
      "Led the end-to-end process as the sole owner of the Stripe integration feature for the MightCoupon website, enabling sellers to bind their external Stripe accounts and supporting 4 payment method.",
      "Designed and developed the subscription management system with a teammate for sellers integrating Stripe accounts to Might Coupon.",
      "Engineered and implemented a Finite State Machine (FSM) to manage a coupon lifecycle, from creation to validation, ensuring accurate state transitions and control throughout the process.",
    ],
  },
];

const projects = [
  {
    name: "ScottyBites",
    description:
      "A restaurant discovery and social networking platform for students, built with React, Bootstrap, Node.js, Express, and MongoDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: scottyBites,
    source_code_link: "https://github.com/hzj010427/ScottyBites",
  },
  {
    name: "YACA",
    description:
      "A dynamic chat web app enabling real-time messaging built with TypeScript, Express, Socket.IO, JWT, Mongoose, Pug, and MongoDB.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "pug",
        color: "blue-text-gradient",
      },
    ],
    image: yaca,
    source_code_link: "https://github.com/hzj010427/YACA",
  },
  {
    name: "Sky Take Out",
    description:
      "A full-featured online food delivery app built with Spring Boot, MyBatis, Redis, JWT, MySQL, and Vue.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "redis",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "vue",
        color: "blue-text-gradient",
      },
    ],
    image: skyTakeOut,
    source_code_link: "https://github.com/hzj010427/sky-take-out",
  },
];

export { services, technologies, experiences, projects };
