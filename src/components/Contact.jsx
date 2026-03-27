import { useI18n } from "../i18n.jsx";

function Contact() {
  const { t } = useI18n();
  const email = "abdidzikri@gmail.com";
  const phone = "+62 85811083834";
  const location = "Pondok Gede, Bekasi (17411)";

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{t("contact.title")}</h2>
          <p className="muted">{t("contact.subtitle")}</p>
        </div>

        <div className="contactGrid">
          <div className="card cardGlow">
            <h3 className="h3">{t("contact.cardTitle")}</h3>
            <div className="kvList">
              <div className="kv">
                <div className="kvK">{t("contact.emailK")}</div>
                <div className="kvV muted">{email}</div>
              </div>
              <div className="kv">
                <div className="kvK">{t("contact.phoneK")}</div>
                <div className="kvV muted">{phone}</div>
              </div>
              <div className="kv">
                <div className="kvK">{t("contact.locationK")}</div>
                <div className="kvV muted">{location}</div>
              </div>
            </div>
            <div className="contactActions">
              <a
                className="btn"
                href={`mailto:${email}?subject=${encodeURIComponent(t("contact.mailSubject"))}`}
              >
                {t("contact.sendEmail")}
              </a>
              <a className="btn btnGhost" href="#projects">
                {t("contact.seeProjects")}
              </a>
            </div>
          </div>

          <div className="card cardSoft">
            <h3 className="h3">{t("contact.notesTitle")}</h3>
            <ul className="list">
              {t("contact.notes").map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
