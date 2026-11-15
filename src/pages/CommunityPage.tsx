import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck, Bug, Radio, HeartHandshake } from 'lucide-react';
import { SEO } from '../components/SEO';
import { HazardTape } from '../components/HazardTape';
import { YouTubeIcon, DiscordIcon } from '../components/SocialIcons';

export const CommunityPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CommunityPage',
    name: 'BIODECAY Survivor Network & Community',
    description: 'Official community hub for BIODECAY: Discord server, YouTube trailers, multiplayer matchmaking, bug reports, and development updates from xGHOST.',
    url: 'https://biodecay.vercel.app/community',
    publisher: {
      '@type': 'Organization',
      name: 'BIODECAY Project',
      url: 'https://biodecay.vercel.app',
      sameAs: [
        'https://www.youtube.com/@BiodecayMinecraft',
        'https://discord.gg/D4EEFV3Fmw'
      ]
    }
  };

  const squads = [
    {
      role: 'Vanguard Scouts',
      description: 'Frontline pathfinders who map out new city zones, locate military outposts, and alert the community to horde patrol routes.'
    },
    {
      role: 'Enclave Engineers',
      description: 'Safehouse architects who share base defense blueprints, barricade designs, generator wiring, and automated defense layouts.'
    },
    {
      role: 'Field Medics',
      description: 'Specialists in infection containment, bandage crafting, water filtration, and pharmaceutical synthesis guides.'
    },
    {
      role: 'Scavenger Units',
      description: 'Loot specialists who share item spawn tables, safe cracking combinations, and food preservation tactics.'
    }
  ];

  return (
    <>
      <SEO
        title="BIODECAY Community — Discord Server, YouTube & Survivor Network"
        description="Join the BIODECAY community. Connect with other survivors on Discord, watch official trailers on YouTube, report bugs, and join the development journey with xGHOST."
        canonicalPath="/community"
        jsonLd={jsonLd}
      />

      <header className="page-header">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Community</span>
          </nav>
          <p className="eyebrow">// Survivor Network: Global Communications</p>
          <h1 className="page-title">Survivor Enclave & Network</h1>
          <p className="page-subtitle">
            Survival is easier in numbers. Join our growing community of post-apocalyptic Minecraft enthusiasts, find server teammates, and contribute directly to development.
          </p>
        </div>
      </header>

      <HazardTape />

      <main className="wrap" style={{ padding: '64px 24px 96px' }}>
        {/* Channel Cards */}
        <div className="channels" style={{ marginBottom: '56px' }}>
          <a
            className="channel"
            href="https://discord.gg/D4EEFV3Fmw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ico">
              <DiscordIcon size={28} />
            </span>
            <div className="info">
              <h3>Official Discord Enclave</h3>
              <span className="handle">discord.gg/D4EEFV3Fmw</span>
              <p className="desc">
                Chat directly with creator xGHOST, sign up for alpha playtests, find teammates for multiplayer runs, and share your safehouse creations.
              </p>
              <span className="go">
                Join 1,000+ Survivors <ExternalLink size={16} />
              </span>
            </div>
          </a>

          <a
            className="channel"
            href="https://www.youtube.com/@BiodecayMinecraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ico">
              <YouTubeIcon size={28} />
            </span>
            <div className="info">
              <h3>Official YouTube Channel</h3>
              <span className="handle">@BiodecayMinecraft</span>
              <p className="desc">
                Watch cinematic gameplay trailers, developer update vlogs, mod spotlights, and community showcase highlights.
              </p>
              <span className="go">
                Watch The Showcases <ExternalLink size={16} />
              </span>
            </div>
          </a>
        </div>

        {/* Squads and Roles */}
        <section className="prose-panel" style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Radio className="tox" size={24} />
            <h3>Survivor Roles in the Enclave</h3>
          </div>
          <p>
            Whether you are a solo scavenger or a base engineer, our community is organized into specialized survivor roles:
          </p>

          <div className="grid" style={{ marginTop: '24px' }}>
            {squads.map((sq) => (
              <div
                key={sq.role}
                style={{
                  background: '#120f0a',
                  border: '2px solid var(--line)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <h4 style={{ fontFamily: 'var(--pixel)', fontSize: '11px', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>
                  {sq.role}
                </h4>
                <p style={{ color: 'var(--muted)', fontSize: '14px', margin: 0 }}>
                  {sq.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bug Reporting & Feedback */}
        <div className="content-grid content-grid-2col">
          <section className="prose-panel">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Bug className="tox" size={24} />
              <h3>Bug Reporting Protocol</h3>
            </div>
            <p>Help us refine BIODECAY into the most stable survival experience possible. When reporting issues on Discord:</p>
            <ul>
              <li><strong>Provide Launcher & Specs:</strong> State which launcher (Prism, CurseForge, etc.) and your RAM allocation.</li>
              <li><strong>Include Crash Reports:</strong> Upload your <code>latest.log</code> or crash report to <a href="https://mclo.gs" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>mclo.gs</a> and paste the link.</li>
              <li><strong>Reproduction Steps:</strong> Briefly detail what you were doing when the issue occurred (e.g. entering a specific city structure).</li>
            </ul>
          </section>

          <section className="prose-panel">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <ShieldCheck className="tox" size={24} />
              <h3>Community Guidelines</h3>
            </div>
            <p>Every survivor in the BIODECAY enclave agrees to simple standards of conduct:</p>
            <ul>
              <li><strong>Respect Fellow Survivors:</strong> Harassment, hate speech, or toxicity will result in immediate exile from the server.</li>
              <li><strong>No Secret Spoilers:</strong> Use spoiler tags when discussing hidden lore documents, easter eggs, or vaccine synthesis locations.</li>
              <li><strong>Constructive Feedback:</strong> Critique gameplay balance with actionable suggestions to help the modpack improve.</li>
            </ul>
          </section>
        </div>

        {/* Community Banner */}
        <section style={{ marginTop: '56px', textAlign: 'center' }}>
          <div className="prose-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', padding: '48px 24px' }}>
            <HeartHandshake size={36} style={{ color: 'var(--toxic)' }} />
            <h3 style={{ margin: 0, textAlign: 'center' }}>Ready To Enter The Quarantine Zone?</h3>
            <p style={{ maxWidth: '580px', margin: 0 }}>
              Join the conversation today and prepare for the upcoming outbreak. We'll see you in the wasteland.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '12px' }}>
              <a
                href="https://discord.gg/D4EEFV3Fmw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-sm"
              >
                Join Official Discord
              </a>
              <Link to="/install" className="btn btn-ghost btn-sm">
                View Install Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
