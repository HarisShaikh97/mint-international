"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { XMarkIcon } from "@heroicons/react/24/solid"

export default function AddCandidate() {
	const router = useRouter()

	const [experienceDetails, setExperienceDetails] = useState([
		{ companyName: "", duration: "", trade: "" }
	])

	const handleAddRow = () => {
		setExperienceDetails([
			...experienceDetails,
			{ companyName: "", duration: "", trade: "" }
		])
	}

	const handleRemoveRow = (index) => {
		if (index !== 0) {
			const newExperiences = [...experienceDetails]
			newExperiences?.splice(index, 1)
			setExperienceDetails(newExperiences)
		}
	}

	return (
		<main className="flex-1 flex flex-col gap-16 p-10 overflow-y-auto scrollbar-none">
			<p className="text-3xl font-semibold text-primary">
				Add New Candidate
			</p>
			<div className="flex flex-col w-full gap-5">
				<div className="w-full flex flex-row gap-5 items-center">
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Full Name</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Father{"'"}s Name</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Post Applied For</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Referred By</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
				</div>
				<div className="w-full flex flex-row gap-5 items-center">
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Mobile No (1)</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Mobile No (2)</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Marital Status</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Religion</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
				</div>
				<div className="w-full flex flex-row gap-5 items-center">
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">CNIC No</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Academic Qualifications</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Academic Qualifications</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Languages Known</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
				</div>
				<div className="w-full flex flex-row gap-5 items-center">
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Passport No</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Date of Issue</p>
						<input
							type="date"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Date of Expiry</p>
						<input
							type="date"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">Place of Issue</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="font-semibold">
							Total Experience (Years)
						</p>
						<input
							type="text"
							className="h-10 w-full border border-gray-300 rounded-md px-2"
						/>
					</div>
				</div>
				<div className="w-full flex flex-row items-center justify-between my-5">
					<p className="font-semibold text-lg">Experience Details</p>
					<button
						className="h-10 w-40 items-center justify-center bg-primary rounded-lg text-lg text-white font-semibold"
						onClick={handleAddRow}
					>
						Add row
					</button>
				</div>
				{experienceDetails?.map((item, key) => {
					return (
						<div
							className="w-full flex flex-row gap-5 items-center"
							key={key}
						>
							<div className="w-full flex flex-col gap-2">
								<p className="font-semibold">Company</p>
								<input
									type="text"
									className="h-10 w-full border border-gray-300 rounded-md px-2"
									value={item?.companyName}
									onChange={(e) => {
										const newExperienceDetails = [
											...experienceDetails
										]
										newExperienceDetails[key].companyName =
											e.target.value
										setExperienceDetails(
											newExperienceDetails
										)
									}}
								/>
							</div>
							<div className="w-full flex flex-col gap-2">
								<p className="font-semibold">
									Period From - Upto
								</p>
								<input
									type="text"
									className="h-10 w-full border border-gray-300 rounded-md px-2"
									value={item?.duration}
									onChange={(e) => {
										const newExperienceDetails = [
											...experienceDetails
										]
										newExperienceDetails[key].duration =
											e.target.value
										setExperienceDetails(
											newExperienceDetails
										)
									}}
								/>
							</div>
							<div className="w-full flex flex-col gap-2">
								<p className="font-semibold">Trade</p>
								<input
									type="text"
									className="h-10 w-full border border-gray-300 rounded-md px-2"
									value={item?.trade}
									onChange={(e) => {
										const newExperienceDetails = [
											...experienceDetails
										]
										newExperienceDetails[key].trade =
											e.target.value
										setExperienceDetails(
											newExperienceDetails
										)
									}}
								/>
							</div>
							<button
								className="self-start min-w-10"
								onClick={() => {
									handleRemoveRow(key)
								}}
							>
								{key > 0 && (
									<XMarkIcon className="size-7 text-primary" />
								)}
							</button>
						</div>
					)
				})}
				<div className="w-full flex flex-col gap-2">
					<p className="font-semibold">Remarks</p>
					<textarea className="h-40 w-full border border-gray-300 rounded-md p-2" />
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
