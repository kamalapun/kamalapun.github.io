export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2021—2023",
    institution: "St Cloud State University",
    degree: "Master of Science in Computer Science",
    advisor: "Dr. Akalanka B. Mailewa",
  },
  {
    year: "2015—2019",
    institution: "National College of Computer Studies",
    degree: "B.S. in Computer Science and Information Technology",
    //thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
