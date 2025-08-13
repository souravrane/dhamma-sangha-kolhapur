import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="/logo.png"
            alt="Dhamma Sangha Kolhapur"
            className="w-1/2 mx-auto mb-6 md:w-1/2 sm:w-1/2"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-cambridge_blue mb-6">
            Dhamma Sangha Kolhapur
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Exploring Buddha's teachings through a scientific, evidence-aware
            lens
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="bg-hunyadi_yellow hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-2xl font-semibold transition-colors shadow-soft"
            >
              Join Our Community
            </Link>
            <Link
              href="/blogs"
              className="border-2 border-cambridge_blue text-cambridge_blue hover:bg-cambridge_blue hover:text-white px-8 py-3 rounded-2xl font-semibold transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-linen">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cambridge_blue mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            We bridge ancient wisdom with modern understanding, creating a space
            where Buddhist teachings are accessible, relevant, and grounded in
            evidence-based practices.
          </p>
          <Link
            href="/about"
            className="inline-block bg-tea_rose_red hover:bg-pink-300 text-gray-900 px-6 py-2 rounded-xl font-medium transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cambridge_blue mb-8 text-center">
            Latest Insights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Post Card */}
            <article className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="inline-block bg-hunyadi_yellow text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  Community
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Welcome to Sangha Dhamma
              </h3>
              <p className="text-gray-600 mb-4">
                An introduction to our community and approach to Buddhist
                teachings
              </p>
              <Link
                href="/blogs/welcome-to-sangha-dhamma"
                className="text-cambridge_blue hover:text-blue-700 font-medium"
              >
                Read More →
              </Link>
            </article>

            {/* Placeholder Cards */}
            <article className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="mb-4">
                <span className="inline-block bg-light_coral text-white px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                The Science of Mindfulness
              </h3>
              <p className="text-gray-600 mb-4">
                Exploring research-backed benefits of meditation practices
              </p>
              <span className="text-gray-400 font-medium">Coming Soon</span>
            </article>

            <article className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="mb-4">
                <span className="inline-block bg-cambridge_blue text-white px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Compassion in Action
              </h3>
              <p className="text-gray-600 mb-4">
                How Buddhist compassion translates to modern social engagement
              </p>
              <span className="text-gray-400 font-medium">Coming Soon</span>
            </article>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-16 px-4 bg-linen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cambridge_blue mb-8 text-center">
            Community Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Weekly Meditation
              </h3>
              <p className="text-gray-600">
                Join us every Sunday for guided meditation and discussion
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Study Groups
              </h3>
              <p className="text-gray-600">
                Explore Buddhist texts and teachings together
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Service
              </h3>
              <p className="text-gray-600">
                Put compassion into action through community projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-cambridge_blue">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community and discover the transformative power of mindful
            living
          </p>
          <Link
            href="/join"
            className="bg-hunyadi_yellow hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-2xl font-semibold transition-colors shadow-soft"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}
