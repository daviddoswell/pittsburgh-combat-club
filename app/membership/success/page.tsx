import Link from 'next/link';

export default function MembershipSuccess() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center shadow-2xl shadow-white/20">
          <svg
            className="w-10 h-10 text-white"
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
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Welcome to Pittsburgh Combat Club!
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Your membership has been successfully activated. You're now part of our community.
          </p>
        </div>

        {/* Next Steps */}
        <div className="mt-12 p-8 rounded-3xl bg-white/5 shadow-2xl shadow-white/5 text-left space-y-6">
          <h2 className="text-2xl font-bold">What's Next?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="font-semibold">Check Your Email</h3>
                <p className="text-gray-300 text-sm">
                  You'll receive a confirmation email with your membership details and access instructions.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="font-semibold">Schedule Your First Class</h3>
                <p className="text-gray-300 text-sm">
                  Browse our class schedule and reserve your spot for an upcoming session.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="font-semibold">Get Ready to Train</h3>
                <p className="text-gray-300 text-sm">
                  Wear comfortable athletic clothing and bring water. We provide all training equipment.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
          <a href="mailto:info@pittsburghcombat.com" className="btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

