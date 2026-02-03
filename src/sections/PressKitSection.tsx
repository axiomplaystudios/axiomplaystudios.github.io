import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';
import { siteContent } from '../content/siteContent';
import styles from './PressKitSection.module.css';

const PressKitSection = () => {
  const [copied, setCopied] = useState(false);
  const colorString = siteContent.pressKit.brandColors.join(', ');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(colorString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="press" className="section">
      <div className="container">
        <SectionHeader title={siteContent.pressKit.title} subtitle={siteContent.pressKit.subtitle} />
        <div className={styles.grid}>
          <div className={styles.downloads}>
            {siteContent.pressKit.downloads.map((item) => (
              <Reveal key={item.title}>
                <a className={styles.downloadCard} href={item.href} download>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span aria-hidden="true">Download</span>
                </a>
              </Reveal>
            ))}
          </div>
          <div className={styles.details}>
            <Reveal>
              <div className={styles.colors}>
                <h3>Brand colors</h3>
                <div className={styles.colorSwatches}>
                  {siteContent.pressKit.brandColors.map((color) => (
                    <div key={color} className={styles.color}>
                      <span style={{ background: color }} aria-hidden="true" />
                      <code>{color}</code>
                    </div>
                  ))}
                </div>
                <button type="button" className={styles.copyButton} onClick={handleCopy}>
                  {copied ? 'Copied' : 'Copy all'}
                </button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className={styles.guidelines}>
                <h3>Usage guidelines</h3>
                <ul>
                  {siteContent.pressKit.usageGuidelines.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className={styles.contact}>
                <h3>Press contact</h3>
                <a href={`mailto:${siteContent.pressKit.pressContact}`}>
                  {siteContent.pressKit.pressContact}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressKitSection;
