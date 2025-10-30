'use client';

import { useEffect } from 'react';

interface TikTokEmbedProps {
  username?: string;
  url?: string;
  embedType?: 'creator' | 'video';
  className?: string;
}

export default function TikTokEmbed({
  username = 'the.figs.official',
  url = 'https://www.tiktok.com/@the.figs.official',
  embedType = 'creator',
  className = ''
}: TikTokEmbedProps) {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className={`tiktok-embed-wrapper ${className}`}>
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-unique-id={username}
        data-embed-type={embedType}
        style={{ maxWidth: '780px', minWidth: '288px' }}
      >
        <section>
          <a target="_blank" rel="noopener noreferrer" href={`${url}?refer=creator_embed`}>
            @{username}
          </a>
        </section>
      </blockquote>
    </div>
  );
}
