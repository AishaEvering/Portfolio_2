"use client";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import { useState } from "react";

export const Experience = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item, index) => (
        <ExperienceItem
          key={index}
          expanded={expanded}
          onExpandedChange={setExpanded}
          {...item}
        />
      ))}
    </section>
  );
};

const experience = [
  {
    id: 1,
    title: "Workiva",
    position: "Software Engineer",
    time: "2022 - 2023",
    location: "Phoenix, AZ",
    description:
      "Developed and maintained features for Workiva's WDesk product using OverReact, a Dart-based frontend framework. Focused on enhancing user interfaces and performance by creating a system of serializable, JSON-based components for customizable UIs. Collaborated with Agile teams throughout the development lifecycle to deliver high-quality software solutions.",
    tech: ["React", "Redux", "Dart", "JSON", "Git", "GitHub"],
  },
  {
    id: 2,
    title: "US Airways / American Airlines, Inc",
    position: "Software Developer",
    time: "2010 - 2019",
    location: "Tempe, AZ",
    description:
      "Developed, supported, and maintained USAirways.com and AA.com, enhancing functionality and user experience. Transitioned from a C#, ASP.NET, and jQuery environment to a Java and Spring framework environment following the merger of US Airways and American Airlines. Demonstrated agility in adapting to new technologies and frameworks, collaborated in Agile teams to deliver high-quality solutions, and contributed to the company's shift to a Cloud-based environment using Serenity tests and Cucumber.",
    tech: ["C#", "ASP.NET", "jQuery", "Java", "Spring", "Serenity", "Cucumber"],
  },
  {
    id: 3,
    title: "Royal Neighbors of America",
    position: "Software Developer",
    time: "2008 - 2010",
    location: "Mesa, AZ",
    description:
      'Developed and maintained WPF and ASP.NET applications using C# .NET (2.0–3.5). Designed the "Electronic Agent Welcome Kit" WPF application for efficient document management via a WCF service. Contributed to redesigning three major public websites, enhancing user experience and functionality. Improved Ajax functionality for better responsiveness and interactivity, analyzed legacy code for integration, and provided training on Sitefinity CMS.',
    tech: ["C#", "ASP.NET", "WPF"],
  },
  {
    id: 4,
    title: "Flypaper Studios Inc",
    position: "Software Developer",
    time: "2007 - 2008",
    location: "Phoenix, AZ",
    description:
      "Developed, tested, and maintained Windows and web applications for Flypaper, including Flypaper Community and Interactive Alchemy. Used Flex 3, .NET 2.0 C#, and ASP.NET to build scalable 3-tier applications. Specialized in Flex 3 and ActionScript, developing the Flypaper Dashboard with the Cairngorm pattern, once featured on Insideria.com. Continued enhancing the Flypaper Dashboard by adding new features and Flex components to improve user experience.",
    tech: ["C#", "ASP.NET", "Flex 3", "ActionScript"],
  },
  {
    id: 5,
    title: "Altour Incentive Management",
    position: "Senior Software Developer",
    time: "2006 - 2007",
    location: "Phoenix, AZ",
    description:
      "Developed, tested, and maintained reliable and scalable web applications for business solutions using .NET 2.0 C# and ASP.NET. Enhanced classic ASP applications with Ajax for better interactivity and user engagement. Managed application deployments, ensuring smooth integration and functionality. Provided .NET and OOP training to team members and supported existing applications by troubleshooting and resolving issues.",
    tech: ["C#", "ASP.NET", "Ajax"],
  },
  {
    id: 6,
    title: "Intel",
    position: "Programmer/Analyst",
    time: "2000 - 2006",
    location: "Chandler, AZ",
    description:
      "Developed, supported, and maintained business applications, including ASP.NET and Ruby web apps, C# services, SQL databases, and TSQL DTS packages. Adapted to various technologies and Agile practices, gathering requirements, architecting solutions, and ensuring high-quality results. Created documentation, managed deployments, provided training, and offered third-level support to ensure smooth operation and integration.",
    tech: ["C#", "ASP.NET", "Ruby", "SQL", "TSQL", "Visual Basic"],
  },
];
