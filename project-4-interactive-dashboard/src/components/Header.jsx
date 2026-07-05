function Header({ darkMode, onToggleDark }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div>
          <h1>John Moore</h1>
          <p>Developer Dashboard</p>
        </div>
        <button className="theme-btn" onClick={onToggleDark}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;