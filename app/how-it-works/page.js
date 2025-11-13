export const metadata = { title: "How It Works · Fund" };

const steps = [
  { t: "Төсөл үүсгэх", d: "Мета, зорилго, нотолгоо" },
  { t: "Шалгалт", d: "Баталгаажуулалт" },
  { t: "Санхүүжилт", d: "Комюнитигаас хандив" },
  { t: "Тайлагнал", d: "Ахиц дэвшил, зардлын ил тод байдал" },
];

export default function HowItWorksPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Яаж ажилладаг вэ</h1>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-sm text-white/50 mb-2">Алхам {i + 1}</div>
            <div className="text-xl font-semibold mb-1">{s.t}</div>
            <div className="text-white/70 text-sm">{s.d}</div>
          </li>
        ))}
      </ol>
    </>
  );
}
