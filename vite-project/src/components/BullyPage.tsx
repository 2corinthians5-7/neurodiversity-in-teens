import '../styles/bully-page.css';

interface BullyPageProps {
  scrollProgress?: number;
}

export default function BullyPage({ scrollProgress }: BullyPageProps) {
  const columns = [
    {
      title: "Bullying",
      content: "Having a disability can make children and teens a higher chance of being a target of bullies.",
      items: [
        "62% of students with autism spectrum disorder report being bullied once a week or more. ",
        "it can harm them in many ways, including their self-esteem, mental health, social skills and school progress."
      ]
    },
    {
      title: "To prevent bullying",
      content: "The best way to prevent bullying of autistic individuals is to ensure the implementation of neuroaffirming practices, beginning at the early academic level.",
      items: [
        "People with neurodiversity seem to be affected more by anxiety or depression,They have difficulties coping with mental issues.",
        "They have difficulties coping with mental issues.",
        "A misunderstanding of a social situation, or being accused of being disruptive by a teacher, and they experience the negative emotion more than their neurotypical peers."
      ]
    },
    {
      title: "More information",
      content: "According to professionals, there is a lack of resources for understanding neurodiversity in medical school, even as pediatricians there’s very little focus on mental wellness, they don’t pair medication with therapy to meet the needs of the children, they also have limited time to interact with the patient.",
      items: [
        "May 15 - June 15 is recognised as the Tourette Association Awareness Month."
      ]
    }
  ];

  return (
    <section id="bullying" className="bully-page">
      <div className="columns-container">
        {columns.map((column, index) => (
          <div key={index} className="column">
            <h2 className="column-title">{column.title}</h2>
            <p className="column-content">{column.content}</p>
            <ul className="column-list">
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex} className="list-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}