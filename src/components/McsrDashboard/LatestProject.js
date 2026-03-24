import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  Card,
  CardWrap,
  Content,
  Description,
  FeatureList,
  Heading,
  Label,
  LinkButton,
  StatMeta,
  StatPanel,
  StatTitle,
  StatValue,
} from "./LatestProjectStyle";

const McsrDashboard = () => (
  <Section id="NewProject">
    <SectionDivider />
    <SectionTitle main>Latest Project</SectionTitle>
    <CardWrap>
      <Card>
        <Content>
          <Label>New Project</Label>
          <Heading>Ranked Dashboard</Heading>
          <Description>
            I have been really enjoying playing Minecraft Speedrunning, and I
            wanted to create a dashboard to track my runs, rating movement,
            activity trends, and personal milestones in one clean overview. So
            thats what I did! The dashboard is built with React and still WIP.
          </Description>
          <LinkButton
            href="https://mcsr.f1nn.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open project
          </LinkButton>
        </Content>
        <StatPanel>
          <StatTitle>What You Can See?</StatTitle>
          <StatValue>Ranked profile</StatValue>
          <StatMeta>
            On this page you can see a lot of stats, like my current Elo, PB,
            and recent runs. More features are also in progress:
            <FeatureList>
              <li>Elo Progression</li>
              <li>Visual graphs of my splits</li>
              <li>My performances in MCSR Ranked Leagues</li>
              <li>And much more!</li>
            </FeatureList>
          </StatMeta>
        </StatPanel>
      </Card>
    </CardWrap>
  </Section>
);

export default McsrDashboard;
