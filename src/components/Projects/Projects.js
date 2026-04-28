import React from 'react';
import Image from 'next/image';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, CurrentProjectBadge } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/ProjectsData';

const getProjectActionText = ({ title, playtitle, visit }) => {
  if (playtitle && !/^Play the game$/i.test(playtitle) && !/^Find it on google play!$/i.test(playtitle) && !/^Open project$/i.test(playtitle) && !/^Check it out!$/i.test(playtitle)) {
    return playtitle;
  }

  if (/google play/i.test(visit)) {
    if (title === 'Magnet Madness') {
      return 'Play the Magnet Madness Unity mobile game';
    }

    return `Find ${title} on Google Play`;
  }

  if (title === 'MCSR Dashboard') {
    return 'Open the MCSR Dashboard project';
  }

  if (title === 'Portfolio') {
    return 'Check out this portfolio project';
  }

  return `Play ${title}`;
};

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({
          id,
          image,
          title,
          description,
          tags,
          source,
          visit,
          playtitle,
          extratitle = "Code",
          currentProject = false,
        }) => (
          <BlogCard key={id} currentProject={currentProject}>
            {currentProject && <CurrentProjectBadge>Current Project</CurrentProjectBadge>}
            {image && (
              <Img>
                <Image src={image} alt={title} layout="fill" objectFit="cover" loading="lazy" />
              </Img>
            )}
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent topPadding="10px"></TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source}>{extratitle}</ExternalLinks>
              <ExternalLinks href={visit}>{getProjectActionText({ title, playtitle, visit })}</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);
export default Projects;
