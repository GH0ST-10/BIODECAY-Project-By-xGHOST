import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, AlertTriangle, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';
import { HazardTape } from '../components/HazardTape';

export const InstallPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'prism' | 'curseforge' | 'modrinth' | 'vanilla'>('prism');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Install BIODECAY Modpack on Minecraft 1.20.1',
    description: 'Complete step-by-step guide to installing the BIODECAY zombie apocalypse modpack on Prism Launcher, CurseForge, or Modrinth.',
    totalTime: 'PT5M',
    tool: [
      { '@type': 'HowToTool', name: 'Minecraft Java Edition Account' },
      { '@type': 'HowToTool', name: 'Java 17 (64-bit)' },
      { '@type': 'HowToTool', name: 'Prism Launcher, CurseForge, or Modrinth App' }
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Download BIODECAY modpack archive',
        text: 'Download the official BIODECAY release zip archive from the supply drop section.',
        position: 1
      },
      {
        '@type': 'HowToStep',
        name: 'Import into your launcher',
        text: 'Open Prism Launcher or CurseForge, click Add Instance, and select Import from zip.',
        position: 2
      },
      {
        '@type': 'HowToStep',
        name: 'Configure Java and RAM',
        text: 'Set your Java runtime to Java 17 and allocate between 6GB and 8GB of RAM.',
        position: 3
      },
      {
        '@type': 'HowToStep',
        name: 'Launch and Survive',
        text: 'Launch the instance, create a new singleplayer world or connect to a dedicated server.',
        position: 4
      }
    ]
  };

  return (
    <>
      <SEO
        title="How to Install BIODECAY Modpack — Step-by-Step Launcher Guide | Minecraft 1.20.1 Forge"
        description="Official installation guide for BIODECAY modpack on Minecraft 1.20.1. Step-by-step instructions for Prism Launcher, CurseForge, Modrinth, RAM allocation, and troubleshooting."
        canonicalPath="/install"
        jsonLd={jsonLd}
      />

      <header className="page-header">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Install</span>
          </nav>
          <p className="eyebrow">// Deployment Protocol: Setup & Launcher Guide</p>
          <h1 className="page-title">Deploy Into The Wasteland</h1>
          <p className="page-subtitle">
            Follow this guide to get BIODECAY running smoothly on your system in under five minutes.
          </p>
        </div>
      </header>

      <HazardTape />

      <main className="wrap" style={{ padding: '64px 24px 96px' }}>
        {/* System Specs Table */}
        <section className="prose-panel" style={{ marginBottom: '48px' }}>
          <h3>System Requirements Matrix</h3>
          <p>BIODECAY is designed to run efficiently on modern mid-range gaming hardware.</p>

          <table className="sys-req-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Minimum Specifications</th>
                <th>Recommended Specifications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Operating System</strong></td>
                <td>Windows 10 64-bit, macOS 11+, Linux</td>
                <td>Windows 10/11 64-bit or Linux</td>
              </tr>
              <tr>
                <td><strong>Processor (CPU)</strong></td>
                <td>Intel Core i5-4460 / AMD Ryzen 3 1200</td>
                <td>Intel Core i5-10400 / AMD Ryzen 5 3600 or better</td>
              </tr>
              <tr>
                <td><strong>Allocated RAM</strong></td>
                <td>5 GB dedicated to Minecraft</td>
                <td>6 GB - 8 GB dedicated to Minecraft</td>
              </tr>
              <tr>
                <td><strong>Graphics (GPU)</strong></td>
                <td>NVIDIA GeForce GTX 960 / AMD Radeon R9 280</td>
                <td>NVIDIA GTX 1660 / RTX 2060 / AMD RX 5600 XT or better</td>
              </tr>
              <tr>
                <td><strong>Java Environment</strong></td>
                <td>Java 17 (Eclipse Temurin / Oracle 64-bit)</td>
                <td>Java 17 (Temurin 64-bit with G1GC flags)</td>
              </tr>
              <tr>
                <td><strong>Storage Space</strong></td>
                <td>4 GB free space (SSD recommended)</td>
                <td>8 GB free SSD space for procedural city maps</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Launcher Guides */}
        <section className="prose-panel" style={{ marginBottom: '48px' }}>
          <h3>Step-by-Step Launcher Walkthrough</h3>
          <p>Select your Minecraft launcher to view the tailored installation steps:</p>

          <div className="launcher-tabs">
            <button
              type="button"
              className={`tab-btn ${activeTab === 'prism' ? 'active' : ''}`}
              onClick={() => setActiveTab('prism')}
            >
              Prism Launcher (Recommended)
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === 'curseforge' ? 'active' : ''}`}
              onClick={() => setActiveTab('curseforge')}
            >
              CurseForge App
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === 'modrinth' ? 'active' : ''}`}
              onClick={() => setActiveTab('modrinth')}
            >
              Modrinth App
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === 'vanilla' ? 'active' : ''}`}
              onClick={() => setActiveTab('vanilla')}
            >
              Official Launcher
            </button>
          </div>

          <div style={{ marginTop: '24px' }}>
            {activeTab === 'prism' && (
              <div>
                <span className="tag-badge gold">Fastest & Lightest</span>
                <h4 style={{ color: 'var(--gold)', fontFamily: 'var(--pixel)', fontSize: '12px', margin: '14px 0 10px' }}>
                  Prism Launcher / MultiMC Instructions
                </h4>
                <ol>
                  <li>
                    <strong>Download the pack:</strong> Grab the BIODECAY zip from the{' '}
                    <Link to="/#download" style={{ color: 'var(--toxic)', textDecoration: 'underline' }}>
                      Supply Drop
                    </Link>.
                  </li>
                  <li>
                    <strong>Open Prism Launcher:</strong> Click <strong>"Add Instance"</strong> in the top toolbar.
                  </li>
                  <li>
                    <strong>Import Archive:</strong> Select <strong>"Import"</strong> from the left sidebar, click <strong>"Browse"</strong>, and choose the downloaded BIODECAY zip file. Click OK.
                  </li>
                  <li>
                    <strong>Verify Memory Settings:</strong> Right-click the newly created BIODECAY instance, go to <strong>Edit &gt; Settings &gt; Java</strong>, check "Memory", and set Maximum Memory Allocation to <strong>6144 MiB (6GB)</strong> or <strong>8192 MiB (8GB)</strong>.
                  </li>
                  <li>
                    <strong>Launch:</strong> Double-click the instance icon and enjoy survival!
                  </li>
                </ol>
              </div>
            )}

            {activeTab === 'curseforge' && (
              <div>
                <span className="tag-badge">CurseForge App</span>
                <h4 style={{ color: 'var(--gold)', fontFamily: 'var(--pixel)', fontSize: '12px', margin: '14px 0 10px' }}>
                  CurseForge App Instructions
                </h4>
                <ol>
                  <li>
                    <strong>Open CurseForge:</strong> Navigate to the Minecraft tab.
                  </li>
                  <li>
                    <strong>Create Custom Profile:</strong> Click the <strong>"+" (Create Custom Profile)</strong> button or the three dots menu at the top.
                  </li>
                  <li>
                    <strong>Import Profile:</strong> Click <strong>"Import an existing profile"</strong> and select the downloaded BIODECAY release zip.
                  </li>
                  <li>
                    <strong>RAM Configuration:</strong> Open CurseForge Settings (gear icon in lower left) &gt; Minecraft &gt; scroll down to <strong>Allocated Memory</strong> slider and set it between <strong>6144 MB and 8192 MB</strong>.
                  </li>
                  <li>
                    <strong>Play:</strong> Click Play on the BIODECAY profile.
                  </li>
                </ol>
              </div>
            )}

            {activeTab === 'modrinth' && (
              <div>
                <span className="tag-badge">Modrinth App</span>
                <h4 style={{ color: 'var(--gold)', fontFamily: 'var(--pixel)', fontSize: '12px', margin: '14px 0 10px' }}>
                  Modrinth App Instructions
                </h4>
                <ol>
                  <li>
                    <strong>Open Modrinth App:</strong> Click the <strong>"+" (Create Profile)</strong> button in the bottom left.
                  </li>
                  <li>
                    <strong>Import from File:</strong> Select <strong>"From file"</strong> and choose the BIODECAY zip archive.
                  </li>
                  <li>
                    <strong>Memory Setting:</strong> In Modrinth App Settings, verify that Memory is set to at least <strong>6144 MB</strong>.
                  </li>
                  <li>
                    <strong>Ready to Play:</strong> Click the play icon on the BIODECAY tile.
                  </li>
                </ol>
              </div>
            )}

            {activeTab === 'vanilla' && (
              <div>
                <span className="tag-badge">Manual Setup</span>
                <h4 style={{ color: 'var(--gold)', fontFamily: 'var(--pixel)', fontSize: '12px', margin: '14px 0 10px' }}>
                  Official Minecraft Launcher Instructions
                </h4>
                <ol>
                  <li>
                    <strong>Install Forge:</strong> Download and run the official <strong>Forge 1.20.1 installer</strong> (version 47.2.0 or newer).
                  </li>
                  <li>
                    <strong>Locate Directory:</strong> Extract the contents of the BIODECAY zip archive into your <code>.minecraft</code> folder (or a dedicated directory).
                  </li>
                  <li>
                    <strong>Launcher Profile:</strong> Open Minecraft Launcher, select <strong>Installations</strong> &gt; Forge 1.20.1 &gt; click <strong>Edit</strong>.
                  </li>
                  <li>
                    <strong>JVM Arguments:</strong> Click <strong>More Options</strong> and change <code>-Xmx2G</code> to <code>-Xmx6G</code>.
                  </li>
                  <li>
                    <strong>Start Game:</strong> Save the installation and launch.
                  </li>
                </ol>
              </div>
            )}
          </div>
        </section>

        {/* Troubleshooting & FAQ */}
        <section className="prose-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <AlertTriangle className="tox" size={24} />
            <h3>Troubleshooting Common Deployment Issues</h3>
          </div>

          <div className="faq-list">
            <div className="faq-card">
              <h4>Game crashes with Exit Code 1 immediately on launch</h4>
              <p>
                <strong>Cause:</strong> Incompatible Java version. Minecraft 1.20.1 requires <strong>Java 17 (64-bit)</strong>. Ensure your launcher is pointing to Java 17 and not Java 8 or Java 21.
              </p>
            </div>

            <div className="faq-card">
              <h4>Micro-stutters and sudden FPS drops while exploring cities</h4>
              <p>
                <strong>Cause:</strong> Insufficient memory allocation. Increase your launcher's RAM allocation to <strong>6GB - 8GB</strong>. If using shaders, ensure shadow quality is set to 1.0x or lower in the shader configuration menu.
              </p>
            </div>

            <div className="faq-card">
              <h4>Audio is silent or missing environmental reverb</h4>
              <p>
                <strong>Cause:</strong> Sound physics mod initializing. Open Minecraft Options &gt; Music &amp; Sounds &gt; verify that Master Volume is enabled and your active output device is selected.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <Link to="/#download" className="btn btn-gold btn-sm">
              <Download size={14} /> Get The Modpack File
            </Link>
            <a
              href="https://discord.gg/D4EEFV3Fmw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              Need Live Help? Join Discord <ExternalLink size={14} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};
