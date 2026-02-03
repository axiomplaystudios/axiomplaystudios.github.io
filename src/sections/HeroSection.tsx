import { siteContent } from '../content/siteContent';
import { ButtonLink } from '../components/Button';
import Reveal from '../components/Reveal';
import styles from './HeroSection.module.css';

const HeroSection = () => (
  <section id="home" className={`section ${styles.hero}`}>
    <div className={`container ${styles.grid}`}>
      <div className={styles.copy}>
        <Reveal>
          <p className={styles.brand}>{siteContent.brand.name}</p>
        </Reveal>
        <Reveal delay={80}>
          <p className={styles.eyebrow}>Premium mobile game studio</p>
        </Reveal>
        <Reveal delay={120}>
          <h1>{siteContent.brand.tagline}</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className={styles.intro}>{siteContent.brand.intro}</p>
        </Reveal>
        <Reveal delay={280}>
          <div className={styles.actions}>
            <ButtonLink href={siteContent.hero.primaryCta.href}>{siteContent.hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={siteContent.hero.secondaryCta.href} variant="secondary">
              {siteContent.hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </Reveal>
        <div className={styles.highlights}>
          <Reveal delay={360}>
            <div>
              <span>Android + iOS</span>
              <p>Optimized for a wide device spectrum.</p>
            </div>
          </Reveal>
          <Reveal delay={440}>
            <div>
              <span>Performance obsessed</span>
              <p>Consistent frame pacing and fast loads.</p>
            </div>
          </Reveal>
          <Reveal delay={520}>
            <div>
              <span>Player-first UX</span>
              <p>Clear onboarding, tactile feedback, and flow.</p>
            </div>
          </Reveal>
        </div>
      </div>
      <div className={styles.art} aria-hidden="true">
        <div className={styles.orb} />
        <div className={styles.frame}>
          <svg viewBox="0 0 520 520" role="presentation">
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#27e0a5" />
                <stop offset="60%" stopColor="#4f7dff" />
                <stop offset="100%" stopColor="#ffb347" />
              </linearGradient>
            </defs>
            <circle cx="260" cy="260" r="220" fill="url(#heroGradient)" opacity="0.12" />
            <circle cx="260" cy="260" r="150" fill="none" stroke="url(#heroGradient)" strokeWidth="2" opacity="0.6" />
            <path
              d="M160 320L260 120L360 320H300L260 235L220 320H160Z"
              fill="url(#heroGradient)"
            />
          </svg>
          <div className={styles.stats}>
            <div>
              <span>12 ms</span>
              <p>Input latency target</p>
            </div>
            <div>
              <span>60 fps</span>
              <p>Frame pacing baseline</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
