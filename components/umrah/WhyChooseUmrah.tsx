"use client";

export default function WhyChooseUmrah() {
  return (
    <section className="px-4 py-10 md:px-20 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-[99vw]">
        <h2 className="font-normal font-jejumyeongjo text-5xl text-[#061C3D]">
          Why Choose Our Umrah Packages?
        </h2>

        <div className="mt-8 mx-auto gap-6 justify-items-center grid  md:grid-cols-3">
          <div className="rounded-2xl w-96  gap-3 bg-[#E9EFF5] p-6 shadow-sm">
            <div className="border rounded-2xl w-fit bg-white p-2">
              <p className=" text-base font-semibold text-[#000F24]">
                🏆 99% Success Rate
              </p>
            </div>
            <p className="mt-2 text-sm text-[#42526B]">
              Guaranteed visa approval and seamless travel experience
            </p>
          </div>

          <div className="rounded-2xl w-96  gap-3 bg-[#E9EFF5] p-6 shadow-sm">
            <div className="border rounded-2xl w-fit bg-white p-2">
              <p className=" text-base font-semibold text-[#000F24]">
                🌍 1,000+ Pilgrims
              </p>
            </div>
            <p className="mt-2 text-sm text-[#42526B]">
              Successfully served pilgrims from around the world
            </p>
          </div>

          <div className="rounded-2xl w-96  gap-3 bg-[#E9EFF5] p-6 shadow-sm">
            <div className="border rounded-2xl w-fit bg-white p-2">
              <p className=" text-base font-semibold text-[#000F24]">
                ⭐ 5-Star Service
              </p>
            </div>
            <p className="mt-2 text-sm text-[#42526B]">
              Premium service with 7 days/week support throughout your journey{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
