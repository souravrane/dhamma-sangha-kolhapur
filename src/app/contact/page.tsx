export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cambridge_blue mb-8 text-center">
          आमच्याशी संपर्क साधा
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <p className="text-lg text-gray-700 mb-8 text-center">
            प्रश्न आहेत किंवा आमच्या समुदायाबद्दल अधिक जाणून घेतले? आम्हाला
            तुमच्याकडून ऐकणे आवडेल.
          </p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                पूर्ण नाव *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cambridge_blue focus:border-transparent transition-colors"
                placeholder="तुमचे पूर्ण नाव टाका"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                ईमेल पत्ता *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cambridge_blue focus:border-transparent transition-colors"
                placeholder="तुमचा ईमेल पत्ता टाका"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                विषय *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cambridge_blue focus:border-transparent transition-colors"
              >
                <option value="">विषय निवडा</option>
                <option value="general">सामान्य चौकशी</option>
                <option value="meditation">ध्यान आणि आचरण</option>
                <option value="events">कार्यक्रम आणि उपक्रम</option>
                <option value="membership">सदस्यत्व आणि सहभाग</option>
                <option value="other">इतर</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                संदेश *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cambridge_blue focus:border-transparent transition-colors"
                placeholder="आम्ही तुमची कशी मदत करू शकतो ते सांगा..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cambridge_blue hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors shadow-soft"
            >
              संदेश पाठवा
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            संपर्काचे इतर मार्ग
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">
                <strong>ठिकाण:</strong> कोल्हापूर, महाराष्ट्र, भारत
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <strong>ईमेल:</strong> info@dhammasanghakolhapur.com
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <strong>मीटिंग वेळ:</strong> दर रविवारी सकाळी 10:00 वाजता
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
