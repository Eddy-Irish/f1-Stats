import React, { Component } from "react";
import { gql, useQuery } from '@apollo/client';


const GET_LAPS = gql`
  query GetLaps {
    lapTimes {
      _id
      fastestLap
      location
      pole
      year
    }
  }
`;

export default function LapTimesList() {

  const { loading, error, data } = useQuery(GET_LAPS);
    if(loading) {
      return <div>LOADING...</div>
    }
    if(error){
      return <div>encountered and error, dummy: {error}</div>
    }

    return (
      <div>
        <h3>Historical Pole and Fastest Lap Times From the Monaco Grand Prix</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Grand Prix</th>
              <th>Year</th>
              <th>Pole</th>
              <th>Fastest Lap</th>
            </tr>
            </thead>
            <tbody>
              <tr>  
                {data.lapTimes.map(lapTime => (
                  <>
                    <th>{lapTime.location}</th>
                    <th>{lapTime.year}</th>
                    <th>{lapTime.pole}</th>
                    <th>{lapTime.fastestLap}</th>
                  </>
                ))}
              </tr>
          </tbody>
        </table>
      </div>
    );
}