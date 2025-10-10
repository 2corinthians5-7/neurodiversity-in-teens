import { useState, useEffect } from 'react';
import '../styles/bully-page.css';

export default function BullyPage() {
  const [slowScrollActive, setSlowScrollActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlowScrollActive(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Coordinates for the SVG lines
  const centerX = 700;
  const centerY = 350;
  
  const bubblePositions = [
    { x: 200, y: 100 },  // Top left
    { x: 1000, y: 100 },  // Top right
    { x: 600, y: 500 }   // Bottom center
  ];

  return (
    <section id="bullying" className={`bully-page ${slowScrollActive ? 'slow-scroll' : ''}`}>
      <div className="spider-map">
        <svg className="connectors" width="800" height="600" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          {/* Line to top left bubble */}
          <line 
            x1={centerX} y1={centerY} 
            x2={bubblePositions[0].x + 70} y2={bubblePositions[0].y + 70} 
            stroke="#333" strokeWidth="2"
          />
          {/* Line to top right bubble */}
          <line 
            x1={centerX} y1={centerY} 
            x2={bubblePositions[1].x + 70} y2={bubblePositions[1].y + 70} 
            stroke="#333" strokeWidth="2"
          />
          {/* Line to bottom center bubble */}
          <line 
            x1={centerX} y1={centerY} 
            x2={bubblePositions[2].x + 70} y2={bubblePositions[2].y + 70} 
            stroke="#333" strokeWidth="2"
          />
        </svg>

        <div className="center-word">BULLYING</div>
        
        {/* Top Left Bubble */}
        <div className="bubble" style={{ top: `${bubblePositions[0].y}px`, left: `${bubblePositions[0].x}px` }}>
          <p className="bubble-text">[13]Having a disability can make children and teens a higher chance of being a target of bullies, 62% of students with autism spectrum disorder report being bullied once a week or more. And it can harm them in many ways, including their self-esteem, mental health, social skills and school progress. [12] The best way to not accidentally hurt people with special needs is to acknowledge that these things are normal and is okay. </p>
        </div>
        
        {/* Top Right Bubble */}
        <div className="bubble" style={{ top: `${bubblePositions[1].y}px`, left: `${bubblePositions[1].x}px` }}>
        <p className="bubble-text">Neurodiverse students have a higher chance of getting anxiety or depression. [10] People with special needs have difficulties dealing with feelings. Compared to their classmates, people who have special needs may feel things more deeply.</p>
        </div>
        
        {/* Bottom Center Bubble */}
        <div className="bubble" style={{ top: `${bubblePositions[2].y}px`, left: `${bubblePositions[2].x}px` }}>
        <p className="bubble-text">You should treat unique students by not insulting what they can't control, otherwise they might feel like an outcast. According to professionals, there is a lack of resources for understanding neurodiversity in medical school, even as pediatricians there’s very little focus on mental wellness, they don’t pair medication with therapy to meet the needs of the children, they also have limited time to interact with the patient. [11]. May 15 - June 15 is recognised as the Tourette Association Awareness Month. [14]
        </p>
        </div>
      </div>
    </section>
  );
}