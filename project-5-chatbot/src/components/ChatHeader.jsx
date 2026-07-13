function ChatHeader() {
  return (
    <header className="chat-header">
      <div className="chat-header-info">
        <div className="bot-avatar">🌿</div>
        <div>
          <h1>Moore Plants & Pots</h1>
          <p>Inventory Assistant</p>
        </div>
      </div>
      <span className="status-badge">Online</span>
    </header>
  );
}

export default ChatHeader;