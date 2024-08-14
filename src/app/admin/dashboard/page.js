"use client"
import { useState, useEffect } from "react"

export default function Dashboard() {
	const [accessToken, setAccessToken] = useState("")

	useEffect(() => {
		setAccessToken(localStorage.getItem("accessToken"))
	}, [])

	return <main></main>
}
