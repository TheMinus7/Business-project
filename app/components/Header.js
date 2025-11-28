"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const loggedOutNav = [
  { href: "/investment", label: "Хөрөнгө оруулалт" },
  { href: "/donation", label: "Хандив тусламж" },
  { href: "/signin", label: "Sign in" },
];

const loggedInNav = [
  { href: "/investment", label: "Хөрөнгө оруулалт" },
  { href: "/donation", label: "Хандив тусламж" },
  { href: "/about", label: "Бидний тухай" },
  { href: "/team", label: "Бүлгэм" },
  { href: "/settings", label: "Settings" },
];

export default function Header() {
  const pathname = usePathname();
  const { loggedIn } = useAuth();

  const navItems = loggedIn ? loggedInNav : loggedOutNav;

  return (
    <header className="top-bar">
      <div className="logo">
        <img src="/img/6.png" alt="CrowdFund logo" className="logo-img" />
        <span className="logo-text">
          <Link href="/">CrowdFund</Link>
        </span>
      </div>
      <nav className="nav">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              "nav-link" + (pathname === item.href ? " nav-link-active" : "")
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
