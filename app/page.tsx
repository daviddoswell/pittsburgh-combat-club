import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            Master the Art of
            <span className="block mt-2">Self-Defense</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pittsburgh's premier combat training facility. Build confidence, strength, and real-world defense skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/membership" className="btn-primary">
              Start Training
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Instruction',
                description: 'Learn from experienced instructors with decades of combined martial arts expertise.',
              },
              {
                title: 'Real-World Skills',
                description: 'Practical techniques designed for actual self-defense situations.',
              },
              {
                title: 'All Skill Levels',
                description: 'Programs tailored for beginners through advanced practitioners.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white/5 shadow-2xl shadow-white/5 hover:shadow-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Ready to Begin?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join Pittsburgh Combat Club today and start your journey to becoming a confident, skilled defender.
          </p>
          <div className="pt-4">
            <Link href="/membership" className="btn-primary">
              View Membership Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
