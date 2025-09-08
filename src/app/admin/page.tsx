export default function AdminPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cambridge_blue mb-8 text-center">
          प्रशासन डॅशबोर्ड
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Posts Management */}
          <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Posts
              </h3>
              <p className="text-gray-600 mb-4">
                Manage blog posts and content
              </p>
              <button className="bg-cambridge_blue hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors">
                Manage Posts
              </button>
            </div>
          </div>

          {/* Events Management */}
          <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Events
              </h3>
              <p className="text-gray-600 mb-4">
                Schedule and manage community events
              </p>
              <button className="bg-cambridge_blue hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors">
                Manage Events
              </button>
            </div>
          </div>

          {/* Gallery Management */}
          <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Gallery
              </h3>
              <p className="text-gray-600 mb-4">Upload and organize images</p>
              <button className="bg-cambridge_blue hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors">
                Manage Gallery
              </button>
            </div>
          </div>

          {/* Leads Management */}
          <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Leads
              </h3>
              <p className="text-gray-600 mb-4">
                View and manage community leads
              </p>
              <button className="bg-cambridge_blue hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors">
                View Leads
              </button>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Settings
              </h3>
              <p className="text-gray-600 mb-4">
                Configure site and theme settings
              </p>
              <button className="bg-cambridge_blue hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors">
                Configure
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-soft">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quick Stats
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Posts: 1</div>
                <div>Events: 2</div>
                <div>Leads: 0</div>
                <div>Images: 0</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Post Toggle */}
        <div className="mt-12 bg-linen rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Sample Post Management
          </h2>
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-soft">
              <div>
                <h3 className="font-medium text-gray-900">
                  Welcome to Sangha Dhamma
                </h3>
                <p className="text-sm text-gray-500">Status: Published</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-600 font-medium">
                  Published
                </span>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium transition-colors">
                  Toggle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
