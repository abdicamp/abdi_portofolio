import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/ABout.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import { useI18n } from "./i18n.jsx";

function App() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <div className="app">
      <a className="skipLink" href="#content">{t("a11y.skip")}</a>
      <Navbar />
      <main id="content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footerInner">
          <span className="muted">{t("footer.copyright", { year })}</span>
          <span className="muted">{t("footer.builtWith")}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;