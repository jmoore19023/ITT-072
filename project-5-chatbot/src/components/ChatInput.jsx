function ChatInput({ input, error, onChange, onSubmit }) {
  return (
    <div className="chat-input-container">
      {error && <p className="error-message">{error}</p>}
      <form className="chat-form" onSubmit={onSubmit}>
        <input
          type="text"
          className="chat-input"
          placeholder="Ask about the inventory, orders, or how it was built..."
          value={input}
          onChange={onChange}
          maxLength={200}
        />
        <button
          type="submit"
          className="send-button"
          disabled={input.trim() === ''}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;