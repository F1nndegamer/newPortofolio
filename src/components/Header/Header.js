import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { SiItchdotio, SiGoogleplay } from "react-icons/si";
import Image from "next/image";
import {
  Container,
  Div1,
  Div2,
  Div3,
  Div4,
  NavLink,
  ReportBugButton,
  SocialIcons,
  Span,
  
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <Image src="/Icon.svg" alt="Logo" width={48} height={48} />{" "}
          <Span> F1nn's portofolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About me</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>My Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>My Skills</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/F1nndegamer">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://f1nndegamer.itch.io">
        <SiItchdotio size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://play.google.com/store/apps/dev?id=8986304159851913772">
        <SiGoogleplay size="3rem" />
      </SocialIcons>
      <ReportBugButton
        href="https://forms.gle/RptYKrRKtwPREKwV8"
        target="_blank"
      >
        Report Bug
      </ReportBugButton>
    </Div3>
  </Container>
);

export default Header;
