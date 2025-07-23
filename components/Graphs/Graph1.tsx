"use client";

import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   Text,
// } from "recharts";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement,
  LineElement,
  Title,
  Legend,
  PointElement,
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  Filler,
);

const data = [
  {
    year: "Nov16",
    delta: -90,
  },

  {
    year: "Dec16",
    delta: 50,
  },
  {
    year: "Jan17",
    delta: 65,
  },
  {
    year: "Feb17",
    delta: 10,
  },
  {
    year: "Mar17",
    delta: 12,
  },
  {
    year: "Apr17",
    delta: 52,
  },
  {
    year: "May17",
    delta: 70,
  },
  {
    year: "Jun17",
    delta: 63,
  },
  {
    year: "July17",
    delta: 53,
  },
  {
    year: "Aug17",
    delta: -45,
  },
  {
    year: "Sep17",
    delta: 80,
  },
  {
    year: "Oct17",
    delta: 45,
  },
  {
    year: "Nov17",
    delta: -52,
  },
  {
    year: "Dec17",
    delta: 20,
  },

  {
    year: "Jan18",
    delta: -48,
  },
  {
    year: "Feb18",
    delta: -70,
  },
  {
    year: "Mar18",
    delta: 35,
  },
  {
    year: "Apr18",
    delta: 130,
  },
  {
    year: "May18",
    delta: -80,
  },
  {
    year: "Jun18",
    delta: 20,
  },
  {
    year: "July18",
    delta: 25,
  },
  {
    year: "Aug18",
    delta: 3,
  },
  {
    year: "Sep18",
    delta: -55,
  },
  {
    year: "Oct18",
    delta: 35,
  },
  {
    year: "Nov18",
    delta: 10,
  },
  {
    year: "Dec18",
    delta: -2,
  },
  {
    year: "Jan19",
    delta: 2,
  },
  {
    year: "Feb19",
    delta: 2,
  },
  {
    year: "Mar19",
    delta: 15,
  },
  {
    year: "Apr19",
    delta: -10,
  },
  {
    year: "May19",
    delta: 3,
  },
  {
    year: "Jun19",
    delta: -15,
  },
  {
    year: "July19",
    delta: -13,
  },
  {
    year: "Aug19",
    delta: -20,
  },
  {
    year: "Sep19",
    delta: 15,
  },
  {
    year: "Oct19",
    delta: 0,
  },
  {
    year: "Nov19",
    delta: -15,
  },
  {
    year: "Dec19",
    delta: 3,
  },
  {
    year: "Jan20",
    delta: 20,
  },
  {
    year: "Feb20",
    delta: -40,
  },
  {
    year: "Mar20",
    delta: 35,
  },
  {
    year: "Apr20",
    delta: 50,
  },
  {
    year: "May20",
    delta: -10,
  },
  {
    year: "Jun20",
    delta: 10,
  },
  {
    year: "July20",
    delta: 8,
  },
  {
    year: "Aug20",
    delta: 15,
  },
  {
    year: "Sep20",
    delta: -25,
  },
  {
    year: "Oct20",
    delta: -30,
  },
  {
    year: "Nov20",
    delta: 10,
  },
  {
    year: "Dec20",
    delta: -20,
  },
  {
    year: "Jan21",
    delta: 45,
  },
  {
    year: "Feb21",
    delta: 20,
  },
  {
    year: "Mar21",
    delta: 20,
  },
  {
    year: "Apr21",
    delta: -25,
  },
  {
    year: "May21",
    delta: 20,
  },
  {
    year: "Jun21",
    delta: 25,
  },
  {
    year: "July21",
    delta: -40,
  },
  {
    year: "Aug21",
    delta: -95,
  },
  {
    year: "Sep21",
    delta: 15,
  },
  {
    year: "Oct21",
    delta: 3,
  },
  {
    year: "Nov21",
    delta: -30,
  },
  {
    year: "Dec21",
    delta: 52,
  },
  {
    year: "Jan22",
    delta: 20,
  },
  {
    year: "Feb22",
    delta: -140,
  },
  {
    year: "Mar22",
    delta: 145,
  },
  {
    year: "Apr22",
    delta: 20,
  },
  {
    year: "May22",
    delta: -130,
  },
  {
    year: "Jun22",
    delta: 170,
  },
  {
    year: "July22",
    delta: 47,
  },
  {
    year: "Aug22",
    delta: 10,
  },
  {
    year: "Sep22",
    delta: -10,
  },
  {
    year: "Oct22",
    delta: -50,
  },
  {
    year: "Nov22",
    delta: 20,
  },
  {
    year: "Dec22",
    delta: -30,
  },
  {
    year: "Jan23",
    delta: -5,
  },
  {
    year: "Feb23",
    delta: -5,
  },
  {
    year: "Mar23",
    delta: 50,
  },
  {
    year: "Apr23",
    delta: 25,
  },
  {
    year: "May23",
    delta: 40,
  },
  {
    year: "Jun23",
    delta: -10,
  },
  {
    year: "July23",
    delta: 0,
  },
  {
    year: "Aug23",
    delta: -35,
  },
  {
    year: "Sep23",
    delta: -35,
  },
  {
    year: "Oct23",
    delta: -65,
  },
  {
    year: "Nov23",
    delta: 75,
  },
  {
    year: "Dec23",
    delta: 48,
  },
  {
    year: "Jan24",
    delta: 40,
  },
  {
    year: "Feb24",
    delta: -80,
  },
  {
    year: "Mar24",
    delta: -155,
  },
  {
    year: "Apr24",
    delta: 210,
  },
  {
    year: "May24",
    delta: -110,
  },
  {
    year: "Jun24",
    delta: -10,
  },
];

const tickFormatter = (value: any, index: any, ticks: any) => {
  const limit = 20; // put your maximum character
  if (value.length < limit) return value;
  return `${value.substring(0, limit)}...`;
};

const chartData = {
  labels: data.map((item) => item.year),
  datasets: [
    {
      label: "Delta",
      data: data.map((item) => item.delta),
      borderColor: "#8884d8",
      backgroundColor: "rgba(136, 132, 216, 0.2)", // Add background color to the area below the line
      borderWidth: 2,
      fill: "stack",
      pointRadius: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
    filler: {
      enabled: true,
      propagate: true,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: true,
        drawTicks: true,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        ticks: {
          callback: tickFormatter,
        },
      },
    },
  },
};

export default function Graph1() {
  return (
    <>
      <div className="relative flex h-auto w-[100%] items-center justify-center">
        <div className="flex w-[100%] items-center justify-center">
          <Line options={options} data={chartData} />
          {/* <ResponsiveContainer
            width="98%"
            height="100%"
            className={"flex items-center justify-center"}
          >
            <LineChart
              width={1100}
              height={600}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                className="font-poppins text-sm tracking-wide phone:text-[min(2.5vh,2.5vw)] smTablet:text-xs"
                tickFormatter={tickFormatter}
                width={90}
              />
              <YAxis className="font-poppins tracking-wide phone:text-[min(2.5vh,2.5vw)] smTablet:text-xs" />
              <Tooltip />
              <Legend />
              <Line
                type="linear"
                dataKey="delta"
                stroke="#c30010"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer> */}
        </div>
      </div>
    </>
  );
}
