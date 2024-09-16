import Card from "@/components/Dashboard/Card";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Account() {
  return (
    <section className="w-full min-h-screen flex justify-center flex-col gap-3">
      <div className="grid-components w-[100%] h-full mt-4 flex items-center justify-center flex-wrap gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="charts w-[95%] h-full  justify-center flex lg:flex-row flex-col gap-4 mt-4 ">
        <div className="sales-chart w-full md:w-[70%] h-full bg-white shadow-xl rounded-sm">
          <h1 className="font-bold text-xl m-4">Sales</h1>
          <div className="chart w-[90%] h-full flex justify-center">
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["jan", "feb", "march", "april"] },
              ]}
              series={[{ data: [4, 3, 5, 4] }, { data: [1, 6, 3, 2] }]}
              width={900}
              height={500}
            />
          </div>
        </div>
        <div className="sales-chart w-full md:w-[30%] h-full bg-white shadow-2xl">
          <h1 className="font-bold text-xl m-4">Traffic Source</h1>
          <div className="w-full h-full flex items-center justify-center">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={500}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
