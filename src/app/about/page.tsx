export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cambridge_blue mb-8 text-center">
          आमच्याबद्दल
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            आमचे ध्येय
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            धम्म संघ कोल्हापूर येथे, आमचा विश्वास आहे की बुद्धाचे कालातीत शहाणपण
            आधुनिक वैज्ञानिक समजूतीसह सुसंवादात समजून घेतले आणि आचरणात आणले जाऊ
            शकते. आमचा समुदाय प्राचीन परंपरा आणि समकालीन अंतर्दृष्टी यांच्यात
            पूल म्हणून काम करतो.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            वैज्ञानिक दृष्टिकोन
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            आम्ही बौद्ध शिकवणींकडे परंपरेचा आदर आणि वैज्ञानिक चौकशीसाठी मुक्तपणा
            अशा दोन्हींसह दृष्टिकोन ठेवतो. याचा अर्थ:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
            <li>
              न्यूरोसायन्स संशोधनाच्या दृष्टिकोनातून ध्यान प्रथांची तपासणी
            </li>
            <li>सजगता आणि करुणा यांच्या मानसिक फायद्यांचा शोध</li>
            <li>
              आधुनिक सामाजिक विज्ञानाच्या संदर्भात बौद्ध नीतीशास्त्र समजून घेणे
            </li>
            <li>पारंपारिक प्रथांवर साक्ष्य-आधारित पद्धतींचा वापर</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            आमचा समुदाय
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            आम्ही सर्व पार्श्वभूमीच्या लोकांचे स्वागत करतो जे विचारशील,
            साक्ष्य-जागरूक आचरणाद्वारे बौद्ध शहाणपणाचा शोध घेण्यात रस घेतात.
            तुम्ही ध्यानात नवीन असाल किंवा वर्षांपासून आचरण करत असाल, इथे
            तुमच्यासाठी जागा आहे.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            आमच्यात सामील व्हा
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            आमच्यासोबत तुमचा प्रवास सुरू करण्यास तयार आहात?
          </p>
          <a
            href="/join"
            className="inline-block bg-hunyadi_yellow hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-2xl font-semibold transition-colors shadow-soft"
          >
            सदस्य व्हा
          </a>
        </section>
      </div>
    </main>
  );
}
