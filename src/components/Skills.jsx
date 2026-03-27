import { useI18n } from "../i18n.jsx";

function Skills() {
  const { t } = useI18n();
  const groups = t("skills.groups");
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{t("skills.title")}</h2>
          <p className="muted">{t("skills.subtitle")}</p>
        </div>

        <div className="gridCards">
          {groups.map((g) => (
            <div key={g.group} className="card">
              <div className="cardHead">
                <h3 className="h3">{g.group}</h3>
              </div>
              <div className="chips">
                {g.items.map((t) => (
                  <span key={t} className="chip chipAlt">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
