import '../styles/org-page.css';
import * as lotus from '../assets/lotus.PNG';

interface OrgPageProps {
  scrollProgress: number;
  variant: 'imageLeft' | 'imageRight';
  pageNumber: number;
}

export default function OrgPage({ scrollProgress, variant }: OrgPageProps) {
  const opacity = Math.min(Math.max((scrollProgress - 2000) / 200, 0), 1);

  return (
    <section className={`org-page ${variant}`} id="organizations" style={{ opacity }}>
      <div className="text-container">
        <h3 className="sub-title">Facts</h3>
        <p className="paragraph-area">
        [2] In Hong Kong, 30-40% of people have neurodiversity. 
        <br></br>[3] there are 10-20% of people worldwide who have neurodiversity. There are different types of neurodiversity, for example, autism, ADHD and tourettes.
        <br></br>[4] Autism spectrum disorder, or autism, is one of the more commonly seen special need. People with autism may act like the following:
        <br></br> • Difficulty talking and acting in front of others.
        <br></br> • Troubles understanding people.
        <br></br> • Constant repetition of the same actions (in a methodical manner).</p>
        <h3 className="sub-title">Organizations</h3>
        <p className="paragraph-area">
        • [15] The Institute of Neurodiversity (ION) (global organisation)
        <br></br> • [16] The Neurodiversity Association Hong Kong (Hong Kong organisation)
        <br></br> • [17] Anti-bullying
        </p>
      </div>
      <div className="image-container">
        <div className="large-image-placeholder">
          <img src={lotus} id="image"></img>
        </div>
      </div>
    </section>
  );
}