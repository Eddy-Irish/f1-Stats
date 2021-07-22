import React, { Component } from "react";
import axios from 'axios';
// import { Link } from "react-router-dom";

const LapTime = (props) => (
  <tr>
    <td>{props.LapTime.location}</td>
    <td>{props.LapTime.year}</td>
    <td>{props.LapTime.pole}</td>
    <td>{props.LapTime.fastestLap}</td>
    {/* <td> */}
      {/* <Link to={"/edit/" + props.LapTime._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </a> */}
    {/* </td> */}
  </tr>
);

export default class LapTimesList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    // this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { LapTimes: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:3000/F1-Data/LapTimes/find")
      .then((response) => {
        this.setState({ LapTimes: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a record based on the method
  // deleteLapTime(id) {
  //   axios.delete("http://localhost:3000/" + id).then((response) => {
  //     console.log(response.data);
  //   });

  //   this.setState({
  //     LapTime: this.state.LapTimes.filter((el) => el._id !== id),
  //   });
  // }

  // This method will map out the users on the table
  LapTimesList() {
    return this.state.LapTimes.map((currentlaptime) => {
      return (
        <LapTime
          LapTime={currentlaptime}
          // deleteLapTime={this.deleteLapTime}
          key={currentlaptime._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  render() {
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
          <tbody>{this.LapTimesList()}</tbody>
        </table>
      </div>
    );
  }
}