import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../content/siteContent';
import { useScrollSpy } from '../hooks/useScrollSpy';
import Logo from './Logo';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const sectionIds = siteContent.nav.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);
  const isHome = location.pathname === '/';

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <div className={`container ${styles.inner}`}>
          <Link className={styles.brand} to="/" onClick={() => setMenuOpen(false)}>
            <Logo />
            <span>{siteContent.brand.name}</span>
          </Link>

          <div className={styles.links}>
            {siteContent.nav.map((item) => {
              const isActive = isHome && activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  className={`${styles.link} ${isActive ? styles.active : ''}`}
                  to={{ pathname: '/', hash: item.href }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            className={styles.menuButton}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className={styles.mobilePanel} onClick={(event) => event.stopPropagation()}>
          {siteContent.nav.map((item) => (
            <Link
              key={item.id}
              className={styles.mobileLink}
              to={{ pathname: '/', hash: item.href }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className={styles.mobileMeta}>
            <p>Premium mobile experiences for Android and iOS.</p>
            <Link
              className={styles.mobileCta}
              to={{ pathname: '/', hash: '#contact' }}
              onClick={() => setMenuOpen(false)}
            >
              Contact the studio
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
