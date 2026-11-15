import React from 'react';
import { Download } from 'lucide-react';
import { DownloadConfig } from '../types';

interface DownloadSectionProps {
  config: DownloadConfig;
  onDownloadClick: (e: React.MouseEvent) => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ config, onDownloadClick }) => {
  const isReady = /^https?:\/\//i.test(config.url.trim());

  return (
    <section id="download" className="alt" style={{ borderTop: 0 }}>
      <div className="wrap">
        <div className="dl">
          <img
            className="mask pixelated"
            src="/img/gas-mask.png"
            width={500}
            height={520}
            alt="Pixel-art gas mask dripping toxic green slime"
          />
          <div>
            <p className="eyebrow">// Supply drop</p>
            <h2>Get BIODECAY</h2>
            <p className="sub">
              {isReady
                ? 'One click, one file. The download starts instantly, with no redirects or waiting pages.'
                : "The pack is still in development. The download goes live here the moment it's released. Join the Discord to hear about it first."}
            </p>

            <a
              id="download-main"
              className={`btn btn-gold btn-lg ${!isReady ? 'disabled' : ''}`}
              href={isReady ? config.url.trim() : '#download'}
              download={
                isReady
                  ? decodeURIComponent(
                      config.url.trim().split('?')[0].split('/').pop() || 'BIODECAY.zip'
                    )
                  : undefined
              }
              role="link"
              aria-disabled={!isReady ? 'true' : undefined}
              onClick={onDownloadClick}
            >
              <Download size={18} aria-hidden="true" />
              <span>{isReady ? 'Download BIODECAY' : 'Download coming soon'}</span>
            </a>

            {isReady && (config.version || config.size) && (
              <p className="meta">
                {config.version && (
                  <span>
                    Version: <b>{config.version}</b>
                  </span>
                )}
                {config.size && (
                  <span>
                    Size: <b>{config.size}</b>
                  </span>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
