"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Login() {
	const router = useRouter()

	const handleSubmit = async () => {
		router?.push("/admin/dashboard")
	}

	return (
		<main className="flex-1 h-screen flex flex-col">
			<div className="h-24 w-full bg-primary bg-opacity-35 flex items-center px-10">
				<Image
					src={"/images/mint-international-logo.png"}
					alt="logo"
					height={50}
					width={100}
				/>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center gap-10">
				<p className="text-3xl font-semibold text-primary">Login</p>
				<div className="w-[500px] rounded-lg shadow-2xl border border-primary flex flex-col gap-10 p-7">
					<div className="flex flex-col gap-3">
						<p className="text-lg font-semibold text-primary">
							Email:
						</p>
						<input
							type="email"
							className="h-10 w-full bg-secondary bg-opacity-10 border-b border-primary outline-none px-3"
							placeholder="example@example.com"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-lg font-semibold text-primary">
							Password:
						</p>
						<input
							type="password"
							className="h-10 w-full bg-secondary bg-opacity-10 border-b border-primary outline-none px-3"
							placeholder="*********"
						/>
					</div>
					<button
						className="h-12 w-40 rounded bg-secondary flex self-center items-center justify-center text-lg text-white font-semibold"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>
			</div>
		</main>
	)
}
