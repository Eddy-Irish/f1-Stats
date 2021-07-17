import React from 'react';
import CurrentSeasonPointsLineGraph from '../Components/Graphs/CurrentSeasonPointsLineGraph';
import ConstructorStandingsLineGraph from '../Components/Graphs/ConstructorStandingsLineGraph';
  
const CurrentSeason = () => {
  return (
    <div>
      <h1>2021 Formula One Season</h1>
      <div class="scrollmenu">
        <ul class="f32">
          <li class="flag bh"></li> <li class="flag it"></li> <li class="flag pt"></li>
          <li class="flag es"></li> <li class="flag mc"></li> <li class="flag az"></li>
          <li class="flag fr"></li> <li class="flag at"></li> <li class="flag at"></li>
          <li class="flag gb"></li> <li class="flag hu"></li> <li class="flag be"></li>
          <li class="flag nl"></li> <li class="flag it"></li> <li class="flag ru"></li>
          <li class="flag tr"></li> <li class="flag jp"></li> <li class="flag us"></li>
          <li class="flag mx"></li> <li class="flag br"></li> <li class="flag sa"></li>
          <li class="flag ae"></li>
        </ul>
      </div>

      <h3 style={{position: 'absolute', left: '240px'}}>2021 World Drivers' Championship Points</h3>
      <h3 style={{position: 'absolute', left: '1150px'}}>2021 World Constructors' Championship Points</h3>

      <div class="grid-container">
        <div class="grid-item">
          <CurrentSeasonPointsLineGraph />
        </div>
        <div class="grid-item">
          <ConstructorStandingsLineGraph />
        </div>
      </div>
    </div>
  );
};
  
export default CurrentSeason;