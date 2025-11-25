"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function SignUpPage() {
  const router = useRouter();
  const { signIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn();
    router.push("/investment");
  };

  return (
    <main className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">Sign up</h1>
        <p className="login-subtitle">
          Шинэ акаунт үүсгэж, CrowdFund платформд нэгдээрэй.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Нэр
            </label>
            <input
              id="name"
              type="text"
              className="form-input"
              placeholder="Таны нэр"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Нууц үг
            </label>
            <input
              id="password"
              type="password"
              className="form-input"
              placeholder="••••••••"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirm">
              Нууц үг дахин
            </label>
            <input
              id="confirm"
              type="password"
              className="form-input"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="primary-btn">
            Sign up
          </button>
        </form>

        <p className="login-switch">
          Аль хэдийн акаунттай юу?{" "}
          <Link href="/signin" className="link-text">
            Sign in
          </Link>
        </p>

        <p className="login-hint">
          Энэ хэсэг одоогоор зөвхөн UI, мэдээлэл сервер лүү хадгалагдахгүй.
        </p>
      </div>
    </main>
  );
}
