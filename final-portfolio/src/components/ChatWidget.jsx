import { useState } from 'react';
import { getBotResponse } from '../data/responses';

const SUGGESTED_PROMPTS = [
  "Tell me about your background",
  "What do you do at GPI?",
  "Walk me through a project",
  "What are your technical skills?",
  "What roles are you targeting?",
  "How do I reach you?"
];

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi, I'm John's portfolio assistant. Ask me anything about his background, projects, or skills - or pick a prompt below to get started."
    }
  ]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  function sendMessage(text) {
    const userMessage = { id: messages.length + 1, sender: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const botText = getBotResponse(text);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'bot',
        text: botText
      }]);
      setIsTyping(false);
    }, 800);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === '') { setError('Please enter a message.'); return; }
    if (input.trim().length < 2) { setError('Message must be at least 2 characters.'); return; }
    setError('');
    sendMessage(input.trim());
  }

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-panel">
          <div className="chat-panel-header">
            <div className="chat-panel-info">
              <span className="chat-avatar">jm</span>
              <div>
                <p className="chat-panel-name">John Moore</p>
                <p className="chat-panel-status">Portfolio Assistant</p>
              </div>
            </div>
            <button className="chat-close-btn" onClick={() => setIsOpen(false)}>&#10005;</button>
          </div>

          <div className="chat-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                <p>{msg.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot-message typing">
                <span /><span /><span />
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="suggested-prompts">
              {SUGGESTED_PROMPTS.map(prompt => (
                <button key={prompt} className="prompt-btn" onClick={() => sendMessage(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <div className="chat-input-area">
            {error && <p className="chat-error">{error}</p>}
            <form className="chat-form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="chat-input"
                placeholder="Ask me anything..."
                value={input}
                onChange={e => setInput(e.target.value)}
                maxLength={200}
              />
              <button type="submit" className="chat-send-btn" disabled={input.trim() === ''}>
                Send
              </button>
            </form>
          </div>
        </div>
      )}

        <button
        className="chat-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
        >
        {isOpen ? '✕' : '💬'}
        </button>
    </div>
  );
}

export default ChatWidget;