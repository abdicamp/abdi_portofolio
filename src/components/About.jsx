import { useI18n } from "../i18n.jsx";

function About() {
  const { t } = useI18n();
  const highlights = t("about.highlights");
  const chips = t("about.chips");

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{t("about.title")}</h2>
          <p className="muted">{t("about.subtitle")}</p>
        </div>

        <div className="aboutGrid">
          <div className="card cardSoft">
            <h3 className="h3">{t("about.whatTitle")}</h3>
            <p className="muted">{t("about.whatBody")}</p>
            <div className="chips">
              {chips.map((x) => (
                <span key={x} className="chip">
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div className="card cardGlow">
            <h3 className="h3">{t("about.highlightsTitle")}</h3>
            <div className="kvList">
              {highlights.map((h) => (
                <div key={h.k} className="kv">
                  <div className="kvK">{h.k}</div>
                  <div className="kvV muted">{h.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
