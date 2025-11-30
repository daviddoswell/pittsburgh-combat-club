'use client';

import { useState } from 'react';

interface MembershipTier {
  name: string;
  price: string;
  interval: string;
  description: string;
  features: string[];
  stripePriceId: string;
  popular?: boolean;
}

const membershipTiers: MembershipTier[] = [
  {
    name: 'Basic',
    price: '$99',
    interval: 'month',
    description: 'Perfect for beginners starting their self-defense journey',
    features: [
      '8 group classes per month',
      'Access to basic training equipment',
      'Online training resources',
      'Community forum access',
    ],
    stripePriceId: 'price_basic_monthly',
  },
  {
    name: 'Pro',
    price: '$179',
    interval: 'month',
    description: 'For dedicated practitioners seeking consistent growth',
    features: [
      'Unlimited group classes',
      'Access to all training equipment',
      'Priority class registration',
      '1 private session per month',
      'Online training resources',
      'Sparring sessions',
    ],
    stripePriceId: 'price_pro_monthly',
    popular: true,
  },
  {
    name: 'Elite',
    price: '$299',
    interval: 'month',
    description: 'Complete access for serious martial artists',
    features: [
      'Unlimited group classes',
      'Full equipment access',
      'Priority registration',
      '4 private sessions per month',
      'Online training resources',
      'Unlimited sparring sessions',
      'Competition preparation',
      'Nutrition guidance',
    ],
    stripePriceId: 'price_elite_monthly',
  },
];

export default function Membership() {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleCheckout = async (priceId: string, tierName: string) => {
    setIsLoading(priceId);
    
    try {
      // Call backend API to create a Stripe checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const data = await response.json();
      
      // If URL is provided, redirect to Stripe checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        // For development/demo purposes
        alert(
          `Stripe Checkout is ready to be configured!\n\n` +
          `To enable live payments:\n` +
          `1. Install Stripe: pnpm add stripe\n` +
          `2. Add your Stripe keys to .env.local\n` +
          `3. Uncomment the Stripe implementation in /app/api/create-checkout-session/route.ts\n\n` +
          `Selected: ${tierName} (${priceId})`
        );
        setIsLoading(null);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your request. Please try again.');
      setIsLoading(null);
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Membership Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your training goals. All memberships include access to our world-class facility and expert instruction.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {membershipTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                tier.popular
                  ? 'bg-white text-black shadow-2xl shadow-white/20 scale-105'
                  : 'bg-white/5 shadow-2xl shadow-white/5 hover:shadow-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-black text-white text-sm font-semibold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <h3 className={`text-2xl font-bold ${tier.popular ? 'text-black' : 'text-white'}`}>
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold ${tier.popular ? 'text-black' : 'text-white'}`}>
                      {tier.price}
                    </span>
                    <span className={`text-lg ${tier.popular ? 'text-gray-600' : 'text-gray-400'}`}>
                      /{tier.interval}
                    </span>
                  </div>
                  <p className={`text-sm ${tier.popular ? 'text-gray-600' : 'text-gray-400'}`}>
                    {tier.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          tier.popular ? 'text-black' : 'text-white'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={`text-sm ${tier.popular ? 'text-gray-700' : 'text-gray-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handleCheckout(tier.stripePriceId, tier.name)}
                  disabled={isLoading === tier.stripePriceId}
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    tier.popular
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {isLoading === tier.stripePriceId ? 'Processing...' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 rounded-3xl bg-white/5 shadow-2xl shadow-white/5 space-y-6">
          <h2 className="text-3xl font-bold">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Flexible Commitment</h3>
              <p>All memberships are month-to-month with no long-term contracts. Cancel anytime.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Family Discounts</h3>
              <p>Ask about special rates for families and group memberships.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Student Rates</h3>
              <p>Special pricing available for students with valid ID.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Trial Class</h3>
              <p>Try a free class before committing to a membership.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Questions?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our team is here to help you choose the right membership. Contact us for personalized guidance.
          </p>
          <a href="mailto:info@pittsburghcombat.com" className="btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

