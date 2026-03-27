import { useI18n } from "../i18n.jsx";

function Projects() {
  const { t } = useI18n();
  const items = t("projects.items");
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{t("projects.title")}</h2>
          <p className="muted">{t("projects.subtitle")}</p>
        </div>

        <div className="gridCards">
          {items.map((p) => (
            <article key={p.title} className="card cardHover">
              <div className="projectTop">
                <h3 className="h3">{p.title}</h3>
                <span className="projectBadge">{t("projects.featured")}</span>
              </div>
              <p className="muted">{p.desc}</p>
              <div className="chips">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="divider" />
              <div className="projectActions">
                <a className="btn btnGhost btnSm" href="#contact">
                  {t("projects.requestDemo")}
                </a>
                <a className="btn btnGhost btnSm" href="#contact">
                  {t("projects.discussScope")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
