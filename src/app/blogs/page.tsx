export default function BlogsPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cambridge_blue mb-8 text-center">
          Our Blog
        </h1>

        {/* Tag Filters */}
        <div className="mb-8 text-center">
          <div className="flex flex-wrap justify-center gap-2">
            <button className="bg-cambridge_blue text-white px-4 py-2 rounded-full text-sm font-medium">
              All Posts
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Community
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Meditation
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Philosophy
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Science
            </button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Sample Post */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow">
            <div className="p-6">
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
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Jan 15, 2024</span>
                <a
                  href="/blogs/welcome-to-sangha-dhamma"
                  className="text-cambridge_blue hover:text-blue-700 font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          </article>

          {/* Placeholder Posts */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-soft">
            <div className="p-6">
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
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Coming Soon</span>
                <span className="text-gray-400 font-medium">-</span>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-2xl overflow-hidden shadow-soft">
            <div className="p-6">
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
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Coming Soon</span>
                <span className="text-gray-400 font-medium">-</span>
              </div>
            </div>
          </article>
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Previous
            </button>
            <button className="px-3 py-2 bg-cambridge_blue text-white rounded-lg">
              1
            </button>
            <button className="px-3 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              2
            </button>
            <button className="px-3 py-2 text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              Next
            </button>
          </nav>
        </div>
      </div>
    </main>
  );
}
