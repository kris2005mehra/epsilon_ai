import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sun, Moon, RotateCcw, Zap, Key } from 'lucide-react';
import './App.css';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m Epsilon, your AI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);
  const [tempApiKey, setTempApiKey] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const apiKeyInputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-focus appropriate input on load
  useEffect(() => {
    if (showApiKeyInput) {
      apiKeyInputRef.current?.focus();
    } else {
      inputRef.current?.focus();
    }
  }, [showApiKeyInput]);

  // Theme toggle
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleApiKeySubmit = () => {
    if (!tempApiKey.trim()) return;
    setApiKey(tempApiKey);
    setShowApiKeyInput(false);
  };

  const handleApiKeyKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleApiKeySubmit();
    }
  };

  const resetApiKey = () => {
    setApiKey('');
    setTempApiKey('');
    setShowApiKeyInput(true);
    setMessages([
      {
        id: '1',
        content: 'Hello! I\'m Epsilon, your AI assistant. How can I help you today?',
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // TODO: Replace with your actual API key and uncomment the real API call
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": "https://epsilon-chatbot.com",
          "X-Title": "Epsilon AI Chatbot",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-r1-0528:free",
          "messages": [
            {
              "role": "system",
              "content": "You are Epsilon, a helpful and friendly AI assistant. Always respond in a conversational, understanding, empathetic way and not in huge paragraphs use spaces after each sentence. Break down complex topics into simple, easy-to-understand explanations. Use examples when helpful, and maintain a warm, supportive tone. Keep responses well-structured but natural, like you're talking to a friend who wants to learn."
            },
            ...messages.map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.content
            })),
            {
              role: "user",
              content: inputValue
            }
          ]
        })
      });
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      
      const data = await response.json();
      const botResponse = data.choices[0].message.content;

      // PLACEHOLDER: Remove this simulation when using real API
      // await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      // const botResponse = `I received your message: "${userMessage.content}". This is a placeholder response.`;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please check your API key and try again.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        content: 'Hello! I\'m Epsilon, your AI assistant. How can I help you today?',
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // API Key Input Screen
  if (showApiKeyInput) {
    return (
      <div className="app">
        {/* 3D Animated Background */}
        <div className="background-3d">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
          <div className="floating-shape shape-5"></div>
          <div className="gradient-overlay"></div>
        </div>

        {/* API Key Setup Screen */}
        <div className="api-key-screen">
          <div className="api-key-container">
            <div className="logo-section-large">
              <div className="logo-large">
                <Zap className="logo-icon-large" />
                <h1 className="app-title-large">Epsilon</h1>
              </div>
              <p className="subtitle-large">AI Assistant</p>
            </div>
            
            <div className="api-key-form">
              <h2 className="api-key-title">Enter Your OpenRouter API Key</h2>
              <p className="api-key-description">
                To get started, please enter your OpenRouter API key. You can get one at{' '}
                <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer">
                  openrouter.ai
                </a>
              </p>
              
              <div className="api-key-input-container">
                <Key className="api-key-icon" />
                <input
                  ref={apiKeyInputRef}
                  type="password"
                  value={tempApiKey}
                  onChange={(e) => setTempApiKey(e.target.value)}
                  onKeyPress={handleApiKeyKeyPress}
                  placeholder="sk-or-v1-..."
                  className="api-key-input"
                  aria-label="OpenRouter API Key"
                />
                <button
                  onClick={handleApiKeySubmit}
                  disabled={!tempApiKey.trim()}
                  className="api-key-submit"
                  aria-label="Submit API key"
                >
                  Start Chat
                </button>
              </div>
              
              <p className="api-key-note">
                Your API key is stored locally and never shared with anyone.
              </p>
            </div>
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="theme-toggle-floating"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* 3D Animated Background */}
      <div className="background-3d">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo">
              <Zap className="logo-icon" />
              <h1 className="app-title">Epsilon</h1>
            </div>
            <p className="subtitle">AI Assistant</p>
          </div>
          <div className="header-controls">
            <button
              onClick={resetApiKey}
              className="control-button"
              title="Change API Key"
              aria-label="Change API key"
            >
              <Key size={20} />
            </button>
            <button
              onClick={clearChat}
              className="control-button"
              title="Clear Chat"
              aria-label="Clear chat history"
            >
              <RotateCcw size={20} />
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="control-button theme-toggle"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <main className="chat-container">
        <div className="messages-area">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-avatar">
                {message.sender === 'user' ? (
                  <User size={20} />
                ) : (
                  <Bot size={20} />
                )}
              </div>
              <div className="message-content">
                <div className="message-bubble">
                  <p>{message.content}</p>
                </div>
                <span className="message-time">{formatTime(message.timestamp)}</span>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isLoading && (
            <div className="message bot">
              <div className="message-avatar">
                <Bot size={20} />
              </div>
              <div className="message-content">
                <div className="message-bubble typing-indicator">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="input-area">
          <div className="input-container">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="message-input"
              disabled={isLoading}
              aria-label="Message input"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="send-button"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Made with ❤️ by Kris</p>
      </footer>
    </div>
  );
}

export default App;