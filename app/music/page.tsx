import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Music | The Figs',
  description: 'Listen to The Figs on Spotify, Apple Music, and all streaming platforms. Stream our debut album and latest singles.',
};

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-figs-cream">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Music
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stream our music on your favorite platform
          </p>
        </div>

        {/* Spotify Embed */}
        <div className="mt-16 mx-auto max-w-3xl">
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

        {/* Streaming Links */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Listen on Your Favorite Platform
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 max-w-3xl mx-auto">
            <a
              href="https://open.spotify.com/artist/0guOtxDAwFFEGGCxrbW5KF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow hover:bg-figs-pink/10"
            >
              <span className="text-gray-900 font-semibold">Spotify</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow hover:bg-figs-pink/10"
            >
              <span className="text-gray-900 font-semibold">Apple Music</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow hover:bg-figs-pink/10"
            >
              <span className="text-gray-900 font-semibold">YouTube Music</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow hover:bg-figs-pink/10"
            >
              <span className="text-gray-900 font-semibold">Amazon Music</span>
            </a>
          </div>
        </div>

        {/* Featured Album Section */}
        <div className="mt-24 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900">
                The Figs Present: The Figs
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Our debut album featuring nostalgic campfire songs and acoustic storytelling.
              </p>
              <p className="mt-4 text-sm text-gray-500">Released 2024</p>
              <div className="mt-8">
                <a
                  href="https://open.spotify.com/artist/0guOtxDAwFFEGGCxrbW5KF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-figs-pink px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
                >
                  Listen Now
                </a>
              </div>
            </div>
            <div className="bg-figs-cream/50 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Album artwork coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
