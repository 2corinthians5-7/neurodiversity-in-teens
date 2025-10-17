import { useEffect, useState, useRef } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import ThreeComponentsSection from './components/ThreeComponentsSection';
import BullyPage from './components/BullyPage';
import OrgPage from './components/OrgPage';
import Thoughts from './components/Thoughts'; // New import
import ZigzagSection from './components/ZigzagSection';
import Bibliography from './components/Bibliography';
import SurveyPopUp from './components/SurveyPopUp';
import subwooferLullaby from './assets/subwoofer-lullaby.mp3';

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showSurvey, setShowSurvey] = useState(false);
  const [surveyShown, setSurveyShown] = useState(false);
  const bibliographyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setScrollProgress(scrollY);

      // Check if user has scrolled to the bottom (within 100px)
      if (scrollY + windowHeight >= documentHeight - 100 && !surveyShown) {
        setShowSurvey(true);
        setSurveyShown(true);
      }

      // Updated section thresholds
      if (scrollY < 500) setCurrentSection(0);
      else if (scrollY < 1000) setCurrentSection(1);
      else if (scrollY < 2000) setCurrentSection(2);
      else if (scrollY < 2500) setCurrentSection(3); // OrgPage
      else if (scrollY < 3000) setCurrentSection(4); // Thoughts
      else if (scrollY < 4000) setCurrentSection(5); // Zigzag
      else setCurrentSection(6); // Bibliography
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [surveyShown]);

  const handleCloseSurvey = () => {
    setShowSurvey(false);
  };

  return (
    <div className="app">
      <NavigationBar />
      <HeroSection scrollProgress={scrollProgress} />
      <ThreeComponentsSection scrollProgress={scrollProgress} />
      <BullyPage scrollProgress={scrollProgress} />
      <OrgPage 
        scrollProgress={scrollProgress} 
        variant="imageRight" 
        pageNumber={1}
      />
      <Thoughts scrollProgress={scrollProgress} />
      <ZigzagSection scrollProgress={scrollProgress} />
      <Bibliography scrollProgress={scrollProgress} />
      
      <SurveyPopUp isVisible={showSurvey} onClose={handleCloseSurvey} />
      <audio controls autoPlay>
        <source src={subwooferLullaby} type="audio/mpeg"></source>
      </audio>
    </div>
  );
}

