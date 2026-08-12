import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, TitleContent, UtilityList, Img, CurrentProjectBadge, ViewMoreButton, ViewMoreWrapper } from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/ProjectsData';

const INITIAL_ROWS = 2;
const ROWS_PER_CLICK = 2;

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

  if (title === 'MCSR Ranked Dashboard') {
    return 'Open Ranked Dashboard';
  }

  if (title === 'Portfolio') {
    return 'Check out this portfolio project';
  }

  return `Play ${title}`;
};

const Projects = () => {
  const gridRef = useRef(null);
  const [rowsVisible, setRowsVisible] = useState(INITIAL_ROWS);
  const [cardsPerRow, setCardsPerRow] = useState(1);

  useEffect(() => {
    const updateCardsPerRow = () => {
      setCardsPerRow(2);
    };

    updateCardsPerRow();

    const observer = new ResizeObserver(() => {
      updateCardsPerRow();
    });

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    window.addEventListener('resize', updateCardsPerRow);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateCardsPerRow);
    };
  }, []);

  const visibleCount = useMemo(() => {
    return Math.min(projects.length, rowsVisible * cardsPerRow);
  }, [rowsVisible, cardsPerRow]);

  const visibleProjects = useMemo(() => {
    return projects.slice(0, visibleCount);
  }, [visibleCount]);

  const hasMoreProjects = visibleCount < projects.length;

  return (
    <Section nopadding id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer ref={gridRef}>
        {visibleProjects.map(
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
          <BlogCard key={`${id}-${title}`} currentProject={currentProject}>
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
            </div>
            <UtilityList>
              <ExternalLinks href={source}>{extratitle}</ExternalLinks>
              <ExternalLinks href={visit}>{getProjectActionText({ title, playtitle, visit })}</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
      </GridContainer>
      {hasMoreProjects && (
        <ViewMoreWrapper>
          <ViewMoreButton type="button" onClick={() => setRowsVisible((prev) => prev + ROWS_PER_CLICK)}>
            Show more v
          </ViewMoreButton>
        </ViewMoreWrapper>
      )}
    </Section>
  );
};

export default Projects;
