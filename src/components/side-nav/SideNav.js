"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  HomeIcon,
  UsersIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";
import logo from "../../../public/images/side-bar.png";

export default function SideNav() {
  const pathname = usePathname();

  const router = useRouter();

  return (
    <div className="h-full w-60 shadow-xl flex flex-col gap-20 items-center justify-between px-3 py-10">
      <Image
        src={"/images/mint-international-logo.png"}
        alt="logo"
        height={50}
        width={125}
      />
      <div className="flex flex-col gap-8 w-full">
        <button
          className={`h-14 w-full flex flex-row items-center gap-3 px-2  transform-gpu  bg-button2 bg-opacity-15 ease-in-out duration-500 ${
            pathname === "/admin/dashboard" &&
            "bg-gradient-to-r from-[#295292] to-[#4AC5E2] rounded-md shadow-lg"
          }`}
          onClick={() => {
            if (pathname !== "/admin/dashboard") {
              router?.push("/admin/dashboard");
            }
          }}
        >
          <HomeIcon
            className={`size-6  ${
              pathname === "/admin/dashboard" ? "text-white" : "text-[#295292]"
            }`}
          />
          <p
            className={`text-lg ${
              pathname === "/admin/dashboard" ? "text-white" : "text-[#295292]"
            }`}
          >
            Home
          </p>
        </button>
        <button
          className={`h-14 w-full flex flex-row items-center gap-3 bg-button2 bg-opacity-15  px-2 transform-gpu ease-in-out duration-500 ${
            pathname?.includes("/admin/dashboard/employees") &&
            "bg-gradient-to-r from-[#295292] to-[#4AC5E2] rounded-md shadow-lg"
          }`}
          onClick={() => {
            if (pathname !== "/admin/dashboard/employees") {
              router?.push("/admin/dashboard/employees");
            }
          }}
        >
          <UsersIcon
            className={`size-6 ${
              pathname?.includes("/admin/dashboard/employees")
                ? "text-white"
                : "text-[#295292]"
            }`}
          />
          <p
            className={`text-lg ${
              pathname?.includes("/admin/dashboard/employees")
                ? "text-white"
                : "text-[#295292]"
            }`}
          >
            Employees
          </p>
        </button>
        <button
          className={`h-14 w-full flex flex-row items-center bg-button2 bg-opacity-15 gap-3 px-2 transform-gpu ease-in-out duration-500 ${
            pathname?.includes("/admin/dashboard/candidates") &&
            "bg-gradient-to-r from-[#295292] to-[#4AC5E2] rounded-md shadow-lg"
          }`}
          onClick={() => {
            if (pathname !== "/admin/dashboard/candidates") {
              router?.push("/admin/dashboard/candidates");
            }
          }}
        >
          <UserGroupIcon
            className={`size-6 ${
              pathname?.includes("/admin/dashboard/candidates")
                ? "text-white"
                : "text-[#295292]"
            }`}
          />
          <p
            className={`text-lg ${
              pathname?.includes("/admin/dashboard/candidates")
                ? "text-white"
                : "text-[#295292]"
            }`}
          >
            Candidates
          </p>
        </button>
        <button
          className={`h-14 w-full flex flex-row items-center bg-button2 bg-opacity-15 gap-3 px-2 transform-gpu ease-in-out duration-500 ${
            pathname === "/admin/dashboard/companies" &&
            "bg-gradient-to-r from-[#295292] to-[#4AC5E2] rounded-md shadow-lg"
          }`}
        >
          <BuildingOffice2Icon
            className={`size-6 text-primary ${
              pathname === "/admin/dashboard/companies"
                ? "text-white"
                : "text-[#295292]"
            }`}
          />
          <p
            className={`text-lg ${
              pathname === "/admin/dashboard/companies"
                ? "text-white"
                : "text-[#295292]"
            }`}
          >
            Companies
          </p>
        </button>
      </div>
      <Image src={logo} width={200} height={400} alt="logo.png" />
    </div>
  );
}
