function Nav({ darkMode, onToggle }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">jm<span>.</span>portfolio</span>
        <div className="nav-links" id="primaryNav">
          <a href="#hero" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-right">
          <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
            {darkMode ? '☀' : '☾'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;