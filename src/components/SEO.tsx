import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
  keywords?: string[];
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  type = 'website',
  image = '/img/biodecay-title.png',
  keywords = [
    'Minecraft modpack',
    'Minecraft 1.20.1',
    'Zombie apocalypse Minecraft',
    'BIODECAY',
    'xGHOST',
    'Forge modpack',
    'Survival modpack',
    'Post-apocalyptic Minecraft'
  ],
  jsonLd
}) => {
  useEffect(() => {
    // 1. Page Title
    const formattedTitle = title.includes('BIODECAY') ? title : `${title} | BIODECAY`;
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMeta = (nameAttr: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set or create link tag
    const setLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : 'https://biodecay.vercel.app';
    const fullUrl = `${origin}${canonicalPath}`;
    const fullImageUrl = image.startsWith('http') ? image : `${origin}${image}`;

    // Standard Meta
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords.join(', '));
    setMeta('name', 'author', 'xGHOST');
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setLink('canonical', fullUrl);

    // Open Graph Meta
    setMeta('property', 'og:site_name', 'BIODECAY');
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', fullImageUrl);
    setMeta('property', 'og:image:alt', 'BIODECAY: A Project By xGHOST');

    // Twitter Cards
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullImageUrl);
    setMeta('name', 'twitter:creator', '@xGHOST');

    // Structured Data (JSON-LD)
    const scriptId = 'seo-jsonld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, canonicalPath, type, image, keywords, jsonLd]);

  return null;
};
