# 🤖 Epsilon AI Chatbot

A stunning, modern AI chatbot web application with an impressive 3D animated background, built with React and powered by AI via OpenRouter.

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

## 📸 ScreenShots

<img width="1470" height="1000" alt="Screenshot 2025-07-27 at 12 09 39 AM" src="https://github.com/user-attachments/assets/64f531f7-3595-498d-9166-7064a010d715" />
<img width="1451" height="1000" alt="Screenshot 2025-07-27 at 12 13 22 AM" src="https://github.com/user-attachments/assets/a6980221-c9ad-49c6-b856-76103e1cf310" />
<img width="1455" height="824" alt="Screenshot 2025-07-27 at 12 11 39 AM" src="https://github.com/user-attachments/assets/34fdc021-aa9a-425c-ada3-ae4db469a842" />

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
