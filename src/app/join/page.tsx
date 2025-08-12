export default function JoinPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cambridge_blue mb-8 text-center">
          Join Our Community
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Become part of our community exploring Buddhist wisdom through a
            scientific lens.
          </p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cambridge_blue focus:border-transparent transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cambridge_blue focus:border-transparent transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label
                htmlFor="interests"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Areas of Interest
              </label>
              <textarea
                id="interests"
                name="interests"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cambridge_blue focus:border-transparent transition-colors"
                placeholder="What aspects of Buddhist practice interest you most? (e.g., meditation, mindfulness, compassion, philosophy)"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-hunyadi_yellow hover:bg-yellow-500 text-gray-900 py-3 px-6 rounded-xl font-semibold transition-colors shadow-soft"
            >
              Join Our Community
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            By joining, you'll receive updates about our events, meditation
            sessions, and community activities.
          </p>
        </div>
      </div>
    </main>
  );
}
