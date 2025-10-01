"use client";

import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
];

export default function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Student</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* chart */}
      <div className="relative w-full h-[70%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* bottom */}
      <div className="flex justify-center gap-12 mt-4">
        {/* Boys */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
          <div>
            <h1 className="font-bold">360</h1>
            <h2 className="text-xs text-gray-500">boys (40%)</h2>
          </div>
        </div>

        {/* Girls */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
          <div>
            <h1 className="font-bold">14,544</h1>
            <h2 className="text-xs text-gray-500">girls (70%)</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
