import React, { useState, useRef, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DOWNLOAD_CONFIG } from './config/downloadConfig';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { InstallPage } from './pages/InstallPage';
import { CommunityPage } from './pages/CommunityPage';

export const App: React.FC = () => {
  const [toast, setToast] = useState<{
    isVisible: boolean;
    message: string | null;
    downloadUrl?: string;
  }>({
    isVisible: false,
    message: null,
    downloadUrl: undefined
  });

  const toastTimerRef = useRef<number | null>(null);
  const isDownloadReady = /^https?:\/\//i.test(DOWNLOAD_CONFIG.url.trim());

  const showToast = useCallback((message: string, downloadUrl?: string) => {
    setToast({
      isVisible: true,
      message,
      downloadUrl
    });

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 6000);
  }, []);

  const handleDownloadClick = useCallback(
    (e: React.MouseEvent) => {
      if (!isDownloadReady) {
        e.preventDefault();
        const dlSection = document.getElementById('download');
        if (dlSection) {
          dlSection.scrollIntoView({ behavior: 'smooth' });
        }
        showToast('BIODECAY is still in development. Join Discord for release updates!');
        return;
      }

      showToast('Your download has started. Nothing happening?', DOWNLOAD_CONFIG.url.trim());
    },
    [isDownloadReady, showToast]
  );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <a className="skip" href="#main">
        Skip to content
      </a>

      <Loader />

      <Navbar
        onDownloadClick={handleDownloadClick}
        downloadLabel={isDownloadReady ? 'Download' : 'Coming Soon'}
        isDownloadReady={isDownloadReady}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onDownloadClick={handleDownloadClick}
              isDownloadReady={isDownloadReady}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/install" element={<InstallPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />

      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        downloadUrl={toast.downloadUrl}
      />
    </BrowserRouter>
  );
};

export default App;
