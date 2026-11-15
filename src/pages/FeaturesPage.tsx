import React from 'react';
import { Link } from 'react-router-dom';
import {
  Skull,
  Backpack,
  BrickWall,
  Biohazard,
  Crosshair,
  CloudFog,
  CheckCircle2,
  Download,
  Terminal
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { HazardTape } from '../components/HazardTape';

export const FeaturesPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'BIODECAY Modpack Features & Mechanics',
    description: 'Comprehensive overview of the 6 core survival pillars and tactical mechanics in BIODECAY for Minecraft 1.20.1.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'The Infected: Advanced Horde AI & Mutations',
        description: 'Sound-seeking undead hordes that scale in aggression after dark and siege player structures.'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Scavenge the Ruins: Procedural Urban Exploration',
        description: 'Explore abandoned hospitals, metro stations, and office complexes for military supplies, food, and medicine.'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Fortify and Hold: Defensive Engineering',
        description: 'Construct barricades, reinforced doorways, generators, and perimeter defenses to protect your enclave.'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'A Hostile World: Environmental Biohazards',
        description: 'Toxic airborne spore zones requiring gas mask maintenance, hypothermia, bleeding mechanics, and infection risk.'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Arm Yourself: Tactical Arsenal & Ballistics',
        description: 'Calibrated firearms, modifications, custom melee weapons, and ammunition crafting workbenches.'
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Total Immersion: Dynamic Soundscape & Atmosphere',
        description: 'Spatial audio occlusion, gas mask respirator breathing, bleak lighting, and apocalyptic weather cycles.'
      }
    ]
  };

  const featureDeepDives = [
    {
      num: '01',
      title: 'The Infected & Horde AI',
      icon: <Skull size={24} />,
      headline: 'The dead do not sleep, and they learn your habits.',
      points: [
        'Acoustic Detection: Gunshots, breaking glass, and running alert nearby zombies across several city blocks.',
        'Horde Synchronization: Wandering stragglers call out to gather roving hordes when pursuing survivors.',
        'Nocturnal Frenzy: Daylight makes zombies sluggish; when the sun sets, runners emerge and aggressively assault safehouses.',
        'Destructible Barriers: Overwhelming numbers can breach wooden barricades and shatter low-durability windows.'
      ]
    },
    {
      num: '02',
      title: 'Scavenge the Ruins',
      icon: <Backpack size={24} />,
      headline: 'High risk yields high rewards. Choose your targets carefully.',
      points: [
        'Procedural City Generation: Vast modern ruins featuring hospitals, police stations, collapsed subways, and grocery stores.',
        'Dynamic Loot Tiers: Common civilian homes yield canned soup and scrap wood; high-security military checkpoints hold medical serums and firearms.',
        'Food & Water Spoilage: Perishable foods rot over time; surface puddles are contaminated and require boiling or purification tablets.',
        'Lockpicking & Safes: Valuable caches are locked behind mechanical security pins and electronic keycards.'
      ]
    },
    {
      num: '03',
      title: 'Fortify & Base Engineering',
      icon: <BrickWall size={24} />,
      headline: 'Transform any hollow husk into a secure bastion.',
      points: [
        'Structural Reinforcements: Board up windows, install heavy steel doors, and deploy razor wire along entry points.',
        'Power Grids: Salvage diesel generators, run electrical cabling, and power spotlights to deter night sieges.',
        'Automated Traps: Set tripwires, explosive charges, and sound lures to funnel hordes away from your sleeping quarters.',
        'Storage Organization: Modular storage lockers, gun racks, and medical chests to keep survival supplies sorted.'
      ]
    },
    {
      num: '04',
      title: 'A Hostile World & Biohazards',
      icon: <Biohazard size={24} />,
      headline: 'The undead are only one of several ways you can die.',
      points: [
        'Airborne Contamination: Lowland valleys and fungal nests contain deadly airborne toxins requiring a gas mask with active charcoal filters.',
        'Filter Degradation: Gas mask filters steadily deteriorate in contaminated zones; always carry spare canisters.',
        'Medical Trauma: Deep wounds inflict bleeding requiring sterile bandages; broken bones slow your sprint speed until splinted.',
        'Infection Gauge: Zombie bites have a chance to transmit biological pathogens; synthesize antidote vials before fever takes hold.'
      ]
    },
    {
      num: '05',
      title: 'Tactical Weaponry & Ballistics',
      icon: <Crosshair size={24} />,
      headline: 'Every bullet is precious. Every misfire is deadly.',
      points: [
        'Calibrated Ballistics: Realistic bullet velocity, drop over distance, and localized hitboxes (headshots are critical).',
        'Modular Attachments: Equip suppressors for quiet kills, tactical flashlights for dark corridors, and extended magazines.',
        'Weapon Maintenance: Frequent shooting leads to wear and jamming; clean your firearms with solvent and gun oil.',
        'Makeshift Weapons: Craft reinforced bats, pipe wrenches, and spear weapons for silent, ammo-conserving melee combat.'
      ]
    },
    {
      num: '06',
      title: 'Total Immersion & Atmosphere',
      icon: <CloudFog size={24} />,
      headline: 'Crafted to make you feel the weight of an empty world.',
      points: [
        'Realistic Spatial Audio: Hear footsteps echoes through abandoned stairwells and distant zombie moans filtered through concrete walls.',
        'Respirator HUD: Putting on a gas mask condenses your field of view with glass grime and real-time breathing sound effects.',
        'Bleak Lighting & Shaders: Desaturated autumn tones and eerie fog banks built for maximum visual dread without tanking FPS.',
        'Desolate Score: Minimalist ambient music tracks that intensify dynamically during horde encounters.'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="BIODECAY Features — Zombie Survival Mechanics & Field Manual | Minecraft 1.20.1"
        description="Complete breakdown of BIODECAY mechanics: infected horde AI, scavenging ruins, biohazard air toxicity, base fortification, tactical firearms, and immersion."
        canonicalPath="/features"
        jsonLd={jsonLd}
      />

      <header className="page-header">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Features</span>
          </nav>
          <p className="eyebrow">// Field Manual: Tactical Briefing</p>
          <h1 className="page-title">Survival Mechanics & Systems</h1>
          <p className="page-subtitle">
            Every system in BIODECAY is calibrated to make survival challenging, believable, and deeply rewarding. Here is how the world operates.
          </p>
        </div>
      </header>

      <HazardTape />

      <main className="wrap" style={{ padding: '64px 24px 96px' }}>
        <div className="content-grid content-grid-2col">
          {featureDeepDives.map((feat) => (
            <article key={feat.num} className="prose-panel" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span className="ico" style={{ width: '44px', height: '44px', display: 'grid', placeItems: 'center', background: '#241d12', border: '2px solid var(--gold)', color: 'var(--gold)' }}>
                  {feat.icon}
                </span>
                <span style={{ fontFamily: 'var(--pixel)', fontSize: '11px', color: 'var(--toxic)' }}>
                  PILLAR {feat.num}
                </span>
              </div>

              <h3>{feat.title}</h3>
              <p style={{ color: 'var(--text)', fontStyle: 'italic', marginBottom: '16px' }}>
                "{feat.headline}"
              </p>

              <ul style={{ flex: 1 }}>
                {feat.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Survival Tips Box */}
        <section style={{ marginTop: '72px' }}>
          <div className="prose-panel" style={{ borderLeft: '6px solid var(--toxic)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Terminal className="tox" size={24} />
              <h3 style={{ margin: 0 }}>Survivor Protocols: Rules for Living</h3>
            </div>
            <p>Direct survival guidelines recommended by modpack creator xGHOST for your first 72 hours:</p>
            <div style={{ display: 'grid', gap: '16px', marginTop: '20px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} className="tox" style={{ flexShrink: 0, marginTop: '4px' }} />
                <p><strong>Rule 1: Never fire without a suppressor unless cornered.</strong> A single gunshot will summon every infected within a 128-block radius.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} className="tox" style={{ flexShrink: 0, marginTop: '4px' }} />
                <p><strong>Rule 2: Check your filter gauge before entering lowlands.</strong> Suffocation from toxic spores takes under 30 seconds once a charcoal canister expires.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} className="tox" style={{ flexShrink: 0, marginTop: '4px' }} />
                <p><strong>Rule 3: Establish a second-story safehouse.</strong> Ground-floor entrances are prone to horde breaching; destroy external staircases and use retractable ladders.</p>
              </div>
            </div>

            <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/install" className="btn btn-gold btn-sm">
                Installation & Deployment Guide
              </Link>
              <Link to="/#download" className="btn btn-ghost btn-sm">
                <Download size={14} /> Download Pack
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
