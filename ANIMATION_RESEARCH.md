# Camping Scene Animation Research
## CSS/SVG Animation for Homepage Hero Section

### Project Goal
Add an animated camping scene behind The Figs logo on the homepage hero section using black contour line art style, featuring elements like a campfire and small animals.

---

## Implementation Options

### Option 1: Pure CSS Animation (Easiest)
**Best For**: Simple, lightweight implementation without external dependencies

**Pros:**
- No external libraries needed
- Small file size
- Easy to customize colors/timing
- Works immediately in Next.js

**Cons:**
- Limited complexity
- More coding required for detailed scenes
- Harder to achieve smooth organic movements

**CodePen Examples Found:**
1. **Pure CSS Camp Fire Effect** by Kyle Wetton
   - Pure CSS3 and HTML
   - Campfire-specific implementation

2. **CSS Flame Animation** by Dazulu
   - Only CSS3 animations and box-shadow
   - Lightweight and performant

3. **Box-Shadow Only Pixelart Campfire Effect** by Jamie Coulter
   - Retro pixel-art style
   - Creative use of box-shadow

**Implementation Steps:**
1. Create CSS keyframe animations
2. Use multiple `<div>` elements or pseudo-elements
3. Apply animations with different delays/durations
4. Position absolutely behind the logo

**Code Example Structure:**
```css
@keyframes flicker {
  0%, 100% { opacity: 0.9; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.1); }
}

.campfire-flame {
  animation: flicker 2s ease-in-out infinite;
}
```

---

### Option 2: SVG Line Drawing Animation (Medium Complexity)
**Best For**: Professional line art style with drawing effect

**Technique**: SVG Stroke Animation
- Uses `stroke-dasharray` and `stroke-dashoffset`
- Creates "drawing itself" effect
- Perfect for contour line art

**Pros:**
- Crisp, scalable graphics
- Professional appearance
- Smooth animations
- Good browser support

**Cons:**
- Need to create or find SVG artwork
- Requires understanding of SVG paths
- More initial setup

**Resources Found:**
1. **CSS-Tricks**: "How SVG Line Animation Works"
2. **Jake Archibald**: "Animated line drawing in SVG" (pioneering article)
3. **Codrops**: "SVG Drawing Animation"
4. **Medium**: "SVG Line Animation for Beginners"

