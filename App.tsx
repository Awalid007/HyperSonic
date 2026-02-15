
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AutomationJourney from './pages/AutomationJourney';
import CaseStudies from './pages/CaseStudies';
import SignIn from './pages/SignIn';
import Booking from './pages/Booking';
import Footer from './components/Footer';

export type View = 'home' | 'journey' | 'cases' | 'signin' | 'booking';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const navigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case 'journey': return <AutomationJourney onBack={() => navigate('home')} />;
      case 'cases': return <CaseStudies onBack={() => navigate('home')} />;
      case 'signin': return <SignIn onBack={() => navigate('home')} />;
      case 'booking': return <Booking onBack={() => navigate('home')} />;
      default: return <LandingPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={navigate} currentView={currentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
