import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="/logo.png"
            alt="धम्म संघ कोल्हापूर"
            className="w-1/3 mx-auto mb-6 md:w-1/3 sm:w-1/3"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-cambridge_blue mb-6">
            धम्म संघ, कोल्हापूर
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            वैज्ञानिक, साक्ष्य-आधारित दृष्टिकोनातून बुद्धाच्या शिकवणींचा अभ्यास
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="bg-hunyadi_yellow hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-2xl font-semibold transition-colors shadow-soft"
            >
              आमच्या समुदायात सामील व्हा
            </Link>
            <Link
              href="/blogs"
              className="border-2 border-cambridge_blue text-cambridge_blue hover:bg-cambridge_blue hover:text-white px-8 py-3 rounded-2xl font-semibold transition-colors"
            >
              आमचा ब्लॉग वाचा
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-linen">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cambridge_blue mb-6">
            आमचे ध्येय
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            आम्ही प्राचीन शहाणपण आणि आधुनिक समज यांच्यात पूल निर्माण करतो, अशी
            जागा तयार करतो जिथे बौद्ध शिकवणी सुलभ, प्रासंगिक आणि साक्ष्य-आधारित
            प्रथांवर आधारित असतात.
          </p>
          <Link
            href="/about"
            className="inline-block bg-tea_rose_red hover:bg-pink-300 text-gray-900 px-6 py-2 rounded-xl font-medium transition-colors"
          >
            आमच्याबद्दल अधिक जाणून घ्या
          </Link>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cambridge_blue mb-8 text-center">
            नवीनतम अंतर्दृष्टी
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Post Card */}
            <article className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="inline-block bg-hunyadi_yellow text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  समुदाय
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                संघ धम्मामध्ये आपले स्वागत
              </h3>
              <p className="text-gray-600 mb-4">
                आमच्या समुदायाची आणि बौद्ध शिकवणींकडे आमच्या दृष्टिकोनाची ओळख
              </p>
              <Link
                href="/blogs/welcome-to-sangha-dhamma"
                className="text-cambridge_blue hover:text-blue-700 font-medium"
              >
                अधिक वाचा →
              </Link>
            </article>

            {/* Placeholder Cards */}
            <article className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="mb-4">
                <span className="inline-block bg-light_coral text-white px-3 py-1 rounded-full text-sm font-medium">
                  लवकरच
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                सजगतेचे विज्ञान
              </h3>
              <p className="text-gray-600 mb-4">
                ध्यान प्रथांच्या संशोधन-समर्थित फायद्यांचा शोध
              </p>
              <span className="text-gray-400 font-medium">लवकरच</span>
            </article>

            <article className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="mb-4">
                <span className="inline-block bg-cambridge_blue text-white px-3 py-1 rounded-full text-sm font-medium">
                  लवकरच
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                कार्यरत करुणा
              </h3>
              <p className="text-gray-600 mb-4">
                बौद्ध करुणा आधुनिक सामाजिक सहभागात कशी भाषांतरित होते
              </p>
              <span className="text-gray-400 font-medium">लवकरच</span>
            </article>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-16 px-4 bg-linen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cambridge_blue mb-8 text-center">
            समुदायाच्या मुख्य गोष्टी
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                साप्ताहिक ध्यान
              </h3>
              <p className="text-gray-600">
                मार्गदर्शित ध्यान आणि चर्चेसाठी दर रविवारी आमच्यात सामील व्हा
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                अभ्यास गट
              </h3>
              <p className="text-gray-600">
                बौद्ध ग्रंथ आणि शिकवणींचा एकत्र शोध घ्या
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                सामुदायिक सेवा
              </h3>
              <p className="text-gray-600">
                सामुदायिक प्रकल्पांद्वारे करुणेला कृतीत आणा
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-cambridge_blue">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            तुमचा प्रवास सुरू करण्यास तयार आहात?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            आमच्या समुदायात सामील व्हा आणि सजग जीवनाची परिवर्तनकारी शक्ती शोधा
          </p>
          <Link
            href="/join"
            className="bg-hunyadi_yellow hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-2xl font-semibold transition-colors shadow-soft"
          >
            आजच सुरुवात करा
          </Link>
        </div>
      </section>
    </main>
  );
}
