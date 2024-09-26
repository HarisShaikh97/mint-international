"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { FallingLines } from "react-loader-spinner";
import Cookies from "js-cookie";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${API_URL}/employee/login`, {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        toast.success("Login SuccessFull");
        if (response?.data?.data?.role == "accountant") {
          router.push("/dashboards/Accountant");
        }
        if (response?.data?.data?.role == "processAgent") {
          router.push("/dashboards/ProcessAgent");
        }
        if (response?.data?.data?.role == "receptionist") {
          router.push("/dashboards/Receptionist");
        }
        setIsLoading(false);
        Cookies.set("role", response?.data?.data?.role);
        Cookies.set("firstName", response?.data?.data?.firstName);
        Cookies.set("lastName", response?.data?.data?.lastName);
      })
      .catch((error) => {
        toast.error(error?.message || "An Error Occurred");
      });
  };

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
        <div className="w-[500px] rounded-lg shadow-2xl border border-primary flex flex-col gap-20 p-7">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold text-primary">Email:</p>
            <input
              type="email"
              className="h-10 w-full bg-secondary bg-opacity-10 border-b border-primary outline-none px-3"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold text-primary">Password:</p>
            <input
              type="password"
              className="h-10 w-full bg-secondary bg-opacity-10 border-b border-primary outline-none px-3"
              placeholder="*********"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            className="h-12 w-40 rounded bg-secondary flex self-center items-center justify-center text-lg text-white font-semibold"
            onClick={handleSubmit}
          >
            {isLoading ? (
              <FallingLines
                color="#ffffff"
                width="50"
                visible={true}
                ariaLabel="falling-circles-loading"
              />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
