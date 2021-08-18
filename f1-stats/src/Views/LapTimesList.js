import React from "react";
import MonacoLapTimesLineGraph from '../Components/Graphs/MonacoLapTimesLineGraph';


export default function LapTimesList() {


    return (
      <div>
        {/*
            This Code was used a test to ensure that I could query and display information
            from my MongoDB Atlas Cluster using the Realm App
        
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
  
                {data.lapTimes.map(lapTime => (
                  <tbody>
                    <tr>
                      <th>{lapTime.location}</th>
                      <th>{lapTime.year}</th>
                      <th>{lapTime.pole}</th>
                      <th>{lapTime.fastestLap}</th>
                    </tr>
                  </tbody>
                ))}
          
        </table> */}
        <h3 id="monacoTimesHeader"> Evolution of Pole Position and Fastest Lap Times at the Monaco Grand Prix</h3>
        <p id="monacoTimesParagraph">Times from before 1986 were not listed as the circuit had different, and much shorter, configurations before 1986 
           (The Fastest Lap from 1997 is not included due it being a wet race) </p>
        <div class="grid-container">
          <div class="grid-item">
            <MonacoLapTimesLineGraph />
          </div>
        </div>  
      </div>
    );
}