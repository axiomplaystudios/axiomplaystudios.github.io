import { useEffect } from 'react';
import LegalLayout from '../components/LegalLayout';
import { siteContent } from '../content/siteContent';

const TermsPage = () => {
  const brandName = siteContent.brand.name;

  useEffect(() => {
    document.title = `Terms of Service | ${brandName}`;
  }, [brandName]);

  return <LegalLayout content={siteContent.legal.terms} />;
};

export default TermsPage;
