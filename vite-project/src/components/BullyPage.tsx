import '../styles/bully-page.css';

interface BullyPageProps {
  scrollProgress?: number;
}

export default function BullyPage({ scrollProgress }: BullyPageProps) {
  const columns = [
    {
      title: "Understanding Bullying",
      content: "Bullying is unwanted, aggressive behavior among school aged children that involves a real or perceived power imbalance. The behavior is repeated, or has the potential to be repeated, over time.",
      items: [
        "Physical bullying: hitting, kicking, pushing",
        "Verbal bullying: teasing, name-calling, threats",
        "Social bullying: spreading rumors, exclusion",
        "Cyberbullying: online harassment, fake profiles"
      ]
    },
    {
      title: "Impact on Neurodivergent Teens",
      content: "Neurodivergent students are significantly more likely to experience bullying due to differences in communication, social cues, and behavior patterns.",
      items: [
        "Higher rates of anxiety and depression",
        "School avoidance and academic decline",
        "Lower self-esteem and social isolation",
        "Long-term psychological effects"
      ]
    },
    {
      title: "How to Help",
      content: "Creating supportive environments and teaching empathy can significantly reduce bullying incidents and support victims.",
      items: [
        "Educate about neurodiversity and differences",
        "Implement clear anti-bullying policies",
        "Provide safe reporting mechanisms",
        "Foster inclusive classroom environments"
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