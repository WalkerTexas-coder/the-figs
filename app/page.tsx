import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-figs-cream">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Failed models turned folk band
              </h1>
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

        {/* Featured Album - Spotify Embed */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Listen to The Figs
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Stream our latest album and fan favorites on Spotify
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl overflow-hidden shadow-lg bg-white p-4">
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
            </div>
          </div>
        </section>

        {/* Stats / Social Proof */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Join Our Growing Community
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Be part of something special
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col bg-figs-cream/50 p-8 rounded-xl">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">Monthly Listeners</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-figs-pink">1.9M+</dd>
                </div>
                <div className="flex flex-col bg-figs-cream/50 p-8 rounded-xl">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">Instagram Followers</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-figs-pink">96K+</dd>
                </div>
                <div className="flex flex-col bg-figs-cream/50 p-8 rounded-xl">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">Hit Single</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-figs-pink">#1 on iTunes</dd>
                  <dd className="text-xs text-gray-500 mt-1">Lemonade feat. Forrest Frank</dd>
                </div>
              </dl>
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
