# Pittsburgh Combat Website - Setup Guide

## 🎉 What's Been Built

A complete, modern, production-ready website for Pittsburgh Combat with:

### Pages
- ✅ **Home** - Hero section with features and CTAs
- ✅ **About** - Company mission, values, and story
- ✅ **System** - Detailed training methodology
- ✅ **Private** - Private training information
- ✅ **Membership** - Pricing tiers with Stripe checkout flow
- ✅ **Success** - Post-purchase confirmation page

### Components
- ✅ **Navigation** - Responsive navbar with smooth animations and mobile menu
- ✅ **Footer** - White footer with black text and links

### Features
- ✅ Black background with white text (Vercel-inspired aesthetic)
- ✅ Heavily rounded buttons with smooth hover effects
- ✅ No borders - only shadows for depth
- ✅ Fully responsive (mobile & desktop)
- ✅ Smooth animations and transitions
- ✅ TypeScript throughout
- ✅ ESLint compliant (no errors)
- ✅ Stripe checkout integration ready

## 🚀 Quick Start

1. **Install dependencies:**
```bash
pnpm install
```

2. **Start the development server:**
```bash
pnpm dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 💳 Stripe Integration (Optional)

The membership page is fully functional with a placeholder checkout system. To enable real Stripe payments:

### Step 1: Get Stripe Keys
1. Create a [Stripe account](https://stripe.com)
2. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
3. Copy your **Publishable key** and **Secret key**

### Step 2: Configure Environment
Create a `.env.local` file in the root directory:

```env
STRIPE_SECRET_KEY=sk_test_51...
STRIPE_PUBLISHABLE_KEY=pk_test_51...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Step 3: Install Stripe SDK
```bash
pnpm add stripe
```

### Step 4: Create Products in Stripe
1. Go to Stripe Dashboard → Products
2. Create three products:
   - **Basic Membership** - $99/month
   - **Pro Membership** - $179/month
   - **Elite Membership** - $299/month
3. Copy each Price ID (starts with `price_...`)

### Step 5: Update Price IDs
Edit `/app/membership/page.tsx` and replace the `stripePriceId` values:

```typescript
const membershipTiers: MembershipTier[] = [
  {
    name: 'Basic',
    stripePriceId: 'price_YOUR_BASIC_PRICE_ID', // ← Replace
    // ...
  },
  // ... repeat for Pro and Elite
];
```

### Step 6: Enable Stripe API
Uncomment the implementation in `/app/api/create-checkout-session/route.ts`

### Step 7: Test
1. Restart your dev server
2. Click "Get Started" on any membership tier
3. Complete checkout with Stripe test card: `4242 4242 4242 4242`

## 🎨 Design System

### Colors
- **Background**: Pure black (`#000000`)
- **Text**: White (`#FFFFFF`)
- **Accents**: Gray shades for secondary text
- **Footer**: White background with black text

### Typography
- **Primary Font**: Geist Sans
- **Monospace**: Geist Mono

### Buttons
- **Primary**: White background, black text, heavy rounded corners (`rounded-full`)
- **Secondary**: Transparent with white border, white text
- **Hover Effects**: Scale and shadow animations

### Shadows
- All depth created with box-shadows
- No borders used anywhere
- Shadows intensify on hover

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (stacked layout, hamburger menu)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (full navigation, multi-column layouts)

## 🧪 Testing Checklist

- [ ] Homepage loads and looks good
- [ ] Navigation works on desktop
- [ ] Mobile menu opens and closes
- [ ] All page links work
- [ ] Buttons have proper hover effects
- [ ] Forms are responsive
- [ ] Footer appears on all pages
- [ ] Membership checkout shows alert (without Stripe) or redirects (with Stripe)

## 📝 Customization Tips

### Update Company Information
Edit `/app/components/Footer.tsx` to change:
- Email address
- Physical address
- Phone number
- Social media links

### Modify Membership Tiers
Edit `/app/membership/page.tsx`:
- Change pricing
- Add/remove features
- Modify tier names

### Customize Content
Each page is in its own folder under `/app`:
- `/app/page.tsx` - Home
- `/app/about/page.tsx` - About
- `/app/system/page.tsx` - System
- `/app/private/page.tsx` - Private
- `/app/membership/page.tsx` - Membership

### Adjust Animations
Edit `/app/globals.css` to modify:
- Animation duration
- Hover effects
- Shadow intensities

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables (if using Stripe)
5. Deploy!

Vercel will automatically:
- Build your Next.js app
- Set up continuous deployment
- Provide a production URL
- Handle SSL certificates

### Other Platforms
The app can also be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

## 🛠️ Development Commands

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Linting**: ESLint with Next.js config

## 🎯 Performance Optimizations

- ✅ Server-side rendering (SSR)
- ✅ Automatic code splitting
- ✅ Optimized fonts with `next/font`
- ✅ Image optimization ready
- ✅ Minimal bundle size

## ⚡ Next Steps

1. Run `pnpm dev` and view your site
2. Customize content for Pittsburgh Combat
3. Add real images to `/public` folder
4. Set up Stripe for payments
5. Add more content as needed
6. Deploy to Vercel

## 🆘 Troubleshooting

**Server won't start?**
- Check Node.js version (need 18+)
- Delete `node_modules` and `.next`, reinstall

**Styles not showing?**
- Check if Tailwind is properly configured
- Restart dev server

**Stripe not working?**
- Verify environment variables are set
- Check Price IDs match your Stripe dashboard
- Ensure Stripe SDK is installed

## 📞 Support

For issues specific to Pittsburgh Combat, contact your development team.
For Next.js questions, see [Next.js Documentation](https://nextjs.org/docs).
For Stripe questions, see [Stripe Documentation](https://stripe.com/docs).

---

**Built with ❤️ for Pittsburgh Combat**

