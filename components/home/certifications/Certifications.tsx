import { SectionHeader } from "@/components/utils/SectionHeader";
import { CertificationItem } from "./CertificaitonItem";
import { useState } from "react";

export const Certifications = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <section className="section-wrapper" id="certifications">
      <SectionHeader title="Certifications" dir="l" />
      {certificaitons.map((item, index) => (
        <CertificationItem
          key={index}
          expanded={expanded}
          onExpandedChange={setExpanded}
          {...item}
        />
      ))}
    </section>
  );
};

const certificaitons = [
  {
    id: 1,
    title: "Data Scientist",
    img: "/project-imgs/certification-imgs/DSBadge.png",
    issuer: "Datacamp",
    link: "https://www.datacamp.com/certificate/DS0028918050238",
    description:
      "The DataCamp Data Science Certification demonstrates my proficiency in key data science skills, including data manipulation, statistical analysis, and machine learning. Throughout the certification, I have completed a series of projects and courses that covered essential techniques and tools, such as data cleaning, exploratory data analysis, and model development. This certification highlights my capability to apply data science methodologies effectively to real-world problems.",
  },
  {
    id: 2,
    title: "Data Scientist Associate",
    img: "/project-imgs/certification-imgs/DSAssociateBadge.png",
    issuer: "Datacamp",
    link: "https://www.datacamp.com/certificate/DSA0013889557419",
    description:
      "The Data Scientist Associate certification highlights my foundational expertise in data science. This credential demonstrates my ability to perform essential tasks such as data cleaning, exploratory data analysis, and statistical modeling. During the certification process, I gained hands-on experience with key tools and techniques, including data wrangling, visualization, and the application of various predictive models. My certification reflects my competence in using data science methodologies to derive insights and make data-driven decisions in professional settings.",
  },
  {
    id: 3,
    title: "AWS Certified Cloud Practitioner",
    img: "/project-imgs/certification-imgs/cloud_prac_cert.png",
    issuer: "Amazon Web Services Training and Certification",
    link: "https://www.credly.com/badges/7388a62a-708c-4a6d-a2d4-b8d4c763f5f7",
    description:
      "The AWS Certified Cloud Practitioner certification validates my foundational knowledge of Amazon Web Services (AWS) and cloud computing. This certification demonstrates my understanding of key AWS services, cloud concepts, and best practices for deploying and managing cloud solutions. It covers essential topics such as AWS cloud infrastructure, basic security, pricing, and support services. Achieving this certification reflects my ability to make informed decisions about AWS cloud solutions and effectively communicate AWS concepts in a professional context.",
  },
  {
    id: 4,
    title: "MIT Applied Data Science",
    img: "/project-imgs/certification-imgs/MIT_cert.png",
    issuer: "MIT Profession Education",
    link: "https://credentials.professional.mit.edu/b636920c-20bb-4bff-a746-235fa4c26282#gs.d9tlqi",
    description:
      "The MIT Applied Data Science certification signifies my advanced expertise in applying data science techniques to real-world problems. This certification from MIT demonstrates my ability to leverage data-driven methodologies, including statistical analysis, machine learning, and data visualization, to extract meaningful insights and drive decision-making. The program emphasizes practical applications, such as building predictive models, performing complex data analyses, and utilizing cutting-edge tools and technologies. This certification highlights my proficiency in solving complex data challenges and applying advanced data science principles effectively in professional scenarios.",
  },
];
