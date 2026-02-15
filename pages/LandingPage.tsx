
import React from 'react';
import Hero from '../components/Hero';
import LogoCloud from '../components/LogoCloud';
import Process from '../components/Process';
import Solutions from '../components/Solutions';
import Benefits from '../components/Benefits';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { View } from '../App';

interface Props {
  onNavigate: (view: View) => void;
}

const LandingPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <LogoCloud />
      <Process />
      <Solutions />
      <Benefits />
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default LandingPage;
