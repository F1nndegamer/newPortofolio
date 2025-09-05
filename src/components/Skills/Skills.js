import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { 
  SkillsContainer, 
  SkillCategory, 
  SkillList, 
  SkillItem, 
  SkillIcon, 
  SkillInfo, 
  SkillTitle, 
  SkillDescription 
} from './SkillsStyles.js';

export const skillsData = [
  {
    title: "Game Development",
    skills: [
      {
        name: "Unity Engine",
        description: "Advanced proficiency in Unity 2D/3D development",
      },
      {
        name: "C# Programming",
        description: "Strong programming skills in C# for game logic",
      },
      {
        name: "Mobile Development",
        description: "Experience publishing games on Google Play",
      },
      {
        name: "Game Publishing",
        description: "Released games on platforms like Google Play and Steam",
      },
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      {
        name: "Version Control",
        description:
          "Proficient with Git and collaborative development on GitHub",
      },
      {
        name: "HTML, CSS & JavaScript",
        description: "Building responsive web pages and interactive features",
      },
      {
        name: "UI/UX Design & Animation",
        description: "Designing and animating user-friendly game interfaces",
      },
      {
        name: "3D Modeling & Printing",
        description:
          "Creating 3D assets and physical prototypes using Blender and 3D printers",
      },
      {
        name: "Programming Microcontrollers",
        description:
          "Developing interactive electronics projects with Arduino/ESP32",
      },
      {
        name: "System Engineering",
        description: "Understanding of system architecture and integration",
      },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      {
        name: "Team Leadership",
        description:
          "Led teams of up to 8 developers in game jams and projects",
      },
      {
        name: "Game Design",
        description: "Creative problem-solving and game mechanics design",
      },
    ],
  },
];


const Skills = () => (
  <Section id="skills">
    <SectionDivider />
    <SectionTitle main>My Skills</SectionTitle>
    <SectionText>
      Here are the key skills and technologies I use to create engaging games and interactive experiences.
    </SectionText>
    <SkillsContainer>
      {skillsData.map((category, index) => (
        <SkillCategory key={index}>
          <SectionTitle>{category.title}</SectionTitle>
          <SkillList>
            {category.skills.map((skill, skillIndex) => (
              <SkillItem key={skillIndex}>
                <SkillInfo>
                  <SkillTitle>{skill.name}</SkillTitle>
                  <SkillDescription>{skill.description}</SkillDescription>
                </SkillInfo>
              </SkillItem>
            ))}
          </SkillList>
        </SkillCategory>
      ))}
    </SkillsContainer>
  </Section>
);

export default Skills;