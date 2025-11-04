import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import StoriesEvents from './components/StoriesEvents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] antialiased">
      {/* Hero with Spline and primary CTAs */}
      <Hero />

      {/* Quick facts, programs, trust logos */}
      <Highlights />

      {/* Stories + Events + Secondary CTAs */}
      <StoriesEvents />

      {/* Footer with contact + newsletter */}
      <Footer />
    </div>
  );
}

export default App;
