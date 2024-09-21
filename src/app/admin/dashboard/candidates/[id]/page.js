"use client";
import Form from "@/components/Form";
import { useParams } from "next/navigation";

export default function CandidateForm() {
  const param = useParams();
  const id = param.id;
  return (
    <>
      <Form id={id} />
    </>
  );
}
