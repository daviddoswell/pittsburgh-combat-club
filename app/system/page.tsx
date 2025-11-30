export default function System() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Our Training System
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive approach to self-defense that combines proven techniques with modern methodology.
          </p>
        </div>

        {/* Overview */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">System Overview</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our system is built on fundamental principles that have proven effective across multiple combat 
            disciplines. We focus on practical, applicable techniques that work under stress, emphasizing 
            simplicity, efficiency, and effectiveness. Every technique is pressure-tested and refined to ensure 
            it works when you need it most.
          </p>
        </div>

        {/* Core Components */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Core Components</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Striking Fundamentals',
                description: 'Master effective punches, kicks, elbows, and knees. Learn proper form, power generation, and targeting.',
              },
              {
                title: 'Defensive Tactics',
                description: 'Develop reflexive defensive movements, blocking, parrying, and evasion techniques.',
              },
              {
                title: 'Clinch & Control',
                description: 'Learn to control distance, manage close-range encounters, and escape from grabs and holds.',
              },
              {
                title: 'Ground Defense',
                description: 'Essential techniques for ground situations, including escapes and position control.',
              },
              {
                title: 'Situational Awareness',
                description: 'Develop threat recognition, de-escalation skills, and preventive strategies.',
              },
              {
                title: 'Stress Conditioning',
                description: 'Train to perform under pressure through progressive resistance and scenario-based drills.',
              },
            ].map((component, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white/5 shadow-2xl shadow-white/5 hover:shadow-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{component.title}</h3>
                <p className="text-gray-300 leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Training Philosophy */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Training Philosophy</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We believe in progressive skill development. Students begin with fundamental movements and gradually 
            advance to more complex techniques and scenarios. Our curriculum is designed to build upon itself, 
            ensuring a solid foundation while continuously challenging students to grow. Training is conducted in 
            a controlled, safe environment that allows students to push their limits while minimizing injury risk.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <a href="/membership" className="btn-primary">
            Start Your Training
          </a>
        </div>
      </div>
    </div>
  );
}

