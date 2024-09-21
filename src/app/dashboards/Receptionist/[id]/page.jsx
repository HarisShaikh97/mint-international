"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CandidateDetails() {
  const params = useParams();
  const id = params?.id;
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://5rrdzg3k-8000.inc1.devtunnels.ms/employee/get/${id}`)
      .then((res) => {
        setData(res?.data?.data);
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Candidate Details</h1>
      <ul>
        <li>First Name: {data?.firstName}</li>
        <li>Last Name: {data?.lastName}</li>
        <li>Password: {data?.password}</li>
        <li>Phone: {data?.phone}</li>
        <li>Role: {data?.role}</li>
        <li>Email: {data?.email}</li>
      </ul>
    </>
  );
}
