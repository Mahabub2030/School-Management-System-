import { calendarEvents } from "@/lib/data";
import moment from "moment";
import { useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [viwe, setViwe] = useState<View>(Views.WORK_WEEK);

  const handelOnChangeViwe = (selectedView: View) => {
    setViwe(selectedView);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={viwe}
        style={{ height: "98%" }}
        onView={handelOnChangeViwe}
        min={new Date(2025, 12, 8, 0, 0)}
        max={new Date(2025, 12, 5, 0, 0)}
      />
    </div>
  );
};

export default BigCalendar;
