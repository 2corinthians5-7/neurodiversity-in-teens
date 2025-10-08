// components/Thoughts.tsx
import '../styles/thoughts.css';
import frog from '../assets/frog-pad.PNG';

interface ThoughtsProps {
  scrollProgress: number;
}

export default function Thoughts({ scrollProgress }: ThoughtsProps) {
  const opacity = Math.min(Math.max((scrollProgress - 2500) / 200, 0), 1);

  return (
    <section id="thoughts" className="thoughts-section" style={{ opacity }}>
      <div className="thoughts-container">
        <div className="image-container">
          <div className="thoughts-image-placeholder">
            <img src={frog}></img>
          </div>
        </div>
        <div className="text-container">
            <h3 className="thoughts-sub-title">Results</h3>
          <p
            className="thoughts-paragraph"
          >
            Throughout our survey, we have found that people above KS3 (not including KS3) tend to ignore neurodiversity and normalizes involuntary activities. However, for KS3, our data has shown lower levels of empathy and kindness, where some would even express their 'annoyance' and how they would tease the neurodivergent.
            <br></br><br></br>We have interviewed several people across KCCIS. The first person we interviewed was someone with Asperger's syndrome, they have shared their positive experience in secondary school however unpleasant situation during their Primary school experience. This goes on to show that younger kids lack understanding of neurodiversity.
            <br></br><br></br>For the second and third interviewee, we have met with the school's counsellor & Mr. Trio.
            <br></br> • <a href="https://youtube.com/shorts/vKUg6BiRyDo?si=1doBrrVUj9dFNztt" className="thoughts-link">School counsellor</a>
            <br></br> • <a href="https://youtube.com/shorts/gfk0W3On1NY?si=sM3bowze4xzdH0fu" className="thoughts-link">Mr. Trio</a>
          </p>
        </div>
      </div>
    </section>
  );
}