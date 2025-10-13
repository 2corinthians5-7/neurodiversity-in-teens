import { useEffect, useState} from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import ThreeComponentsSection from './components/ThreeComponentsSection';
import BullyPage from './components/BullyPage';
import OrgPage from './components/OrgPage';
import Thoughts from './components/Thoughts';
import ZigzagSection from './components/ZigzagSection';
import Bibliography from './components/Bibliography';
import SurveyPopUp from './components/SurveyPopUp';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showSurvey, setShowSurvey] = useState(false);
  const [surveyShown, setSurveyShown] = useState(false);

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
    </div>
  );
}