import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ButtonLink } from '../components/Button';
import { siteContent } from '../content/siteContent';
import styles from './ProjectPage.module.css';

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = useMemo(
    () =>
      siteContent.projects.list.find((item) => item.slug === projectId || item.id === projectId) ?? null,
    [projectId]
  );
  const brandName = siteContent.brand.name;

  useEffect(() => {
    document.title = project ? `${project.name} | ${brandName}` : `Project Not Found | ${brandName}`;
  }, [brandName, project]);

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h1>Project not found</h1>
          <p>The requested page does not exist.</p>
          <Link to="/">Back to home</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.tag}>{project.tag}</p>
            <h1>{project.name}</h1>
            <p className={styles.oneLiner}>{project.oneLiner}</p>
            <div className={styles.heroActions}>
              <ButtonLink href={project.playStoreUrl} target="_blank" rel="noreferrer">
                Download on Play Store
              </ButtonLink>
              <ButtonLink href="#faq" variant="secondary">
                View FAQ
              </ButtonLink>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <img src={project.heroImage} alt={`${project.name} preview`} width={800} height={450} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.sectionBlock}`}>
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.sectionBlock}`}>
          <h2>Feature Deep Dive</h2>
          <div className={styles.featureGrid}>
            {project.features.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.sectionBlock}`}>
          <h2>Screenshots</h2>
          <div className={styles.shotRow}>
            {project.screenshots.map((shot) => (
              <img key={shot} src={shot} alt={`${project.name} screenshot`} loading="lazy" width={640} height={360} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.sectionBlock}`}>
          <h2>Walkthrough</h2>
          <p>
            {project.walkthroughVideoUrl
              ? 'Product walkthrough is available from the following link.'
              : 'Video walkthrough will be published soon. Current screenshots show the active interface style.'}
          </p>
          {project.walkthroughVideoUrl ? (
            <ButtonLink href={project.walkthroughVideoUrl} target="_blank" rel="noreferrer" variant="secondary">
              Watch walkthrough
            </ButtonLink>
          ) : null}
        </div>
      </section>

      {project.reviewQuote ? (
        <section className="section">
          <div className={`container ${styles.sectionBlock}`}>
            <h2>What users say</h2>
            <blockquote className={styles.quote}>
              <p>&ldquo;{project.reviewQuote.quote}&rdquo;</p>
              <cite>{project.reviewQuote.source}</cite>
            </blockquote>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className={`container ${styles.sectionBlock}`}>
          <h2>Changelog Highlights</h2>
          <div className={styles.changelogList}>
            {project.changelog.map((item) => (
              <article key={item.version} className={styles.changelogItem}>
                <h3>{item.version}</h3>
                <p className={styles.changelogDate}>{item.date}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className={`container ${styles.sectionBlock}`}>
          <h2>FAQ</h2>
          <div className={styles.faqList}>
            {project.faq.map((item) => (
              <details key={item.question} className={styles.faqItem}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.sectionBlock}`}>
          <h2>Support and Legal</h2>
          <div className={styles.quickLinks}>
            <a href={`mailto:${project.supportEmail}`}>{project.supportEmail}</a>
            <Link to="/support">Support page</Link>
            <Link to="/privacy">Privacy policy</Link>
            <Link to="/terms">Terms of service</Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.finalCta}`}>
        <div className="container">
          <h2>Ready to start tracking with precision?</h2>
          <ButtonLink href={project.playStoreUrl} target="_blank" rel="noreferrer">
            Download on Play Store
          </ButtonLink>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
