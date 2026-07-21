function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-inner container">
        <div>
          <p className="footer-brand">John Moore</p>
          <p className="footer-desc">CI &amp; Data Analytics Professional. Central Illinois - Open to Remote.</p>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="https://www.linkedin.com/in/johnmoore-ci" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/jmoore19023" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:jmoore19023@gmail.com">Email</a>
        </div>
      </div>
      <p className="footer-copy container">&copy; {year} John Moore</p>
    </footer>
  );
}

export default Footer;