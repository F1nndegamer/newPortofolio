import React from "react";
import Image from "next/image";
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
          My name is Finn Awen Nijpels, also known as F1nn or F1nndegamer. I am
          a Unity game developer who creates experimental games, game jam
          projects, and prototypes using C# and Unity.
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
        <AboutImage>
          <Image
            src="/Boulder.jpg"
            alt="About me"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </AboutImage>
      </ImageContainer>
    </AboutContainer>
  </Section>
);

export default About;
