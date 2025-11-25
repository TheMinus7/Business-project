export default function Home() {
  return (
    <main className="hero">
      <div className="hero-inner">
        <div className="hero-row">
          <div className="hero-circle circle-left">
            <div className="circle-text">
              Хэн ч байсан
              <br />
              өөрчлөлт авчрах
              <br />
              эрхтэй
            </div>
          </div>

          <div className="hero-circle circle-center">
            <div className="circle-text">ТА БЭЛЭН ҮҮ?</div>
          </div>

          <div className="hero-circle circle-right">
            <div className="circle-text">
              Ирээдүйг хамтдаа
              <br />
              санхүүжье
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="donate-card">
            <div className="card-text">
              Таны дэмжлэг
              <br />
              ирээдүйг өөрчилнө.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
