import AboutSection from './components/about-section/about-section';
import Cta from './components/cta/cta';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import InfraCard from './components/infra-card/infra-card';
import WorkSection from './components/work-section/work-section';
import WritingSection from './components/writing-section/writing-section';
import { GlobalStyle } from './App.styles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <InfraCard />
        <AboutSection />
        <WritingSection />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
