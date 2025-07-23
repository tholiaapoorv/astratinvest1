"use client";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataItem {
  name: string;
  AStratinvest: number;
}

const data: DataItem[] = [
  { name: "CY17", AStratinvest: 100.57 },
  { name: "CY18", AStratinvest: 14.04 },
  { name: "CY19", AStratinvest: 11.61 },
  { name: "CY20", AStratinvest: 82.04 },
  { name: "CY21", AStratinvest: 95.11 },
  { name: "CY22", AStratinvest: 44.11 },
  { name: "CY23", AStratinvest: 100.57 },
];

const CalenderPerformance = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ReBarChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" className="font-poppins text-[min(2vh,2vw)]" />
        <YAxis className="font-poppins text-[min(2vh,2vw)]" />
        <Tooltip
          formatter={(value: number) => (
            <p className="font-poppins text-[#000121]">{value}%</p>
          )}
        />
        <Legend />
        <Bar dataKey="AStratinvest" fill="#002147" />
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default CalenderPerformance;
