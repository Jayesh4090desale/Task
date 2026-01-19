import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import Announcements from './components/Announcements';
import Stats from './components/Stats';
import Courses from './components/Courses';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <Announcements />
        <Stats />
        <Courses />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
