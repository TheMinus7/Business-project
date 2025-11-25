export default function SettingsPage() {
  return (
    <main className="page">
      <section className="section">
        <h1 className="section-title">Settings</h1>
        <p className="section-description">
          Энд ирээдүйд хэрэглэгчийн тохиргоо, профайл мэдээлэл, мэдэгдлийн
          сонголт зэрэг хэсгүүд байрлана. Одоогоор зөвхөн UI бүтцийг харуулж
          байна.
        </p>

        <div className="about-grid">
          <div className="about-block">
            <h2 className="about-title">Профайл мэдээлэл</h2>
            <p className="about-text">
              Нэр, имэйл, холбоо барих мэдээлэл, акаунтын үндсэн тохиргоог
              засварлах хэсэг байхаар төлөвлөж болно.
            </p>
          </div>
          <div className="about-block">
            <h2 className="about-title">Мэдэгдэл ба аюулгүй байдал</h2>
            <p className="about-text">
              Имэйл мэдэгдэл, нууц үг солих, хоёр шатлалт хамгаалалт зэрэг
              тохиргоонуудыг ирээдүйд энд байрлуулах боломжтой.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
