"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import {
	HomeIcon,
	UsersIcon,
	UserGroupIcon,
	BuildingOffice2Icon
} from "@heroicons/react/24/solid"

export default function SideNav() {
	const pathname = usePathname()

	console.log(pathname)

	return (
		<div className="h-full w-52 bg-primary bg-opacity-25 shadow-xl flex flex-col gap-20 items-center px-3 py-10">
			<Image
				src={"/images/mint-international-logo.png"}
				alt="logo"
				height={50}
				width={125}
			/>
			<div className="flex flex-col gap-3 w-full">
				<div
					className={`h-10 w-full flex flex-row items-center gap-3 px-2 ${
						pathname === "/admin/dashboard" &&
						"bg-white rounded-md shadow-lg"
					}`}
				>
					<HomeIcon className="size-6 text-primary" />
					<p className="text-lg text-primary font-semibold">Home</p>
				</div>
				<div
					className={`h-10 w-full flex flex-row items-center gap-3 px-2 ${
						pathname === "/admin/employees" &&
						"bg-white rounded-md shadow-lg"
					}`}
				>
					<UsersIcon className="size-6 text-primary" />
					<p className="text-lg text-primary font-semibold">
						Employees
					</p>
				</div>
				<div
					className={`h-10 w-full flex flex-row items-center gap-3 px-2 ${
						pathname === "/admin/companies" &&
						"bg-white rounded-md shadow-lg"
					}`}
				>
					<BuildingOffice2Icon className="size-6 text-primary" />
					<p className="text-lg text-primary font-semibold">
						Companies
					</p>
				</div>
				<div
					className={`h-10 w-full flex flex-row items-center gap-3 px-2 ${
						pathname === "/admin/candidates" &&
						"bg-white rounded-md shadow-lg"
					}`}
				>
					<UserGroupIcon className="size-6 text-primary" />
					<p className="text-lg text-primary font-semibold">
						Candidates
					</p>
				</div>
			</div>
		</div>
	)
}
