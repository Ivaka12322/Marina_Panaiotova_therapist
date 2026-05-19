import Header from './components/Header';
import Hero from './components/Hero';
import SectionSeparator from './components/SectionSeparator';
import About from './components/About';
import HowIHelp from './components/HowIHelp';
import Issues from './components/Issues';
import Electrotherapy from './components/Electrotherapy';
import ConcreteProblems from './components/ConcreteProblems';
import CalmOverride from './components/CalmOverride';
import Books from './components/Books';
import Locations from './components/Locations';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';

export default function App() {
  return (
    <div className="font-sans pb-12">
      <Header />
      <main>
        <Hero />
        <SectionSeparator />
        <About />
        <HowIHelp />
        <Issues />
        <Electrotherapy />
        <ConcreteProblems />
        <CalmOverride />
        <Books />
        <Locations />
        <Reviews />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
