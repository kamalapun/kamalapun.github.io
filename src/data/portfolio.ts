export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Resort App",
    description:
      "This project was bootstrapped with Create React App.",
    technologies: ["Javascript", "Html", "React"],
    projectUrl: "https://github.com/kamalapun/react-resort-app",
    imageUrl:
    "https://miro.medium.com/v2/resize:fit:1400/1*K-4RqDC6zFrpAG31ayDDOg.png",
    codeUrl: "https://github.com/kamalapun/react-resort-app",
  },
];
