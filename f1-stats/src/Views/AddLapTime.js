import React, { Component } from "react";
import axios from 'axios';
import { gql, useQuery, QueryInput } from '@apollo/client';

//const { MongoClient } = require("mongodb");

// Connection string goes below in 'uri'
// const uri = ""

// Create new Mongo Client
// const client = new MongoClient(uri);

export default class AddLapTime extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePole = this.onChangePole.bind(this);
    this.onChangeFastestLap = this.onChangeFastestLap.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      location: "",
      year: "",
      pole: "",
      fastestLap: "",
    };
  }

  // These methods will update the state properties.
  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onChangeYear(e) {
    this.setState({
      year: e.target.value,
    });
  }

  onChangePole(e) {
    this.setState({
      pole: e.target.value,
    });
  }

  onChangeFastestLap(e) {
    this.setState({
      fastestLap: e.target.value,
    });
  }

// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new lap time record to the database.
    const newLapTimes = {
      location: this.state.location,
      year: this.state.year,
      pole: this.state.pole,
      fastestLap: this.state.fastestLap,
    };

    axios
      .post("http://localhost:3000/LapTime/add", newLapTimes)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      location: "",
      year: "",
      pole: "",
      fastestLap: ""
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Add Lap Time Data to Database</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Location of Grand Prix: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
          </div>
          <div className="form-group">
            <label>Year of Grand Prix: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeYear}
            />
          </div>
          <div className="form-group">
          <label>Pole Lap Time: </label>
              <input
                className="form-control"
                type="number"
                value={this.state.pole}
                onChange={this.onChangePole}
              />
            </div>
            <div className="form-group">
          <label>Fastest Lap Time: </label>
              <input
                className="form-control"
                type="number"
                value={this.state.fastestLap}
                onChange={this.onChangeFastestLap}
              />
            </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create lap times"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}