import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main as="h1" center>
        F1nn – Unity Game Developer Portfolio
      </SectionTitle>
      <SectionText>
        My name is Finn Awen Nijpels, also known as F1nn or F1nndegamer. I am
        a Unity game developer who creates games, prototypes, and game jam
        projects using Unity and C#.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
