'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function ConnectPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Check honeypot - if filled, it's a bot
    const honeypot = formData.get('_gotcha');
    if (honeypot) {
      // Silently fail for bots
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xblpkjjn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsNewsletterSubmitting(true);
    setNewsletterStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Check honeypot - if filled, it's a bot
    const honeypot = formData.get('_gotcha_newsletter');
    if (honeypot) {
      // Silently fail for bots
      setIsNewsletterSubmitting(false);
      return;
    }

    // TODO: Add your Make.com webhook URL here
    const MAKE_WEBHOOK_URL = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL || '';

    if (!MAKE_WEBHOOK_URL) {
      console.warn('Make.com webhook URL not configured. Add NEXT_PUBLIC_MAKE_WEBHOOK_URL to .env.local');
      setNewsletterStatus('error');
      setIsNewsletterSubmitting(false);
      return;
    }

    try {
      const email = formData.get('newsletter-email');
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'website_connect_page'
        })
      });

      if (response.ok) {
        setNewsletterStatus('success');
        form.reset();
      } else {
        setNewsletterStatus('error');
      }
    } catch (error) {
      setNewsletterStatus('error');
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-figs-cream">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let's Connect
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join our community and stay updated on new music, tour dates, and behind-the-scenes content.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Thank you for your interest in The Figs! We'd love to hear from you. Please fill out
              the form below with your inquiry, and we'll get back to you as soon as possible.
            </p>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">Message sent successfully! 🎉</p>
                <p className="text-green-700 text-sm mt-1">We'll get back to you as soon as possible.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-semibold">Oops! Something went wrong.</p>
                <p className="text-red-700 text-sm mt-1">Please try again or reach out via social media.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-figs-pink focus:ring-figs-pink"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email <span className="text-figs-pink">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-figs-pink focus:ring-figs-pink"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-figs-pink focus:ring-figs-pink"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-figs-pink focus:ring-figs-pink"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              {/* Honeypot field - hidden from users, visible to bots */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-figs-pink px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-figs-pink disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <div className="bg-figs-pink rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Join Our Newsletter
              </h2>
              <p className="mb-6 opacity-90">
                Get updates on new music, tour dates, and exclusive content delivered straight to your inbox.
              </p>

              {/* Success Message */}
              {newsletterStatus === 'success' && (
                <div className="mb-6 p-4 bg-white/20 border border-white/30 rounded-lg">
                  <p className="font-semibold">Welcome to the family! 🎉</p>
                  <p className="text-sm mt-1 opacity-90">Check your inbox for a confirmation.</p>
                </div>
              )}

              {/* Error Message */}
              {newsletterStatus === 'error' && (
                <div className="mb-6 p-4 bg-white/20 border border-white/30 rounded-lg">
                  <p className="font-semibold">Oops! Something went wrong.</p>
                  <p className="text-sm mt-1 opacity-90">Please try again later.</p>
                </div>
              )}

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="newsletter-email"
                    id="newsletter-email"
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Honeypot field - hidden from users, visible to bots */}
                <input
                  type="text"
                  name="_gotcha_newsletter"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <button
                  type="submit"
                  disabled={isNewsletterSubmitting}
                  className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-figs-pink shadow-sm hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isNewsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Follow Us
              </h2>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/the.figs.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-figs-cream transition-colors"
                >
                  <svg className="h-8 w-8 text-figs-pink" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Instagram</p>
                    <p className="text-sm text-gray-600">@the.figs.official - 96K followers</p>
                  </div>
                </a>

                <a
                  href="https://www.tiktok.com/@the.figs.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-figs-cream transition-colors"
                >
                  <svg className="h-8 w-8 text-figs-pink" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">TikTok</p>
                    <p className="text-sm text-gray-600">@the.figs.official - 10.6K followers</p>
                  </div>
                </a>

                <a
                  href="https://open.spotify.com/artist/0guOtxDAwFFEGGCxrbW5KF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-figs-cream transition-colors"
                >
                  <svg className="h-8 w-8 text-figs-pink" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Spotify</p>
                    <p className="text-sm text-gray-600">1.9M monthly listeners</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/thefigsmusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-figs-cream transition-colors"
                >
                  <svg className="h-8 w-8 text-figs-pink" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Facebook</p>
                    <p className="text-sm text-gray-600">The Figs</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Booking Info */}
            <div className="bg-figs-yellow rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Booking Inquiries
              </h2>
              <p className="text-gray-700">
                Interested in booking The Figs for your venue or event? Send us a message using
                the contact form with details about your event.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
