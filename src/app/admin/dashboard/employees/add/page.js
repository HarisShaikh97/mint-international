"use client"

import { useRouter } from "next/navigation"

export default function AddEmployee() {
	const router = useRouter()

	return (
		<main className="flex-1 flex flex-col gap-16 p-10">
			<p className="text-3xl font-semibold text-primary">
				Add New Employee
			</p>
			<div className="flex flex-col w-full gap-5">
				<div className="w-full flex flex-row gap-5 items-center">
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">First Name</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Last Name</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Email</p>
						<input
							type="email"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
				</div>
				<div className="w-full flex flex-row gap-5 items-center">
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Phone</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Designation</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Password</p>
						<input
							type="password"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-row items-center gap-5 self-end">
				<button className="h-12 w-40 rounded-lg flex items-center justify-center text-lg font-semibold bg-primary text-white">
					Save
				</button>
				<button
					className="h-12 w-40 rounded-lg border-2 border-primary flex items-center justify-center text-lg font-semibold text-primary"
					onClick={() => {
						router?.back()
					}}
				>
					Cancel
				</button>
			</div>
		</main>
	)
}
