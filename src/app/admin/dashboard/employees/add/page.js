"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddEmployee() {
  const router = useRouter();
  const [items, setItems] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    phone: "",
  });
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItems({
      ...items,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!items) {
      toast.error("All Fields Are Required");
    }
    axios
      .post(`${API_URL}/employee/create`, items)
      .then((response) => {
        toast.success(response?.data?.message || "Employee Created");
        router.push("/admin/dashboard/employees");
      })
      .catch((err) => {
        toast.error(err?.message || "An Error Occurred");
      });
  };

  return (
    <form onSubmit={handleAdd} className="flex-1 flex flex-col gap-16 p-10">
      <p className="text-3xl font-semibold text-primary">Add New Employee</p>
      <div className="flex flex-col w-full gap-5">
        <div className="w-full flex flex-row gap-5 items-center">
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">First Name</p>
            <input
              type="text"
              name="firstName"
              onChange={handleInputChange}
              value={items.firstName}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Last Name</p>
            <input
              type="text"
              name="lastName"
              value={items.lastName}
              onChange={handleInputChange}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Email</p>
            <input
              type="email"
              name="email"
              value={items.email}
              onChange={handleInputChange}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
        </div>
        <div className="w-full flex flex-row gap-5 items-center">
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Phone</p>
            <input
              type="text"
              name="phone"
              value={items.phone}
              onChange={handleInputChange}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Designation</p>
            <select
              type="text"
              name="role"
              onChange={handleInputChange}
              value={items.role}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            >
              <option value={""}>Select Designation</option>
              <option value={"receptionist"}>Receptionist</option>
              <option value={"processAgent"}>Process Agent</option>
              <option value={"accountant"}>Accountant</option>
            </select>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="font-semibold">Password</p>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              value={items.password}
              className="h-10 w-full border border-gray-300 rounded-md px-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-5 self-end">
        <button className="h-12 w-40 rounded-lg flex items-center justify-center text-lg font-semibold bg-primary text-white">
          Save
        </button>
        <button
          className="h-12 w-40 rounded-lg border-2 border-primary flex items-center justify-center text-lg font-semibold text-primary"
          onClick={() => {
            router?.back();
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
