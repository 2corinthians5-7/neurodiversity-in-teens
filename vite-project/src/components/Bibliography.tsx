import '../styles/bibliography.css';

interface BibliographyProps {
  scrollProgress: number;
}

export default function Bibliography({ scrollProgress }: BibliographyProps) {
  const opacity = Math.min(Math.max((scrollProgress - 4000) / 200, 0), 1);

  return (
    <section className="bibliography" id="bibliography" style={{ opacity }}>
      <div className="bibliography-container">
        <h1 className="main-title">Bibliography</h1>
        <p className="survey-promoter">DO OUR SURVEY!!! <a href="https://forms.gle/hhGNGYwViM8Kz4vK9" target="_blank">(press me)</a></p>
        <div className="content-wrapper">
          <div className="sources-section">
            <h2 className="subtitle">Sources</h2>
            <div className="paragraphs">
            <div className="source-item">
                <a href="https://childmind.org/article/what-is-neurodiversity/" target="_blank" rel="noopener noreferrer">
                  [1] https://childmind.org/article/what-is-neurodiversity/
                </a>
                <p>Being neurodiverse means that your brain is abnormal.</p>
              </div>
              
              <div className="source-item">
                <a href="https://www.hsbc.com/news-and-views/views/hsbc-views/neurodiverse-people-are-asia-pacifics-well-of-untapped-talent" target="_blank" rel="noopener noreferrer">
                  [2] https://www.hsbc.com/news-and-views/views/hsbc-views/neurodiverse-people-are-asia-pacifics-well-of-untapped-talent
                </a>
                <p>30-40% of people are neurodiverse.</p>
              </div>
              
              <div className="source-item">
                <a href="https://www.ndahk.com/" target="_blank" rel="noopener noreferrer">
                  [3] https://www.ndahk.com/
                </a>
                <p>15-20% of the Hong Kong population is neurodiverse, meaning it is a problem.</p>
              </div>
              
              <div className="source-item">
                <a href="https://www.nhs.uk/conditions/autism/what-is-autism/" target="_blank" rel="noopener noreferrer">
                  [4] https://www.nhs.uk/conditions/autism/what-is-autism/
                </a>
              </div>
              
              <div className="source-item">
                <a href="https://edition.cnn.com/2012/09/07/health/autistic-kids-bullied-time" target="_blank" rel="noopener noreferrer">
                  [5] https://edition.cnn.com/2012/09/07/health/autistic-kids-bullied-time
                </a>
              </div>
              
              <div className="source-item">
                <a href="https://www.psychiatry.org/patients-families/adhd/what-is-adhd" target="_blank" rel="noopener noreferrer">
                  [6] https://www.psychiatry.org/patients-families/adhd/what-is-adhd
                </a>
              </div>
              
              <div className="source-item">
                <a href="https://www.mayoclinic.org/diseases-conditions/tourette-syndrome/diagnosis-treatment/drc-20350470" target="_blank" rel="noopener noreferrer">
                  [7] https://www.mayoclinic.org/diseases-conditions/tourette-syndrome/diagnosis-treatment/drc-20350470
                </a>
                <p>Tourette syndrome is a disorder that involves repetitive movements or unwanted sounds (tics) that can't be easily controlled.</p>
              </div>
              
              <div className="source-item">
                <a href="https://www.forbes.com/sites/jenniferpalumbo/2024/08/26/how-to-address-bullying-of-neurodivergent-children/" target="_blank" rel="noopener noreferrer">
                  [8] https://www.forbes.com/sites/jenniferpalumbo/2024/08/26/how-to-address-bullying-of-neurodivergent-children/
                </a>
                <p>Jess Pliszka, founder & president of Neurolicity who is both neurodivergent and an expert in autism and ADHD, highlights the importance of neuroaffirming practices as effective interventions against bullying.</p>
              </div>
              
              <div className="source-item">
                <a href="https://images.dawn.com/news/1194104" target="_blank" rel="noopener noreferrer">
                  [9] https://images.dawn.com/news/1194104
                </a>
                <p>There is a disturbing rise in cases of parents harming their own children, the actor Sania Saeed says that most Pakistani are not responsible to their children due to the lack of mental health awareness.</p>
              </div>
              
              <div className="source-item">
                <a href="https://www.annafreud.org/news/neurodivergent-adolescents-experience-twice-the-emotional-burden-at-school/" target="_blank" rel="noopener noreferrer">
                  [10] https://www.annafreud.org/news/neurodivergent-adolescents-experience-twice-the-emotional-burden-at-school/
                </a>
                <p>Autistic & ADHD adolescents have x2 emotional burden from negative school experiences leading to anxiety & depression.</p>
              </div>
              
              <div className="source-item">
                <a href="https://www.contemporarypediatrics.com/view/understanding-neurodiversity-what-every-parent-and-pediatrician-should-know-when-it-comes-to-your-child-s-brain-development" target="_blank" rel="noopener noreferrer">
                  [11] https://www.contemporarypediatrics.com/view/understanding-neurodiversity-what-every-parent-and-pediatrician-should-know-when-it-comes-to-your-child-s-brain-development
                </a>
                <p>According to professionals, there is a lack of resources for understanding neurodiversity in medical school.</p>
              </div>
              
              <div className="source-item">
                <a href="https://raisingchildren.net.au/autism/behaviour/common-concerns/bullying-asd" target="_blank" rel="noopener noreferrer">
                  [12] https://raisingchildren.net.au/autism/behaviour/common-concerns/bullying-asd
                </a>
                <p>What is bullying, and its effects on kids without neurodivergence. Signs of bullying in autistic children.</p>
              </div>
              
              <div className="source-item">
                <a href="https://www.qld.gov.au/disability/children-young-people/bullying/bullying-disability-mental-health" target="_blank" rel="noopener noreferrer">
                  [13] https://www.qld.gov.au/disability/children-young-people/bullying/bullying-disability-mental-health
                </a>
                <p>Having a disability can make children and teens a target of bullies. 62% of students with autism spectrum disorder report being bullied once a week or more.</p>
              </div>
              
              <div className="source-item">
                <a href="https://fixel.ufhealth.org/2023/05/12/tourette-awareness-month/" target="_blank" rel="noopener noreferrer">
                  [14] https://fixel.ufhealth.org/2023/05/12/tourette-awareness-month/
                </a>
                <p>May 15 - June 15 is recognised as the Tourette Association Awareness Month.</p>
              </div>
              
              <div className="source-item">
                <a href="https://www.scmp.com/news/hong-kong/education/article/3304957/over-90-student-suicides-hong-kong-were-youngsters-aged-12-and-above" target="_blank" rel="noopener noreferrer">
                  [15] https://www.scmp.com/news/hong-kong/education/article/3304957/over-90-student-suicides-hong-kong-were-youngsters-aged-12-and-above
                </a>
                <p>"more than 90 per cent of the 31 student suicides recorded in the first 11 months of 2023 involved young people aged 12 and above."</p>
              </div>
              
              <div className="source-item">
                <a href="https://www.mind.org.hk/new/publish-157/" target="_blank" rel="noopener noreferrer">
                  [16] https://www.mind.org.hk/new/publish-157/
                </a>
                <p>Organization resource.</p>
              </div>
              
              <div className="source-item">
                <a href="https://www.researchgate.net/publication/394843193_Are_they_looking_for_support_Mental_health_and_trauma_awareness_as_predictors_of_mental_health_help-seeking_behaviour_among_young_adults_and_adolescents_in_Bangladesh_Egypt_Ghana_and_the_United_Arab_E" target="_blank" rel="noopener noreferrer">
                  [17] https://www.researchgate.net/publication/394843193_Are_they_looking_for_support_Mental_health_and_trauma_awareness_as_predictors_of_mental_health_help-seeking_behaviour_among_young_adults_and_adolescents_in_Bangladesh_Egypt_Ghana_and_the_United_Arab_E
                </a>
              </div>
              
              <div className="source-item">
                <a href="https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health" target="_blank" rel="noopener noreferrer">
                  [18] https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health
                </a>
              </div>
              
              <div className="source-item">
                <a href="https://www.antibullyingpro.com/support-and-advice-articles/neurodiversity-and-bullying-behaviour" target="_blank" rel="noopener noreferrer">
                  [19] https://www.antibullyingpro.com/support-and-advice-articles/neurodiversity-and-bullying-behaviour
                </a>
              </div>
            </div>
          </div>
          
          <div className="credits-section">
            <h2 className="subtitle">Credits</h2>
            <div className="paragraphs">
              <p>Gillian — Developer, UI/UX designer</p>
              <p>Chloe — Researched</p>
              <p>Andrea — Anecdotal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}