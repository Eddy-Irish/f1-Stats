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
  { name: "BHR", Verstappen: 18, Hamilton: 25, Perez: 10, Bottas: 16, Norris: 12 },
  { name: "EMI", Verstappen: 43, Hamilton: 44, Perez: 10, Bottas: 16, Norris: 27 },
  { name: "POR", Verstappen: 61, Hamilton: 69, Perez: 22, Bottas: 32, Norris: 37 },
  { name: "ESP", Verstappen: 80, Hamilton: 94, Perez: 32, Bottas: 47, Norris: 41 },
  { name: "MON", Verstappen: 105, Hamilton: 101, Perez: 44, Bottas: 47, Norris: 56 },
  { name: "AZE", Verstappen: 105, Hamilton: 101, Perez: 69, Bottas: 47, Norris: 66 },
  { name: "FRA", Verstappen: 131, Hamilton: 119, Perez: 84, Bottas: 59, Norris: 76 },
  { name: "STY", Verstappen: 156, Hamilton: 138, Perez: 96, Bottas: 74, Norris: 86 },
  { name: "AUS", Verstappen: 182, Hamilton: 150, Perez: 104, Bottas: 92, Norris: 101 },
  { name: "GBR", Verstappen: 185, Hamilton: 177, Perez: 104, Bottas: 108, Norris: 113 },
  { name: "HUN", Verstappen: 187, Hamilton: 195, Perez: 104, Bottas: 108, Norris: 113 }
];

/* Can Use CustomizedLabel to add text or numbers above the various points on the line graph.
   Maybe Try and put 'Win' over whatever point represents a win, or 'podium' etc, although that
   would have to be able to be conditional upon the change in amount from one point in the line 
   to the next was >= 25, which I don't know if you can do */

class CustomizedLabel extends PureComponent {
    render() {
        const text = "Max!";
        const { x, y, stroke } = this.props;
        return (
            <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
                {text}
            </text> 
        );
    }
}

const CurrentSeasonPointsLineGraph = () => {
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
          <Line type="monotone" dataKey="Hamilton" stroke="#2be0e3"  /* activeDot={{ r: 8 }} */ />
          <Line type="monotone" dataKey="Verstappen" stroke="#11119c" />
          <Line type="monotone" dataKey="Perez" stroke="#11119c" />
          <Line type="monotone" dataKey="Bottas" stroke="#2be0e3" />
          <Line type="monotone" dataKey="Norris" stroke="#e09e24" />
        </LineChart>
      );
    };

export default CurrentSeasonPointsLineGraph;