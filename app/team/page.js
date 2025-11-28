export const metadata = { title: "Team · Fund" };
export default function TeamPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        Бидний тухай
      </h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-white/70 leading-7">
            Эрхэм зорилго, үнэт зүйл, ил тод байдал.
          </p>
          <p className="text-white/70 leading-7">
            Фигма дээрх танилцуулгын урт текстээ энд байрлуул.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 h-64" />
      </div>
    </>
  );
}
