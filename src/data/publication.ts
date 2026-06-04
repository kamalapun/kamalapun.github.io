export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2023",
    conference: "Starred Paper",
    title: "Systematic Literature Review of IoT-Based Application",
    authors: "Kamala Pun, Dr. Mailewa, Akalanka B,Dr. Tomovic, Aleksandar, Dr. Schmidt, Mark B",
    paperUrl: "https://repository.stcloudstate.edu/csit_etds/48/",
    //codeUrl: "https://github.com/kamalapun",
    //bibtex: "https://arxiv.org/",
    tldr: "The paper reviews existing research on IoT-based applications, categorizing how IoT is used across sectors like healthcare, smart cities, agriculture, and business, and identifies key challenges and future research directions.",
    imageUrl:
    "https://img.magnific.com/free-vector/iot-concept-isometric-icons-cycle-composition_1284-11487.jpg?semt=ais_hybrid&w=740&q=80",
      //*award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "Term Paper",
    title: "Hate Speech Detection in Tweets using a Rule-Based Approach",
    authors: "Daniel Fabres,Kamala Pun, Rabina Khatiwada, Srinidhi Kadiyala",
    paperUrl: "https://github.com/kamalapun/hate-speech-detection-using-machine-learning",
    codeUrl: "https://github.com/kamalapun/hate-speech-detection-using-machine-learning",
  },
  {
    year: "2022",
    conference: "Term Paper",
    title: "Soil Moisture Detection Using Azure IoT",
    authors: "Kamala Pun, Merina Gautam, Bikal Nepal",
    paperUrl: "https://github.com/kamalapun/real-time-soil-moisture-mointoring-system-with-azure-functions-and-iot-hub",
    codeUrl: "https://github.com/kamalapun/real-time-soil-moisture-mointoring-system-with-azure-functions-and-iot-hub",
  },
];
