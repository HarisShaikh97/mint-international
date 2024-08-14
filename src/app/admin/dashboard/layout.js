import Header from "@/components/header/Header"
import SideNav from "@/components/side-nav/SideNav"

export default function Layout({ children }) {
	return (
		<div className="flex-1 h-screen flex flex-row">
			<SideNav />
			<div className="flex-1 flex flex-col">
				<Header />
				{children}
			</div>
		</div>
	)
}
