export default function GalleryPage() {
  // Sample gallery data - in a real app, this would come from the database
  const galleryCategories = [
    {
      name: "Community Events",
      images: [
        {
          id: 1,
          title: "Weekly Meditation Session",
          description: "Community members practicing mindfulness together",
          event: "Weekly Meditation",
          date: "January 2024",
          placeholder: "🧘‍♀️",
        },
        {
          id: 2,
          title: "Introduction Meeting",
          description: "Our first community gathering to introduce our mission",
          event: "Community Introduction",
          date: "January 2024",
          placeholder: "👥",
        },
        {
          id: 3,
          title: "Mindfulness Workshop",
          description: "Learning practical mindfulness techniques",
          event: "Mindfulness Workshop",
          date: "Coming Soon",
          placeholder: "📚",
        },
      ],
    },
    {
      name: "Meditation & Practice",
      images: [
        {
          id: 4,
          title: "Guided Meditation",
          description: "Experienced practitioners leading meditation sessions",
          event: "Weekly Practice",
          date: "Ongoing",
          placeholder: "🧘‍♂️",
        },
        {
          id: 5,
          title: "Walking Meditation",
          description: "Mindful walking in nature",
          event: "Nature Retreat",
          date: "Seasonal",
          placeholder: "🚶‍♀️",
        },
        {
          id: 6,
          title: "Group Discussion",
          description: "Exploring Buddhist texts and teachings",
          event: "Study Group",
          date: "Monthly",
          placeholder: "💭",
        },
      ],
    },
    {
      name: "Special Occasions",
      images: [
        {
          id: 7,
          title: "Buddha Purnima Celebration",
          description:
            "Celebrating the birth, enlightenment, and passing of Buddha",
          event: "Buddha Purnima",
          date: "May 2024",
          placeholder: "🌸",
        },
        {
          id: 8,
          title: "Community Retreat",
          description: "Weekend retreat for deep practice and connection",
          event: "Annual Retreat",
          date: "December 2024",
          placeholder: "🏔️",
        },
        {
          id: 9,
          title: "Charity Event",
          description: "Community service and compassion in action",
          event: "Charity Drive",
          date: "Quarterly",
          placeholder: "🤝",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cambridge_blue mb-8 text-center">
          गॅलरी
        </h1>

        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Visual moments from our community gatherings, meditation sessions, and
          special events. Each image tells a story of our journey together.
        </p>

        {/* Gallery Categories */}
        {galleryCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              {category.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image) => (
                <div
                  key={image.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-linen to-tea_rose_red flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-6xl mb-4">{image.placeholder}</div>
                      <div className="text-sm font-medium">{image.title}</div>
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      {image.description}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-cambridge_blue font-medium">
                        {image.event}
                      </span>
                      <span className="text-gray-500">{image.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="text-center bg-linen rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Share Your Moments
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Have photos from our community events? We'd love to see them! Share
            your moments and help us build a visual history of our journey
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="inline-block bg-cambridge_blue hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Join Our Community
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-cambridge_blue text-cambridge_blue hover:bg-cambridge_blue hover:text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Share Photos
            </a>
          </div>
        </section>

        {/* Photo Guidelines */}
        <section className="mt-12 bg-white rounded-2xl p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Photo Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">What We Share:</h3>
              <ul className="space-y-1">
                <li>• Community events and gatherings</li>
                <li>• Meditation and practice sessions</li>
                <li>• Educational workshops</li>
                <li>• Community service activities</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Privacy & Respect:
              </h3>
              <ul className="space-y-1">
                <li>• Always ask permission before sharing</li>
                <li>• Respect individual privacy preferences</li>
                <li>• Focus on community and activities</li>
                <li>• Maintain the peaceful atmosphere</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
