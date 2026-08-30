# یادگاری‌های ماندگار | Memories That Stay

A breathtaking, emotional, interactive memorial website celebrating friendship at the University of Tehran.

## ✨ Features

- **Cinematic Hero Section** - Stunning opening with parallax effects and Persian geometric patterns
- **Interactive Timeline** - 7 chapters of memories with scroll-triggered animations
- **Floating Memory Gallery** - Photos that drift and rotate in 3D space
- **Audio Memories** - Cards with play buttons for voice messages
- **Handwritten Notes** - Personal messages from friends
- **Persian Poetry** - Beautiful quotes with translations
- **Farewell Section** - Emotional closing with messages from all friends
- **Particle Effects** - Floating golden and turquoise particles throughout
- **Scroll Progress** - Visual indicator of journey progress
- **Responsive Design** - Fully optimized for desktop and mobile

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Adding Real Photos

Replace the placeholder image URLs in the components:

```tsx
// In src/components/TimelineSection.tsx
// Replace '/api/placeholder/400/300' with actual image paths
images: [
  { src: '/photos/first-day.jpg', alt: 'University entrance', rotation: -3 },
  // ...
]

// In src/components/MemoryGallery.tsx
{ id: 1, src: '/photos/memory-1.jpg', alt: 'Caption', rotation: -3, scale: 1, zIndex: 1 },
```

Place your images in the `public/photos/` directory.

### Adding Audio Messages

Replace the placeholder audio in `src/components/MemoryCards.tsx`:

```tsx
const audioMemories: AudioMemory[] = [
  {
    id: 1,
    title: 'پیام صوتی از سارا',
    audioSrc: '/audio/sara-message.mp3', // Add actual audio file
    sender: 'سارا',
    message: 'یادت نمی‌رم اولین روزی که با هم ناهار خوردیم...',
  },
  // ...
]
```

Place audio files in the `public/audio/` directory.

### Customizing Text

All text content is directly editable in the component files:

- **Hero Message**: `src/components/HeroSection.tsx`
- **Timeline Chapters**: `src/components/TimelineSection.tsx`
- **Friend Messages**: `src/components/FarewellSection.tsx`
- **Poetry**: `src/components/PoetrySection.tsx`
- **Handwritten Notes**: `src/components/MemoryCards.tsx`

### Color Palette

The website uses a warm, Persian-inspired palette:

| Color | Hex | Usage |
|-------|-----|-------|
| Gold | `#d4a520` | Primary accents, headings |
| Navy | `#0c1052` | Backgrounds |
| Turquoise | `#00c8a8` | Secondary accents |
| Beige | `#f5f0e8` | Text |
| Charcoal | `#1a1a1a` | Deep backgrounds |

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, animations, patterns
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page combining all sections
├── components/
│   ├── HeroSection.tsx       # Cinematic opening
│   ├── Navigation.tsx        # Responsive nav bar
│   ├── IntroTransition.tsx   # Quote between hero and timeline
│   ├── TimelineSection.tsx   # 7-chapter timeline
│   ├── MemoryGallery.tsx     # Floating photo gallery
│   ├── MemoryCards.tsx       # Audio messages & handwritten notes
│   ├── PoetrySection.tsx     # Persian poetry & wishes
│   ├── FarewellSection.tsx   # Final goodbye
│   ├── ParticleField.tsx     # Background particles
│   ├── ScrollProgress.tsx    # Progress indicator
│   └── ParallaxDivider.tsx   # Section dividers
public/
├── photos/    # Add your images here
└── audio/     # Add voice messages here
```

## 🎭 Sections

1. **Hero** - Grand opening with Persian patterns and floating particles
2. **Intro Quote** - Poetic transition into the journey
3. **Timeline** - 7 chronological chapters of friendship
4. **Memory Gallery** - Floating Polaroid-style photos
5. **Messages** - Audio recordings and handwritten notes
6. **Poetry** - Persian verses with English translations
7. **Farewell** - Final wishes and closing message

## 🔧 Tech Stack

- **Next.js 15** - React framework
- **Framer Motion** - Smooth animations & scroll effects
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type safety

## 📝 License

Created with love for a dear friend. Feel free to use this as a template for your own memorial websites.
