import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../config/downloadConfig';
import { Hero } from '../components/Hero';
import { HazardTape } from '../components/HazardTape';
import { AboutSection } from '../components/AboutSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { InstallSection } from '../components/InstallSection';
import { DownloadSection } from '../components/DownloadSection';
import { CommunitySection } from '../components/CommunitySection';
import { SEO } from '../components/SEO';

interface HomePageProps {
  onDownloadClick: (e: React.MouseEvent) => void;
  isDownloadReady: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({ onDownloadClick, isDownloadReady }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'BIODECAY',
    alternateName: 'BIODECAY Modpack Minecraft 1.20.1',
    description:
      'An upcoming immersive zombie apocalypse survival modpack for Minecraft 1.20.1 (Forge). A project by xGHOST featuring procedural ruins, biohazards, horde sieges, and realistic survival mechanics.',
    genre: ['Zombie Survival', 'Hardcore Survival', 'Action-Adventure', 'Post-Apocalyptic'],
    gamePlatform: ['PC', 'Windows', 'Linux', 'macOS'],
    applicationCategory: 'Game',
    operatingSystem: 'Windows, macOS, Linux',
    author: {
      '@type': 'Person',
      name: 'xGHOST'
    },
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder'
    }
  };

  return (
    <>
      <SEO
        title="BIODECAY — Zombie Apocalypse Survival Modpack for Minecraft 1.20.1 (Forge)"
        description="BIODECAY is an immersive zombie apocalypse survival modpack for Minecraft 1.20.1 on Forge by xGHOST. Scavenge ruins, fortify safehouses, survive toxic biohazards, and endure the horde."
        canonicalPath="/"
        jsonLd={jsonLd}
      />

      <Hero
        onDownloadClick={onDownloadClick}
        downloadLabel={isDownloadReady ? 'Download BIODECAY' : 'Download coming soon'}
        isDownloadReady={isDownloadReady}
      />

      <HazardTape />

      <div style={{ position: 'relative' }}>
        <AboutSection />
        <div className="wrap" style={{ marginTop: '-48px', marginBottom: '48px' }}>
          <Link to="/about" className="section-readmore">
            Read complete outbreak lore, timeline & FAQ <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <FeaturesSection />
        <div className="wrap" style={{ marginTop: '-48px', marginBottom: '48px' }}>
          <Link to="/features" className="section-readmore">
            Explore in-depth survival mechanics & tactical field manual <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <InstallSection />
        <div className="wrap" style={{ marginTop: '-48px', marginBottom: '48px' }}>
          <Link to="/install" className="section-readmore">
            Full multi-launcher guide, RAM optimization & troubleshooting <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <HazardTape />

      <DownloadSection config={DOWNLOAD_CONFIG} onDownloadClick={onDownloadClick} />

      <div style={{ position: 'relative' }}>
        <CommunitySection />
        <div className="wrap" style={{ marginTop: '-48px', marginBottom: '48px' }}>
          <Link to="/community" className="section-readmore">
            Join survivor squads, read community rules & report bugs <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </>
  );
};
