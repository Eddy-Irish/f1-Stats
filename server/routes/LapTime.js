const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of
// requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the records.
recordRoutes.route("/F1-Data/LapTime").get(function (req, res) {
    let db_connect = dbo.getDb("F1-Data");
    db_connect
        .collection("LapTimes")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you create a new record
recordRoutes.route("/F1-Data/LapTime/add").post(function (req, res) {
    let db_connect = dbo.getDb("F1-Data");
    let myobj = {
      location: req.body.location,
      year: req.body.year,
      pole: req.body.pole,
      fastestLap: req.body.fastestLap,
    };
    db_connect.collection("LapTimes").insertOne(myobj, function (err, res) {
      if (err) throw err;
    });
  });

// This section will help you update a record by id
recordRoutes.route("/update/:id").post(function (req, res) {
    let db_connect = dbo.getDb("F1-Data");
    let myquery = { id: req.body.id };
    let newvalues = {
      $set: {
        location: req.body.location,
        year: req.body.year,
        pole: req.body.pole,
        fastestLap: req.body.fastestLap
      },
    };
    db_connect
      .collection("LapTimes")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
      });
  });

  // This section will help you delete a record
//   recordRoutes.route("/:id").delete((req, res) => {
//     let db_connect = dbo.getDb("F1-Data");
//     var myquery = { id: req.body.id };
//     db_connect.collection("LapTimes").deleteOne(myquery, function (err, obj) {
//       if (err) throw err;
//       console.log("1 document deleted");
//     });
//   });
  
  module.exports = recordRoutes;