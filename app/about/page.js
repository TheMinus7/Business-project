export default function AboutPage() {
  return (
    <main className="page">
      <section className="section">
        <h1 className="section-title">Бидний тухай</h1>
        <p className="section-description">
          Манай CrowdFund вебсайт нь{" "}
          <strong>Мөнх Тэнгэр Жаргалант Групп</strong>ын санаачлагаар бий болсон
          бөгөөд улсынхаа дотоодын эдийн засгийн эргэлтийг сайжруулах,
          нэмэгдүүлэх зорилгоор хамгийн анх{" "}
          <strong>Тэнгэр Жаргалант Ложистик ХХК</strong>-ийн импортын зуучлалаар
          үйл ажиллагаагаа эхэлж байсан билээ. Ийм зорилготойгоор бид олон
          нийтэд нээлттэй, ил тод, байдлаар олон нийт болон ЖДҮ-үүдэд санхүүгийн
          дэмжлэг үзүүлэх, хөрөнгө оруулалтын боломжийг олгох, хамтран ажиллаж
          илүү ашигтай, үр дүнтэй байхыг зорьж байна.
        </p>

        <div className="about-grid">
          <div className="about-block">
            <h2 className="about-title">Эрхэм зорилго</h2>
            <p className="about-text">
              Бид санаачлагчид болон дэмжигчдийг холбож, ирээдүйд эерэг нөлөө
              үзүүлэх төслүүдийг бодит болгох, хамтын хүчээр улсын дотоодын
              эдийн засгийг хөгжүүлэхэд хувь нэмэр оруулах
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
          <strong>Phone: 85335577</strong> <br />
          <strong>Email: munkhjargal.must@gmail.com</strong> <br />
          IG:
          <a
            href="https://www.instagram.com/the_minus_7/"
            target="_blank"
            className="text-blue-600 underline"
          >
            Minus
          </a>
        </p>
      </section>
    </main>
  );
}
