import React from 'react';
import { Link } from 'react-router-dom';
import { YouTubeIcon, DiscordIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="wrap">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', gap: '24px', alignItems: 'center' }}>
          <Link className="brand" to="/" aria-label="BIODECAY home">
            <img className="pixelated" src="/img/gas-mask.png" alt="" width={36} height={36} />
            <span>BIODECAY &middot; A Project By xGHOST</span>
          </Link>

          <nav aria-label="Footer Navigation">
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
              <li>
                <Link to="/" style={{ fontFamily: 'var(--pixel)', fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ fontFamily: 'var(--pixel)', fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" style={{ fontFamily: 'var(--pixel)', fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>
                  Features
                </Link>
              </li>
              <li>
                <Link to="/install" style={{ fontFamily: 'var(--pixel)', fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>
                  Install
                </Link>
              </li>
              <li>
                <Link to="/community" style={{ fontFamily: 'var(--pixel)', fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase' }}>
                  Community
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <ul className="social-row" aria-label="BIODECAY on social media" style={{ justifyContent: 'flex-start' }}>
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

        <p>
          BIODECAY is a fan-made modpack. Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.
        </p>
      </div>
    </footer>
  );
};
