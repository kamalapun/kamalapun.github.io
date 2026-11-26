export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Kamala Pun",
  title: "Infrastructure & Security Professional",
  institution: "Trine University",
  description:
    "I am an aspiring researcher in Cybersecurity with research interests in IoT security, cloud infrastructure, secure DevOps, and threat modeling. I hold a Master’s degree in Computer Science from <a href='https://www.stcloudstate.edu/'>St. Cloud State University</a>, where my research included a starred paper on IoT-based applications and applied projects using Azure IoT and data-driven analysis. My background combines graduate teaching experience, secure software development, and enterprise system administration, with hands-on experience in cloud platforms, CI/CD pipelines, and authentication frameworks. I am particularly interested in securing distributed and cloud-native systems by bridging practical system engineering with academic research.",
  email: "kamala.pun0423@gmail.com",
  imageUrl:"/Profile.JPG",
  githubUsername: "kamalapun",
  linkedinUsername: "kamala-pun",
  blogUrl: "https://hashnode.com/@Kamalapun",
  cvUrl: "https://github.com/kamalapun/Resume_Kamala",
  //institutionUrl: "https://repository.stcloudstate.edu/csit_etds/48/",
};
