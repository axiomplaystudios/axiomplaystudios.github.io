import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ButtonLink, ButtonRouteLink } from '../components/Button';
import Reveal from '../components/Reveal';
import { siteContent } from '../content/siteContent';
import styles from './HomePage.module.css';

const HomePage = () => {
  const brandName = siteContent.brand.name;
  const featuredProject = siteContent.projects.list.find(
    (project) => project.id === siteContent.projects.featuredId
  );

  useEffect(() => {
    document.title = `${brandName} | WeighSnap`;
  }, [brandName]);

  if (!featuredProject) {
    return null;
  }

  return (
    <>
      <section id="home" className={`section ${styles.hero}`}>
        <div className={`container ${styles.heroInner}`}>
          <Reveal className={styles.heroCopy}>
            <p className={styles.eyebrow}>{siteContent.brand.name}</p>
            <h1>{siteContent.brand.tagline}</h1>
            <p className={styles.lead}>{siteContent.brand.intro}</p>
            <div className={styles.heroActions}>
              <ButtonLink href="#projects">View Projects</ButtonLink>
              <ButtonLink href="/support" variant="secondary">Contact Studio</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={120} className={styles.heroVisual}>
            <img src="/brand/logo-lockup-dark.svg" alt="Axiomplay Studios brand lockup" width={760} height={168} />
          </Reveal>
        </div>
      </section>

      <section id="studio" className="section">
        <div className={`container ${styles.studioBlock}`}>
          <header className={styles.studioHeader}>
            <p className={styles.featuredTag}>Studio</p>
            <h2>{siteContent.studio.title}</h2>
            <p>{siteContent.studio.mission}</p>
          </header>
          <div className={styles.values}>
            {siteContent.studio.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 90}>
                <article className={styles.valueCard}>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className={`container ${styles.projectsBlock}`}>
          <header className={styles.projectsHeader}>
            <p className={styles.featuredTag}>Projects</p>
            <h2>Project directory</h2>
            <p>
              A scalable list of live products. Detailed feature and screenshot content belongs inside each
              project page.
            </p>
          </header>
          <div className={styles.projectGrid}>
            {siteContent.projects.list.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <article className={styles.projectCard}>
                  <p className={styles.projectTag}>{project.tag}</p>
                  <h3>{project.name}</h3>
                  <p>{project.oneLiner}</p>
                  <Link to={`/projects/${project.slug}`}>View project</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.finalCta}`}>
        <div className={`container ${styles.finalInner}`}>
          <h2>Discover each project in its own dedicated space.</h2>
          <p>Browse project pages for screenshots, feature deep dives, changelogs, and support details.</p>
          <ButtonRouteLink to={`/projects/${featuredProject.slug}`}>Open Project Page</ButtonRouteLink>
        </div>
      </section>
    </>
  );
};

export default HomePage;
