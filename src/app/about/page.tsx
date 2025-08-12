export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cambridge_blue mb-8 text-center">
          About Us
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Dhamma Sangha Kolhapur, we believe that the timeless wisdom of
            the Buddha can be understood and practiced in harmony with modern
            scientific understanding. Our community serves as a bridge between
            ancient traditions and contemporary insights.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Scientific Approach
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We approach Buddhist teachings with both reverence for tradition and
            openness to scientific inquiry. This means:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
            <li>
              Examining meditation practices through the lens of neuroscience
              research
            </li>
            <li>
              Exploring the psychological benefits of mindfulness and compassion
            </li>
            <li>
              Understanding Buddhist ethics in the context of modern social
              science
            </li>
            <li>Applying evidence-based methods to traditional practices</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Community
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We welcome people from all backgrounds who are interested in
            exploring Buddhist wisdom through thoughtful, evidence-aware
            practice. Whether you're new to meditation or have been practicing
            for years, there's a place for you here.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Ready to begin your journey with us?
          </p>
          <a
            href="/join"
            className="inline-block bg-hunyadi_yellow hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-2xl font-semibold transition-colors shadow-soft"
          >
            Become a Member
          </a>
        </section>
      </div>
    </main>
  );
}
