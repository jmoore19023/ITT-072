function Message({ sender, text }) {
  const isBot = sender === 'bot';

  return (
    <div className={`message-wrapper ${isBot ? 'bot-wrapper' : 'user-wrapper'}`}>
      {isBot && <div className="bot-icon">🌿</div>}
      <div className={`message-bubble ${isBot ? 'bot-bubble' : 'user-bubble'}`}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Message;