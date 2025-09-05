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

const skillsData = [
  {
    title: "Game Development",
    skills: [
      {
        name: "Unity Engine",
        description: "Advanced proficiency in Unity 2D/3D development",
        icon: "🎮"
      },
      {
        name: "C# Programming",
        description: "Strong programming skills in C# for game logic",
        icon: "💻"
      },
      {
        name: "Mobile Development",
        description: "Experience publishing games on Google Play",
        icon: "📱"
      }
    ]
  },
  {
    title: "Technical Skills",
    skills: [
      {
        name: "Version Control",
        description: "Proficient with Git and collaborative development",
        icon: "🔧"
      },
      {
        name: "3D Modeling",
        description: "Basic skills in Blender for game assets",
        icon: "🎨"
      },
      {
        name: "UI/UX Design",
        description: "Creating intuitive game interfaces",
        icon: "🖼️"
      }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      {
        name: "Team Leadership",
        description: "Led teams of up to 8 developers in game jams",
        icon: "👥"
      },
      {
        name: "Game Design",
        description: "Creative problem-solving and game mechanics design",
        icon: "🎯"
      }
    ]
  }
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
                <SkillIcon>
                  <span style={{ fontSize: '3rem' }}>{skill.icon}</span>
                </SkillIcon>
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