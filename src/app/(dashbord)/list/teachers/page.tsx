import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
    className: "hidden md:table-cell",
  },
];

export default function TeacherPage() {
  return (
    <div className="bg-white rounded-md flex-1 m-4 mt-0 p-4 shadow">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="hidden md:block text-lg font-semibold text-gray-700">
          All Teachers
        </h1>
        <div className="flex items-center gap-3 w-full md:w-auto ">
          <TableSearch />
        </div>

        <div className="flex ">
          {/* Filter button */}
          <button className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 hover:bg-gray-100 transition">
            <Image src="/filter.png" alt="filter" width={18} height={18} />
          </button>
        </div>
      </div>

      {/* List */}

      <Table columns={columns} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
}
