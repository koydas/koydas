import AboutSection from './components/about-section/about-section';
import Cta from './components/cta/cta';
import Footer from './components/footer/footer';
import EngineeringFoundations from './components/engineering-foundations/engineering-foundations';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import LeverageSection from './components/leverage-section/leverage-section';
import InfraCard from './components/infra-card/infra-card';
import WorkSection from './components/work-section/work-section';
import WritingSection from './components/writing-section/writing-section';
import { GlobalStyle } from './App.styles';
import { SiteHeader } from './site-kit/react/SiteShell';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <SiteHeader current="portfolio" />
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <InfraCard />
        <EngineeringFoundations />
        <LeverageSection />
        <AboutSection />
        <WritingSection />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
