import '../styles/three-components.css';
import * as daffodil from '../assets/daffodil.PNG';
import * as peony from '../assets/peony.PNG';
import * as lotusTwo from '../assets/lotus-two.PNG';

interface ThreeComponentsSectionProps {
  scrollProgress: number;
}

export default function ThreeComponentsSection({ scrollProgress }: ThreeComponentsSectionProps) {
  const components = [
    { 
      position: 'top-left',
      subtitle: 'What it is',
      content: "[1] Neurodiversity, sometimes called special needs, is when someones mind works in special ways. This may include finding writing or reading harder than other classmates, being unable to 'read the room' --in extreme ways, or even, not being able to recognize faces (also in an extreme extent)."
    },
    { 
      position: 'middle-center', 
      subtitle: "What it's not",
      content: 'Neurodiversity is not curable, hence it is not like depression or anxiety disorders. They are uncontrollable in most cases, thus everyone should treat people with special needs like normal people.'
    },
    { 
      position: 'bottom-right',
      subtitle: 'Aim',
      content: 'Our aim in this article-like website is to bring you understanding to special people around you and how to treat them like a good person.'
    }
  ];

  const opacity = Math.min(Math.max((scrollProgress - 300) / 200, 0), 1);

  return (
    <section className="three-components-section" id="introduction" style={{ opacity }}>
      <div className="components-grid">
        <div className="component top-left">
          <h3 className="subtitle">{components[0].subtitle}</h3>
          <p className="paragraph">{components[0].content}</p>
          <div className="image-display">
          <img className="image-placeholder" src={peony}></img>
          </div>
        </div>
        
        <div className="component middle-center">
          <h3 className="subtitle">{components[1].subtitle}</h3>
          <p className="paragraph">{components[1].content}</p>
          <div className="image-display">
          <img className="image-placeholder" src={daffodil}></img>
          </div>
        </div>
        
        <div className="component bottom-right">
          <h3 className="subtitle">{components[2].subtitle}</h3>
          <p className="paragraph">{components[2].content}</p>
          <div className="image-display">
          <img className="image-placeholder" src={lotusTwo}></img>
          </div>
        </div>
      </div>
    </section>
  );
}