"use client";
import EmployeeTable from "@/components/employee-table/EmployeeTable";

export default function Employees() {
  return (
    <main className="flex-1 flex flex-col gap-5 p-10">
      <p className="text-3xl font-semibold text-primary">Employees</p>
      <EmployeeTable />
    </main>
  );
}
