import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import FinaceChart from "@/components/FinaceChart";
import UserCard from "@/components/UserCard";

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
        {/* user card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* middal chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* counter chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* attendent */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* bottom chart */}
        <div className="w-full h-[500px]">
          <FinaceChart />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
}
