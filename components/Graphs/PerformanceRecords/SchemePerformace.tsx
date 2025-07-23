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
  BSE500: number;
  NIFTY50: number;
}

const data: DataItem[] = [
  { name: "1 MONTH", AStratinvest: -3.2, BSE500: 0.84, NIFTY50: 1.57 },
  { name: "3 MONTH", AStratinvest: 8.21, BSE500: 5.45, NIFTY50: 2.69 },
  { name: "6 MONTH", AStratinvest: 28.23, BSE500: 16.72, NIFTY50: 13.63 },
  { name: "1 YEAR", AStratinvest: 106.7, BSE500: 38.5, NIFTY50: 28.02 },
  {
    name: "SINCE INCEPTION",
    AStratinvest: 143.85,
    BSE500: 42.41,
    NIFTY50: 34.19,
  },
];

const SchemePerformance = () => {
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
            <p className="font-poppins">{value}%</p>
          )}
        />
        <Legend />
        <Bar dataKey="AStratinvest" fill="#002147" />
        <Bar dataKey="BSE500" fill="#D47C34" />
        <Bar dataKey="NIFTY50" fill="#62833C" />
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default SchemePerformance;
