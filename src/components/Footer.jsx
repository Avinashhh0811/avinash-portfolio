function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Avinash<span>.</span></div>
        <p>© {new Date().getFullYear()} Avinash. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Avinashhh0811" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/avinash-bachhav-7871042a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
