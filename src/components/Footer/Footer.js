import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SiItchdotio, SiGoogleplay } from 'react-icons/si';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  
   <FooterWrapper>
    <LinkList>
     <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href ="tel:+31630689878">+31630689878</LinkItem>
     </LinkColumn>
     <LinkColumn>
      <LinkTitle>Mail me!</LinkTitle>
      <LinkItem href ="mailto:f1nndevgamer@gmail.com">f1nndevgamer@gmail.com</LinkItem>
     </LinkColumn>
      <LinkColumn>
      <LinkTitle>Or Message me on Discord!</LinkTitle>
      <LinkItem href ="https://discord.com/users/768028545900871680">F1nndegamer</LinkItem>
     </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Making games, both educative and funny</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/F1nndegamer">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://f1nndegamer.itch.io">
          <SiItchdotio size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://play.google.com/store/apps/dev?id=8986304159851913772">
          <SiGoogleplay size="3rem" />
        </SocialIcons>
        </SocialContainer>
    </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
