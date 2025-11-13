"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["500", "600", "700"] });

const nav = [
  { href: "/", label: "Home" },
  { href: "/donation", label: "Donation" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Us" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-t-4 border-sky-500">
      <div className="mx-auto flex max-w-[1200px] items-center gap-6 bg-white px-6 py-4">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
            <path
              fill="#A7D866"
              d="M12 2l1.9 4.3L18 4l-2.3 3.8L20 9l-4.3 1.9L18 14l-4.1-.9L12 18l-1.9-4.9L6 14l2.3-3.1L4 9l4.3-1.2L6 4l4.1 2.3L12 2z"
            />
          </svg>
          <span
            className={`${inter.className} text-[26px] font-bold text-[#1b1b1b]`}
          >
            Fund
          </span>
        </Link>

        <span className="select-none text-gray-300">|</span>

        <nav className="flex items-center gap-6">
          {nav.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`${inter.className} relative text-[18px] font-medium text-[#1b1b1b] opacity-90 hover:opacity-100`}
              >
                <span
                  className={active ? "border-b-2 border-sky-500 pb-1" : ""}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
