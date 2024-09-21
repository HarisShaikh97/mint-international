"use client";

import { BackwardIcon } from "@heroicons/react/24/outline";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CandidateForm() {
  const param = useParams();
  const id = param.id;
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://5rrdzg3k-8000.inc1.devtunnels.ms/employee/get/${id}`)
      .then((res) => {
        setData(res?.data?.data);
        console.log(res);
      })
      .catch((err) => {
        toast.error(err.message || "An Error Occurred While Fetching Details");
      });
  }, [id]);

  return (
    <>
      <h1 className="text-3xl flex gap-4 font-bold text-primary mt-4 ml-2">
        Employee Details
        <button>
          <ArrowLeftCircleIcon
            className="size-8"
            onClick={() => {
              router.back();
            }}
          />
        </button>
      </h1>

      {data ? (
        <div className="mt-4 p-4  ">
          <ul className="space-y-2 flex flex-col gap-4">
            <li>
              <span className="font-semibold text-primary">First Name:</span>{" "}
              {data.firstName}
            </li>
            <li>
              <span className="font-semibold text-primary">Last Name:</span>{" "}
              {data.lastName}
            </li>
            <li>
              <span className="font-semibold text-primary">Phone:</span>{" "}
              {data.phone}
            </li>
            <li>
              <span className="font-semibold text-primary">Email:</span>{" "}
              {data.email}
            </li>
            <li>
              <span className="font-semibold text-primary">Role:</span>{" "}
              {data.role}
            </li>
            <li>
              <span className="font-semibold text-primary">Password:</span>{" "}
              {data.password}
            </li>
          </ul>
        </div>
      ) : (
        <p className="mt-4 text-gray-600">Loading...</p>
      )}
    </>
  );
}
