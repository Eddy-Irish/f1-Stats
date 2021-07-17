import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "BHR",
    RedBull: 28,
    Mercedes: 44,
    McLaren: 18,
    Ferrari: 12
  },
  {
    name: "EMI",
    RedBull: 53,
    Mercedes: 63,
    McLaren: 30,
    Ferrari: 34
  },
  {
    name: "POR",
    RedBull: 83,
    Mercedes: 104,
    McLaren: 42,
    Ferrari: 42
  },
  {
    name: "ESP",
    RedBull: 112,
    Mercedes: 144,
    McLaren: 54,
    Ferrari: 60
  },
  {
    name: "MON",
    RedBull: 149,
    Mercedes: 151,
    McLaren: 69,
    Ferrari: 78
  },
  {
    name: "AZE",
    RedBull: 174,
    Mercedes: 151,
    McLaren: 81,
    Ferrari: 94
  },
  {
    name: "FRA",
    RedBull: 215,
    Mercedes: 181,
    McLaren: 102,
    Ferrari: 94
  },
  {
    name: "STY",
    RedBull: 252,
    Mercedes: 215,
    McLaren: 106,
    Ferrari: 108
  },
  {
    name: "AUS",
    RedBull: 286,
    Mercedes: 242,
    McLaren: 141,
    Ferrari: 122
  }

];

const ConstructorStandingsLineGraph = () => {
    return (
        <LineChart
          width={900}
          height={600}
          data={data}
          margin={{
            top: 75,
            right: 30,
            left: 20,
            Bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Mercedes" stroke="#2fcccc"  /* activeDot={{ r: 8 }} */ />
          <Line type="monotone" dataKey="RedBull" stroke="#14419c" />
          <Line type="monotone" dataKey="McLaren" stroke="#eda921" />
          <Line type="monotone" dataKey="Ferrari" stroke="#c22115" />
        </LineChart>
      );
    };

export default ConstructorStandingsLineGraph;