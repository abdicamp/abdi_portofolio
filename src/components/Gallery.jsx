import { useMemo, useState } from "react";
import { useI18n } from "../i18n.jsx";

function Gallery() {
  const { t } = useI18n();
  const assetMap = useMemo(
    () =>
      import.meta.glob("../assets/gallery/**/*.{png,jpg,jpeg,webp,gif,mp4,webm}", {
        eager: true,
        import: "default",
      }),
    []
  );

  const resolveAsset = (src) => {
    if (!src) return src;
    if (!src.startsWith("/src/assets/")) return src;
    const key = src.replace("/src/assets/", "../assets/");
    return assetMap[key] || src;
  };

  const data = useMemo(
    () => ({
      mobile: [
        {
          project: "LIMS (Laboratory Information Management System)",
          description: "Aplikasi LIMS untuk manajemen laboratorium, pengujian, dan pengambilan sample",
          video: { title: "Demo App", src: "/src/assets/gallery/lims/screenrecorder.mp4", type: "file" },
          shots: [
            {
              title: "Page Login",
              description: "Halaman autentikasi pengguna untuk masuk ke aplikasi HR.",
              src: "/src/assets/gallery/lims/login.jpeg",
            },
            {
              title: "Dashboard",
              description: "Halaman dashboard untuk melihat overview LIMS, laboratorium, dan pengujian.",
              src: "/src/assets/gallery/lims/dashboard.jpeg",
            },
            {
              title: "Task List",
              description: "Halaman untuk melihat list task yang harus dikerjakan",
              src: "/src/assets/gallery/lims/list_task.jpeg",
            },
            {
              title: "History Task",
              description: "Halaman untuk melihat history task yang sudah dikerjakan",
              src: "/src/assets/gallery/lims/history_task.jpeg",
            },
            {
              title: "Profile",
              description: "Halaman untuk melihat profile kita",
              src: "/src/assets/gallery/lims/profile.jpeg",
            },
            {
              title: "Form Task Info",
              description: "Halaman untuk mengisi info task yang harus dikerjakan",
              src: "/src/assets/gallery/lims/form_task_info.jpeg",
            },
            {
              title: "Form Task Container",
              description: "Halaman untuk mengisi container task yang harus dikerjakan",
              src: "/src/assets/gallery/lims/form_task_container.jpeg",
            },
            {
              title: "Form Task Parameter",
              description: "Halaman untuk mengisi parameter task yang harus dikerjakan",
              src: "/src/assets/gallery/lims/form_task_parameter.jpeg",
            },
            {
              title: "History Notification",
              description: "Halaman untuk melihat history notification",
              src: "/src/assets/gallery/lims/norification_history.jpeg",
            },
          ],
        },
        {
          project: "HR Mobile (Human Resource Management)",
          description: "Aplikasi HR untuk absensi, cuti, dan administrasi karyawan.",
          video: { title: "Demo App", src: "/src/assets/gallery/hr/screenrecorder.mp4", type: "file" },
          shots: [
            {
              title: "Page Login",
              description: "Halaman autentikasi pengguna untuk masuk ke aplikasi HR.",
              src: "/src/assets/gallery/hr/login.jpeg",
            },
            {
              title: "Dashboard",
              description: "Halaman dashboard untuk melihat overview HR, karyawan, dan administrasi.",
              src: "/src/assets/gallery/hr/dashboard.jpeg",
            },
            {
              title: "Absensi",
              description: "Halaman absensi untuk proses absensi karyawan",
              src: "/src/assets/gallery/hr/process_absensi.jpeg",
            },
            {
              title: "Set Location Absensi",
              description: "Halaman untuk set location absensi karyawan",
              src: "/src/assets/gallery/hr/set_location_absensi.jpeg",
            },
            {
              title: "Dashboard",
              description: "Halaman dashboard untuk melihat overview HR, karyawan, dan administrasi.",
              src: "/src/assets/gallery/hr/dashboard.jpeg",
            },
            {
              title: "Attendance Log",
              description: "Halaman untuk melihat menu attendance, dan menambahkan attendance baru.",
              src: "/src/assets/gallery/hr/attendance_log.jpeg",
            },
            {
              title: "My Request",
              description: "Halaman untuk melihat pengajuan kita",
              src: "/src/assets/gallery/hr/request.jpeg",
            },
            {
              title: "Approval Request",
              description: "Halaman untuk melihat request cuti , izin ,dan melihat proses approval request",
              src: "/src/assets/gallery/hr/approval_request.jpeg",
            },
            {
              title: "History Approval Request",
              description: "Halaman untuk melihat history approval request",
              src: "/src/assets/gallery/hr/history_approval_request.jpeg",
            },
            {
              title: "History Request",
              description: "Halaman untuk melihat history request yang sudah diapprove",
              src: "/src/assets/gallery/hr/history.jpeg",
            },
            {
              title: "Profile",
              description: "Halaman untuk melihat profile kita",
              src: "/src/assets/gallery/hr/profile.jpeg",
            },
            {
              title: "Form Permission",
              description: "Halaman untuk mengajukan permission",
              src: "/src/assets/gallery/hr/form_permission.jpeg",
            },
            {
              title: "Form Leave",
              description: "Halaman untuk mengajukan Cuti",
              src: "/src/assets/gallery/hr/form_leave.jpeg",
            },
            {
              title: "Form Overtime",
              description: "Halaman untuk mengajukan Overtime",
              src: "/src/assets/gallery/hr/form_overtime.jpeg",
            },



          ],
        },
        {
          project: "Maintenance Management Mobile",
          description: "Aplikasi maintenance untuk monitoring tiket, status pekerjaan, dan histori perawatan untuk pelabuhan kapal",
          video: {
            title: "Demo App",
            src: "/src/assets/gallery/maintenance/screenrecorder.mp4",
            type: "file",
          },
          shots: [
            {
              title: "Page Login",
              description: "Halaman autentikasi pengguna untuk masuk ke aplikasi maintenance.",
              src: "/src/assets/gallery/maintenance/login.png",
            },
            {
              title: "Dashboard",
              description: "Halaman dashboard untuk melihat overview maintenance, tiket, dan histori perawatan.",
              src: "/src/assets/gallery/maintenance/dashboard.png",
            },
            {
              title: "Add Receiving",
              description: "Halaman untuk menambahkan data receiving baru.",
              src: "/src/assets/gallery/maintenance/add_receive.png",
            },
            {
              title: "Edit Receiving",
              description: "Halaman untuk mengedit data receiving.",
              src: "/src/assets/gallery/maintenance/edit_receive.png",
            },
            {
              title: "Menu Task",
              description: "Halaman untuk melihat menu task, dan menambahkan task baru.",
              src: "/src/assets/gallery/maintenance/menu_task.png",
            },
            {
              title: "Add Task",
              description: "Halaman untuk menambahkan task baru.",
              src: "/src/assets/gallery/maintenance/add_task.png",
            },
            {
              title: "Detail Task",
              description: "Halaman untuk melihat detail task, dan menambahkan task baru.",
              src: "/src/assets/gallery/maintenance/detail_task.png",
            },
            {
              title: "To Do Task",
              description: "Halaman untuk melihat task yang harus dikerjakan.",
              src: "/src/assets/gallery/maintenance/to_do_task.png",
            },
            {
              title: "Time Sheet",
              description: "Halaman untuk melihat time sheet, dan menambahkan time sheet baru.",
              src: "/src/assets/gallery/maintenance/time_sheet.png",
            },
          ],
        },
        {
          project: "DMS Mobile (Dealer Management System)",
          description: "Aplikasi dealer management untuk mengelola data dealer, transaksi, dan pelaporan.",
          video: { title: "Demo App", src: "/src/assets/gallery/dms/screenrecorder.mp4", type: "file" },
          shots: [
            {
              title: "Page Login",
              description: "Halaman autentikasi pengguna untuk masuk ke aplikasi DMS.",
              src: "/src/assets/gallery/dms/login.jpeg",
            },
            {
              title: "Dashboard",
              description: "Halaman dashboard untuk melihat overview DMS, dealer, dan pelaporan.",
              src: "/src/assets/gallery/dms/dashboard.jpeg",
            },
            {
              title: "Menu Report",
              description: "Halaman untuk melihat menu report",
              src: "/src/assets/gallery/dms/report.jpeg",
            },
            {
              title: "New Prospect",
              description: "Halaman untuk menambahkan data prospect baru.",
              src: "/src/assets/gallery/dms/new_prospect.jpeg",
            },
            {
              title: "Next Step New Prospect",
              description: "Halaman untuk melihat next step data prospect baru.",
              src: "/src/assets/gallery/dms/next_new_prospect.jpeg",
            },
            {
              title: "Save New Prospect",
              description: "Halaman untuk menyimpan data prospect baru.",
              src: "/src/assets/gallery/dms/save_new_prospect.jpeg",
            },
            {
              title: "List Prospect",
              description: "Halaman untuk melihat list data prospect.",
              src: "/src/assets/gallery/dms/list_prospect.jpeg",
            },
            {
              title: "Change Status Prospect",
              description: "Halaman untuk mengubah status data prospect.",
              src: "/src/assets/gallery/dms/change_status_prospect.jpeg",
            },
          ],
        },



      ],
      iot: [
        {
          project: "Marine IoT",
          description: "IoT untuk monitoring Tanki BBM kapal , Kecepatan Kapal (RPM) , Mengukur Suhu (Temperature) , dan Mengukur Tekanan (Pressure)",
          video: { title: "Demo App", src: "", type: "file" },
          shots: [
            {
              title: "",
              description: "",
              src: "/src/assets/gallery/iot/1.jpeg",
            },
            {
              title: "",
              description: "",
              src: "/src/assets/gallery/iot/2.jpeg",
            },
            {
              title: "",
              description: "",
              src: "/src/assets/gallery/iot/3.jpeg",
            },
            {
              title: "",
              description: "",
              src: "/src/assets/gallery/iot/4.jpeg",
            },
            {
              title: "",
              description: "",
              src: "/src/assets/gallery/iot/5.jpeg",
            },
            {
              title: "",
              description: "",
              src: "/src/assets/gallery/iot/6.jpeg",
            },
            {
              title: "",
              description: "",
              src: "/src/assets/gallery/iot/7.jpeg",
            },
            {
              title: "",
              description: "",
              src: "/src/assets/gallery/iot/8.jpeg",
            },

          ],
        },
      ],
      web: [
        {
          project: "Web CMMS",
          description: "Sistem CMMS berbasis web untuk manajemen maintenance dan monitoring asset.",
          video: { title: "Demo App", src: "", type: "file" },
          shots: [],
        },
      ],
    }),
    []
  );

  const [active, setActive] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [tab, setTab] = useState("mobile");

  const groups = tab === "web" ? data.web : tab === "iot" ? data.iot : data.mobile;
  const totalShots = groups.reduce((acc, g) => acc + (g.shots?.length ?? 0), 0);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{t("gallery.title")}</h2>
          <p className="muted">{t("gallery.subtitle")}</p>
        </div>

        <div className="tabs">
          <button
            type="button"
            className={`tabBtn ${tab === "mobile" ? "isActive" : ""}`}
            onClick={() => setTab("mobile")}
          >
            {t("gallery.tabs.mobile")}
          </button>
          <button
            type="button"
            className={`tabBtn ${tab === "web" ? "isActive" : ""}`}
            onClick={() => setTab("web")}
          >
            {t("gallery.tabs.web")}
          </button>
          <button
            type="button"
            className={`tabBtn ${tab === "iot" ? "isActive" : ""}`}
            onClick={() => setTab("iot")}
          >
            {t("gallery.tabs.iot")}
          </button>
        </div>

        {totalShots === 0 ? (
          <div className="card cardSoft galleryEmpty">
            <div className="galleryEmptyIcon" aria-hidden="true" />
            <div className="galleryEmptyText">
              <div className="galleryEmptyTitle">{t("gallery.emptyTitle")}</div>
              <div className="muted">{t("gallery.emptyBody")}</div>
            </div>
          </div>
        ) : null}

        <div className="accordion">
          {groups.map((g) => (
            <details key={g.project} className="accItem" open={g.shots?.length > 0}>
              <summary className="accSummary">
                <span className="accText">
                  <span className="accTitle">{g.project}</span>
                  {g.description ? <span className="muted accDesc">{g.description}</span> : null}
                </span>
                <span className="chip chipAlt">{(g.shots?.length ?? 0).toString()}</span>
              </summary>

              {g.shots?.length ? (
                <>
                  <div className="videoRow">
                    <div className="videoRowHead">
                      <span className="accTitle">{t("gallery.videoTitle")}</span>
                      {g.video?.src ? (
                        <button
                          type="button"
                          className="btn btnGhost btnSm"
                          onClick={() =>
                            setActiveVideo({ ...g.video, project: g.project, src: resolveAsset(g.video.src) })
                          }
                        >
                          {t("gallery.viewVideo")}
                        </button>
                      ) : (
                        <span className="muted">{t("gallery.videoEmpty")}</span>
                      )}
                    </div>
                  </div>

                  <div className="shotGrid">
                    {g.shots.map((s) => (
                      <button
                        key={`${g.project}-${s.title}-${s.src}`}
                        type="button"
                        className="shotCard"
                        onClick={() => setActive({ ...s, project: g.project })}
                      >
                        <div className={`shotThumb ${tab === "mobile" ? "isMobile" : ""}`}>
                          <img className="galleryImg" src={resolveAsset(s.src)} alt={s.title} loading="lazy" />
                        </div>
                        <div className="galleryCap">
                          <div className="galleryTitle">{s.title}</div>
                          {s.description ? <div className="muted gallerySub">{s.description}</div> : null}
                          {s.subtitle ? <div className="muted gallerySub">{s.subtitle}</div> : null}
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="videoRow">
                    <div className="videoRowHead">
                      <span className="accTitle">{t("gallery.videoTitle")}</span>
                      {g.video?.src ? (
                        <button
                          type="button"
                          className="btn btnGhost btnSm"
                          onClick={() =>
                            setActiveVideo({ ...g.video, project: g.project, src: resolveAsset(g.video.src) })
                          }
                        >
                          {t("gallery.viewVideo")}
                        </button>
                      ) : (
                        <span className="muted">{t("gallery.videoEmpty")}</span>
                      )}
                    </div>
                  </div>
                  <div className="muted accEmpty">{t("gallery.projectEmpty")}</div>
                </>
              )}
            </details>
          ))}
        </div>
      </div>

      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Preview">
          <button
            type="button"
            className="lightboxBackdrop"
            aria-label="Close"
            onClick={() => setActive(null)}
          />
          <div className="lightboxPanel">
            <div className="lightboxTop">
              <div className="lightboxTitle">
                <div className="galleryTitle">{active.project ? `${active.project} — ${active.title}` : active.title}</div>
                {active.description ? <div className="muted gallerySub">{active.description}</div> : null}
                {active.subtitle ? <div className="muted gallerySub">{active.subtitle}</div> : null}
              </div>
              <button type="button" className="iconBtn" aria-label="Close" onClick={() => setActive(null)}>
                <span className="iconX" aria-hidden="true" />
              </button>
            </div>
            <div className="lightboxMedia">
              <img className="lightboxImg" src={resolveAsset(active.src)} alt={active.title} />
            </div>
          </div>
        </div>
      ) : null}

      {activeVideo ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Video Preview">
          <button
            type="button"
            className="lightboxBackdrop"
            aria-label="Close"
            onClick={() => setActiveVideo(null)}
          />
          <div className="lightboxPanel">
            <div className="lightboxTop">
              <div className="lightboxTitle">
                <div className="galleryTitle">{activeVideo.project ? `${activeVideo.project} — ${activeVideo.title}` : activeVideo.title}</div>
              </div>
              <button type="button" className="iconBtn" aria-label="Close" onClick={() => setActiveVideo(null)}>
                <span className="iconX" aria-hidden="true" />
              </button>
            </div>
            <div className="lightboxMedia">
              {activeVideo.type === "embed" ? (
                <iframe
                  className="lightboxFrame"
                  src={activeVideo.src}
                  title={activeVideo.title || "App Video"}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <video className="lightboxVideo" controls preload="metadata" src={resolveAsset(activeVideo.src)} />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Gallery;

