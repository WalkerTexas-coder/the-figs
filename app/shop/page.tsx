import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Shop | The Figs',
  description: 'Shop The Figs official merchandise. New merch coming soon!',
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-figs-cream">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Merch Store
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Show your support with official The Figs merchandise
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-16 bg-figs-yellow rounded-2xl shadow-xl p-12 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              NEW MERCH COMING SOON!
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We're working on something special for you. Stay tuned for exclusive merchandise
              that captures the spirit of The Figs.
            </p>
            <Link
              href="/connect"
              className="inline-flex items-center rounded-full bg-figs-pink px-8 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
            >
              Get Notified When We Launch
            </Link>
          </div>
        </div>

        {/* Temporary Link to Existing Store */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Shop Our Current Collection
          </h3>
          <p className="text-gray-600 mb-6">
            In the meantime, check out our existing merch store
          </p>
          <a
            href="https://thefigsmusic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-figs-pink font-semibold hover:underline"
          >
            Visit thefigsmusic.com
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Teaser for What's Coming */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What to Expect
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow">
              <div className="h-16 w-16 bg-figs-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-figs-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Original Designs</h4>
              <p className="text-sm text-gray-600">
                Unique artwork that captures the campfire folk aesthetic
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow">
              <div className="h-16 w-16 bg-figs-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-figs-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Products</h4>
              <p className="text-sm text-gray-600">
                Comfortable, durable items you'll love to wear
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow">
              <div className="h-16 w-16 bg-figs-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-figs-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Made with Love</h4>
              <p className="text-sm text-gray-600">
                Every purchase supports our music and mission
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
