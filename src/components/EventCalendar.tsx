"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const events = [
  {
    id: 1,
    title: "lorem ipsum",
    time: "12: 00 - 2:00PM",
    description: "lorem ipsume sit amet osnf iammm ammmma",
  },
  {
    id: 2,
    title: "lorem ipsum",
    time: "12: 00 - 2:00PM",
    description: "lorem ipsume sit amet osnf iammm ammmma",
  },
  {
    id: 3,
    title: "lorem ipsum",
    time: "12: 00 - 2:00PM",
    description: "lorem ipsume sit amet osnf iammm ammmma",
  },
];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 boder-t-4  odd:border-t-lamaSky even:border-t-lamaPurple flex"
            key={event.id}
          >
            <div className="flex items-center justify-between bg-red-400">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
