import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views';
import AboutMe from './Views/AboutMe';
import AllTimeRecords from './Views/AllTimeRecords';
import Constructors from './Views/Constructors';
import IndividualSeasons from './Views/IndividualSeasons';
import CurrentSeason from './Views/CurrentSeason';
import SeasonsOverTime from './Views/SeasonsOverTime';
import Create from './Views/Create';
import Edit from './Views/Edit';
import RecordList from './Views/RecordList';
import AddLapTime from './Views/AddLapTime';
import LapTimesList from './Views/LapTimesList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about-me' component={AboutMe} />
            <Route path='/all-time-records' component={AllTimeRecords} />
            <Route path='/constructors' component={Constructors} />
            <Route path='/about-me' component={AboutMe} />
            <Route path='/individual-seasons' component={IndividualSeasons} />
            <Route path='/current-season' component={CurrentSeason} />
            <Route path='/seasons-over-time' component={SeasonsOverTime} />
            <Route path='/create' component={Create} />
            <Route path='/edit' component={Edit} />
            <Route path='/record-list' component={RecordList} />
            <Route path='/historical-lap-times' component={LapTimesList} />
            <Route path='/add-lap-time-data' component={AddLapTime} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
