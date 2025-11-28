"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function SettingsPage() {
  const router = useRouter();
  const { loggedIn, signOut } = useAuth();

  const handleLogout = () => {
    signOut();
    router.push("/signin");
  };

  return (
    <main className="page">
      <section className="section">
        <h1 className="section-title">Settings</h1>
        <p className="section-description">
          Акаунтын мэдээлэл, профайл болон аюулгүй байдлын үндсэн тохиргоог энд
          байрлуулж болно. Одоогоор жишээ UI байдлаар харуулж байна.
        </p>

        <div className="settings-grid">
          <div className="settings-card">
            <h2 className="settings-title">Профайл</h2>
            <p className="settings-text">
              Ирээдүйд энд таны нэр, имэйл, байгууллага зэрэг профайл мэдээлэл
              харагдах боломжтой.
            </p>

            <div className="settings-list">
              <div className="settings-item">
                <span className="settings-label">Нэр</span>
                <span className="settings-value">Хэрэглэгч</span>
              </div>
              <div className="settings-item">
                <span className="settings-label">Имэйл</span>
                <span className="settings-value">you@example.com</span>
              </div>
              <div className="settings-item">
                <span className="settings-label">Төрөл</span>
                <span className="settings-value">
                  {loggedIn ? "Идэвхтэй акаунт" : "Нэвтрээгүй"}
                </span>
              </div>
            </div>
          </div>

          <div className="settings-card">
            <h2 className="settings-title">Мэдэгдэл ба аюулгүй байдал</h2>
            <p className="settings-text">
              Нууц үг солих, мэдэгдэл авах хэлбэр, аюулгүй байдлын нэмэлт
              тохиргоог ирээдүйд энд байрлуулж болно.
            </p>

            <div className="settings-list">
              <div className="settings-item">
                <span className="settings-label">Имэйл мэдэгдэл</span>
                <span className="settings-value">Идэвхтэй</span>
              </div>
              <div className="settings-item">
                <span className="settings-label">Хоёр шатлалт нэвтрэлт</span>
                <span className="settings-value">Төлөвлөсөн</span>
              </div>
            </div>

            <div className="settings-actions">
              <button className="secondary-btn small-btn" type="button">
                Нууц үг солих
              </button>
            </div>
          </div>
        </div>

        <div className="settings-logout">
          <div>
            <h2 className="settings-title">Log out</h2>
            <p className="settings-text">
              Акаунтаас гарахыг хүсвэл доорх товчийг дарна уу. Дахин нэвтрэхдээ
              Sign in хуудас руу орно.
            </p>
          </div>
          <button type="button" className="logout-btn" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </section>
    </main>
  );
}
