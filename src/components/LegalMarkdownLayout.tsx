import ReactMarkdown from 'react-markdown';
import styles from './LegalMarkdownLayout.module.css';

interface LegalMarkdownLayoutProps {
  markdown: string;
}

const LegalMarkdownLayout = ({ markdown }: LegalMarkdownLayoutProps) => (
  <section className={`section ${styles.legal}`}>
    <div className="container">
      <div className={styles.markdown}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  </section>
);

export default LegalMarkdownLayout;
