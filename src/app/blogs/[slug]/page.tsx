export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <div className="mb-4">
            <span className="inline-block bg-hunyadi_yellow text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
              Community
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-cambridge_blue mb-4">
            Welcome to Sangha Dhamma
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            An introduction to our community and approach to Buddhist teachings
          </p>
          <div className="text-gray-500">
            <time>January 15, 2024</time> • <span>5 min read</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to our community where we explore Buddha's teachings through
            a scientific, evidence-aware lens.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We believe that the wisdom of the Buddha can be understood and
            practiced in harmony with modern scientific understanding.
          </p>

          <blockquote className="border-l-4 border-cambridge_blue pl-6 italic text-lg text-gray-700">
            May all beings be happy and free from suffering.
          </blockquote>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-gray-600">
              <span>Written by </span>
              <span className="font-medium">Admin User</span>
            </div>
            <a
              href="/blogs"
              className="text-cambridge_blue hover:text-blue-700 font-medium"
            >
              ← Back to All Posts
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
