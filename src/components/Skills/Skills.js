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
        name: "Unity",
        description: "The Game Engine I use 90% of the time, for more then 3 years",
      },
      {
        name: "C# Programming",
        description: "Primary language for scripting in Unity",
      },
      {
        name: "Mobile Development",
        description: "Made multiple mobile games",
      },
      {
        name: "Game Publishing",
        description: "I published a few games on Google Play Store",
      },
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      {
        name: "Version Control",
        description:
          "I have 2 years of experience with GitHub",
      },
      {
        name: "HTML, CSS & JavaScript",
        description: "I made some interesting web projects",
      },
      {
        name: "Programming Microcontrollers",
        description:
          "I really like making cool lil' projects with raspberry pis and esp32s",
      },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      {
        name: "Team Leadership",
        description:
          "Worked together with teams of 2-9 people on some projects",
      },
      {
        name: "Game Design",
        description: "I always like to make something where the player needs to think",
      },
    ],
  },
];


const Skills = () => (
  <Section id="skills">
    <SectionDivider />
    <SectionTitle main>My Skills</SectionTitle>
    <SectionText>
      Here are the most important skills I got over the years.
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