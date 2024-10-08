import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Mint International",
	description:
		"International Recruitment of Manpower & Executive Search Company"
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Toaster />
				{children}
			</body>
		</html>
	)
}
