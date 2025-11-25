export default function AboutPage() {
  return (
    <main className="page">
      <section className="section">
        <h1 className="section-title">Бидний тухай</h1>
        <p className="section-description">
          CrowdFund бол сайн санаа, бизнесийн төсөл болон нийгмийн санаачлагыг
          олон нийтийн дэмжлэгээр хэрэгжүүлэх боломжийг харуулсан жишээ UI
          загвар юм.
        </p>

        <div className="about-grid">
          <div className="about-block">
            <h2 className="about-title">Эрхэм зорилго</h2>
            <p className="about-text">
              Хэн ч байсан өөрчлөлт авчрах эрхтэй. Бид санаачлагчид болон
              дэмжигчдийг холбож, ирээдүйд эерэг нөлөө үзүүлэх төслүүдийг бодит
              болгохыг зорьж байна.
            </p>
          </div>
          <div className="about-block">
            <h2 className="about-title">Үнэт зүйлс</h2>
            <p className="about-text">
              Ил тод байдал, хариуцлага, хамтын оролцоо нь CrowdFund-ын гол үнэт
              зүйл юм. Санхүүжилтийн урсгал, тайлан, ахиц дэвшил ил тод байх нь
              итгэлийг бий болгоно.
            </p>
          </div>
        </div>

        <p className="about-note">
          Фирма дээрх танилцуулгын урт текст, дэлгэрэнгүй тайлбарыг бодит төсөл
          дээрээ энд байрлуулж болно.
        </p>
      </section>
    </main>
  );
}
