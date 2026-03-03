import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import LegalMarkdownLayout from '../components/LegalMarkdownLayout';
import { appPrivacyBySlug, featuredAppPrivacySlug, type AppPrivacySlug } from '../content/legal/appPrivacy';

const AppPrivacyPage = () => {
  const { projectId, app } = useParams();
  const slug = (projectId ?? app ?? featuredAppPrivacySlug) as AppPrivacySlug;
  const entry = appPrivacyBySlug[slug];
  const featuredPrivacyPath = `/projects/${featuredAppPrivacySlug}/privacy`;

  useEffect(() => {
    if (entry) {
      document.title = `Privacy Policy | ${entry.appName}`;
    }
  }, [entry]);

  if (!entry) {
    return <Navigate to={featuredPrivacyPath} replace />;
  }

  if (!projectId) {
    return <Navigate to={`/projects/${slug}/privacy`} replace />;
  }

  return <LegalMarkdownLayout markdown={entry.markdown} />;
};

export default AppPrivacyPage;
