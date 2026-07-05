function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>John Moore © {year} — Web Scripting II</p>
    </footer>
  );
}

export default Footer;