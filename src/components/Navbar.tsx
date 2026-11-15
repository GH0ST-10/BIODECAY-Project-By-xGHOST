import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';

interface NavbarProps {
  onDownloadClick?: (e: React.MouseEvent) => void;
  downloadLabel?: string;
  isDownloadReady?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onDownloadClick,
  downloadLabel = 'Download',
  isDownloadReady = false
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Features', path: '/features' },
    { label: 'Install', path: '/install' },
    { label: 'Community', path: '/community' }
  ];

  const handleDownload = (e: React.MouseEvent) => {
    closeMenu();
    if (onDownloadClick) {
      onDownloadClick(e);
    }
  };

  return (
    <header className="nav">
      <div className="wrap">
        <Link className="brand" to="/" aria-label="BIODECAY home" onClick={closeMenu}>
          <img className="pixelated" src="/img/gas-mask.png" alt="" width={36} height={36} />
          <span>BIODECAY</span>
        </Link>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={isActive ? 'active-nav-link' : ''}
                    style={isActive ? { color: 'var(--gold)' } : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          className={`btn btn-gold btn-sm ${!isDownloadReady ? 'disabled' : ''}`}
          to="/#download"
          onClick={handleDownload}
          aria-disabled={!isDownloadReady ? 'true' : undefined}
        >
          <Download size={14} aria-hidden="true" />
          <span>{downloadLabel}</span>
        </Link>

        <button
          type="button"
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMenu} style={location.pathname === '/' ? { color: 'var(--gold)' } : undefined}>
            Home
          </Link>
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              style={location.pathname === item.path ? { color: 'var(--gold)' } : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#download"
            onClick={handleDownload}
            style={{ color: 'var(--toxic)', marginTop: '8px' }}
          >
            Supply Drop (Download)
          </Link>
        </div>
      )}
    </header>
  );
};
