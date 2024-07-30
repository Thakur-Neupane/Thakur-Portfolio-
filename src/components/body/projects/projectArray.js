import Calculator from "../../../image/Calculator.png";
import PrankCalculator from "../../../image/PrankHtmlCss.png";
import MovieApi from "../../../image/MovieApi.png";
import sneakers from "../../../image/sneakers.png";
import blogify from "../../../image/blogify.png";
import FoodRecipe from "../../../image/FoodRecipe.png";
import JSQuiz from "../../../image/Js quiz.png";
import BlogWebsite from "../../../image/BlogWebsite.png";
import SimplePortfolio from "../../../image/SimplePortfolio.png";
import ConditionalRendering from "../../../image/Conditional Rendering.png";
import PrankReact from "../../../image/PrankCalculator.png";

import grocery from "../../../image/grocery.png";
import lawportfolio from "../../../image/law-portfolio.jpg";

const latestProjects = [
  {
    projectColor: "before:bg-green-800",
    projectUrl: "https://react-prank-calculator-practice.vercel.app/",
    projectImg: Calculator,
    projectTitle: "Prank Calculator",
    projectDcrp:
      "This web application allows users to rate and review different graphics processing units (GPUs) based on their personal experiences. Users can rate GPUs on a scale of 1-5 and leave a detailed review with their thoughts and opinions. Other users can read and filter through reviews to help inform their own purchasing decisions.",
    projectLang: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "ReactJS",
      "NodeJS",
    ],
  },
  // Add more latest projects here
];

const htmlCssJsProjects = [
  {
    projectColor: "before:bg-blue-500",
    projectUrl: "https://thakur-neupane.github.io/prank-calculator/",
    projectImg: PrankCalculator,
    projectTitle: "Scientific Calculator",
    projectDcrp:
      "The prank calculator is a playful and often mischievous tool designed to surprise and amuse. Instead of standard numerical answers, this prank calculator may display funny messages, sarcastic comments, or nonsensical results. For example, entering “2 + 2” might yield a response like :The answer is: 10! with funny humour sound.",
    projectLang: ["HTML", "CSS", "Javascript"],
  },

  {
    projectColor: "before:bg-black-500",
    projectUrl: "https://thakur-neupane.github.io/api-food-recipe/",
    projectImg: FoodRecipe,
    projectTitle: "FoodRecipe",
    projectDcrp:
      "Discover the ultimate culinary adventure with FoodRecipe! 🌟 Dive into a world of mouthwatering recipes and delicious inspiration, where every dish is crafted to perfection. Transform your kitchen into a gourmet haven with easy-to-follow instructions and tantalizing flavors that will delight your taste buds and impress your guests. 🍽️✨",
    projectLang: ["HTML", "CSS", "Javascript"],
  },

  {
    projectColor: "before:bg-black-500",
    projectUrl:
      "https://react-movie-api-git-main-thakur-neupanes-projects.vercel.app/",
    projectImg: MovieApi,
    projectTitle: "Movie Search",
    projectDcrp:
      "Uncover your next favorite film with Movie Search! 🎬 Whether you’re in the mood for heart-pounding action or compelling drama, our platform effortlessly categorizes movies to match your tastes. Search, discover, and dive into an array of genres with just a few clicks, making every movie night a cinematic adventure! 🍿✨",
    projectLang: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "FontAwesome",
      "GoogleFonts",
    ],
  },
  {
    projectColor: "before:bg-black-500",
    projectUrl: "https://thakur-neupane.github.io/javascript-quiz/",
    projectImg: JSQuiz,
    projectTitle: "JavaScript Quiz",
    projectDcrp:
      "Challenge your coding skills with our JavaScript Quiz App! 🧠 Test your knowledge with a range of questions designed to boost your understanding and mastery of JavaScript. Engage, learn, and level up your programming prowess while having fun with interactive quizzes and instant feedback! 🚀✨",
    projectLang: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "FontAwesome",
      "GoogleFonts",
    ],
  },
  {
    projectColor: "before:bg-black-500",
    projectUrl: "https://thakur-neupane.github.io/flex-blog/",
    projectImg: BlogWebsite,
    projectTitle: "Blog Website",
    projectDcrp:
      "Embark on a journey with our blog dedicated to exploring captivating destinations around the globe! 🌍✈️ From hidden gems and bustling cities to serene landscapes, our articles bring you detailed insights and personal experiences. Dive into rich stories and stunning visuals that inspire your next adventure and broaden your horizons. 🌟🗺️",
    projectLang: ["HTML", "CSS", "Bootstrap", "FontAwesome", "GoogleFonts"],
  },

  {
    projectColor: "before:bg-black-500",
    projectUrl: "https://thakur-neupane.github.io/Thakur-portfolio/",
    projectImg: SimplePortfolio,
    projectTitle: "Simple Portfolio",
    projectDcrp:
      "Explore my personal project portfolio, designed to showcase my skills and accomplishments with clarity and style. 🌟 This minimalist layout highlights key projects and achievements, making it easy to navigate and understand my work. Each project is presented with a focus on simplicity and impact, reflecting my commitment to both design and functionality. 💼✨",
    projectLang: ["HTML", "CSS", "JavaScript", "FontAwesome", "GoogleFonts"],
  },
];

const reactProjects = [
  {
    projectColor: "before:bg-orange-500",
    projectUrl: "https://props-uplifting-react.vercel.app/",
    projectImg: ConditionalRendering,
    projectTitle: "Conditional Rendering",
    projectDcrp:
      "This small project showcases a dynamic user form that conditionally renders male or female avatars based on the user’s gender selection. It demonstrates practical use of conditional rendering and state management in React to create a responsive and personalized user experience.",
    projectLang: ["React", "Bootstrap"],
  },
  {
    projectColor: "before:bg-green-800",
    projectUrl: "https://react-prank-calculator-practice.vercel.app/",
    projectImg: PrankReact,
    projectTitle: "Prank Calculator",
    projectDcrp:
      "The Prank Calculator, built with React, is a playful web application designed to surprise users with humorous and unexpected results. Instead of standard calculations, it delivers entertaining and whimsical answers, adding a fun twist to basic arithmetic. ",
    projectLang: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "ReactJS",
      "NodeJS",
    ],
  },
];

const fullStackProjects = [
  {
    projectColor: "before:bg-blue-500",
    projectUrl: "https://blogify-phi.vercel.app/",
    projectImg: blogify,
    projectTitle: "Blogify",
    projectDcrp:
      "Blogify is a full-stack social web app built using the MERN stack and TypeScript.",
    projectLang: [
      "React",
      "Tailwind",
      "TypeScript",
      "Node.Js",
      "Express",
      "MongoDB",
      "JWT",
    ],
  },
];

const projectArray = {
  latest: latestProjects,
  htmlCssJs: htmlCssJsProjects,
  react: reactProjects,
  fullStack: fullStackProjects,
};

export default projectArray;
