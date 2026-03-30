import { createContext, useCallback, useContext, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio.lang";

const DICT = {
  id: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      gallery: "Gallery",
      contact: "Contact",
      downloadCv: "Download CV",
      seeProjects: "Lihat Project",
      menu: "Menu",
      closeMenu: "Close menu",
      openMenu: "Open menu",
      language: "Bahasa",
    },
    hero: {
      badge: "Software Engineer • Mobile • IoT",
      name: "Muhammad Abdillah Dzikri",
      title: "Software Engineer",
      lead:
        "Software Engineer dengan pengalaman membangun aplikasi mobile (Flutter, React Native), sistem web (CMMS), dan solusi IoT untuk kebutuhan operasional.",
      ctaProjects: "Lihat Project",
      ctaContact: "Kontak",
      metaStackK: "Stack",
      metaStackV: "Flutter • React Native • JavaScript • IoT",
      metaFocusK: "Focus",
      metaFocusV: "Mobile Apps • UI/UX • Delivery",
      pillSystem: "System",
      pillIot: "IoT",
      pillDashboard: "Dashboard",
      statUptime: "Uptime",
      statLatency: "Latency",
      statLatencyV: "Low",
      statData: "Data",
      statDataV: "Realtime",
    },
    about: {
      title: "Tentang Saya",
      subtitle:
        "Saya Software Engineer yang fokus pada pengembangan aplikasi mobile, web system, dan integrasi IoT.",
      whatTitle: "What I do",
      whatBody:
        "Mengembangkan aplikasi mobile (Flutter/React Native), sistem web untuk kebutuhan operasional, dan integrasi perangkat/IoT. Terbiasa kolaborasi lintas tim dan memastikan rilis stabil sampai produksi.",
      chips: ["Flutter", "React Native", "Web System", "IoT", "UI/UX"],
      highlightsTitle: "Highlights",
      highlights: [
        { k: "Mobile Engineering", v: "Flutter & React Native dari UI sampai publish store." },
        { k: "IoT Solutions", v: "Membangun solusi IoT untuk kebutuhan operasional." },
        { k: "Web Systems", v: "CMMS berbasis web untuk manajemen perawatan." },
      ],
    },
    experience: {
      title: "Experience",
      subtitle: "Ringkasan pengalaman profesional dan project delivery.",
    },
    skills: {
      title: "Skills",
      subtitle: "Teknologi yang paling sering saya pakai untuk membangun produk.",
      groups: [
        { group: "Mobile", items: ["Flutter", "Dart", "React Native", "Store Publishing", "UI/UX"] },
        { group: "Web & API", items: ["JavaScript", "REST API", "PHP", "HTML", "Web Systems (CMMS/ERP/DMS)"] },
        { group: "Data", items: ["Database Programming", "SQL basics", "Data Sync (Realtime)", "Telemetry Data"] },
        { group: "IoT & Others", items: ["IoT", "Networking basics", "Troubleshooting", "Project Management"] },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Beberapa contoh area yang pernah saya kerjakan.",
      featured: "Featured",
      requestDemo: "Request demo",
      discussScope: "Discuss scope",
      items: [
        {
          title: "Port Operations Finance Monitor",
          desc: "Aplikasi mobile (Flutter) untuk memantau pemasukan & pengeluaran dana pelabuhan Santan dalam bentuk grafik.",
          tags: ["Flutter", "Mobile", "Charts", "Finance"],
        },
        {
          title: "Web CMMS",
          desc: "Sistem CMMS berbasis web untuk kebutuhan manajemen perawatan dan operasional.",
          tags: ["Web", "CMMS", "Operations", "Maintainability"],
        },
        {
          title: "IoT Solutions for Port Ops",
          desc: "Merancang dan membangun solusi IoT untuk mendukung kebutuhan operasional pelabuhan.",
          tags: ["IoT", "Integration", "Telemetry", "Realtime"],
        },
      ],
    },
    gallery: {
      title: "Screenshots",
      subtitle: "Tampilan hasil kerja (UI) dari beberapa project.",
      tabs: { mobile: "Mobile", web: "Web", iot: "IOT" },
      videoTitle: "Video App",
      viewVideo: "View Video",
      videoEmpty: "Belum ada video.",
      emptyTitle: "Belum ada screenshot",
      emptyBody: "Tambahkan file screenshot project kamu, lalu isi data gambar di section ini.",
      projectEmpty: "Belum ada screenshot untuk project ini.",
    },
    contact: {
      title: "Kontak",
      subtitle:
        "Kalau kamu ingin diskusi project atau kolaborasi, kirim email dan jelaskan kebutuhanmu.",
      cardTitle: "Contact",
      emailK: "Email",
      phoneK: "Phone",
      locationK: "Location",
      sendEmail: "Kirim Email",
      seeProjects: "Lihat Projects",
      notesTitle: "Quick notes",
      notes: [
        "Pengalaman: Software Engineer (Jul 2023 – sekarang).",
        "Mobile: Flutter & React Native, sampai publish store.",
        "Web/IoT: CMMS dan solusi IoT untuk operasional.",
      ],
      mailSubject: "Project Inquiry",
    },
    footer: {
      builtWith: "Built with React",
      copyright: "© {year} Muhammad Abdillah Dzikri",
    },
    a11y: {
      skip: "Skip to content",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      gallery: "Gallery",
      contact: "Contact",
      downloadCv: "Download CV",
      seeProjects: "View Projects",
      menu: "Menu",
      closeMenu: "Close menu",
      openMenu: "Open menu",
      language: "Language",
    },
    hero: {
      badge: "Software Engineer • Mobile • IoT",
      name: "Muhammad Abdillah Dzikri",
      title: "Software Engineer",
      lead:
        "Software Engineer experienced in building mobile apps (Flutter, React Native), web systems (CMMS), and IoT solutions for operational needs.",
      ctaProjects: "View Projects",
      ctaContact: "Contact",
      metaStackK: "Stack",
      metaStackV: "Flutter • React Native • JavaScript • IoT",
      metaFocusK: "Focus",
      metaFocusV: "Mobile Apps • UI/UX • Delivery",
      pillSystem: "System",
      pillIot: "IoT",
      pillDashboard: "Dashboard",
      statUptime: "Uptime",
      statLatency: "Latency",
      statLatencyV: "Low",
      statData: "Data",
      statDataV: "Realtime",
    },
    about: {
      title: "About",
      subtitle:
        "I’m a Software Engineer focused on mobile development, web systems, and IoT integrations.",
      whatTitle: "What I do",
      whatBody:
        "I build mobile apps (Flutter/React Native), operational web systems, and IoT/device integrations. Comfortable collaborating across teams and shipping stable releases to production.",
      chips: ["Flutter", "React Native", "Web Systems", "IoT", "UI/UX"],
      highlightsTitle: "Highlights",
      highlights: [
        { k: "Mobile Engineering", v: "Flutter & React Native from UI to store publishing." },
        { k: "IoT Solutions", v: "Building IoT solutions for operational needs." },
        { k: "Web Systems", v: "Web-based CMMS for maintenance management." },
      ],
    },
    experience: {
      title: "Experience",
      subtitle: "A summary of professional experience and delivery.",
    },
    skills: {
      title: "Skills",
      subtitle: "Tech I use most often to build products.",
      groups: [
        { group: "Mobile", items: ["Flutter", "Dart", "React Native", "Store Publishing", "UI/UX"] },
        { group: "Web & API", items: ["JavaScript", "REST APIs", "PHP", "HTML", "Web Systems (CMMS/ERP/DMS)"] },
        { group: "Data", items: ["Database Programming", "SQL basics", "Realtime Data Sync", "Telemetry Data"] },
        { group: "IoT & Others", items: ["IoT", "Networking basics", "Troubleshooting", "Project Management"] },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "A few examples of what I’ve worked on.",
      featured: "Featured",
      requestDemo: "Request demo",
      discussScope: "Discuss scope",
      items: [
        {
          title: "Port Operations Finance Monitor",
          desc: "Flutter mobile app to monitor port finance income/expenses with chart visualizations.",
          tags: ["Flutter", "Mobile", "Charts", "Finance"],
        },
        {
          title: "Web CMMS",
          desc: "Web-based CMMS for maintenance and operational management.",
          tags: ["Web", "CMMS", "Operations", "Maintainability"],
        },
        {
          title: "IoT Solutions for Port Ops",
          desc: "Designed and built IoT solutions to support port operational requirements.",
          tags: ["IoT", "Integration", "Telemetry", "Realtime"],
        },
      ],
    },
    gallery: {
      title: "Screenshots",
      subtitle: "UI snapshots from selected projects.",
      tabs: { mobile: "Mobile", web: "Web", iot: "IOT" },
      videoTitle: "App Video",
      viewVideo: "View Video",
      videoEmpty: "No video yet.",
      emptyTitle: "No screenshots yet",
      emptyBody: "Add your project screenshots and register them in this section.",
      projectEmpty: "No screenshots for this project yet.",
    },
    contact: {
      title: "Contact",
      subtitle: "For collaboration or project discussions, email me with your needs and context.",
      cardTitle: "Contact",
      emailK: "Email",
      phoneK: "Phone",
      locationK: "Location",
      sendEmail: "Send Email",
      seeProjects: "View Projects",
      notesTitle: "Quick notes",
      notes: [
        "Current role: Software Engineer (Jul 2023 – present).",
        "Mobile: Flutter & React Native, including store publishing.",
        "Web/IoT: CMMS and IoT solutions for operations.",
      ],
      mailSubject: "Project Inquiry",
    },
    footer: {
      builtWith: "Built with React",
      copyright: "© {year} Muhammad Abdillah Dzikri",
    },
    a11y: {
      skip: "Skip to content",
    },
  },
};

function getInitialLang() {
  const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
  if (saved === "id" || saved === "en") return saved;
  const navLang = typeof navigator !== "undefined" ? navigator.language : "";
  return navLang?.toLowerCase?.().startsWith("id") ? "id" : "en";
}

function getByPath(obj, path) {
  return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
}

const I18nCtx = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  const dict = DICT[lang] ?? DICT.en;

  const t = useCallback(
    (key, vars) => {
      const raw = getByPath(dict, key) ?? getByPath(DICT.en, key);
      if (raw == null) return key;
      if (typeof raw !== "string") return raw;
      if (!vars) return raw;
      return raw.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? String(vars[k]) : `{${k}}`));
    },
    [dict]
  );

  const setLanguage = useCallback((next) => {
    const v = next === "id" ? "id" : "en";
    setLang(v);
    window.localStorage.setItem(STORAGE_KEY, v);
  }, []);

  const value = useMemo(() => ({ lang, setLanguage, t }), [lang, setLanguage, t]);
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

