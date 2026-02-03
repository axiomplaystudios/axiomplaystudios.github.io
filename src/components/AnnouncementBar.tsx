import { Link } from 'react-router-dom';
import { siteContent } from '../content/siteContent';
import styles from './AnnouncementBar.module.css';

const AnnouncementBar = () => {
  if (!siteContent.announcement.enabled) {
    return null;
  }

  const { label, link } = siteContent.announcement;

  return (
    <div className={styles.bar} role="region" aria-label="Announcement">
      <div className={`container ${styles.inner}`}>
        <span>{label}</span>
        <Link className={styles.link} to={{ pathname: '/', hash: link.href }}>
          {link.text}
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementBar;
