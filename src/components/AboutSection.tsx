import React from 'react';
import { SpecItem } from '../types';

const SPECS: SpecItem[] = [
  { label: 'Genre', value: 'Zombie apocalypse survival' },
  { label: 'Status', value: 'In development', isToxic: true },
  { label: 'Game version', value: 'Minecraft 1.20.1' },
  { label: 'Mod loader', value: 'Forge' },
  { label: 'Release', value: 'Coming soon' },
  { label: 'Creator', value: 'xGHOST' }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <div className="wrap about">
        <div className="copy">
          <p className="eyebrow">// The outbreak</p>
          <h2>Civilization is gone. The air isn't safe either.</h2>
          <p className="body lead">
            BIODECAY drops you into a world that ended without you. Cities are hollow, the dead walk the streets, and every breath outside is a gamble.
          </p>
          <p className="body">
            Built from the ground up by xGHOST as one cohesive experience, not a pile of mods. Scavenge what's left, fortify what you can, and survive long enough to learn what happened.
          </p>
        </div>

        <dl className="specs" aria-label="Pack details">
          {SPECS.map((spec) => (
            <div key={spec.label}>
              <dt>{spec.label}</dt>
              <dd className={spec.isToxic ? 'tox' : ''}>{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
