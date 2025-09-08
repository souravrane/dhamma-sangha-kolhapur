export default function JoinPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cambridge_blue mb-8 text-center">
          आमच्या समुदायात सामील व्हा
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <p className="text-lg text-gray-700 mb-8 text-center">
            वैज्ञानिक दृष्टिकोनातून बौद्ध शहाणपणाचा शोध घेणाऱ्या आमच्या
            समुदायाचा भाग व्हा.
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
                htmlFor="interests"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                आवडीची क्षेत्रे
              </label>
              <textarea
                id="interests"
                name="interests"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cambridge_blue focus:border-transparent transition-colors"
                placeholder="बौद्ध आचरणाचे कोणते पैलू तुम्हाला सर्वात जास्त आवडतात? (उदा., ध्यान, सजगता, करुणा, तत्वज्ञान)"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-hunyadi_yellow hover:bg-yellow-500 text-gray-900 py-3 px-6 rounded-xl font-semibold transition-colors shadow-soft"
            >
              आमच्या समुदायात सामील व्हा
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            सामील होऊन, तुम्हाला आमच्या कार्यक्रमांची, ध्यान सत्रांची आणि
            सामुदायिक उपक्रमांची अपडेट्स मिळतील.
          </p>
        </div>
      </div>
    </main>
  );
}
