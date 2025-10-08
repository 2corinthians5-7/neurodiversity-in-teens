import { useEffect, useState } from 'react';
import '../styles/hero.css';

interface HeroSectionProps {
  scrollProgress: number;
}

export default function HeroSection({ scrollProgress }: HeroSectionProps) {
  const [showScrollText, setShowScrollText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollText(true);
    }, 2000); // Show scroll text after fade in

    return () => clearTimeout(timer);
  }, []);

  const opacity = Math.max(1 - scrollProgress / 500, 0);

  return (
    <section id="home" className="hero-section" style={{ opacity }}>
      <div className="hero-content">
        <h1 className="hero-title">Neurodiversity in Teenagers</h1>
        {showScrollText && (
          <p className="scroll-down-text">scroll down</p>
        )}
      </div>
    </section>
  );
}