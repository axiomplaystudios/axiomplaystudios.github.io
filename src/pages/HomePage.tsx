import { useEffect } from 'react';
import HeroSection from '../sections/HeroSection';
import GamesSection from '../sections/GamesSection';
import StudioSection from '../sections/StudioSection';
import PressKitSection from '../sections/PressKitSection';
import ContactSection from '../sections/ContactSection';
import { siteContent } from '../content/siteContent';

const HomePage = () => {
  const brandName = siteContent.brand.name;

  useEffect(() => {
    document.title = `${brandName} | Premium Mobile Game Studio`;
  }, [brandName]);

  return (
    <>
      <HeroSection />
      <GamesSection />
      <StudioSection />
      <PressKitSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
