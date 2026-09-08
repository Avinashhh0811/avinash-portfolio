import { useEffect, useRef, useState } from "react";

const links = [
  ["about", "About"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

function Navbar() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const autoScrolling = useRef(false);
  const unlockTimer = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navbar = document.querySelector(".navbar");
    const offset = (navbar?.getBoundingClientRect().height || 78) + 14;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;

    // Select the clicked tab immediately and prevent the smooth-scroll
    // from temporarily changing the active tab while passing other sections.
    autoScrolling.current = true;
    setActive(id);
    setMenuOpen(false);
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

    window.clearTimeout(unlockTimer.current);
    unlockTimer.current = window.setTimeout(() => {
      autoScrolling.current = false;
    }, 900);
  };

  useEffect(() => {
    const updateActiveFromScroll = () => {
      if (autoScrolling.current) return;

      const navbar = document.querySelector(".navbar");
      const offset = (navbar?.getBoundingClientRect().height || 78) + 28;
      const marker = window.scrollY + offset;

      let current = "about";
      for (const [id] of links) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      }

      // At the very top, keep About selected.
      if (window.scrollY < 120) current = "about";
      setActive((previous) => (previous === current ? previous : current));
    };

    const initialHash = window.location.hash.replace(/^#/, "");
    if (links.some(([id]) => id === initialHash)) {
      // Let the page render first, then honor a direct #section URL.
      requestAnimationFrame(() => scrollToSection(initialHash));
    } else {
      updateActiveFromScroll();
    }

    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
      window.clearTimeout(unlockTimer.current);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a
          className="brand"
          href="#home"
          aria-label="Avinash Bachhav home"
          onClick={(event) => {
            event.preventDefault();
            setActive("about");
            setMenuOpen(false);
            window.history.replaceState(null, "", "#home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="brand-mark">&lt;&gt;</span>
          <span>Avinash Bachhav</span>
        </a>

        <div className="nav-left-badges">
          <span className="availability-pill">
            <span className="availability-dot" />
            Open to Opportunities
          </span>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(id);
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
