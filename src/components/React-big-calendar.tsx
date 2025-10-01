"use client";
import { calendarEvents } from "@/lib/data";
import moment from "moment";
import { useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div style={{ height: "90vh" }}>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={[Views.WORK_WEEK, Views.DAY]}
        view={view}
        onView={handleOnChangeView}
        style={{ height: "98%" }}
        min={new Date(2025, 11, 8, 8, 0)} // Dec 8, 2025, 8:00 AM
        max={new Date(2025, 11, 20, 18, 0)} // Dec 20, 2025, 6:00 PM
      />
    </div>
  );
};

export default BigCalendar;
