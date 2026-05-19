import Header from './components/Header';
import Hero from './components/Hero';
import SectionSeparator from './components/SectionSeparator';
import About from './components/About';
import HowIHelp from './components/HowIHelp';
import Electrotherapy from './components/Electrotherapy';
import ConcreteProblems from './components/ConcreteProblems';
import CalmOverride from './components/CalmOverride';
import Books from './components/Books';
import YoungTherapistAcademy from './components/YoungTherapistAcademy';
import Locations from './components/Locations';
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
        <ConcreteProblems />
        <Electrotherapy />
        <CalmOverride />
        <Books />
        <YoungTherapistAcademy />
        <Locations />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
