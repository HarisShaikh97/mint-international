"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { FallingLines } from "react-loader-spinner";
import logo from "../../../public/images/m2.png";

export default function Login() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log(API_BASE_URL);

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    const payload = { email, password };
    await axios
      .post(`${API_BASE_URL}/admin/login`, payload)
      ?.then((res) => {
        console.log(res);
        localStorage.setItem("accessToken", res?.data?.accessToken);
        toast.success("Login successful!");
        setIsLoading(false);
        router?.push("/admin/dashboard");
      })
      ?.catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || "Invalid Credentials!");
        setIsLoading(false);
      });
  };

  return (
    <main className="flex-1 h-screen flex flex-col">
      <div className="flex-1  flex flex-col items-center justify-start mt-10 gap-10">
        <Image src={logo} width={200} height={200} />
        <h1 className="text-5xl font-bold text-center ">
          Sign In To Manage Your <br /> WorkFlow
        </h1>
        <p className="text-[#333333] text-xl text-center ">
          Log in to manage employee details, track candidate <br />
          applications, and streamline your recruitment
        </p>
        <div className="w-[500px] flex flex-col gap-20 p-7">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold ">Email:</p>
            <input
              type="email"
              className="h-10 w-full  outline-none px-3"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Password:</p>
            <input
              type="password"
              className="h-10 w-full  outline-none px-3"
              placeholder="*********"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            className="h-12 w-40 rounded    bg-gradient-to-r from-button1 to-button2 flex self-center items-center justify-center text-lg text-white font-semibold"
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
