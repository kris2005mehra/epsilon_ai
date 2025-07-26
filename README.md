# Epsilon AI Chatbot

A stunning, modern AI chatbot web application with an impressive 3D animated background, built with React and powered by AI via OpenRouter.

![Epsilon Chatbot](https://via.placeholder.com/800x400?text=Epsilon+AI+Chatbot)

## ✨ Features

### 🤖 AI-Powered Conversations
- **AI Integration**: Powered by advanced AI models via OpenRouter
- **Understanding Responses**: Conversational, empathetic responses that break down complex topics
- **Natural Conversations**: Contextual responses with conversation memory and friendly tone
- **Real-time Responses**: Smooth, fast AI interactions
- **Secure API Key Input**: Built-in API key management with local storage

### 🎨 Stunning Visual Design
- **3D Animated Background**: Beautiful floating geometric shapes with gradient overlays
- **Glassmorphism UI**: Modern frosted glass effects with backdrop blur
- **Smooth Animations**: Elegant transitions and micro-interactions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🌙 Theme & Accessibility
- **Light/Dark Mode**: Seamless theme switching with system preference detection
- **Accessibility Ready**: ARIA labels, keyboard navigation, and high contrast support
- **Custom Branding**: Professional "Epsilon" identity with custom logo

### 💬 Chat Features
- **Smart Input**: Auto-focus, Enter-to-send, and typing indicators
- **Message History**: Persistent chat with timestamps
- **Clear Chat**: Reset conversation with one click
- **API Key Management**: Easy API key setup and switching
- **User Avatars**: Distinct user and bot identities

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- OpenRouter API key (get one at [openrouter.ai](https://openrouter.ai))

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` and enter your OpenRouter API key when prompted!

## 🔑 API Key Setup

When you first open the app, you'll be prompted to enter your OpenRouter API key:

1. **Get an API key** from [openrouter.ai](https://openrouter.ai)
2. **Enter your key** in the secure input field (it starts with `sk-or-v1-...`)
3. **Click "Start Chat"** to begin using Epsilon

Your API key is stored locally in your browser and is never shared with anyone. You can change it anytime by clicking the key icon in the header.

## 🎨 Customization Guide

### 🎭 3D Background Effects

The 3D background is fully customizable through CSS variables in `src/App.css`:

#### **Animation Speed & Intensity**
```css
/* Adjust floating animation duration */
.shape-1 { animation-duration: 8s; }  /* Slower = 12s, Faster = 4s */
.shape-2 { animation-duration: 10s; }
/* ... and so on */

/* Control animation intensity */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-30px) rotate(120deg); }  /* Increase -30px for more movement */
  66% { transform: translateY(15px) rotate(240deg); }   /* Increase 15px for more movement */
}
```

#### **Shape Colors & Opacity**
```css
.floating-shape {
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  opacity: 0.1; /* Increase to 0.2 for more visible shapes */
}

/* Custom gradient overlay */
.gradient-overlay {
  background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
}
```

#### **Static vs Animated Background**
To make the background static (no animation):
```css
.floating-shape {
  animation: none; /* Removes floating animation */
}

.gradient-overlay {
  animation: none; /* Removes gradient shifting */
}
```

### 🎨 Color Customization

All colors are controlled by CSS variables in `:root`:

```css
:root {
  /* Primary brand colors */
  --primary: #6366f1;        /* Main brand color */
  --secondary: #8b5cf6;      /* Secondary brand color */
  --accent: #06b6d4;         /* Accent color */
  
  /* Semantic colors */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
}
```

### 🖼️ Logo Customization

The current logo uses a Zap (⚡) icon from Lucide React. To customize:

1. **Replace with custom SVG:**
   ```jsx
   // In src/App.tsx, replace the Zap icon
   <div className="logo-icon">
     <svg width="24" height="24" viewBox="0 0 24 24">
       {/* Your custom SVG paths here */}
     </svg>
   </div>
   ```

2. **Use a different Lucide icon:**
   ```jsx
   import { Star, Cpu, Sparkles } from 'lucide-react';
   // Then replace <Zap className="logo-icon" /> with your choice
   ```

## 🛠️ Technical Details

### Architecture
- **Frontend**: React 18 with TypeScript
- **Styling**: Pure CSS with CSS Variables for theming
- **Icons**: Lucide React
- **Build Tool**: Vite
- **AI Service**: OpenRouter API (supports multiple AI models)

### Browser Support
- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- **Lazy Loading**: Messages load smoothly without blocking
- **Optimized Animations**: CSS transforms for 60fps performance
- **Responsive Images**: Scalable vector icons
- **Efficient Re-renders**: React optimizations for chat history

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure
```
src/
├── App.tsx          # Main application component
├── App.css          # Complete styling with 3D effects
├── main.tsx         # React entry point
└── index.css        # Tailwind base styles
```

## 🎯 Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service:
   - Netlify: Drag & drop the `dist` folder
   - Vercel: Connect your repository
   - GitHub Pages: Use `gh-pages` branch

## 🤝 Credits

**Created with ❤️ by Kris**

- **AI Model**: DeepSeek R1 via OpenRouter
- **Icons**: Lucide React
- **Fonts**: System fonts for optimal performance

## 🐛 Troubleshooting

### Common Issues

1. **API not working:**
   - Verify your OpenRouter API key is correct and starts with `sk-or-v1-`
   - Ensure you have credits in your OpenRouter account
   - Try refreshing the page and re-entering your API key

2. **3D effects not showing:**
   - Check if `prefers-reduced-motion` is enabled in your system
   - Try refreshing the browser
   - Verify CSS is loading correctly

3. **Theme toggle not working:**
   - Clear browser cache
   - Check browser console for JavaScript errors

4. **API key input not showing:**
   - Clear your browser's local storage
   - Refresh the page

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---
# epsilon_ai
# epsilon_ai
