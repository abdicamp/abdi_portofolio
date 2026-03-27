import { useI18n } from "../i18n.jsx";

const EXPERIENCE = {
  id: [
  {
    company: "PT Sinergi Teknologi Solusindo",
    location: "Jakarta, Indonesia",
    role: "Software Engineer",
    period: "Jul 2023 – Present",
    bullets: [
      "Membangun aplikasi mobile Flutter untuk memantau pemasukan & pengeluaran dana pelabuhan Santan dalam bentuk grafik.",
      "Mengembangkan sistem Web CMMS untuk kebutuhan manajemen perawatan.",
      "Merancang dan membangun solusi IoT untuk mendukung kebutuhan operasional pelabuhan.",
      "Membangun dan mempublish aplikasi mobile Flutter (HR) ke Play Store dan App Store.",
      "Membangun dan mempublish aplikasi penjualan (Flutter) ke Play Store.",
      "Mengembangkan aplikasi ERP dan DMS berbasis mobile menggunakan Flutter.",
    ],
  },
  {
    company: "PT HPY Solusiutama Indonesia",
    location: "Jakarta, Indonesia",
    role: "Mobile Engineer",
    period: "Feb 2023 – Apr 2023",
    bullets: [
      'Mengembangkan aplikasi e-commerce mobile (Flutter), "Electronic Beautiful Voice".',
      "Bertanggung jawab sebagai Project Manager dan perancang UI/UX.",
      "Menulis kode yang bersih, mudah dibaca, dan diuji untuk memastikan keandalan komponen.",
      "Membuat API untuk mengembangkan dan memelihara platform aplikasi mobile.",
      "Berkolaborasi dengan tim pemasaran untuk kampanye promosi aplikasi.",
    ],
  },
  {
    company: "PT Laju Omega Digital",
    location: "Jakarta, Indonesia",
    role: "Junior Programmer",
    period: "Oct 2022 – Dec 2022",
    bullets: [
      "Mengembangkan sistem berbasis web dan aplikasi berbasis mobile sesuai kebutuhan klien.",
      "Melaksanakan quality assurance untuk meminimalkan kesalahan pemrograman.",
      "Berkoordinasi dengan tim proyek untuk memastikan kelancaran proses pengembangan.",
    ],
  },
  {
    company: "PT Lentera Bangsa Benderang",
    location: "Remote (Tangerang, Indonesia)",
    role: "Mobile Application Developer (Internship)",
    period: "Feb 2022 – Jul 2022",
    bullets: ["Membangun aplikasi e-commerce berbasis mobile menggunakan React Native."],
  },
  {
    company: "PT Indonesia Comnet Plus",
    location: "Padang, Indonesia",
    role: "Programmer (Internship)",
    period: "Feb 2022 – Jul 2022",
    bullets: [
      "Merancang dan membangun aplikasi mobile untuk memindai & mendekode barcode untuk mempercepat pencatatan dan pelacakan inventaris.",
      "Mengintegrasikan pemindaian barcode menggunakan ML Kit; meningkatkan akurasi dan mengurangi input manual hingga 80%.",
      "Menerapkan sinkronisasi data realtime dengan backend melalui RESTful API.",
      "Melakukan usability testing bersama pengguna lapangan dan menyempurnakan UI.",
    ],
  },
  {
    company: "Freelance",
    location: "Padang, Indonesia",
    role: "Web and Mobile Developer",
    period: "Feb 2022 – Apr 2022",
    bullets: [
      "Membangun sistem penjualan bengkel las.",
      "Mengembangkan sistem informasi pariwisata berbasis web untuk Kota Pariaman.",
      "Membangun sistem rental mobil berbasis web.",
      "Mengembangkan aplikasi absensi dosen berbasis web dan mobile.",
      "Mengembangkan aplikasi donasi barang berbasis mobile.",
    ],
  },
],
  en: [
    {
      company: "PT Sinergi Teknologi Solusindo",
      location: "Jakarta, Indonesia",
      role: "Software Engineer",
      period: "Jul 2023 – Present",
      bullets: [
        "Built Flutter mobile apps to monitor port income/expenses with chart visualizations.",
        "Developed a web-based CMMS for maintenance management needs.",
        "Designed and built IoT solutions to support port operations.",
        "Built and published Flutter HR app to Play Store and App Store.",
        "Built and published Flutter sales app to Play Store.",
        "Developed mobile ERP and DMS apps using Flutter.",
      ],
    },
    {
      company: "PT HPY Solusiutama Indonesia",
      location: "Jakarta, Indonesia",
      role: "Mobile Engineer",
      period: "Feb 2023 – Apr 2023",
      bullets: [
        'Developed a Flutter-based mobile e-commerce app, "Electronic Beautiful Voice".',
        "Owned project management responsibilities and UI/UX design.",
        "Wrote clean, readable, testable code to ensure component reliability.",
        "Built APIs to develop and maintain the mobile platform.",
        "Collaborated with marketing for app promotion campaigns.",
      ],
    },
    {
      company: "PT Laju Omega Digital",
      location: "Jakarta, Indonesia",
      role: "Junior Programmer",
      period: "Oct 2022 – Dec 2022",
      bullets: [
        "Developed web systems and mobile apps based on client needs.",
        "Performed quality assurance procedures to reduce programming errors.",
        "Coordinated with the project team to keep delivery on track.",
      ],
    },
    {
      company: "PT Lentera Bangsa Benderang",
      location: "Remote (Tangerang, Indonesia)",
      role: "Mobile Application Developer (Internship)",
      period: "Feb 2022 – Jul 2022",
      bullets: ["Built a React Native-based mobile e-commerce application."],
    },
    {
      company: "PT Indonesia Comnet Plus",
      location: "Padang, Indonesia",
      role: "Programmer (Internship)",
      period: "Feb 2022 – Jul 2022",
      bullets: [
        "Designed and built a mobile app to scan and decode barcodes to speed up inventory logging and tracking.",
        "Integrated barcode scanning using ML Kit, improving accuracy and reducing manual input time by up to 80%.",
        "Implemented realtime data sync with a backend server via RESTful APIs.",
        "Ran usability testing with field users and refined the UI for better usability.",
      ],
    },
    {
      company: "Freelance",
      location: "Padang, Indonesia",
      role: "Web and Mobile Developer",
      period: "Feb 2022 – Apr 2022",
      bullets: [
        "Built a sales system for a metal welding workshop.",
        "Developed a web-based tourism information system for Pariaman City.",
        "Built a web-based car rental system.",
        "Developed lecturer attendance apps for web and mobile.",
        "Developed a mobile donation-goods application.",
      ],
    },
  ],
};

function Experience() {
  const { lang, t } = useI18n();
  const items = EXPERIENCE[lang] ?? EXPERIENCE.en;
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{t("experience.title")}</h2>
          <p className="muted">{t("experience.subtitle")}</p>
        </div>

        <div className="timeline">
          {items.map((x) => (
            <article key={`${x.company}-${x.period}`} className="timelineItem">
              <div className="timelineDot" aria-hidden="true" />
              <div className="card timelineCard">
                <div className="timelineTop">
                  <div className="timelineTitle">
                    <h3 className="h3">{x.role}</h3>
                    <div className="muted">{x.company}</div>
                  </div>
                  <div className="timelineMeta">
                    <span className="chip chipAlt">{x.period}</span>
                    <span className="chip">{x.location}</span>
                  </div>
                </div>
                <ul className="list timelineList">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
