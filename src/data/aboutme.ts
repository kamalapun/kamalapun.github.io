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
  title: "MS Computer Science Student",
  institution: "St Cloud State University",
  // Note that links work in the description
  description:
    "I am an aspiring researcher in Cybersecurity with research interests in IoT security, cloud infrastructure, secure DevOps, and threat modeling. I hold a Master’s degree in Computer Science from <a href='https://www.stcloudstate.edu/'>St. Cloud State University</a>, where my research included a starred paper on IoT-based applications and applied projects using Azure IoT and data-driven analysis.My background combines graduate teaching experience, secure software development, and enterprise system administration, with hands-on experience in cloud platforms, CI/CD pipelines, and authentication frameworks. I am particularly interested in securing distributed and cloud-native systems by bridging practical system engineering with academic research.",
  email: "kamala.pun0423@gmail.com",
  imageUrl:
  "https://media.licdn.com/dms/image/v2/D5603AQElsbJkQ21Z4g/profile-displayphoto-crop_800_800/B56Z42WlcHKIAI-/0/1779028352961?e=1782345600&v=beta&t=7OZ7wpGS9L0CXkRg_01LUC5RaxBU3DFl3xJm_lTJk1Y",
  //googleScholarUrl: "https://scholar.google.com/",
  githubUsername: "kamalapun",
  linkedinUsername: "kamala-pun",
  //twitterUsername: "kamalapun",
  blogUrl: "https://hashnode.com/@Kamalapun",
  cvUrl: "https://github.com/kamalapun/Resume_Kamala",
  institutionUrl: "https://repository.stcloudstate.edu/csit_etds/48/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
