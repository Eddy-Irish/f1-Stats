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
  { name: "BHR", RedBull: 28, Mercedes: 44, McLaren: 18, Ferrari: 12, Alpine: 0, AlphaTauri: 2 },
  { name: "EMI", RedBull: 53, Mercedes: 63, McLaren: 30, Ferrari: 34, Alpine: 3, AlphaTauri: 8 },
  { name: "POR", RedBull: 83, Mercedes: 104, McLaren: 42, Ferrari: 42, Alpine: 13, AlphaTauri: 9 },
  { name: "ESP", RedBull: 112, Mercedes: 144, McLaren: 54, Ferrari: 60, Alpine: 15, AlphaTauri: 10 },
  { name: "MON", RedBull: 149, Mercedes: 151, McLaren: 69, Ferrari: 78, Alpine: 17, AlphaTauri: 18 },
  { name: "AZE", RedBull: 174, Mercedes: 151, McLaren: 81, Ferrari: 94, Alpine: 25, AlphaTauri: 39 },
  { name: "FRA", RedBull: 215, Mercedes: 181, McLaren: 102, Ferrari: 94, Alpine: 29, AlphaTauri: 45 },
  { name: "STY", RedBull: 252, Mercedes: 215, McLaren: 106, Ferrari: 108, Alpine: 31, AlphaTauri: 46 },
  { name: "AUS", RedBull: 286, Mercedes: 242, McLaren: 141, Ferrari: 122, Alpine: 32, AlphaTauri: 48 },
  { name: "GBR", RedBull: 289, Mercedes: 285, McLaren: 163, Ferrari: 148, Alpine: 40, AlphaTauri: 49 },
  { name: "HUN", RedBull: 291, Mercedes: 303, McLaren: 163, Ferrari: 163, Alpine: 77, AlphaTauri: 68 }
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
          <Line type="monotone" dataKey="Alpine" stroke="#2228e0" />
          <Line type="monotone" dataKey="AlphaTauri" stroke="#0f064f" />
        </LineChart>
      );
    };

export default ConstructorStandingsLineGraph;