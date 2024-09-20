"use client";
import CandidateTable from "@/components/candidate-table/Candidate-Table";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Candidates() {
  const [candidate, setCandidate] = useState([]);

  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  useEffect(() => {
    const FetchData = () => {
      axios
        .get(`${API_URL}/applicant/get`)
        .then((response) => {
          console.log(response);
          setCandidate(response?.data);
        })
        .catch((error) => {
          toast.error(error?.message || "An Error Occurred");
        });
    };
    FetchData();
  }, []);

  return (
    <main className="flex-1 flex flex-col gap-5 p-10">
      <p className="text-3xl font-semibold text-primary">Candidates</p>
      <CandidateTable data={candidate} />
    </main>
  );
}
