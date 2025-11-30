export default function System() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Close Quarters Defense
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A Filipino-based combat system designed for real-world self-defense situations.
          </p>
        </div>

        {/* Overview */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">What is CQD?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Close Quarters Defense (CQD) is a comprehensive Filipino-based martial arts system rooted in 
            centuries of combat-proven techniques. Drawing from the rich traditions of Filipino martial arts, 
            CQD emphasizes practical, efficient movements that are effective in close-range confrontations. 
            Our system focuses on weapon-based and empty-hand techniques that translate seamlessly between 
            armed and unarmed scenarios, making it one of the most versatile self-defense systems available.
          </p>
        </div>

        {/* Template Systems */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Template Systems</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            CQD is built on specialized template systems that provide focused training in specific weapon 
            categories. These templates form the foundation of our comprehensive approach to combat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Close Quarters Stick',
                description: 'Master the Filipino stick fighting arts, including single and double stick techniques. Learn devastating strikes, blocks, disarms, and flow drills that develop speed, timing, and coordination. The stick serves as a training tool that translates to any impact weapon or empty-hand application.',
              },
              {
                title: 'Close Quarters Knife',
                description: 'Develop proficiency in edged weapon defense and application. Training covers both offensive and defensive knife techniques, including grip variations, angles of attack, vital targets, and empty-hand defenses against blade threats. Emphasis on practical, legal self-defense applications.',
              },
            ].map((template, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white/5 shadow-2xl shadow-white/5 hover:shadow-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{template.title}</h3>
                <p className="text-gray-300 leading-relaxed">{template.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Components */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Core Training Elements</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Weapon-to-Empty-Hand Translation',
                description: 'Learn how weapon techniques directly translate to empty-hand applications, creating a unified combat system where skills reinforce each other.',
              },
              {
                title: 'Flow & Transition Drills',
                description: 'Develop fluid movement between offensive and defensive techniques through traditional Filipino flow drills and partner exercises.',
              },
              {
                title: 'Angle-Based Striking',
                description: 'Master the fundamental angles of attack used in Filipino martial arts, applicable to all weapons and empty-hand techniques.',
              },
              {
                title: 'Disarms & Retention',
                description: 'Learn both how to disarm an armed opponent and how to retain your own weapon under pressure.',
              },
              {
                title: 'Situational Response',
                description: 'Train for real-world scenarios including multiple attackers, confined spaces, and asymmetric threat situations.',
              },
              {
                title: 'Alive Training',
                description: 'Practice techniques with progressive resistance and live sparring to ensure skills work under pressure.',
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
            CQD follows the Filipino martial arts tradition of starting with weapons training before progressing 
            to empty-hand techniques. This approach develops superior timing, distance management, and hand-eye 
            coordination from day one. Students begin with fundamental weapon patterns and gradually advance to 
            more complex applications, sparring, and scenario-based training. Our curriculum is designed to build 
            upon itself, ensuring a solid foundation while continuously challenging students to grow. Training is 
            conducted in a controlled, safe environment that allows students to push their limits while minimizing 
            injury risk.
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

