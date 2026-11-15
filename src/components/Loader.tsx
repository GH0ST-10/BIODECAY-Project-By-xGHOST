import React, { useEffect, useState } from 'react';

interface PixelProps {
  x: number;
  y: number;
  w: number;
  h: number;
  c: string;
}

const Pixel: React.FC<PixelProps> = ({ x, y, w, h, c }) => (
  <b
    className="px"
    style={{
      '--x': x,
      '--y': y,
      '--w': w,
      '--h': h,
      '--c': c
    } as React.CSSProperties}
  />
);

interface CubeProps {
  className?: string;
  w: number;
  h: number;
  d: number;
  x: number;
  y: number;
  faces?: {
    front?: React.ReactNode;
    back?: React.ReactNode;
    left?: React.ReactNode;
    right?: React.ReactNode;
    top?: React.ReactNode;
    bottom?: React.ReactNode;
  };
}

const Cube: React.FC<CubeProps> = ({ className = '', w, h, d, x, y, faces = {} }) => {
  return (
    <div
      className={`cube ${className}`}
      style={{
        '--w': w,
        '--h': h,
        '--d': d,
        '--x': x,
        '--y': y
      } as React.CSSProperties}
    >
      <i className="face front">{faces.front}</i>
      <i className="face back">{faces.back}</i>
      <i className="face left">{faces.left}</i>
      <i className="face right">{faces.right}</i>
      <i className="face top">{faces.top}</i>
      <i className="face bottom">{faces.bottom}</i>
    </div>
  );
};

interface LoaderProps {
  onLoaded?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onLoaded }) => {
  const [isHiding, setIsHiding] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const MIN_VISIBLE_MS = 1800;
    const started = performance.now();

    const finish = () => {
      const elapsed = performance.now() - started;
      const wait = calm ? 0 : Math.max(0, MIN_VISIBLE_MS - elapsed);

      const hideTimer = setTimeout(() => {
        setIsHiding(true);
        if (onLoaded) onLoaded();
        const removeTimer = setTimeout(() => {
          setIsRemoved(true);
        }, 500);
        return () => clearTimeout(removeTimer);
      }, wait);

      return () => clearTimeout(hideTimer);
    };

    if (document.readyState === 'complete') {
      const cleanup = finish();
      return cleanup;
    } else {
      window.addEventListener('load', finish);
      const fallbackTimer = setTimeout(finish, 6000);
      return () => {
        window.removeEventListener('load', finish);
        clearTimeout(fallbackTimer);
      };
    }
  }, [onLoaded]);

  if (isRemoved) return null;

  return (
    <div
      id="loader-container"
      className={isHiding ? 'hide' : ''}
      role="status"
      aria-label="Loading BIODECAY"
    >
      <div className="stage" aria-hidden="true">
        <div className="zombie" id="zombie">
          <div className="ground" />

          {/* Legs */}
          <Cube className="z-leg" w={4} h={12} d={4} x={0} y={20} />
          <Cube className="z-leg alt" w={4} h={12} d={4} x={4} y={20} />

          {/* Body */}
          <Cube
            className="z-body"
            w={8}
            h={12}
            d={4}
            x={0}
            y={8}
            faces={{
              front: (
                <>
                  <Pixel x={0} y={0} w={2} h={1} c="var(--shirt-l)" />
                  <Pixel x={5} y={3} w={2} h={2} c="var(--shirt-d)" />
                  <Pixel x={1} y={7} w={2} h={1} c="var(--shirt-d)" />
                  <Pixel x={0} y={11} w={8} h={1} c="var(--shirt-d)" />
                </>
              )
            }}
          />

          {/* Arms */}
          <Cube className="z-arm" w={4} h={12} d={4} x={-4} y={8} />
          <Cube className="z-arm alt" w={4} h={12} d={4} x={8} y={8} />

          {/* Head */}
          <Cube
            className="z-head"
            w={8}
            h={8}
            d={8}
            x={0}
            y={0}
            faces={{
              front: (
                <>
                  <Pixel x={0} y={0} w={3} h={1} c="var(--skin-d)" />
                  <Pixel x={5} y={0} w={3} h={2} c="var(--skin-d)" />
                  <Pixel x={0} y={1} w={1} h={2} c="var(--skin-d)" />
                  <Pixel x={1} y={4} w={2} h={1} c="#0b0b0b" />
                  <Pixel x={5} y={4} w={2} h={1} c="#0b0b0b" />
                  <Pixel x={3} y={5} w={2} h={1} c="#365a2e" />
                  <Pixel x={2} y={7} w={4} h={1} c="#365a2e" />
                </>
              ),
              left: (
                <>
                  <Pixel x={0} y={0} w={4} h={1} c="#365a2e" />
                  <Pixel x={5} y={2} w={2} h={2} c="#365a2e" />
                  <Pixel x={1} y={5} w={2} h={1} c="#365a2e" />
                </>
              ),
              top: (
                <>
                  <Pixel x={1} y={1} w={3} h={2} c="var(--skin)" />
                  <Pixel x={5} y={4} w={2} h={3} c="var(--skin)" />
                </>
              )
            }}
          />
        </div>
      </div>
      <p className="loader-text">
        Loading
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <i aria-hidden="true" />
      </p>
      <p className="loader-sub">Entering the quarantine zone</p>
    </div>
  );
};
