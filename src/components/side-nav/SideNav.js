"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import {
	HomeIcon,
	UsersIcon,
	UserGroupIcon,
	BuildingOffice2Icon
} from "@heroicons/react/24/solid"

export default function SideNav() {
	const pathname = usePathname()

	const router = useRouter()

	return (
		<div className="h-full w-60 bg-primary bg-opacity-25 shadow-xl flex flex-col gap-20 items-center px-3 py-10">
			<Image
				src={"/images/mint-international-logo.png"}
				alt="logo"
				height={50}
				width={125}
			/>
			<div className="flex flex-col gap-5 w-full">
				<button
					className={`h-10 w-full flex flex-row items-center gap-3 px-2 transform-gpu ease-in-out duration-500 ${
						pathname === "/admin/dashboard" &&
						"bg-white rounded-md shadow-lg"
					}`}
					onClick={() => {
						if (pathname !== "/admin/dashboard") {
							router?.push("/admin/dashboard")
						}
					}}
				>
					<HomeIcon className="size-6 text-primary" />
					<p className="text-lg text-primary font-semibold">Home</p>
				</button>
				<button
					className={`h-10 w-full flex flex-row items-center gap-3 px-2 transform-gpu ease-in-out duration-500 ${
						pathname?.includes("/admin/dashboard/employees") &&
						"bg-white rounded-md shadow-lg"
					}`}
					onClick={() => {
						if (pathname !== "/admin/dashboard/employees") {
							router?.push("/admin/dashboard/employees")
						}
					}}
				>
					<UsersIcon className="size-6 text-primary" />
					<p className="text-lg text-primary font-semibold">
						Employees
					</p>
				</button>
				<button
					className={`h-10 w-full flex flex-row items-center gap-3 px-2 transform-gpu ease-in-out duration-500 ${
						pathname === "/admin/companies" &&
						"bg-white rounded-md shadow-lg"
					}`}
				>
					<BuildingOffice2Icon className="size-6 text-primary" />
					<p className="text-lg text-primary font-semibold">
						Companies
					</p>
				</button>
				<button
					className={`h-10 w-full flex flex-row items-center gap-3 px-2 transform-gpu ease-in-out duration-500 ${
						pathname === "/admin/candidates" &&
						"bg-white rounded-md shadow-lg"
					}`}
				>
					<UserGroupIcon className="size-6 text-primary" />
					<p className="text-lg text-primary font-semibold">
						Candidates
					</p>
				</button>
			</div>
		</div>
	)
}
