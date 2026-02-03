import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';
import { siteContent } from '../content/siteContent';
import styles from './StudioSection.module.css';

const StudioSection = () => (
  <section id="studio" className={`section ${styles.section}`}>
    <div className="container">
      <SectionHeader title={siteContent.studio.title} eyebrow="Studio" />
      <div className={styles.grid}>
        <Reveal>
          <div className={styles.mission}>
            <h3>Mission</h3>
            <p>{siteContent.studio.mission}</p>
          </div>
        </Reveal>
        <div className={styles.values}>
          {siteContent.studio.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80}>
              <div className={styles.valueCard}>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className={styles.timeline}>
        <h3>Timeline</h3>
        <div className={styles.timelineGrid}>
          {siteContent.studio.timeline.map((item) => (
            <div key={item.year} className={styles.timelineItem}>
              <span>{item.year}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StudioSection;
