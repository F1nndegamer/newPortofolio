import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, CurrentProjectBadge } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/ProjectsData';

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
            {image && <Img src={image} />}
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
              <ExternalLinks href={visit}>{playtitle}</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);
export default Projects;
