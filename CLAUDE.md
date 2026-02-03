# LUC - Insurance Agent Landing Page

## Project Overview
A modern Linktree-style landing page for an insurance agent. The site is designed to be:
- Mobile-first and responsive
- RTL (Right-to-Left) for Hebrew content
- Fast loading with minimal dependencies
- Easy to customize and maintain

## Tech Stack
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Fonts**: Heebo (Hebrew-friendly)

## Project Structure
```
LUC/
├── src/
│   ├── components/     # Reusable UI components
│   ├── styles/         # CSS files
│   ├── assets/         # Static assets
│   │   └── images/     # Images and icons
│   └── main.ts         # Entry point
├── public/             # Static files served as-is
├── index.html          # Main HTML file
└── .claude/            # Claude Code configuration
```

## Development Commands
```bash
npm install     # Install dependencies
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

## Design Guidelines
- Primary color: Blue (#0ea5e9)
- Font: Heebo for Hebrew text
- Direction: RTL
- Mobile-first approach
- Rounded corners on buttons/cards
- Subtle shadows for depth

## Content Structure
The landing page includes:
1. Profile photo/avatar
2. Name and title
3. Short bio/description
4. Social media links
5. Contact buttons (WhatsApp, Phone, Email)
6. Service links

## Customization
To customize for the client:
1. Update profile image in `src/assets/images/`
2. Modify content in `src/data/config.ts`
3. Adjust colors in `tailwind.config.js`

## Deployment (Vercel)

### Setup
The project is configured for Vercel deployment with `vercel.json`.

### Environment Files
- `.env.example` - Template for environment variables (committed to Git)
- `.env.local` - Local secrets including VERCEL_TOKEN (not committed)

### Deploy Commands
```bash
# Install Vercel CLI
npm i -g vercel

# Login (first time)
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### GitHub Integration
1. Push code to GitHub
2. Connect repo to Vercel dashboard
3. Auto-deploy on every push to main

### Environment Variables in Vercel
Set these in Vercel Dashboard → Project → Settings → Environment Variables:
- No required variables for this static site
- Add `VITE_*` prefixed variables if needed for client-side access
