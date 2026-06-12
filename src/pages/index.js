import Head from 'next/head';

import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import About from '../components/About/About';
import McsrDashboard from '../components/McsrDashboard/LatestProject';
import Skills from '../components/Skills/Skills';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <>
      <Head>
        <title>F1nn's (Finn Awen Nijpels's) Portfolio</title>
        <meta
          name="description"
          content="Portfolio of F1nn (Finn Awen Nijpels), a Unity game developer creating games and prototypes using Unity and C#."
        />
        <meta
          name="keywords"
          content="F1nn, Finn, Finn Awen Nijpels, F1nndegamer, Unity developer, game developer, Unity portfolio, indie game developer"
        />
        <link rel="canonical" href="https://f1nn.me" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="F1nn's Portfolio" />
        <meta
          property="og:description"
          content="Games, prototypes, and projects made with Unity and C#."
        />
        <meta property="og:url" content="https://f1nn.me" />
        <meta property="og:site_name" content="F1nn Portfolio" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
       <Section grid>
          <Hero />
           <BgAnimation />
        </Section>
        <About />
        <McsrDashboard />
        <Projects />
        <Skills />
      </Layout>
    </>
  );
};

export default Home;