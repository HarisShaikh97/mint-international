import CandidateTable from "@/components/candidate-table/Candidate-Table";

export default function Candidates() {
  return (
    <main className="flex-1 flex flex-col gap-5 p-10">
      <p className="text-3xl font-semibold text-primary">Candidates</p>
      <CandidateTable />
    </main>
  );
}
