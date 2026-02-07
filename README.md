# AppSweep Website

Marketing website for AppSweep - Universal App Updater for macOS.

**Live URL:** https://pinkysworld.github.io/AppSweep/

## Structure

```
docs/
├── index.html          # Main landing page
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Service
├── support.html        # Support & Contact page
├── faq.html            # Frequently Asked Questions
├── tutorials.html      # Step-by-step tutorials
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
└── images/
    ├── favicon.png     # Site favicon (add 32x32 PNG)
    └── og-image.png    # Open Graph image (add 1200x630 PNG)
```

## Pages

1. **index.html** - Main marketing page with:
   - Hero section
   - Features overview
   - Update sources
   - How it works
   - Pricing comparison
   - Testimonials
   - Call to action

2. **privacy.html** - Comprehensive privacy policy including:
   - Data collection practices
   - GDPR compliance
   - CCPA compliance
   - Local data processing

3. **terms.html** - Terms of Service covering:
   - License agreement
   - Purchase terms
   - Disclaimers
   - Limitation of liability

4. **support.html** - Support center with:
   - Quick help section
   - Keyboard shortcuts
   - Contact form
   - Response time expectations

5. **faq.html** - FAQ organized by category:
   - General questions
   - Features & functionality
   - Privacy & security
   - Pricing & purchase
   - Troubleshooting
   - Technical questions

6. **tutorials.html** - Interactive tutorials:
   - Getting Started
   - Updating Apps
   - Configuring Settings
   - Notifications Setup
   - Security Features
   - Managing App List

## Setup for GitHub Pages

1. Push this `docs` folder to your repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/docs` folder
5. Save

The site will be available at: https://pinkysworld.github.io/AppSweep/

## Required Images

Add these images to the `images/` folder:

- **favicon.png** - 32x32 PNG favicon
- **og-image.png** - 1200x630 PNG for social sharing

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --color-primary: #34C759;      /* Green */
    --color-secondary: #007AFF;    /* Blue */
    --color-accent: #FF9500;       /* Orange */
}
```

### Contact Email
The support email is set to: **mip@gmx.biz**
Search and replace in HTML files if you need to change it.

### App Store Link
Replace `https://apps.apple.com/app/appsweep` with your actual App Store URL.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode support (automatic via prefers-color-scheme)
- ✅ Accessible navigation
- ✅ FAQ accordion
- ✅ Interactive tutorial navigation
- ✅ Contact form (mailto-based)
- ✅ SEO optimized with Open Graph tags
- ✅ Smooth scroll navigation
- ✅ Fade-in animations on scroll

## Support

For questions about AppSweep: mip@gmx.biz
