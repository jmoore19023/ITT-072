import { useState } from 'react';
import ChatHeader from './components/ChatHeader';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { getBotResponse } from './data/responses';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi! I\'m the Moore Plants and Pots assistant. Ask me about the inventory system, purchase orders, Python classes, or how the project was built.'
    }
  ]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (input.trim() === '') {
      setError('Please enter a message before sending.');
      return;
    }

    if (input.trim().length < 2) {
      setError('Message must be at least 2 characters.');
      return;
    }

    setError('');

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const botText = getBotResponse(input);

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: botText
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  }

  return (
    <div className="app">
      <ChatHeader />
      <ChatWindow messages={messages} isTyping={isTyping} />
      <ChatInput
        input={input}
        error={error}
        onChange={(e) => setInput(e.target.value)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;