**Tools:**
- **SVGator** (https://www.svgator.com/svg-path-animation)
  - Visual interface for creating animations
  - Controls stroke-dasharray and stroke-dashoffset
  - Export ready-to-use code

**Implementation Steps:**
1. Create or download SVG camping scene (tent, trees, campfire)
2. Add stroke properties to SVG paths
3. Calculate path length with JavaScript
4. Apply CSS animation to stroke-dashoffset
5. Layer SVG behind logo with absolute positioning

**Code Example:**
```css
.camping-scene path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 3s ease-in-out forwards;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}
```

---

### Option 3: Lottie Animations (Ready-Made Assets)
**Best For**: High-quality, complex animations with minimal coding

**What is Lottie:**
- After Effects animations exported as JSON
- Lightweight, scalable animations
- Extensive free libraries available
- Used by major companies (Airbnb, Netflix, etc.)

**Pros:**
- Professional, ready-made animations
- Very easy to implement
- Thousands of free options
- Small file sizes (JSON)
- Fully controllable with JavaScript

**Cons:**
- Need to install library (@lottiefiles/react-lottie-player)
- May need to customize existing animations
- Less control over specific details

**Free Resources Found:**
1. **LottieFiles.com**
   - Free camping animations
   - Nature scenes
   - Downloadable as JSON, GIF, MP4

2. **IconScout.com**
   - 5,349+ Camping Animations
   - 7,733+ Outdoor Adventures Animations
   - 3,165+ Camping Trip Animations
   - Forest Animation Pack (50 animations)

**Search URLs:**
- https://lottiefiles.com/free-animations/camping
- https://iconscout.com/lottie-animations/camping
- https://lottiefiles.com/free-animations/nature

**Implementation Steps:**
1. Browse and download camping scene Lottie JSON
2. Install: `npm install @lottiefiles/react-lottie-player`
3. Import and use component
4. Position behind logo

**Code Example:**
```tsx
import { Player } from '@lottiefiles/react-lottie-player';

<div className="relative">
  <Player
    autoplay
    loop
    src="/animations/camping-scene.json"
    className="absolute inset-0 opacity-20"
    style={{ width: '600px', height: '400px' }}
  />
  <Image src="/The_Figs_LOGO.avif" ... />
</div>
```

---

### Option 4: GSAP + SVG Morphing (Advanced)
**Best For**: Complex, smooth, interactive animations

**What is GSAP:**
- Professional animation library (GreenSock)
- Industry-standard for web animations
- Now 100% FREE (including MorphSVG plugin)
- Powerful timeline control

**Pros:**
- Incredibly smooth animations
- Precise control over timing
- Can morph shapes organically
- Great for complex scenes
- Professional quality

**Cons:**
- Steeper learning curve
- Requires JavaScript knowledge
- Larger bundle size
- More setup time

**Key Features:**
- MorphSVGPlugin - Morph SVG paths smoothly
- DrawSVGPlugin - Animate SVG strokes
- MotionPathPlugin - Move objects along paths
- Timeline control for sequenced animations

**Resources Found:**
1. **Official GSAP Docs**: https://greensock.com/svg-tips/
2. **CSS-Tricks**: "How to Animate on the Web With GreenSock"
3. **Learn With Jason**: "Whimsical SVG Animations Using GSAP"
4. **Motion Tricks**: Organic SVG morphing tutorial

**Implementation Steps:**
1. Install: `npm install gsap`
2. Create SVG camping scene
3. Use GSAP to animate SVG elements
4. Create timeline for coordinated animations
5. Trigger on page load or scroll

**Code Example:**
```tsx
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const animationRef = useRef(null);

useEffect(() => {
  gsap.to(".campfire-flames", {
    y: -10,
    scaleY: 1.2,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  gsap.to(".animal", {
    x: 200,
    duration: 4,
    repeat: -1,
    ease: "linear"
  });
}, []);
```

---

## Recommended Approach for The Figs

### Best Option: Lottie Animation (Option 3)

**Why:**
1. ✅ Quick implementation (1-2 hours)
2. ✅ Professional quality
3. ✅ Thousands of free camping animations available
4. ✅ Easy to swap/customize
5. ✅ Small file size (JSON format)
6. ✅ Works perfectly with Next.js/React
7. ✅ Can be subtle or prominent (opacity control)

**Implementation Plan:**

#### Step 1: Find Animation
Browse LottieFiles for a camping scene that includes:
- Campfire (essential)
- Optional: tent, trees, stars
- Optional: small animal (rabbit, fox, bird)
- Style: Line art or simple illustration

**Search terms on LottieFiles:**
- "campfire line art"
- "camping contour"
- "outdoor minimal"
- "nature outline"

#### Step 2: Install Library
```bash
npm install @lottiefiles/react-lottie-player
```

#### Step 3: Create Component
File: `app/components/CampingAnimation.tsx`

```tsx
'use client';

import { Player } from '@lottiefiles/react-lottie-player';

export default function CampingAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <Player
        autoplay
        loop
        src="/animations/camping-scene.json"
        className="opacity-20"
        style={{
          width: '600px',
          height: '400px',
          filter: 'contrast(0.8)'
        }}
      />
    </div>
  );
}
```

#### Step 4: Add to Homepage
```tsx
<div className="flex justify-center mb-8 relative">
  <CampingAnimation />
  <Image
    src="/The_Figs_LOGO.avif"
    alt="The Figs"
    width={600}
    height={300}
    className="h-24 w-auto sm:h-32 relative z-10"
    priority
  />
</div>
```

---

## Alternative Quick Win: CSS-Only Campfire

If you want to avoid installing libraries, here's a simple CSS campfire:

### Create: `app/components/CampfireAnimation.tsx`

```tsx
export default function CampfireAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative">
        {/* Logs */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-2 bg-gray-800 rounded-full"></div>
          <div className="w-14 h-2 bg-gray-700 rounded-full mt-1 ml-1"></div>
        </div>

        {/* Flames */}
        <div className="campfire-flame flame-1"></div>
        <div className="campfire-flame flame-2"></div>
        <div className="campfire-flame flame-3"></div>
      </div>

      <style jsx>{`
        .campfire-flame {
          position: absolute;
          bottom: 10px;
          width: 8px;
          height: 20px;
          background: linear-gradient(to top, transparent, #1a1a1a);
          border-radius: 50% 50% 0 0;
          opacity: 0.3;
        }

        .flame-1 {
          left: 50%;
          transform: translateX(-50%);
          animation: flicker1 2s ease-in-out infinite;
        }

        .flame-2 {
          left: 45%;
          transform: translateX(-50%);
          animation: flicker2 2.3s ease-in-out infinite;
        }

        .flame-3 {
          left: 55%;
          transform: translateX(-50%);
          animation: flicker3 1.8s ease-in-out infinite;
        }

        @keyframes flicker1 {
          0%, 100% {
            transform: translateX(-50%) scaleY(1) scaleX(1);
            opacity: 0.3;
          }
          50% {
            transform: translateX(-50%) scaleY(1.3) scaleX(0.9);
            opacity: 0.5;
          }
        }

        @keyframes flicker2 {
          0%, 100% {
            transform: translateX(-50%) scaleY(1) scaleX(1);
            opacity: 0.25;
          }
          50% {
            transform: translateX(-50%) scaleY(1.4) scaleX(0.8);
            opacity: 0.4;
          }
        }

        @keyframes flicker3 {
          0%, 100% {
            transform: translateX(-50%) scaleY(1) scaleX(1);
            opacity: 0.2;
          }
          50% {
            transform: translateX(-50%) scaleY(1.2) scaleX(1);
            opacity: 0.45;
          }
        }
      `}</style>
    </div>
  );
}
```

---

## Performance Considerations

### Best Practices:
1. **Keep it subtle** - Use low opacity (20-30%) so it doesn't distract
2. **Optimize file size** - Lottie JSONs should be <100KB
3. **Use pointer-events: none** - Prevents blocking interactions
4. **Test on mobile** - Ensure animations don't cause performance issues
5. **Provide fallback** - Animation should be enhancement, not requirement

### Loading Strategy:
```tsx
// Lazy load animation for better initial page load
import dynamic from 'next/dynamic';

const CampingAnimation = dynamic(
  () => import('./components/CampingAnimation'),
  { ssr: false }
);
```

---

## Estimated Time & Complexity

| Option | Setup Time | Coding Skill | Customization | Quality |
|--------|-----------|--------------|---------------|---------|
| Pure CSS | 2-4 hours | Intermediate | High | Good |
| SVG Line | 3-5 hours | Intermediate | High | Excellent |
| Lottie | 1-2 hours | Beginner | Medium | Excellent |
| GSAP | 4-8 hours | Advanced | Very High | Professional |

---

## Next Steps

### Recommended Path:
1. ✅ Browse LottieFiles for camping animations
2. Download 2-3 options to test
3. Install Lottie player: `npm install @lottiefiles/react-lottie-player`
4. Create CampingAnimation component
5. Add to homepage hero section
6. Adjust opacity and size
7. Test on mobile devices

### Alternative Path (No Installation):
1. Use pure CSS campfire example above
2. Adjust colors to match brand (use gray/black for contour style)
3. Add simple animal animation with CSS keyframes
4. Layer behind logo

---

## Resources Summary

### Free Animation Assets:
- **LottieFiles**: https://lottiefiles.com/free-animations/camping
- **IconScout**: https://iconscout.com/lottie-animations/camping

### Tutorials:
- **CSS-Tricks SVG**: https://css-tricks.com/svg-line-animation-works/
- **CodePen Fire Examples**: Search "campfire CSS animation"

### Libraries:
- **Lottie React**: `@lottiefiles/react-lottie-player`
- **GSAP**: `gsap` (if going advanced route)

---

**Document Created**: October 30, 2025
**For**: The Figs Website - Homepage Hero Animation
**Status**: Research Complete - Ready for Implementation
