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
      //"https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/username/project",
  },
];
