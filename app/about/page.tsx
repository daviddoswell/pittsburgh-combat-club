export default function About() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            About Pittsburgh Combat
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building a community of confident, skilled individuals through world-class self-defense training.
          </p>
        </div>

        {/* Mission */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            At Pittsburgh Combat, we believe everyone deserves to feel safe and confident. Our mission is to provide 
            accessible, effective self-defense training that empowers individuals of all backgrounds and skill levels. 
            We combine traditional martial arts wisdom with modern combat techniques to create a comprehensive training 
            system that works in real-world situations.
          </p>
        </div>

        {/* Values */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in instruction and training methodology.',
              },
              {
                title: 'Respect',
                description: 'We foster a supportive environment built on mutual respect and dignity.',
              },
              {
                title: 'Empowerment',
                description: 'We help students build confidence that extends beyond the training floor.',
              },
              {
                title: 'Community',
                description: 'We create lasting bonds through shared growth and achievement.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/5 shadow-2xl shadow-white/5 hover:shadow-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Story</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Founded in Pittsburgh, Pennsylvania, our academy has grown from a small training group to one of the 
            region's most respected self-defense institutions. Our instructors bring together decades of experience 
            in various martial arts disciplines, creating a unique and effective training system that has helped 
            hundreds of students achieve their personal defense goals.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <a href="/membership" className="btn-primary">
            Join Our Community
          </a>
        </div>
      </div>
    </div>
  );
}

