import Head from 'next/head';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <>
      <Head>
        <title>Awen's Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Awen, I'm mostly a Unity game developer creating games using Unity"
        />
        <meta
          name="keywords"
          content="F1nn, Finn, Finn Awen Nijpels, F1nndegamer, Unity developer, game developer, Unity portfolio, indie game developer, Awen"
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
        <Projects />
        <Skills />
      </Layout>
    </>
  );
};

export default Home;