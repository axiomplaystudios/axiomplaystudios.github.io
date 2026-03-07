import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { appLegalBySlug, featuredAppSlug, type AppSlug } from '../content/legal/appLegal';

const AppTermsPage = () => {
  const { app } = useParams();
  const slug = (app ?? featuredAppSlug) as AppSlug;
  const entry = appLegalBySlug[slug] ?? appLegalBySlug[featuredAppSlug];

  useEffect(() => {
    document.title = `Redirecting | ${entry.appName}`;
    window.location.replace(entry.termsPath);
  }, [entry]);

  return (
    <section className="section">
      <div className="container">
        <p>Redirecting to the canonical terms page...</p>
      </div>
    </section>
  );
};

export default AppTermsPage;
