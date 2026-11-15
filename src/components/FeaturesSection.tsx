import React from 'react';
import { Skull, Backpack, BrickWall, Biohazard, Crosshair, CloudFog } from 'lucide-react';
import { FeatureItem } from '../types';

const FEATURES: FeatureItem[] = [
  {
    num: '01',
    title: 'The infected',
    description: 'The dead don\'t rest. They roam the ruins in numbers, and the nights belong to them.',
    icon: 'skull'
  },
  {
    num: '02',
    title: 'Scavenge the ruins',
    description: 'Pick through abandoned buildings for food, tools and supplies. Every run is a risk worth weighing.',
    icon: 'backpack'
  },
  {
    num: '03',
    title: 'Fortify and hold',
    description: 'Turn a wreck into a safehouse. Reinforce it, stock it, and make it a place worth coming back to.',
    icon: 'brick-wall'
  },
  {
    num: '04',
    title: 'A hostile world',
    description: 'Zombies aren\'t the only threat. Contamination, hunger and injury will finish what they start.',
    icon: 'biohazard'
  },
  {
    num: '05',
    title: 'Arm yourself',
    description: 'Find it, fix it, or build it. What you carry decides whether you fight or run.',
    icon: 'crosshair'
  },
  {
    num: '06',
    title: 'Total immersion',
    description: 'Sound, lighting and atmosphere tuned so the world feels as dead and dangerous as it looks.',
    icon: 'cloud-fog'
  }
];

const renderIcon = (icon: FeatureItem['icon']) => {
  switch (icon) {
    case 'skull':
      return <Skull size={22} aria-hidden="true" />;
    case 'backpack':
      return <Backpack size={22} aria-hidden="true" />;
    case 'brick-wall':
      return <BrickWall size={22} aria-hidden="true" />;
    case 'biohazard':
      return <Biohazard size={22} aria-hidden="true" />;
    case 'crosshair':
      return <Crosshair size={22} aria-hidden="true" />;
    case 'cloud-fog':
      return <CloudFog size={22} aria-hidden="true" />;
  }
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="alt">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">// Field manual</p>
          <h2>Everything out here wants you dead.</h2>
          <p>Six things to know before you step outside.</p>
        </div>

        <div className="grid">
          {FEATURES.map((item) => (
            <article key={item.num} className="card">
              <div className="top">
                <span className="ico">{renderIcon(item.icon)}</span>
                <span className="num">{item.num}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
