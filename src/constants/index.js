import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  cpp,
  sql,
  kotlin,
  haskell,
  matlab,
  django,
  typeorm,
  pandas,
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
    title: "MERN Stack Development",
    icon: web,
  },
  {
    title: "Android Native Development",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];



const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "MATLAB",
    icon: matlab,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "pandas",
    icon: pandas,
  },
  {
    name: "typeorm",
    icon: typeorm,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "html",
    icon: html,
  },
  {
    name: "nodejs",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "BS Computer Science",
    company_name: "Lahore Univesity of Management Sciences",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2020 - May 2024",
    points: [],
  },
  {
    title: "Software Engineering Internship",
    company_name: "Yottabyte",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2023 - August 2023",
    points: [
      "Learning backend technologies using Nest JS in React.",
      "Authorization using JWT and Refresh Tokens.",
      "MySQL and TypeORM for query handling.",
      "OpenAPI for connecting to frontend.",
      "Trained in frontend development technologies.",
      "Redux Toolkit.",
      "RTK Queries.",
      "UI Design in Figma.",
      "Combining all lessons and guidance to help build a HR management system.",
      "Developed timesheet functionality for the organization’s application.",
    ],
  },
  {
    title: "Computer Science Internship",
    company_name: "Centre for Advanced Research in Engineering",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2019 - July 2019",
    points: [
      "Learning about project life cycles and creating a complaint process system in python with a functioning graphical interface.",
    ],
  },
  {
    title: "Teaching Experience",
    company_name: "Little Stars Welfare Academy",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - May 2019",
    points: [
      "Taught English, Social Studies and Mathematics to grades 4, 5, 6.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: " Indoor Navigation Android App with Augmented Reality",
    description:
      "An android application that utilizes iBeacon technology to provide a complete map and navigation system for users indoors.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "ARCore", 
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MJ10X/IndoorNavigationwithAR",
  },
  {
    name: "MERN Stack Job Portal Web Application",
    description:
      "Full stack application that allows users to find and apply for jobs, and for organization to manage hiring.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/umer901/Job-Portal",
  },
  {
    name: "Sentiment Analysis using Machine Learning",
    description:
      "A multifacted aproach to using machine learning for analyzing sentiment of a given text. Trained models on BERT, LSTM, and Logistic Regression.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/umer901/Sentiment-Analysis",
  },
];

export { services, technologies, experiences, testimonials, projects };