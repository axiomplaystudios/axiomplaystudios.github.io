import Reveal from './Reveal';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ title, subtitle, eyebrow, align = 'left' }: SectionHeaderProps) => (
  <div className={`${styles.header} ${styles[align]}`}>
    {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
    <Reveal>
      <h2>{title}</h2>
    </Reveal>
    {subtitle && (
      <Reveal delay={120}>
        <p className={styles.subtitle}>{subtitle}</p>
      </Reveal>
    )}
  </div>
);

export default SectionHeader;
