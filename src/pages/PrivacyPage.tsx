import { useEffect } from 'react';
import LegalLayout from '../components/LegalLayout';
import { siteContent } from '../content/siteContent';

const PrivacyPage = () => {
  const brandName = siteContent.brand.name;

  useEffect(() => {
    document.title = `Privacy Policy | ${brandName}`;
  }, [brandName]);

  return <LegalLayout content={siteContent.legal.privacy} />;
};

export default PrivacyPage;
