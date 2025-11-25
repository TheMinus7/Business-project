const steps = [
  {
    number: "01",
    title: "Төслөө үүсгэх",
    text: "Төсөл, зорилго, хэрэгцээтэй санхүүжилтийн хэмжээг тодорхой бичиж танилцуулна.",
  },
  {
    number: "02",
    title: "Шалгалт, баталгаажуулалт",
    text: "Платформын баг төслийн мэдээллийг нягталж, шаардлага хангасан төслүүдийг нийтэлнэ.",
  },
  {
    number: "03",
    title: "Санхүүжилт татах",
    text: "Комюнити, дэмжигчдээс хандив, хөрөнгө оруулалт татан төвлөрүүлнэ.",
  },
  {
    number: "04",
    title: "Тайлагнал, ил тод байдал",
    text: "Санхүүжилтийг төлөвлөгөөний дагуу зарцуулсан байдлаа тайлагнаж, ахиц дэвшлээ тогтмол хуваалцана.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="page">
      <section className="section">
        <h1 className="section-title">Яаж ажилладаг вэ?</h1>
        <p className="section-description">
          CrowdFund нь төслөө танилцуулахыг хүссэн санаачлагчдыг хандив өгөх,
          хөрөнгө оруулах сонирхолтой хүмүүсийн хамтран ажиллах талбар гэж
          ойлгож болно.
        </p>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <h2 className="step-title">{step.title}</h2>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
