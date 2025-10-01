"use client";

import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/React-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function TecherPage() {
  return (
    <div className="p-4 flex-1 flex gap-4 flex-col xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        <div className="w-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold"> Schedule </h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
}
