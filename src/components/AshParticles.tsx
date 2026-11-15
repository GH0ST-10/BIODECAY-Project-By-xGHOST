import React, { useMemo } from 'react';

interface ParticleConfig {
  id: number;
  left: string;
  size: string;
  color: string;
  opacity: string;
  dx: string;
  duration: string;
  delay: string;
}

export const AshParticles: React.FC = () => {
  const particles = useMemo<ParticleConfig[]>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return [];
    }

    const items: ParticleConfig[] = [];
    for (let i = 0; i < 22; i++) {
      const t = 10 + Math.random() * 12;
      items.push({
        id: i,
        left: (Math.random() * 100).toFixed(1) + '%',
        size: (Math.random() < 0.3 ? 4 : 2) + 'px',
        color: Math.random() < 0.35 ? 'var(--toxic)' : 'var(--gold)',
        opacity: (0.2 + Math.random() * 0.3).toFixed(2),
        dx: Math.round(Math.random() * 120 - 60) + 'px',
        duration: t.toFixed(1) + 's',
        delay: (-Math.random() * t).toFixed(1) + 's'
      });
    }
    return items;
  }, []);

  return (
    <div className="ash" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            left: p.left,
            '--s': p.size,
            '--c': p.color,
            '--o': p.opacity,
            '--dx': p.dx,
            '--t': p.duration,
            '--delay': p.delay
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};
