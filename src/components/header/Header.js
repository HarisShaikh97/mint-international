import { UserCircleIcon } from "@heroicons/react/24/solid"

export default function Header() {
	return (
		<div className="h-20 w-full bg-primary flex flex-row items-center justify-between px-5">
			<div />
			<UserCircleIcon className="size-10 text-white" />
		</div>
	)
}
