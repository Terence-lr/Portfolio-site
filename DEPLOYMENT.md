# Portfolio Deployment Guide

## Vercel Deployment

### Prerequisites
- GitHub repository with your portfolio code
- Vercel account (free tier available)

### Deployment Steps

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your portfolio repository

2. **Configure Build Settings**
   - Framework Preset: Vite
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (if needed)
   - Add any environment variables in the Vercel dashboard
   - For this portfolio, no environment variables are required

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - You'll get a live URL (e.g., `https://your-portfolio.vercel.app`)

### Custom Domain (Optional)
- In Vercel dashboard, go to your project settings
- Navigate to "Domains"
- Add your custom domain
- Update DNS settings as instructed

### Automatic Deployments
- Every push to your main branch will trigger a new deployment
- Pull requests will create preview deployments

## Local Development

```bash
# Install dependencies
cd client
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## File Structure
```
Portfolio-site/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   │   ├── favicon.svg    # Custom T favicon
│   │   └── assets/        # Resume and other files
│   └── package.json       # Client dependencies
├── vercel.json           # Vercel configuration
└── DEPLOYMENT.md         # This file
```

## Features Implemented
- ✅ Crimson professional color scheme
- ✅ Custom glowing cursor with magnetic effects
- ✅ Interactive section title hover effects with TR monogram
- ✅ Work experience section
- ✅ Projects showcase with crimson accents
- ✅ Resume download functionality
- ✅ Custom T favicon
- ✅ Responsive design
- ✅ Smooth animations and transitions

## Next Steps
1. Replace placeholder resume.pdf with your actual resume
2. Update project images and descriptions
3. Add your actual contact information
4. Customize the content to match your experience
5. Test the live deployment
