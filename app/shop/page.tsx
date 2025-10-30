import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Shop | The Figs',
  description: 'Shop The Figs official merchandise. New merch coming soon!',
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-figs-cream flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col pt-32">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 w-full">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Merch Store
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Show your support with official The Figs merchandise
            </p>
          </div>
        </div>

        {/* Shopify Store Embed */}
        <div className="flex-1 mx-auto w-full px-6 pb-8 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full min-h-[1200px]">
            <iframe
              src="https://www.thefigsmusic.com/"
              title="The Figs Merch Store"
              className="w-full h-full min-h-[1200px]"
              style={{ border: 'none' }}
              loading="lazy"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
