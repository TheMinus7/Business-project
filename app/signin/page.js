"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function SignInPage() {
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
        <h1 className="login-title">Sign in</h1>
        <p className="login-subtitle">
          Өөрийн акаунтаар нэвтэрч, төслүүдээ удирдаарай.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="primary-btn">
            Sign in
          </button>
        </form>

        <p className="login-switch">
          Акаунтгүй юу?{" "}
          <Link href="/signup" className="link-text">
            Sign up
          </Link>
        </p>

        <p className="login-hint">
          Одоогоор энэ хэсэг зөвхөн UI загвар бөгөөд мэдээлэл сервер дээр
          хадгалагдахгүй.
        </p>
      </div>
    </main>
  );
}
