import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert, Cpu, HelpCircle, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { HazardTape } from '../components/HazardTape';

export const AboutPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        name: 'About BIODECAY Modpack',
        description:
          'Deep dive into the lore, survival philosophy, and technical specifications of BIODECAY, a hardcore zombie survival modpack for Minecraft 1.20.1 Forge created by xGHOST.',
        url: 'https://biodecay.com/about',
        mainEntity: {
          '@type': 'VideoGame',
          name: 'BIODECAY',
          author: { '@type': 'Person', name: 'xGHOST' },
          gamePlatform: 'PC (Java Edition)',
          genre: 'Zombie Survival'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is BIODECAY compatible with multiplayer and dedicated servers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! BIODECAY is fully optimized for cooperative multiplayer. A dedicated server package with pre-configured server files will be provided alongside client releases for smooth LAN and dedicated hosting.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does BIODECAY feature a questline or survivor manual?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. An integrated in-game field manual and survival progression system guides players through water decontamination, makeshift gas mask crafting, base fortification, and vaccine research.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is the modpack compatible with shader packs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, BIODECAY includes modern performance optimization mods (Embeddium / Oculus) and is tailored to look stunning with apocalyptic shader presets like Complementary Reimagined and BSL.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much RAM should be allocated for BIODECAY?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We recommend allocating 6GB to 8GB of RAM in your launcher. Allocating less than 4GB may cause stuttering, while allocating more than 10GB may introduce Java garbage collection spikes.'
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="About BIODECAY — Lore, Story & Modpack Specifications | Minecraft 1.20.1"
        description="Discover the story, design vision, and technical architecture of BIODECAY, an immersive zombie survival modpack by xGHOST for Minecraft 1.20.1 Forge."
        canonicalPath="/about"
        jsonLd={jsonLd}
      />

      <header className="page-header">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">About</span>
          </nav>
          <p className="eyebrow">// Transmission Log: 001 - The Outbreak</p>
          <h1 className="page-title">Civilization Has Fallen. The Air Isn't Safe.</h1>
          <p className="page-subtitle">
            BIODECAY is not just an uncurated list of mods. It is an intentional, unified post-apocalyptic survival simulation crafted by xGHOST for Minecraft 1.20.1 Forge.
          </p>
        </div>
      </header>

      <HazardTape />

      <main className="wrap" style={{ padding: '64px 24px 96px' }}>
        <div className="content-grid content-grid-sidebar">
          {/* Main Story & Lore */}
          <article className="prose-panel">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <ShieldAlert className="tox" size={24} />
              <h3>The Setting & World Collapse</h3>
            </div>
            <p>
              The world did not end in fire; it decayed in silence. An airborne biological contaminant swept across continents, mutating the deceased and turning once-thriving metropolitan centers into silent concrete graveyards.
            </p>
            <p>
              When you awaken in BIODECAY, modern civilization is already gone. Power grids have permanently failed, clean municipal water is a relic of the past, and dense toxic fungal spores hover over lowland ruins. Every excursion into the city requires tactical preparation, protective gear, and an exit strategy.
            </p>

            <div style={{ margin: '32px 0 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BookOpen className="tox" size={24} />
              <h3>Design Philosophy: Cohesion Over Bloat</h3>
            </div>
            <p>
              Many survival modpacks suffer from "mod bloat" — combining hundreds of conflicting mechanics, unbalanced weaponry, and performance bottlenecks.
            </p>
            <p>
              BIODECAY was engineered with a strict <strong>design-first philosophy</strong>:
            </p>
            <ul>
              <li><strong>Unified Art & Audio:</strong> Visuals, retro interface elements, ambient drone audio, and muffled respirator breathing fit together seamlessly.</li>
              <li><strong>Tight Balance Curve:</strong> High-tier loot feels genuinely earned. Resources are scarce, encouraging tactical planning rather than reckless combat.</li>
              <li><strong>High Performance:</strong> Optimized modern Forge architecture built to deliver smooth frame rates even in dense procedural urban ruins.</li>
            </ul>

            <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '2px solid var(--line)' }}>
              <Link to="/features" className="btn btn-gold btn-sm">
                Explore Game Features & Mechanics <ArrowRight size={14} />
              </Link>
            </div>
          </article>

          {/* Sidebar Specs */}
          <aside>
            <div className="prose-panel" style={{ height: 'fit-content' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Cpu className="tox" size={24} />
                <h3>Pack Specifications</h3>
              </div>

              <dl className="specs" style={{ boxShadow: 'none' }}>
                <div><dt>Minecraft</dt><dd>1.20.1</dd></div>
                <div><dt>Mod Loader</dt><dd>Forge (47.2.0+)</dd></div>
                <div><dt>Status</dt><dd className="tox">Active Development</dd></div>
                <div><dt>Author</dt><dd>xGHOST</dd></div>
                <div><dt>Genre</dt><dd>Hardcore Survival</dd></div>
                <div><dt>Rec. RAM</dt><dd>6GB - 8GB</dd></div>
                <div><dt>Multiplayer</dt><dd className="tox">Server Pack Ready</dd></div>
                <div><dt>Shader Support</dt><dd>Oculus / Iris Compatible</dd></div>
              </dl>

              <div style={{ marginTop: '24px' }}>
                <Link to="/install" className="btn btn-ghost btn-sm" style={{ width: '100%' }}>
                  Installation Guide
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* FAQ Section */}
        <section style={{ marginTop: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <HelpCircle size={24} style={{ color: 'var(--gold)' }} />
            <p className="eyebrow" style={{ margin: 0 }}>// Intelligence & Debriefing</p>
          </div>
          <h2>Frequently Asked Questions</h2>

          <div className="faq-list">
            <div className="faq-card">
              <h4>Is BIODECAY compatible with multiplayer and dedicated servers?</h4>
              <p>
                Yes! BIODECAY is designed from day one to support multiplayer co-op. A pre-packaged, pre-configured server zip file will be released alongside client updates for simple drag-and-drop server hosting.
              </p>
            </div>

            <div className="faq-card">
              <h4>Will there be a questline or survivor guide?</h4>
              <p>
                Yes. The modpack includes an immersive in-game survival handbook that guides players through water decontamination, gas mask maintenance, generator repair, and crafting safehouse fortifications without hand-holding.
              </p>
            </div>

            <div className="faq-card">
              <h4>Can I run shaders with this modpack?</h4>
              <p>
                Yes. BIODECAY is bundled with high-performance rendering mods (Embeddium and Oculus). You can easily drop in compatible shaders such as Complementary Reimagined or BSL without needing OptiFine.
              </p>
            </div>

            <div className="faq-card">
              <h4>How much RAM do I need to allocate in my launcher?</h4>
              <p>
                We recommend allocating <strong>6GB to 8GB</strong> of system memory. Allocating less than 4GB may result in stuttering during city exploration, while allocating more than 10GB can cause Java garbage collection hitches.
              </p>
            </div>

            <div className="faq-card">
              <h4>When will BIODECAY be released?</h4>
              <p>
                The modpack is currently in active development by xGHOST. Follow the official <a href="https://discord.gg/D4EEFV3Fmw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>Discord server</a> and <a href="https://www.youtube.com/@BiodecayMinecraft" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>YouTube channel</a> for early beta testing access and release date announcements.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
