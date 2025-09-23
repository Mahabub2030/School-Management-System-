"use client";

import Announcements from "@/components/Announcements";
import EventCalendar from "@/components/EventCalendar";
import BigCalendar from "@/components/React-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function StudensPage() {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        <div className="w-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold"> Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}
