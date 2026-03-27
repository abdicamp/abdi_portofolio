import { useI18n } from "../i18n.jsx";

function Hero() {
  const { t } = useI18n();
  const onNav = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = window.scrollY ?? 0;
    const rect = el.getBoundingClientRect();
    const target = rect.top + y - 92;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section id="hero" className="section hero">
      <div className="container heroGrid">
        <div className="heroCopy">
          <div className="badge">
            <span className="dot" aria-hidden="true" />
            {t("hero.badge")}
          </div>
          <h1 className="display">
            {t("hero.name")}
            <span className="gradText"> {t("hero.title")}</span>
          </h1>
          <p className="lead">{t("hero.lead")}</p>
          <div className="heroActions">
            <a className="btn" href="#projects" onClick={onNav("projects")}>
              {t("hero.ctaProjects")}
            </a>
            <a className="btn btnGhost" href="#contact" onClick={onNav("contact")}>
              {t("hero.ctaContact")}
            </a>
          </div>
          <div className="heroMeta">
            <div className="metaItem">
              <span className="metaK">{t("hero.metaStackK")}</span>
              <span className="metaV">{t("hero.metaStackV")}</span>
            </div>
            <div className="metaItem">
              <span className="metaK">{t("hero.metaFocusK")}</span>
              <span className="metaV">{t("hero.metaFocusV")}</span>
            </div>
          </div>
        </div>

        <div className="heroArt" aria-hidden="true">
          <div className="glassCard">
            <div className="glassHeader">
              <span className="pill">{t("hero.pillSystem")}</span>
              <span className="pill pillAlt">{t("hero.pillIot")}</span>
              <span className="pill pillAlt2">{t("hero.pillDashboard")}</span>
            </div>
            <div className="glassBody">
              <div className="stat">
                <div className="statK">{t("hero.statUptime")}</div>
                <div className="statV">99.9%</div>
              </div>
              <div className="stat">
                <div className="statK">{t("hero.statLatency")}</div>
                <div className="statV">{t("hero.statLatencyV")}</div>
              </div>
              <div className="stat">
                <div className="statK">{t("hero.statData")}</div>
                <div className="statV">{t("hero.statDataV")}</div>
              </div>
              <div className="spark" />
            </div>
          </div>
          <div className="orb orbA" />
          <div className="orb orbB" />
          <div className="gridOverlay" />
        </div>
      </div>
    </section>
  );
}

export default Hero;