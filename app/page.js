// app/page.js
export default function HomePage() {
  return (
    <section className="hero">
      <h1>Таны санаачилгыг хамтдаа санхүүжье</h1>
      <p>
        Комьюнити санхүүжилтийн ил тод, найдвартай экосистем. Төсөл үүсгээд,
        нотолгоогоо хавсаргаад, ил тод ахиц дэвшлээ хуваалц.
      </p>

      <div className="cta">
        <a className="btn btn-primary" href="/donation">
          Хандив өгөх
        </a>
        <a className="btn btn-outline" href="/how-it-works">
          Яаж ажилладаг вэ
        </a>
      </div>

      <div className="hero-card" />
    </section>
  );
}
