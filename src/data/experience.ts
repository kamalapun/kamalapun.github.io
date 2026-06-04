export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "November 2023 - Present",
    title: "Junior System Administrator",
    company: "Jefferson Capital systems,LLC",
    description:
      "Administer and maintain Windows Server environments, including Active Directory, DNS, and DHCP within virtualized infrastructure. Automate operational workflows using PowerShell and Python while monitoring production systems with Site24x7 to ensure high availability and rapid incident resolution. Provide Tier 1/2 infrastructure support, manage backups, patching, and disaster recovery, and resolve incidents through ServiceDesk Plus and Jira.",
    //advisor: "Peter Wang",
    //companyUrl: "https://deepmind.com",
  },
  {
    date: "Janaury 2022 - May 2023",
    title: "Graduate Teaching Assistant",
    company: "St. Cloud State University",
    description:
      "Supported computer science courses by mentoring students in C++ programming, debugging, and object-oriented software development. Assisted in designing and implementing a secure Grade Reporting System while reinforcing coding standards, scalability, and performance optimization. Provided technical guidance and troubleshooting support for software development projects.",
    manager: "Dr.Akalanka / Dr. Sarnath",
    companyUrl: "https://www.stcloudstate.edu/programs/computer-science/default.aspx",
  },
  {
    date: "August 2019 - July 2021",
    title: "Software Engineer",
    company: "Studio Matrix Pvt. Ltd",
    description:
      "Developed and maintained scalable web applications using Django, Java, and React with RESTful API integrations and relational databases. Implemented CI/CD pipelines and automated deployment workflows to improve release efficiency and system reliability. Collaborated in Agile Scrum teams while applying secure authentication practices using OAuth and SAML.",
    //manager: "Dr.Akalanka / Dr. Sarnath",
    //companyUrl: "https://www.stcloudstate.edu/programs/computer-science/default.aspx",
  },
  {
    date: "November 2018 - March 2019",
    title: "Java Developer",
    company: "ITGlance",
    description:
      "Built an inventory management system using Java Swing and MySQL, focusing on performance, database reliability, and usability. Automated build and deployment processes using Jenkins and Maven to streamline development workflows. Assisted with network troubleshooting and technical support to maintain stable application and infrastructure operations.",
    //manager: "Dr.Akalanka / Dr. Sarnath",
    //companyUrl: "https://www.stcloudstate.edu/programs/computer-science/default.aspx",
  },
];
