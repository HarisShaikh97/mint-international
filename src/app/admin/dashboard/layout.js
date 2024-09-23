"use client";
import Header from "@/components/header/Header";
import SideNav from "@/components/side-nav/SideNav";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [role, setRole] = useState("");
  useEffect(() => {
    const role = Cookies.get("role");
    setRole(role);
    console.log(role);
  }, []);
  return (
    <div className="flex-1 h-screen flex flex-row">
      {role == "receptionist" ? null : <SideNav />}{" "}
      <div className="flex-1 flex flex-col">
        {role == "receptionist" ? null : <Header />}

        {children}
      </div>
    </div>
  );
}
