import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">Pittsburgh Combat</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Premier self-defense training in Pittsburgh. Building confidence through practical combat skills.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-black transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/system"
                  className="text-gray-700 hover:text-black transition-colors duration-300"
                >
                  Our System
                </Link>
              </li>
              <li>
                <Link
                  href="/private"
                  className="text-gray-700 hover:text-black transition-colors duration-300"
                >
                  Private Training
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-gray-700 hover:text-black transition-colors duration-300"
                >
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Pittsburgh, PA</p>
              <p>
                <a
                  href="mailto:info@pittsburghcombat.com"
                  className="hover:text-black transition-colors duration-300"
                >
                  info@pittsburghcombat.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} Pittsburgh Combat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

