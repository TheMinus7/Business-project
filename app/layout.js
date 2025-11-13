// app/layout.js
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fund — Community Funding",
  description: "Transparent & trusted community funding platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body className={inter.className}>
        <header className="site-header">
          <div className="container row">
            <Link href="/" className="brand">
              <span className="logo-dot" />
              <span>Fund</span>
            </Link>

            <nav className="nav">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/donation" className="nav-link">
                Donation
              </Link>
              <Link href="/how-it-works" className="nav-link">
                How It Works
              </Link>
              <Link href="/about" className="nav-link">
                About Us
              </Link>
            </nav>

            <div className="actions">
              <Link href="/download" className="btn btn-primary">
                Download App
              </Link>
            </div>
          </div>
        </header>

        <main className="container">{children}</main>
      </body>
    </html>
  );
}
