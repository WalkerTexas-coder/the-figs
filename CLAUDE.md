# The Figs Band Website - Build Instructions

## Project Overview
We are building a website for The Figs, a Christian folk/Americana band consisting of Bailey + Micah + Friends. They describe themselves as "failed models turned folk band" and have recently gained significant traction with their debut album "The Figs Present: The Figs" released in 2024.

## Band Information

### Key Facts
- **Members**: Bailey + Micah + Friends
- **Genre**: Christian folk/Americana with campfire vibes
- **Album**: "The Figs Present: The Figs" (2024)
- **Notable Collaboration**: "Lemonade" with Forrest Frank (hit #1 on iTunes)
- **Monthly Listeners**: 1.9M on Spotify
- **Social Media**:
  - Instagram: @the.figs.official (96K followers)
  - TikTok: @the.figs.official (10.6K followers, 67K likes)
  - Facebook: The Figs
- **Background**: Worship leaders at Gull Lake Ministries, summer camp counselors
- **Existing Merch Store**: thefigsmusic.com

### Brand Vibe & Aesthetic
- Nostalgic campfire songs and acoustic guitars
- Barefoot crusades and late summer thunder shows
- Wholesome, authentic, faith-centered
- Folk rock with storytelling elements
- Creates songwriting tutorial content (e.g., "Writing like Forrest Frank")
- Scenic outdoor photography (Arizona landscapes, etc.)
- Warm, earthy, natural aesthetic

## Website Goals

### Primary Objectives
1. Create a stunning, professional web presence for a band without an official website
2. Showcase their music and connect fans to streaming platforms
3. Tell their story and build community around their faith-based message
4. Provide foundation for future e-commerce (merch) integration
5. Generate modest revenue through strategic ad placement
6. Keep the site maintainable and scalable

### Success Metrics
- Beautiful, on-brand design that reflects their folk/campfire aesthetic
- Fast loading times and excellent performance
- Mobile-first responsive design
- Easy navigation to music and social platforms
- Email list signup for fan engagement

## Technical Stack

### Core Technologies (Already Set Up)
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Deployed on Vercel

### Future Integrations (Phase 2)
- Shopify for e-commerce when merch is ready
- Authorize.Net payment gateway (via RAC Financial partnership)
- Email marketing service (ConvertKit, Mailchimp, or Resend)
- Ad network integration for revenue

## Website Structure

### Phase 1 Pages (Build First)

#### 1. Home Page (/)
**Hero Section:**
- Eye-catching hero with album artwork or scenic band photo
- Immediate visual impact that captures their folk/campfire aesthetic
- Call-to-action: "Listen Now" button to Spotify
- Optional: Later implement interactive 3D hero effect using Three.js (inspired by Lando Norris website with WebP overlays and mouse-trailing effects)

**Key Sections:**
- Latest album showcase with streaming links
- Brief band introduction ("Failed models turned folk band. God is good!")
- Featured video or music player
- Social media feed or highlights
- Email signup form ("Join the journey")
- Tour dates section (if applicable)

#### 2. Music Page (/music)
- Discography section featuring "The Figs Present: The Figs"
- Embedded Spotify/Apple Music players
- Album artwork and track listings
- Links to all streaming platforms (Spotify, Apple Music, YouTube Music, etc.)
- Lyrics excerpts or song stories (if band provides)

#### 3. About Page (/about)
- Band origin story (summer camp counselors, worship leaders at Gull Lake Ministries)
- Individual member bios (Bailey, Micah, and friends)
- Their mission and faith journey
- Photo gallery showcasing their personality
- Press mentions and achievements (Lemonade #1 on iTunes, etc.)

#### 4. Contact/Connect Page (/connect)
- Email signup form with clear value proposition
- Social media links (Instagram, TikTok, Facebook)
- Booking inquiry form (for venues/events)
- General contact information
- Map or mention of their Michigan roots

#### 5. Shop Page (/shop) - Placeholder
- "Merch coming soon!" messaging
- Link to existing store (thefigsmusic.com) as temporary solution
- Email signup for merch launch notifications
- Build foundation for future Shopify integration

### Phase 2 Features (Post-Launch)
- Blog/news section for updates
- Behind-the-scenes content
- Song stories and songwriting tutorials
- Video gallery
- Full e-commerce integration with custom merch store
- Fan community features

## Design Guidelines

### Visual Style
- **Color Palette**: Warm, earthy tones (browns, tans, muted greens, sunset oranges)
- **Typography**: Clean, readable fonts with a slightly rustic feel
- **Imagery**: High-quality photos of outdoor scenes, campfires, acoustic instruments
- **Layout**: Open, spacious design with lots of breathing room
- **Mood**: Nostalgic, welcoming, authentic, hopeful

### Design Principles
- Mobile-first approach (most fans will discover on social media/mobile)
- Fast loading times (optimize all images)
- Accessible design (WCAG 2.1 AA standards)
- Clear hierarchy and easy navigation
- Authentic representation of the band's personality
- Faith-forward but not overly preachy

### Brand Voice
- Warm and friendly
- Humble and authentic ("failed models turned folk band")
- Faith-centered but inclusive
- Story-driven
- Community-oriented

## Technical Requirements

### Performance Targets
- Lighthouse score: 90+ across all categories
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.0s

### SEO Requirements
- Semantic HTML structure
- Proper meta tags (title, description, og:image)
- Structured data for music band schema
- XML sitemap
- robots.txt configuration
- Social media cards optimized

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large Desktop: 1440px+

### Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari
- Chrome Mobile

## Content Strategy

### Immediate Needs
1. High-resolution album artwork
2. Band photos (professional and candid)
3. Band member bios and headshots
4. Streaming platform links
5. Social media handles verification
6. Email list provider setup

### Content to Source from Band
- Mission statement or manifesto
- Song stories and inspiration
- Tour/event information
- Press photos and assets
- Video content
- Press kit materials

## Integrations

### Music Platforms
- Spotify (1.9M monthly listeners)
- Apple Music
- YouTube Music
- Amazon Music
- Tidal
- Link tree style aggregator

### Social Media
- Instagram: @the.figs.official
- TikTok: @the.figs.official
- Facebook: The Figs
- Potential: YouTube channel for music videos

### Analytics & Tracking
- Vercel Analytics (built-in)
- Google Analytics 4
- Social media pixel tracking (future)
- Email marketing tracking (future)

### Revenue Generation
- Ad placement (non-intrusive, brand-appropriate)
- Affiliate links to streaming platforms (if available)
- Future: E-commerce with payment processor kickback arrangement

## Development Approach

### Phase 1 Timeline (2 Weeks)
**Week 1:**
- Day 1-2: Homepage design and hero section
- Day 3-4: Music page with embedded players
- Day 5-7: About and Connect pages

**Week 2:**
- Day 8-9: Shop placeholder page
- Day 10-11: Responsive design refinement
- Day 12-13: Performance optimization and testing
- Day 14: Final polish and deployment

### Best Practices
- Commit frequently with descriptive messages
- Use TypeScript for type safety
- Follow Next.js App Router conventions
- Implement proper error boundaries
- Use Next.js Image component for all images
- Implement proper loading states
- Use environment variables for sensitive data
- Keep components small and reusable

### Testing Checklist
- [ ] All links work correctly
- [ ] Forms submit successfully
- [ ] Music players load and function
- [ ] Social links open correctly
- [ ] Mobile navigation works smoothly
- [ ] Images load properly with fallbacks
- [ ] SEO meta tags are present
- [ ] Performance metrics meet targets
- [ ] Cross-browser compatibility verified
- [ ] Accessibility audit passes

## Post-Launch Strategy

### Immediate Actions
1. Share with band for feedback
2. Set up analytics tracking
3. Submit to search engines
4. Monitor performance metrics
5. Collect user feedback

### Growth Opportunities
1. Blog content for SEO
2. Behind-the-scenes video content
3. Fan-submitted content
4. Integration with band's existing merch store
5. Tour date management system
6. Newsletter automation

### Revenue Expansion
1. Shopify e-commerce integration
2. Authorize.Net gateway setup with RAC Financial
3. Affiliate marketing programs
4. Sponsored content (brand-aligned only)
5. Premium fan club features

## Notes & Considerations

### Important Constraints
- No database required for Phase 1 (static/ISR approach)
- Keep costs at $0 until revenue-generating
- Band must approve all major design decisions
- Content should reflect authentic Christian faith without being alienating
- Maintain integrity of "failed models turned folk band" humble brand

### Future Vision
If The Figs "blow up" as predicted:
1. Scale infrastructure (Vercel Pro if needed)
2. Build custom merch store with Authorize.Net integration
3. Implement fan community features
4. Tour management system
5. Video content hub
6. Mobile app consideration

### Legal Considerations
- Obtain proper licensing for any embedded content
- Clear revenue sharing agreement with band
- Terms of service and privacy policy
- GDPR/CCPA compliance for email collection
- Copyright notices for band content
- Image usage rights verification

## Success Definition

This project succeeds when:
1. The band is proud to share the URL
2. Fans can easily find and stream their music
3. New listeners can understand who The Figs are
4. Email list begins growing organically
5. Site performs excellently on all devices
6. Foundation exists for future monetization
7. Band receives positive feedback from their community

The website should feel like sitting around a campfire with friends—warm, inviting, authentic, and full of good music and better stories.


## Spotify Embed 
<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/artist/0guOtxDAwFFEGGCxrbW5KF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>