import React from "react";
import { gql, useQuery } from '@apollo/client';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

  const GET_LAPS = gql`
  query GetLaps {
    lapTimes {
      _id
      location
      year
      pole
      fastestLap
    }
  }
`;



const MonacoLapTimesLineGraph = () => {

  const { loading, error, data } = useQuery(GET_LAPS);
    if(loading) {
      return <div>LOADING...</div>
    }
    if(error){
      return <div>encountered and error, dummy: {error}</div>
    }

    const dataArray = [];
    data.lapTimes.map(lapTime => (dataArray.push({ raceYear: lapTime.year, fastestLapTime: lapTime.fastestLap, raceLocation: lapTime.location, poleTime: lapTime.pole })));

  return (
    <div>
      <h2>{data.lapTimes.location}</h2>
      <LineChart
        width={1600}
        height={650}
        data={dataArray}
        margin={{
          top: 25,
          right: 30,
          left: 350,
          Bottom: 25
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="raceYear" />
        <YAxis domain={['dataMin - 1', 'dataMax + 1']}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="poleTime" stroke="#171715" />
        <Line type="monotone" dataKey="fastestLapTime" stroke="#7d7d7d" />
      </LineChart>
    </div>
  );
};

export default MonacoLapTimesLineGraph;

