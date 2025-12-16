"use client";

export default function StatsBar() {
  return (
    <section className="-mt-6 px-2  max-[99vw]">
      <div
        className="
          mx-auto
          md:rounded-2xl
          border
          border-white/10
          px-6
          pb-6
          pt-6
          md:pt-10
          backdrop-blur
        "
        style={{
          background:
            "linear-gradient(90deg, #020617 0%, #021B33 40%, #1E1B0A 100%)",
        }}
      >
        <div className="grid grid-cols-2 max-w-4xl mx-auto gap-y-10 gap-x-6 md:grid-cols-4 md:justify-between items-center">
          {/* Stat 1 */}
          <StatItem value="1,000" symbol="+" label="Visas Processed" />

          {/* Stat 2 */}
          <StatItem value="99" symbol="%" label="Success Rate" />

          {/* Stat 3 */}
          <StatItem value="7 " symbol="Days" label="Support Available" />

          {/* Stat 4 */}
          <StatItem value="2 – 4" symbol="" label="Days Processing" />
        </div>
      </div>
    </section>
  );
}

function StatItem({
  value,
  label,
  symbol,
}: {
  value: string;
  label: string;
  symbol?: string;
}) {
  return (
    <div className="text-center ">
      <p className="text-2xl md:text-3xl font-bold text-[#E5B755]">
        {value}
        <span className="text-[#FFF7E4]">{symbol}</span>
      </p>
      <p className="mt-1 text-base md:text-xl text-[#FFF7E4]">{label}</p>
    </div>
  );
}
