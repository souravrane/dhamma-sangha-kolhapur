export default function EventsPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cambridge_blue mb-8 text-center">
          कार्यक्रम
        </h1>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            आगामी कार्यक्रम
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Weekly Meditation Session
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Join us for guided meditation and discussion
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>📅 Next Week</span>
                    <span>📍 Main Hall</span>
                  </div>
                </div>
                <button className="bg-hunyadi_yellow hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-xl font-medium transition-colors">
                  RSVP
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mindfulness Workshop
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Learn practical mindfulness techniques for daily life
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>📅 Coming Soon</span>
                    <span>📍 TBD</span>
                  </div>
                </div>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-xl font-medium transition-colors">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Past Events
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Introduction Meeting
              </h3>
              <p className="text-gray-600 mb-2">
                Our first community gathering to introduce our mission and
                approach
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>📅 January 10, 2024</span>
                <span>📍 Community Center</span>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP Form */}
        <section className="mt-16 bg-linen rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Stay Updated
          </h2>
          <p className="text-gray-700 text-center mb-6">
            Get notified about upcoming events and activities
          </p>

          <form className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cambridge_blue focus:border-transparent transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-cambridge_blue hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-colors"
            >
              Subscribe to Updates
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
