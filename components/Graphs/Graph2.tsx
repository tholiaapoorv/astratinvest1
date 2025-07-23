"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
} from "recharts";

const data = [
  {
    year: "Oct16",
    delta: 15,
  },
  {
    year: "Nov16",
    delta: -80,
  },

  {
    year: "Dec16",
    delta: -30,
  },
  {
    year: "Jan17",
    delta: 50,
  },
  {
    year: "Feb17",
    delta: 45,
  },
  {
    year: "Mar17",
    delta: 30,
  },
  {
    year: "Apr17",
    delta: 70,
  },
  {
    year: "May17",
    delta: 10,
  },
  {
    year: "Jun17",
    delta: -60,
  },
  {
    year: "July17",
    delta: 5,
  },
  {
    year: "Aug17",
    delta: -50,
  },
  {
    year: "Sep17",
    delta: 30,
  },
  {
    year: "Oct17",
    delta: 75,
  },
  {
    year: "Nov17",
    delta: 20,
  },
  {
    year: "Dec17",
    delta: 10,
  },

  {
    year: "Jan18",
    delta: -40,
  },
  {
    year: "Feb18",
    delta: -110,
  },
  {
    year: "Mar18",
    delta: -80,
  },
  {
    year: "Apr18",
    delta: 47,
  },
  {
    year: "May18",
    delta: -40,
  },
  {
    year: "Jun18",
    delta: -15,
  },
  {
    year: "July18",
    delta: 15,
  },
  {
    year: "Aug18",
    delta: 20,
  },
  {
    year: "Sep18",
    delta: -40,
  },
  {
    year: "Oct18",
    delta: -10,
  },
  {
    year: "Nov18",
    delta: 0,
  },
  {
    year: "Dec18",
    delta: -5,
  },
  {
    year: "Jan19",
    delta: -2,
  },
  {
    year: "Feb19",
    delta: -1,
  },
  {
    year: "Mar19",
    delta: 15,
  },
  {
    year: "Apr19",
    delta: 2,
  },
  {
    year: "May19",
    delta: 5,
  },
  {
    year: "Jun19",
    delta: -10,
  },
  {
    year: "July19",
    delta: -20,
  },
  {
    year: "Aug19",
    delta: 2,
  },
  {
    year: "Sep19",
    delta: 15,
  },
  {
    year: "Oct19",
    delta: 15,
  },
  {
    year: "Nov19",
    delta: 2,
  },
  {
    year: "Dec19",
    delta: 5,
  },
  {
    year: "Jan20",
    delta: 25,
  },
  {
    year: "Feb20",
    delta: -20,
  },
  {
    year: "Mar20",
    delta: -40,
  },
  {
    year: "Apr20",
    delta: 15,
  },
  {
    year: "May20",
    delta: 0,
  },
  {
    year: "Jun20",
    delta: 5,
  },
  {
    year: "July20",
    delta: 15,
  },
  {
    year: "Aug20",
    delta: 35,
  },
  {
    year: "Sep20",
    delta: 10,
  },
  {
    year: "Oct20",
    delta: -20,
  },
  {
    year: "Nov20",
    delta: 5,
  },
  {
    year: "Dec20",
    delta: -30,
  },
  {
    year: "Jan21",
    delta: 20,
  },
  {
    year: "Feb21",
    delta: 40,
  },
  {
    year: "Mar21",
    delta: 55,
  },
  {
    year: "Apr21",
    delta: 30,
  },
  {
    year: "May21",
    delta: 55,
  },
  {
    year: "Jun21",
    delta: 80,
  },
  {
    year: "July21",
    delta: 50,
  },
  {
    year: "Aug21",
    delta: -47,
  },
  {
    year: "Sep21",
    delta: -30,
  },
  {
    year: "Oct21",
    delta: -30,
  },
  {
    year: "Nov21",
    delta: -55,
  },
  {
    year: "Dec21",
    delta: 0,
  },
  {
    year: "Jan22",
    delta: 20,
  },
  {
    year: "Feb22",
    delta: -125,
  },
  {
    year: "Mar22",
    delta: 25,
  },
  {
    year: "Apr22",
    delta: 40,
  },
  {
    year: "May22",
    delta: -85,
  },
  {
    year: "Jun22",
    delta: -20,
  },
  {
    year: "July22",
    delta: 30,
  },
  {
    year: "Aug22",
    delta: 40,
  },
  {
    year: "Sep22",
    delta: 30,
  },
  {
    year: "Oct22",
    delta: -20,
  },
  {
    year: "Nov22",
    delta: -2,
  },
  {
    year: "Dec22",
    delta: -30,
  },
  {
    year: "Jan23",
    delta: -35,
  },
  {
    year: "Feb23",
    delta: -40,
  },
  {
    year: "Mar23",
    delta: 15,
  },
  {
    year: "Apr23",
    delta: 30,
  },
  {
    year: "May23",
    delta: 70,
  },
  {
    year: "Jun23",
    delta: 65,
  },
  {
    year: "July23",
    delta: 67,
  },
  {
    year: "Aug23",
    delta: 30,
  },
  {
    year: "Sep23",
    delta: -10,
  },
  {
    year: "Oct23",
    delta: -70,
  },
  {
    year: "Nov23",
    delta: 10,
  },
  {
    year: "Dec23",
    delta: 55,
  },
  {
    year: "Jan24",
    delta: 90,
  },
  {
    year: "Feb24",
    delta: 10,
  },
  {
    year: "Mar24",
    delta: -145,
  },
  {
    year: "Apr24",
    delta: 60,
  },
  {
    year: "May24",
    delta: -45,
  },
  {
    year: "Jun24",
    delta: -50,
  },
];
const tickFormatter = (value: string, index: number) => {
  const limit = 20; // put your maximum character
  if (value.length < limit) return value;
  return `${value.substring(0, limit)}...`;
};

export default function Graph2() {
  return (
    <>
      <div className="relative flex h-auto w-[100%] items-center justify-center phone:aspect-video smTablet:aspect-[22/9]">
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        >
          <ResponsiveContainer width="98%" height="100%">
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
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                dot={window.innerWidth <= 760 ? false : true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
