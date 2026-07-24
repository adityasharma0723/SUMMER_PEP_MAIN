import React from "react";

export default function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="portfolio-footer">
      <p className="footer-name">{name}</p>
      <p className="footer-copy">© {year} · Built with React</p>
    </footer>
  );
}
