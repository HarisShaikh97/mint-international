"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import PropTypes from "prop-types"
import {
	MagnifyingGlassIcon,
	ChevronUpIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	PencilSquareIcon,
	EyeIcon
} from "@heroicons/react/24/solid"
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export default function EmployeeTable({ data }) {
	const router = useRouter()

	const [pageNumber, setPageNumber] = useState(0)
	const [paginationStart, setPaginationStart] = useState(0)
	const [paginationEnd, setPaginationEnd] = useState(0)
	const [itemsPerPage, setItemsPerPage] = useState(10)

	const chunkArray = (array, chunkSize) => {
		const result = []
		for (let i = 0; i < array.length; i += chunkSize) {
			result.push(array.slice(i, i + chunkSize))
		}
		return result
	}

	const paginated_data = chunkArray(data, itemsPerPage)

	useEffect(() => {
		if (
			pageNumber >= paginated_data?.length &&
			paginated_data?.length > 0
		) {
			setPageNumber(paginated_data?.length - 1)
		}
		if (pageNumber === 0) {
			setPaginationStart(pageNumber)
			setPaginationEnd(pageNumber + 4)
		} else if (pageNumber === 1) {
			setPaginationStart(pageNumber - 1)
			setPaginationEnd(pageNumber + 3)
		} else if (pageNumber === paginated_data?.length - 1) {
			setPaginationStart(pageNumber - 4)
			setPaginationEnd(pageNumber)
		} else if (pageNumber === paginated_data?.length - 2) {
			setPaginationStart(pageNumber - 3)
			setPaginationEnd(pageNumber + 1)
		} else {
			setPaginationStart(pageNumber - 2)
			setPaginationEnd(pageNumber + 2)
		}
	}, [pageNumber, paginated_data?.length])

	return (
		<div className="flex-1 w-full border border-gray-400 rounded-xl p-5 flex flex-col justify-between">
			<div className="w-full flex flex-row items-center justify-between">
				<div className="h-10 w-60 border rounded-lg flex flex-row items-center gap-2 px-2">
					<MagnifyingGlassIcon className="h-6 w-6 text-black" />
					<input
						type="text"
						placeholder="Search"
						className="w-full outline-none"
					/>
				</div>
				<button
					className="h-12 bg-primary rounded-lg flex flex-row items-center gap-2 px-3"
					onClick={() => {
						// router.push(
						// 	"/dashboard/customer-management/add-employee"
						// )
					}}
				>
					<PlusCircleIcon className="size-7 text-white" />
					<p className="text-white text-sm font-light">
						Add New Employee
					</p>
				</button>
			</div>
			<div className="h-[80%] w-full flex flex-col gap-8">
				<div className="grid grid-cols-7 text-sm text-primary font-semibold">
					<p>First Name</p>
					<p>Last Name</p>
					<p>Email</p>
					<p>Phone no.</p>
					<p>Designation</p>
					<p>Password</p>
					<p className="w-full text-center">Action</p>
				</div>
				<div className="flex-1 flex flex-col gap-7 overflow-y-auto scrollbar-none">
					{paginated_data[pageNumber]?.map((item, key) => {
						return (
							<div className="grid grid-cols-7 text-xs" key={key}>
								<p className="truncate pr-5">
									{item?.firstName}
								</p>
								<p className="truncate pr-5">
									{item?.lastName}
								</p>
								<p className="truncate pr-5">{item?.email}</p>
								<p className="truncate pr-5">{item?.phone}</p>
								<p className="truncate pr-5">
									{item?.designation}
								</p>
								<p className="pr-5">{item?.password}</p>
								<div className="w-full flex flex-row items-center justify-center gap-5">
									<button
										onClick={() => {
											// router?.push(
											// 	`/dashboard/customer-management/edit-employee/${item?._id}`
											// )
										}}
									>
										<PencilSquareIcon className="size-5 text-primary" />
									</button>
									<button
										onClick={() => {
											// setCustomerToDelete(item?._id)
										}}
									>
										<EyeIcon className="size-5 text-primary" />
									</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className="w-full flex flex-row items-center justify-between">
				<div className="flex flex-row items-center gap-5">
					<p className="text-xs">Showing</p>
					<div className="h-10 w-14 border rounded-lg flex flex-row items-center justify-between px-2">
						<p className="text-xs">{itemsPerPage}</p>
						<div className="flex flex-col items-center justify-center gap-1">
							<button
								onClick={() => {
									if (itemsPerPage < 10) {
										setItemsPerPage(itemsPerPage + 1)
									}
								}}
							>
								<ChevronUpIcon
									className={`size-3 transform-gpu ease-in-out duration-500 ${
										itemsPerPage < 10
											? "text-black"
											: "text-gray-300"
									}`}
								/>
							</button>
							<button
								onClick={() => {
									if (itemsPerPage > 5) {
										setItemsPerPage(itemsPerPage - 1)
									}
								}}
							>
								<ChevronDownIcon
									className={`size-3 transform-gpu ease-in-out duration-500 ${
										itemsPerPage > 5
											? "text-black"
											: "text-gray-300"
									}`}
								/>
							</button>
						</div>
					</div>
				</div>
				<p className="text-xs">
					Showing{" "}
					{paginated_data?.length > 0
						? pageNumber * itemsPerPage + 1
						: 0}{" "}
					to{" "}
					{paginated_data?.length > 0
						? (pageNumber + 1) * itemsPerPage -
						  (itemsPerPage - paginated_data[pageNumber]?.length)
						: 0}{" "}
					out of {data?.length} records
				</p>
				<div className="flex flex-row items-center gap-3">
					<button
						onClick={() => {
							if (pageNumber > 0) {
								setPageNumber(pageNumber - 1)
							}
						}}
					>
						<ChevronLeftIcon
							className={`size-4 transform-gpu ease-in-out duration-500 ${
								pageNumber > 0 ? "text-black" : "text-gray-300"
							}`}
						/>
					</button>
					<div className="flex flex-row items-center gap-1">
						{paginated_data?.map((_, key) => {
							if (
								key >= paginationStart &&
								key <= paginationEnd
							) {
								return (
									<button
										key={key}
										onClick={() => {
											setPageNumber(key)
										}}
										className={`size-7 transform-gpu ease-in-out duration-500 border rounded-lg ${
											pageNumber === key
												? "border-primary text-primary"
												: "border-transparent"
										} text-xs flex items-center justify-center`}
									>
										{key + 1}
									</button>
								)
							}
						})}
					</div>
					<button
						onClick={() => {
							if (pageNumber < paginated_data?.length - 1) {
								setPageNumber(pageNumber + 1)
							}
						}}
					>
						<ChevronRightIcon
							className={`size-4 transform-gpu ease-in-out duration-500 ${
								pageNumber < paginated_data?.length - 1
									? "text-black"
									: "text-gray-300"
							}`}
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

EmployeeTable.propTypes = {
	data: PropTypes.array.isRequired
}
