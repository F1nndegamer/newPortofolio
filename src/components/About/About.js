import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { AboutContainer, AboutText, AboutImage, ImageContainer } from './AboutStyles';

const About = () => (
  <Section id="about">
    <SectionDivider />
    <SectionTitle main>About Me</SectionTitle>
    <AboutContainer>
      <AboutText>
        <SectionText>
          I'm a passionate Unity game developer with several years of experience creating engaging games 
          and interactive experiences. I love participating in game jams and leading development teams to 
          bring creative ideas to life.
        </SectionText>
        <SectionText>
          My journey started in 2017 when I first discovered Unity, and since then I've been constantly 
          learning and improving my skills. I enjoy the challenge of solving complex problems and creating 
          fun, memorable gaming experiences.
        </SectionText>
        <SectionText>
          When I'm not coding, I'm usually brainstorming new game concepts, playing indie games for 
          inspiration, or collaborating with other developers in the game development community.
        </SectionText>
      </AboutText>
      <ImageContainer>
        <AboutImage src="/images/profile.jpg" alt="About me" />
      </ImageContainer>
    </AboutContainer>
  </Section>
);

export default About;