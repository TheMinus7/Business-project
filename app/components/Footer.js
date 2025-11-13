export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Fund
        </p>
        <div className="flex gap-6 text-sm">
          <a href="/about" className="hover:text-white/90">
            Бидний талаар
          </a>
          <a href="/how-it-works" className="hover:text-white/90">
            Яаж ажилладаг вэ
          </a>
          <a href="/donation" className="hover:text-white/90">
            Хандив
          </a>
        </div>
      </div>
    </footer>
  );
}
