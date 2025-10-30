import Navigation from './components/Navigation';
import Footer from './components/Footer';
import InstagramEmbed from './components/InstagramEmbed';
import TikTokEmbed from './components/TikTokEmbed';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-figs-cream">
      <Navigation />
        {/* Banner Bar */}
     

      <main className="pt-24">
         <div className="bg-figs-pink text-white text-center py-2 px-4">
        <p className="text-sm font-semibold tracking-wide">
              
        </p>
      </div>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <Image
                  src="/The_Figs_LOGO.avif"
                  alt="The Figs"
                  width={600}
                  height={300}
                  className="h-24 w-auto sm:h-32"
                  priority
                />
              </div>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nostalgic campfire songs, barefoot crusades, and late summer thunder shows.
                Join Bailey + Micah + Friends on a journey of faith, folk, and good stories.
              </p>
              <p className="mt-4 text-xl font-semibold text-figs-pink">
                God is good!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://open.spotify.com/artist/0guOtxDAwFFEGGCxrbW5KF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-figs-pink px-8 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-figs-pink"
                >
                  Listen Now
                </a>
                <Link
                  href="/connect"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-figs-pink transition-colors"
                >
                  Join the journey <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Listen & Follow - Combined Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Listen & Follow Our Journey
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Stream our music on Spotify and see what we're up to on social media
              </p>
            </div>

            {/* All Embeds in One Row */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Spotify Embed */}
              <div className="rounded-xl overflow-hidden shadow-lg bg-white p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Spotify
                </h3>
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/artist/0guOtxDAwFFEGGCxrbW5KF?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="The Figs on Spotify"
                />
              </div>

              {/* Instagram Feed */}
              <div className="rounded-xl overflow-hidden shadow-lg bg-white p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Instagram
                </h3>
                <div className="flex justify-center">
                  <InstagramEmbed />
                </div>
              </div>

              {/* TikTok Feed */}
              <div className="rounded-xl overflow-hidden shadow-lg bg-white p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  TikTok
                </h3>
                <div className="flex justify-center">
                  <TikTokEmbed />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Stay Connected
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Sign up for our newsletter to get updates on new music, tour dates, and behind-the-scenes content.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/connect"
                  className="rounded-full bg-figs-pink px-8 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-figs-pink"
                >
                  Join Our Community
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
