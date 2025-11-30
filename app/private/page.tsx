export default function Private() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Private Training
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Personalized instruction tailored to your specific goals, schedule, and skill level.
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Private Training?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Customized Curriculum',
                description: 'Training designed specifically for your goals, whether self-defense, fitness, or competition.',
              },
              {
                title: 'Flexible Scheduling',
                description: 'Train at times that work for your busy lifestyle.',
              },
              {
                title: 'Accelerated Progress',
                description: 'One-on-one attention means faster skill development and refinement.',
              },
              {
                title: 'Personal Attention',
                description: 'Receive immediate feedback and correction from expert instructors.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/5 shadow-2xl shadow-white/5 hover:shadow-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">What to Expect</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Private sessions begin with a consultation to understand your goals, experience level, and any specific 
            concerns or requirements. From there, we create a personalized training plan that evolves as you progress. 
            Each session provides focused instruction with hands-on practice, technical refinement, and real-time 
            feedback. Sessions can be scheduled individually or as a package, with options for weekly, bi-weekly, 
            or custom arrangements.
          </p>
        </div>

        {/* Options */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Training Options</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Individual Sessions',
                description: 'One-on-one training for maximum personal attention and customization.',
              },
              {
                title: 'Small Group Sessions',
                description: 'Train with friends or family (2-4 people) for a shared learning experience.',
              },
              {
                title: 'Specialized Programs',
                description: 'Focused training for specific needs such as competition prep, law enforcement, or executive protection.',
              },
            ].map((option, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white/5 shadow-2xl shadow-white/5 hover:shadow-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{option.title}</h3>
                <p className="text-gray-300 leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6 p-8 rounded-3xl bg-white/5 shadow-2xl shadow-white/10">
          <h2 className="text-3xl sm:text-4xl font-bold">Get Started</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Ready to begin your private training journey? Contact us to schedule a consultation and discuss 
            how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:info@pittsburghcombat.com" className="btn-primary">
              Schedule Consultation
            </a>
            <a href="/membership" className="btn-secondary">
              View All Options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

