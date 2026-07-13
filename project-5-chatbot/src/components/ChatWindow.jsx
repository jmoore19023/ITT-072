import Message from './Message';

function ChatWindow({ messages, isTyping }) {
  return (
    <div className="chat-window">
      {messages.length === 0 ? (
        <div className="empty-state">
          <p>No messages yet. Say hello!</p>
        </div>
      ) : (
        messages.map((message) => (
          <Message
            key={message.id}
            sender={message.sender}
            text={message.text}
          />
        ))
      )}

      {isTyping && (
        <div className="message-wrapper bot-wrapper">
          <div className="bot-icon">🌿</div>
          <div className="message-bubble bot-bubble typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;