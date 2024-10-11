"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div
      className="h-28 w-full bg-primary flex flex-row items-center justify-between px-5"
      style={{ backgroundImage: `url("/images/header.png") ` }}
    >
      <h1 className="text-3xl font-bold text-white">
        {" "}
        {pathname == "/admin/dashboard/employees"
          ? "All Employees"
          : pathname == "/admin/dashboard/candidates"
          ? "All Candidates"
          : null}
      </h1>
      <div />
      <button className="text-[#295292] px-2 py-2 bg-white rounded-md mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
      </button>
    </div>
  );
}
