import '../styles/zigzag.css';
import lilypad from '../assets/lily-pad.PNG';
import pad from '../assets/pad.PNG'

interface ZigzagSectionProps {
  scrollProgress: number;
}

export default function ZigzagSection({ scrollProgress }: ZigzagSectionProps) {
  const items = [
    { position: 'top-left', isText: true, contents:"Andrea has been a victim of tourettes since 5th Grade, tourettes means she frequently does repetitive movements involuntarily. This includes swearing, head jerks, and snorting, ( however ticks, actions that are due to tourettes, vary from time to time)." },
    { position: 'bottom-left-middle', isText: true, contents:"She has faced a lot of bullying from friends, classmates, and even teachers. Discrimination in this case included name calling, telling her to ‘shut up’, and getting warnings from teachers for something she did not do intentionally." },
    { position: 'top-right-middle', isText: false },
    { position: 'bottom-right', isText: true, contents:"This case is an example of how you should not treat people with neurodiversity. Instead, she has told us that she preferred if others did not bring much attention to her special needs." }
  ];

  const opacity = Math.min(Math.max((scrollProgress - 3000) / 200, 0), 1);

  return (
    <section className="zigzag-section" id="case-study" style={{ opacity }}>
      {items.map((item, index) => (
        <div key={index} className={`zigzag-item ${item.position}`}>
          {item.isText ? (
            <p className="paragraph-area-zigzag">{items[index].contents}</p>
          ) : (
            <div className="image-placeholder">
              <img src={lilypad} className="image"></img>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}