const projects = [
  {
    id: 1,
    title: "Эмзэг бүлгийн хүүхдүүдэд зориулагдсан багц",
    description:
      "Хичээлийн хэрэгсэл, дулаан хувцас, өдөр тутмын хэрэглээний зүйлсийг багцлан хүргэх хандив.",
    need: "150 багц",
    progress: "65 багц бэлэн",
  },
  {
    id: 2,
    title: "Хөдөө сумдын эмнэлгийн тоног төхөөрөмж",
    description:
      "Сумын эмнэлгүүдэд яаралтай шаардлагатай жижиг хэмжээний тоног төхөөрөмж авахад зориулагдсан хандив.",
    need: "10,000,000₮",
    progress: "4,200,000₮ цугларсан",
  },
  {
    id: 3,
    title: "Байгалийн гамшигт өртсөн айл өрхүүд",
    description:
      "Гамшигт өртсөн айл өрхүүдэд хүнс, ахуйн хэрэглээ, түр байрлах нөхцлийг бүрдүүлэхэд чиглэсэн тусламж.",
    need: "30 айл",
    progress: "12 айлд тусламж очсон",
  },
];

export default function DonationPage() {
  return (
    <main className="page">
      <section className="section">
        <h1 className="section-title">Хандив тусламж</h1>
        <p className="section-description">
          Нийгмийн эмзэг бүлэг, тусламж хэрэгтэй хүмүүст чиглэсэн хандивын
          аянуудыг энд нэгтгэн харуулж байна. Энэ бол жишээ UI бөгөөд бодит
          төлбөрийн систем холбогдоогүй.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <div>
                  <span className="meta-label">Шаардлагатай хэмжээ:</span>{" "}
                  <span className="meta-value">{project.need}</span>
                </div>
                <div>
                  <span className="meta-label">Одоогийн явц:</span>{" "}
                  <span className="meta-value">{project.progress}</span>
                </div>
              </div>
              <button className="secondary-btn">Хандив өгөх</button>
            </article>
          ))}
        </div>

        <div className="quick-donate">
          <h2 className="quick-title">Ерөнхий хандивын маягт</h2>
          <p className="quick-text">
            Тодорхой төсөл сонгохгүйгээр, ерөнхий хандивын сан руу дэмжлэг
            үзүүлэх UI жишээг энд харууллаа.
          </p>
          <form className="quick-form">
            <input
              type="number"
              className="form-input"
              placeholder="Хандивын дүн (₮)"
            />
            <input
              type="email"
              className="form-input"
              placeholder="Имэйл хаяг"
            />
            <button className="primary-btn quick-btn" type="submit">
              Хандив илгээх
            </button>
          </form>
          <p className="quick-note">
            Бодит төсөл дээр хандивын нөхцөл, тайлан, ашиглалтын зорилгыг илүү
            дэлгэрэнгүй тайлбарлана.
          </p>
        </div>
      </section>
    </main>
  );
}
