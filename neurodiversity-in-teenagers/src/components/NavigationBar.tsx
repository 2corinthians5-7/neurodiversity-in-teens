import { useState, useEffect } from 'react';
import '../styles/navigation.css';

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState('home');
  
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Introduction', id: 'introduction' },
    { name: 'Bullying', id: 'bullying' },
    { name: 'Organizations', id: 'organizations' },
    { name: 'Thoughts', id: 'thoughts' },
    {name:'Case study', id: 'case-study'},
    { name: 'Bibliography', id: 'bibliography' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navigation-bar">
      {navItems.map((item, index) => (
        <button 
          key={index}
          className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => scrollToSection(item.id)}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
}