import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SiItchdotio, SiGoogleplay } from 'react-icons/si';
import Image from 'next/image';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';


const Header = () =>  (
  <Container>
    <Div1>
      <Link href ="/">
        <a style ={{display : "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
            <Image src="/Icon.svg" alt="Logo" width={48} height={48} /> <Span> F1nn's portofolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
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
</Div3>

  </Container>
);

export default Header;
