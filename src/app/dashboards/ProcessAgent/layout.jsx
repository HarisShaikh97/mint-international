"use client";
import Image from "next/image";
import { Avatar } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AccountantLayout({ children }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  // Fetch cookie values client-side
  useEffect(() => {
    const f_name = Cookies.get("firstName");
    const l_name = Cookies.get("lastName");

    if (f_name) setFirstName(f_name);
    if (l_name) setLastName(l_name);
  }, []);

  const handleLogout = () => {
    Cookies.remove("role");
    router.replace("/");
  };

  return (
    <section>
      <div className="h-24 w-full border-b-2 border-secondary flex items-center justify-between px-2 md:px-10">
        <div className="w-[150px]">
          <Image
            src={"/images/mint-international-logo.png"}
            alt="logo"
            height={50}
            width={100}
          />
        </div>
        <h1 className="text-bold text-sm lg:text-2xl font-extrabold text-primary">
          Process Agent Dashboard
        </h1>
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="text-bold flex gap-2 text-sm lg:text-xl font-bold text-primary">
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <Avatar alt="Remy Sharp" src="\images\avatar.jfif" />
        </div>
        <button
          onClick={handleLogout}
          className="px-3 border-primary rounded-xl py-2 border-2"
        >
          Logout
        </button>
      </div>
      {children}
    </section>
  );
}
