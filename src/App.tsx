import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';
import HashScroll from './components/HashScroll';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import SkipLink from './components/SkipLink';
import HomePage from './pages/HomePage';

const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

const LoadingFallback = () => (
  <div className="section">
    <div className="container">
      <p>Loading...</p>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <SkipLink />
    <AnnouncementBar />
    <Navbar />
    <ScrollToTop />
    <HashScroll />
    <main id="main-content">
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
