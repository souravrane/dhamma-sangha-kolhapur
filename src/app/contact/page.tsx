export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cambridge_blue mb-8 text-center">
          Contact Us
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Have questions or want to learn more about our community? We'd love
            to hear from you.
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
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cambridge_blue focus:border-transparent transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="meditation">Meditation & Practice</option>
                <option value="events">Events & Activities</option>
                <option value="membership">Membership & Joining</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cambridge_blue focus:border-transparent transition-colors"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cambridge_blue hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors shadow-soft"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Other Ways to Connect
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">
                <strong>Location:</strong> Kolhapur, Maharashtra, India
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <strong>Email:</strong> info@dhammasanghakolhapur.com
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <strong>Meeting Times:</strong> Weekly on Sundays at 10:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
