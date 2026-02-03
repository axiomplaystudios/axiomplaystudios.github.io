import styles from './LegalLayout.module.css';

interface LegalSection {
  heading: string;
  body: string;
}

interface LegalContent {
  title: string;
  lastUpdated: string;
  summary: string;
  sections: LegalSection[];
}

interface LegalLayoutProps {
  content: LegalContent;
}

const LegalLayout = ({ content }: LegalLayoutProps) => (
  <section className={`section ${styles.legal}`}>
    <div className="container">
      <div className={styles.header}>
        <h1>{content.title}</h1>
        <p className={styles.meta}>Last updated: {content.lastUpdated}</p>
        <p className={styles.summary}>{content.summary}</p>
      </div>
      <div className={styles.body}>
        {content.sections.map((section) => (
          <div key={section.heading} className={styles.card}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LegalLayout;
