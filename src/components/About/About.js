import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  AboutContainer,
  AboutText,
  AboutImage,
  ImageContainer,
} from "./AboutStyles";

const About = () => (
  <Section id="about">
    <SectionDivider />
    <SectionTitle main>About Me</SectionTitle>
    <AboutContainer>
      <AboutText>
        <SectionText>
          Hey, I’m F1nn! I’m an indie game developer who loves turning small
          ideas into playable games. I work mostly with Unity and C#, trying to
          make games with creativity, atmosphere, and little details that make
          every project feel alive.
        </SectionText>
        <SectionText>
          I started making games after a friend told me: “Hey, you’re smart,
          make a game!” After some time, I decided to fully focus on game
          development, and in July 2022 I released my first project. Since then,
          building games has become my favorite way to tell stories, solve
          problems, and experiment with new mechanics through jams and quick
          prototypes.
        </SectionText>
        <SectionText>
          When I’m not coding, you’ll probably find me bouldering, practicing
          aerial silks, or making little side projects like electronics and 3D
          printing. I’m always up for learning new things and collaborating with
          others!
        </SectionText>
      </AboutText>
      <ImageContainer>
        <AboutImage src="/Boulder.jpg" alt="About me" />
      </ImageContainer>
    </AboutContainer>
  </Section>
);

export default About;
