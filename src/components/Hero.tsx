import React from 'react';
import { Download } from 'lucide-react';
import { AshParticles } from './AshParticles';
import { YouTubeIcon, DiscordIcon } from './SocialIcons';

interface HeroProps {
  onDownloadClick: (e: React.MouseEvent) => void;
  downloadLabel?: string;
  isDownloadReady?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onDownloadClick,
  downloadLabel = 'Download',
  isDownloadReady = false
}) => {
  return (
    <div className="hero" id="top">
      <AshParticles />
      <div className="wrap">
        <p className="status">
          <i aria-hidden="true" />
          Outbreak incoming &middot; In development
        </p>

        <h1>
          <span className="sr-only">BIODECAY: A Project By xGHOST</span>
          <img
            className="hero-logo pixelated"
            src="/img/biodecay-title.png"
            width={1024}
            height={367}
            alt="BIODECAY logo: golden block letters with a dripping pixel-art gas mask in front of a ruined city skyline, subtitled A Project By xGHOST"
          />
        </h1>

        <p className="lede">
          An immersive <strong>zombie apocalypse survival</strong> modpack for Minecraft 1.20.1 on Forge. The world has rotted. See how long you last.
        </p>

        <div className="cta">
          <a
            className={`btn btn-gold btn-lg ${!isDownloadReady ? 'disabled' : ''}`}
            href="#download"
            onClick={onDownloadClick}
            aria-disabled={!isDownloadReady ? 'true' : undefined}
          >
            <Download size={18} aria-hidden="true" />
            <span>{downloadLabel}</span>
          </a>
          <a className="btn btn-ghost btn-lg" href="#features">
            See what's inside
          </a>
        </div>

        <ul className="social-row" aria-label="Follow BIODECAY">
          <li>
            <a
              className="social-link"
              href="https://www.youtube.com/@BiodecayMinecraft"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
              YouTube
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://discord.gg/D4EEFV3Fmw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon />
              Discord
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
