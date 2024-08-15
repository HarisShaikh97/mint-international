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
		<div className="h-full w-60 shadow-xl flex flex-col gap-20 items-center px-3 py-10">
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
						"bg-primary rounded-md shadow-lg"
					}`}
					onClick={() => {
						if (pathname !== "/admin/dashboard") {
							router?.push("/admin/dashboard")
						}
					}}
				>
					<HomeIcon
						className={`size-6  ${
							pathname === "/admin/dashboard"
								? "text-white"
								: "text-primary"
						}`}
					/>
					<p
						className={`text-lg ${
							pathname === "/admin/dashboard"
								? "text-white"
								: "text-primary"
						}`}
					>
						Home
					</p>
				</button>
				<button
					className={`h-10 w-full flex flex-row items-center gap-3 px-2 transform-gpu ease-in-out duration-500 ${
						pathname?.includes("/admin/dashboard/employees") &&
						"bg-primary rounded-md shadow-lg"
					}`}
					onClick={() => {
						if (pathname !== "/admin/dashboard/employees") {
							router?.push("/admin/dashboard/employees")
						}
					}}
				>
					<UsersIcon
						className={`size-6 ${
							pathname?.includes("/admin/dashboard/employees")
								? "text-white"
								: "text-primary"
						}`}
					/>
					<p
						className={`text-lg ${
							pathname?.includes("/admin/dashboard/employees")
								? "text-white"
								: "text-primary"
						}`}
					>
						Employees
					</p>
				</button>
				<button
					className={`h-10 w-full flex flex-row items-center gap-3 px-2 transform-gpu ease-in-out duration-500 ${
						pathname?.includes("/admin/dashboard/candidates") &&
						"bg-primary rounded-md shadow-lg"
					}`}
					onClick={() => {
						if (pathname !== "/admin/dashboard/candidates") {
							router?.push("/admin/dashboard/candidates")
						}
					}}
				>
					<UserGroupIcon
						className={`size-6 ${
							pathname?.includes("/admin/dashboard/candidates")
								? "text-white"
								: "text-primary"
						}`}
					/>
					<p
						className={`text-lg ${
							pathname?.includes("/admin/dashboard/candidates")
								? "text-white"
								: "text-primary"
						}`}
					>
						Candidates
					</p>
				</button>
				<button
					className={`h-10 w-full flex flex-row items-center gap-3 px-2 transform-gpu ease-in-out duration-500 ${
						pathname === "/admin/dashboard/companies" &&
						"bg-primary rounded-md shadow-lg"
					}`}
				>
					<BuildingOffice2Icon
						className={`size-6 text-primary ${
							pathname === "/admin/dashboard/companies"
								? "text-white"
								: "text-primary"
						}`}
					/>
					<p
						className={`text-lg ${
							pathname === "/admin/dashboard/companies"
								? "text-white"
								: "text-primary"
						}`}
					>
						Companies
					</p>
				</button>
			</div>
		</div>
	)
}
