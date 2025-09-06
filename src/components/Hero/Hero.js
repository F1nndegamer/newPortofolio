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
      <SectionTitle main center>
        Hi, I’m F1nn! <br />
        Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        I'm a unity game developer who loves making games and working with code.
        This is where I share the stuff I’ve built. Projects, experiments, and
        more!.
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
