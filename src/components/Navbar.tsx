import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../content/siteContent';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useTheme } from '../hooks/useTheme';
import { isHostedPagePath } from '../utils/hostedPagePaths';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const hashNavItems = siteContent.nav.filter((item) => item.href.startsWith('#'));
  const sectionIds = hashNavItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);
  const isHome = location.pathname === '/';
  const { theme, toggleTheme } = useTheme();

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
              const isHashLink = item.href.startsWith('#');
              const isHostedPageLink = isHostedPagePath(item.href);
              const isActive = isHashLink
                ? isHome && activeSection === item.id
                : !isHostedPageLink && location.pathname === item.href;
              const destination = isHashLink ? { pathname: '/', hash: item.href } : item.href;

              if (isHostedPageLink) {
                return (
                  <a
                    key={item.id}
                    className={styles.link}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.id}
                  className={`${styles.link} ${isActive ? styles.active : ''}`}
                  to={destination}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className={styles.controls}>
            <ThemeToggle theme={theme} onToggle={toggleTheme} className={styles.themeButton} />
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
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}
        role="button"
        tabIndex={0}
        aria-label="Close navigation menu"
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setMenuOpen(false);
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setMenuOpen(false);
          }
        }}
      >
        <div className={styles.mobilePanel}>
          {siteContent.nav.map((item) => {
            if (isHostedPagePath(item.href)) {
              return (
                <a
                  key={item.id}
                  className={styles.mobileLink}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            }

            const destination = item.href.startsWith('#') ? { pathname: '/', hash: item.href } : item.href;

            return (
              <Link
                key={item.id}
                className={styles.mobileLink}
                to={destination}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className={styles.mobileMeta}>
            <p>Premium mobile experiences for Android and iOS.</p>
            <Link
              className={styles.mobileCta}
              to="/projects/weighsnap"
              onClick={() => setMenuOpen(false)}
            >
              Explore WeighSnap
            </Link>
            <ThemeToggle theme={theme} onToggle={toggleTheme} className={styles.mobileThemeButton} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
