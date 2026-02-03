import { Link } from 'react-router-dom';
import { siteContent } from '../content/siteContent';
import Logo from './Logo';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.inner}`}>
      <div className={styles.brand}>
        <Logo />
        <div>
          <p className={styles.name}>{siteContent.brand.name}</p>
          <p className={styles.tagline}>{siteContent.brand.tagline}</p>
        </div>
      </div>
      <div className={styles.links}>
        <Link to={siteContent.footer.privacyHref}>Privacy Policy</Link>
        <Link to={siteContent.footer.termsHref}>Terms</Link>
        <a href={`mailto:${siteContent.contact.email}`}>Contact</a>
      </div>
      <p className={styles.copyright}>{siteContent.footer.copyright}</p>
    </div>
  </footer>
);

export default Footer;
