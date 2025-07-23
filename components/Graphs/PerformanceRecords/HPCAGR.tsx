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
  NIFTY50: number;
  BSE500: number;
}

const data: DataItem[] = [
  { name: "1 YEAR", AStratinvest: 100.57, NIFTY50: 19.42, BSE500: 24.65 },
  { name: "3 YEAR", AStratinvest: 78.67, NIFTY50: 14.94, BSE500: 18.5 },
  { name: "5 YEAR", AStratinvest: 63.95, NIFTY50: 14.22, BSE500: 16.12 },
  { name: "7 YEAR", AStratinvest: 53.77, NIFTY50: 14.65, BSE500: 15.74 },
];

const HPCAGR = () => {
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
        <Bar dataKey="NIFTY50" fill="#D47C34" />
        <Bar dataKey="BSE500" fill="#62833C" />
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default HPCAGR;
