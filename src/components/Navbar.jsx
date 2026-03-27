import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../i18n.jsx";

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

function Navbar() {
  const CV_URL = "";
  const { lang, setLanguage, t } = useI18n();

  const links = useMemo(
    () => [
      { id: "hero", label: t("nav.home") },
      { id: "about", label: t("nav.about") },
      { id: "experience", label: t("nav.experience") },
      { id: "skills", label: t("nav.skills") },
      { id: "projects", label: t("nav.projects") },
      { id: "gallery", label: t("nav.gallery") },
      { id: "contact", label: t("nav.contact") },
    ],
    [t]
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const onScroll = () => {
      const y = window.scrollY ?? 0;
      let bestId = "hero";
      let bestTop = Number.NEGATIVE_INFINITY;

      for (const el of els) {
        const rect = el.getBoundingClientRect();
        const top = rect.top + y;
        if (top <= y + 120 && top > bestTop) {
          bestTop = top;
          bestId = el.id;
        }
      }
      setActiveId(bestId);
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [links]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const onNav = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const y = window.scrollY ?? 0;
    const rect = el.getBoundingClientRect();
    const target = rect.top + y - clamp(92, 72, 112);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <header className="nav">
      <div className="container navInner">
        <a className="brand" href="#hero" onClick={onNav("hero")}>
          <span className="brandMark" aria-hidden="true">
            AD
          </span>
          <span className="brandText">Abdillah Dzikri</span>
        </a>

        <nav className="navLinks" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.id}
              className={`navLink ${activeId === l.id ? "isActive" : ""}`}
              href={`#${l.id}`}
              onClick={onNav(l.id)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navCtas">
          <div className="langSwitch" role="group" aria-label={t("nav.language")}>
            <button
              type="button"
              className={`langBtn ${lang === "id" ? "isActive" : ""}`}
              onClick={() => setLanguage("id")}
            >
              ID
            </button>
            <button
              type="button"
              className={`langBtn ${lang === "en" ? "isActive" : ""}`}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
          <a
            className="btn btnGhost"
            href={CV_URL || "#"}
            target={CV_URL ? "_blank" : undefined}
            rel={CV_URL ? "noreferrer" : undefined}
            aria-disabled={!CV_URL}
            onClick={(e) => {
              if (!CV_URL) e.preventDefault();
            }}
          >
            {t("nav.downloadCv")}
          </a>
          <a className="btn btnGhost" href="#projects" onClick={onNav("projects")}>
            {t("nav.seeProjects")}
          </a>
          <button
            type="button"
            className="iconBtn"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="iconBars" aria-hidden="true" data-open={menuOpen} />
          </button>
        </div>
      </div>

      <div
        id="mobileMenu"
        className={`mobileMenu ${menuOpen ? "isOpen" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="mobileMenuPanel">
          <div className="mobileMenuHeader">
            <span className="brandText">{t("nav.menu")}</span>
            <button
              type="button"
              className="iconBtn"
              aria-label={t("nav.closeMenu")}
              onClick={() => setMenuOpen(false)}
            >
              <span className="iconX" aria-hidden="true" />
            </button>
          </div>
          <div className="mobileMenuLinks">
            {links.map((l) => (
              <a
                key={l.id}
                className={`mobileLink ${activeId === l.id ? "isActive" : ""}`}
                href={`#${l.id}`}
                onClick={onNav(l.id)}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mobileMenuActions">
            <div className="langSwitch langSwitchMobile" role="group" aria-label={t("nav.language")}>
              <button
                type="button"
                className={`langBtn ${lang === "id" ? "isActive" : ""}`}
                onClick={() => setLanguage("id")}
              >
                ID
              </button>
              <button
                type="button"
                className={`langBtn ${lang === "en" ? "isActive" : ""}`}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
            </div>
            <a
              className="btn btnGhost"
              href={CV_URL || "#"}
              target={CV_URL ? "_blank" : undefined}
              rel={CV_URL ? "noreferrer" : undefined}
              aria-disabled={!CV_URL}
              onClick={(e) => {
                if (!CV_URL) e.preventDefault();
              }}
            >
              {t("nav.downloadCv")}
            </a>
            <a className="btn" href="#contact" onClick={onNav("contact")}>
              {t("nav.contact")}
            </a>
          </div>
        </div>
        <button
          type="button"
          className="mobileMenuBackdrop"
          aria-label="Close menu backdrop"
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </header>
  );
}

export default Navbar;
