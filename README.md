# Pittsburgh Combat

A modern, responsive website for Pittsburgh Combat - a premier self-defense training facility. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Features

- **Modern Design**: Clean black and white aesthetic with smooth animations and shadows
- **Responsive**: Fully optimized for mobile and desktop experiences
- **Fast Performance**: Built on Next.js 16 with React 19 for optimal speed
- **Stripe Integration Ready**: Membership checkout flow prepared for Stripe payments
- **Accessible Navigation**: Smooth scrolling, mobile-friendly menu, and clear CTAs
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Pages

- **Home**: Hero section with feature highlights and CTAs
- **About**: Company mission, values, and story
- **System**: Detailed training methodology and components
- **Private**: Information about private training sessions
- **Membership**: Pricing tiers with Stripe checkout integration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Stripe Setup (Optional)

To enable live payment processing:

1. Create a [Stripe account](https://stripe.com)
2. Get your API keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
3. Create a `.env.local` file in the root directory:

```env
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Install Stripe SDK:

```bash
pnpm add stripe
```

5. Uncomment the Stripe implementation in `/app/api/create-checkout-session/route.ts`
6. Create your products and prices in the Stripe Dashboard
7. Update the `stripePriceId` values in `/app/membership/page.tsx` with your actual Stripe Price IDs

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono
- **Linting**: ESLint with Next.js config

## Project Structure

```
pittsburgh-combat-club/
├── app/
│   ├── about/           # About page
│   ├── api/             # API routes
│   ├── components/      # Reusable components
│   ├── membership/      # Membership and checkout pages
│   ├── private/         # Private training page
│   ├── system/          # Training system page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with navigation
│   └── page.tsx         # Home page
├── public/              # Static assets
└── package.json         # Dependencies
```

## Development

- Run linter: `pnpm lint`
- Build for production: `pnpm build`
- Start production server: `pnpm start`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables for Stripe (if using)
4. Deploy!

## License

All rights reserved © 2025 Pittsburgh Combat
# PITTSBURGH COMBAT CLUB
