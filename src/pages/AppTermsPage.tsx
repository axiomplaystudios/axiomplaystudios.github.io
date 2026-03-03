import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import LegalMarkdownLayout from '../components/LegalMarkdownLayout';
import { appLegalBySlug, featuredAppSlug, type AppSlug } from '../content/legal/appLegal';

const AppTermsPage = () => {
  const { projectId, app } = useParams();
  const slug = (projectId ?? app ?? featuredAppSlug) as AppSlug;
  const entry = appLegalBySlug[slug];
  const featuredTermsPath = `/projects/${featuredAppSlug}/terms`;

  useEffect(() => {
    if (entry) {
      document.title = `Terms of Service | ${entry.appName}`;
    }
  }, [entry]);

  if (!entry) {
    return <Navigate to={featuredTermsPath} replace />;
  }

  if (!projectId) {
    return <Navigate to={`/projects/${slug}/terms`} replace />;
  }

  return <LegalMarkdownLayout markdown={entry.termsMarkdown} />;
};

export default AppTermsPage;
