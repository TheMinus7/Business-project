export const metadata = { title: "Donation · Fund" };

export default function DonationPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Хандив</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              placeholder="Дүн"
              className="bg-transparent border border-white/15 rounded-xl px-4 py-3"
            />
            <input
              placeholder="Имэйл"
              className="bg-transparent border border-white/15 rounded-xl px-4 py-3"
            />
          </div>
          <button className="mt-4 rounded-full bg-[#a8e063] text-black px-5 py-3 font-medium">
            Баталгаажуулж илгээх
          </button>
        </div>
        <aside className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <p className="text-white/70 text-sm">
            Фигма дээрх мэдээлэл, ашиг тус, анхааруулгууд.
          </p>
        </aside>
      </div>
    </>
  );
}
