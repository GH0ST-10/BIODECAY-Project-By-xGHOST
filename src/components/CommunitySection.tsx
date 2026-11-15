import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { YouTubeIcon, DiscordIcon } from './SocialIcons';
import { ChannelItem } from '../types';

const CHANNELS: ChannelItem[] = [
  {
    platform: 'YouTube',
    handle: '@BiodecayMinecraft',
    description: 'Trailers, showcases and development updates straight from xGHOST.',
    actionText: 'Watch the channel',
    url: 'https://www.youtube.com/@BiodecayMinecraft',
    type: 'youtube'
  },
  {
    platform: 'Discord',
    handle: 'discord.gg/D4EEFV3Fmw',
    description: 'Join the server for announcements, support and to talk with the community.',
    actionText: 'Join the server',
    url: 'https://discord.gg/D4EEFV3Fmw',
    type: 'discord'
  }
];

export const CommunitySection: React.FC = () => {
  return (
    <section id="community">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">// Survivor network</p>
          <h2>Don't survive alone.</h2>
          <p>Follow development, catch the release the moment it drops, and find other survivors.</p>
        </div>

        <div className="channels">
          {CHANNELS.map((ch) => (
            <a
              key={ch.platform}
              className="channel"
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ico">
                {ch.type === 'youtube' ? <YouTubeIcon size={28} /> : <DiscordIcon size={28} />}
              </span>
              <div className="info">
                <h3>{ch.platform}</h3>
                <span className="handle">{ch.handle}</span>
                <p className="desc">{ch.description}</p>
                <span className="go">
                  {ch.actionText} <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
