import Nke from "../assets/ProjectImages/Nke.png";
import XploreAfrica from "../assets/ProjectImages/XploreAfrica.png";
import NgGameDev from "../assets/ProjectImages/NGGameDev.png";
import BabaAI from "../assets/ProjectImages/BabaAI.png";
import jpegbyprince from "../assets/ProjectImages/jpegbyprince.png";
import spaBooking from "../assets/ProjectImages/Spa-Booking.png";
import cafeSite from "../assets/ProjectImages/cafe-site.png";
import iblog from "../assets/ProjectImages/iBLOG.png";

const projects = [
  {
    name: "IBLOG",
    image: iblog,
    description:
      "iBLOG is a a blog website where users can read blogs. The blogs details are gotten from gnews api",
    technologies: [
      {
        name: "NextJS",
        imgUrl: "https://cdn.simpleicons.org/nextdotjs",
      },
      {
        name: "TailwindCSS",
        imgUrl: "https://cdn.simpleicons.org/tailwindcss",
      },
      {
        name: "Axios",
        imgUrl: "https://cdn.simpleicons.org/axios",
      },
      {
        name: "GNews API",
        // imgUrl: "https://cdn.simpleicons.org/gnews",
      },
    ],

    link: "https://iblog.pxxl.click",
  },
  {
    name: "Nke Africa",
    image: Nke,
    description:
      "Nke Africa is a story-telling platform, dedicated to telling authentic stories of African Women.",
    technologies: [
      {
        name: "ReactJS",
        imgUrl: "https://cdn.simpleicons.org/react",
      },
      {
        name: "TailwindCSS",
        imgUrl: "https://cdn.simpleicons.org/tailwindcss",
      },
    ],
    link: "https://nkeafrica.netlify.app",
  },
  {
    name: "XploreAfrica",
    image: XploreAfrica,
    description: "XploreAfrica is a Software Development Agency.",
    technologies: [
      {
        name: "ReactJS",
        imgUrl: "https://cdn.simpleicons.org/react",
      },
      {
        name: "TailwindCSS",
        imgUrl: "https://cdn.simpleicons.org/tailwindcss",
      },
    ],
    link: "https://xploreafrica.vercel.app",
  },
  {
    name: "Spa Booking System",
    image: spaBooking,
    description:
      "The Spa Booking System is a full-stack web application that streamlines spa appointment scheduling for both customers and spa administrators. This system allows users to seamlessly book spa services, receive automated email confirmations, and store bookings in a Google Spreadsheet for easy admin access.",
    technologies: [
      {
        name: "ReactJS",
        imgUrl: "https://cdn.simpleicons.org/react",
      },
      {
        name: "TailwindCSS",
        imgUrl: "https://cdn.simpleicons.org/tailwindcss",
      },
      {
        name: "ExpressJS",
        imgUrl: "https://cdn.simpleicons.org/express",
      },
      {
        name: "MongoDB",
        imgUrl: "https://cdn.simpleicons.org/mongodb",
      },
    ],
    link: "https://salon-site-lilac.vercel.app",
  },
  {
    name: "Baba's AI",
    image: BabaAI,
    description:
      "Baba's AI is an AI tool that helps you simplify task and boost productivity with adequate fluency in pidgin as well as your native tongue and English",
    technologies: [
      {
        name: "ReactJS",
        imgUrl: "https://cdn.simpleicons.org/react",
      },
      {
        name: "TailwindCSS",
        imgUrl: "https://cdn.simpleicons.org/tailwindcss",
      },
      {
        name: "Express",
        imgUrl: "https://cdn.simpleicons.org/express",
      },
      {
        name: "MongoDb",
        imgUrl: "https://cdn.simpleicons.org/mongodb",
      },
    ],
    link: "https://baba-frontend-react.onrender.com/",
  },
  {
    name: "Coffee Shop Website",
    image: cafeSite,
    description:
      "A landing page for a cafe shop to display their services, informations and gallery",
    technologies: [
      {
        name: "ReactJS",
        imgUrl: "https://cdn.simpleicons.org/react",
      },
      {
        name: "TypeScript",
        imgUrl: "https://cdn.simpleicons.org/typescript",
      },
      {
        name: "TailwindCSS",
        imgUrl: "https://cdn.simpleicons.org/tailwindcss",
      },
    ],
    link: "https://cafe-site-cyan.vercel.app",
  },
  {
    name: "NG.GameDev",
    image: NgGameDev,
    description:
      "NG.GameDev is a vibrant Nigerian game community to bring creators in the game space together for collaboration and knowledge sharing.",
    technologies: [
      {
        name: "HTML",
        imgUrl: "https://cdn.simpleicons.org/html5",
      },
      {
        name: "CSS",
        imgUrl: "https://cdn.simpleicons.org/css3",
      },
      {
        name: "JavaScript",
        imgUrl: "https://cdn.simpleicons.org/javascript",
      },
    ],
    link: "https://ng-gamedev.netlify.app",
  },
  {
    name: "Photographer Portfolio",
    image: jpegbyprince,
    description: "This is a one page portfolio for a Photographer",
    technologies: [
      {
        name: "ReactJS",
        imgUrl: "https://cdn.simpleicons.org/react",
      },
      {
        name: "TailwindCSS",
        imgUrl: "https://cdn.simpleicons.org/tailwindcss",
      },
    ],
    link: "https://jpegbyprince.vercel.app",
  },
];

export default projects;
