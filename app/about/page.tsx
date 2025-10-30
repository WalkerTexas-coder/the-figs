import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About | The Figs',
  description: 'Learn about The Figs - Bailey, Micah, and friends. From summer camp counselors to a Christian folk band with 1.9M monthly listeners.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-figs-cream">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Story
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Failed models turned folk band. God is good!
          </p>
        </div>

        {/* Main Story Section */}
        <div className="mt-16 space-y-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                We're Bailey, Micah, and friends - a group of musicians who found our calling in creating
                music that matters. What started around campfires at Gull Lake Ministries has grown into
                something we never imagined.
              </p>
              <p className="mt-4">
                As worship leaders and summer camp counselors, we've always believed in the power of music
                to bring people together and point them toward something greater. Our songs are born from
                late-night jam sessions, early morning coffee talks, and the belief that authenticity matters.
              </p>
              <p className="mt-4">
                We call ourselves "failed models turned folk band" because we've learned that success isn't
                about fitting into someone else's mold - it's about being exactly who God made us to be.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-figs-pink/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Journey So Far
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-figs-pink mb-3">
                  "Lemonade" feat. Forrest Frank
                </h3>
                <p className="text-gray-600">
                  Our collaboration with Forrest Frank hit #1 on iTunes, reaching millions of listeners
                  and introducing our music to fans around the world.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-figs-pink mb-3">
                  1.9M Monthly Listeners
                </h3>
                <p className="text-gray-600">
                  We're grateful for every single person who's streamed our music and made it part of
                  their story. Thank you for being here.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-figs-pink mb-3">
                  Debut Album
                </h3>
                <p className="text-gray-600">
                  "The Figs Present: The Figs" released in 2024, featuring nostalgic campfire songs
                  and acoustic storytelling that captures who we are.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-figs-pink mb-3">
                  Gull Lake Ministries
                </h3>
                <p className="text-gray-600">
                  Our home base in Michigan, where we serve as worship leaders and continue to grow
                  in our faith and music.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="text-center bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To create music that feels like sitting around a campfire with friends - warm, inviting,
              authentic, and full of good stories. We want every song to remind you that you're not alone,
              that God is good, and that there's always hope.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
