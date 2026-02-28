import { Link } from 'react-router-dom';
import { siteContent } from '../content/siteContent';
import Logo from './Logo';
import styles from './Footer.module.css';

interface FooterLinkItem {
  label: string;
  href: string;
}

const FooterLink = ({ item }: { item: FooterLinkItem }) => {
  if (item.href.startsWith('mailto:')) {
    return <a href={item.href}>{item.label}</a>;
  }

  if (item.href.startsWith('http')) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer">
        {item.label}
      </a>
    );
  }

  if (item.href.startsWith('#')) {
    return (
      <Link to={{ pathname: '/', hash: item.href }}>
        {item.label}
      </Link>
    );
  }

  return <Link to={item.href}>{item.label}</Link>;
};

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.inner}`}>
      <div className={styles.brand}>
        <div>
          <div className={styles.brandHead}>
            <Logo />
            <p className={styles.name}>{siteContent.brand.name}</p>
          </div>
          <p className={styles.tagline}>Crafting focused digital experiences for mobile and beyond.</p>
          <div className={styles.socials}>
            {siteContent.contact.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.linkColumn}>
        <p className={styles.columnTitle}>Studio</p>
        {siteContent.footer.studioLinks.map((item) => (
          <FooterLink key={item.label} item={item} />
        ))}
      </div>
      <div className={styles.linkColumn}>
        <p className={styles.columnTitle}>Legal</p>
        {siteContent.footer.legalLinks.map((item) => (
          <FooterLink key={item.label} item={item} />
        ))}
      </div>
      <div className={styles.linkColumn}>
        <p className={styles.columnTitle}>Connect</p>
        {siteContent.footer.connectLinks.map((item) => (
          <FooterLink key={item.label} item={item} />
        ))}
      </div>
    </div>
    <div className={`container ${styles.legalLine}`}>
      <p className={styles.copyright}>{siteContent.footer.copyright}</p>
    </div>
  </footer>
);

export default Footer;
