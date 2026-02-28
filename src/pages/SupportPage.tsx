import { useEffect } from 'react';
import { siteContent } from '../content/siteContent';
import styles from './SupportPage.module.css';

const SupportPage = () => {
  const brandName = siteContent.brand.name;

  useEffect(() => {
    document.title = `Support | ${brandName}`;
  }, [brandName]);

  return (
    <section className="section">
      <div className={`container ${styles.layout}`}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Support</p>
          <h1>{siteContent.support.title}</h1>
          <p>{siteContent.support.subtitle}</p>
        </header>
        <article className={styles.card}>
          <h2>Contact</h2>
          <a className={styles.email} href={`mailto:${siteContent.support.email}`}>
            {siteContent.support.email}
          </a>
        </article>
        <article className={styles.card}>
          <h2>Before You Email</h2>
          <ul>
            {siteContent.support.faq.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default SupportPage;
