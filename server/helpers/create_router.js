const express = require('express');
const ObjectID = require("mongodb").ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  // INDEX
  router.get("/", (req, res) => {
    collection
      .find()
      // find all
      .toArray()
      // make into array
      .then((data) => res.json(data))
      // convert data to json
  });

  // SHOW
  router.get("/:id", (req, res) => {
    collection
      .findOne({_id: ObjectID(req.params.id)})
      .then((data) => res.json(data))
  });

  // CREATE
  router.post("/", (req, res) => {
    collection
      .insertOne(req.body)
      .then(() => collection.find().toArray())
      .then((data) => res.json(data))
  });

  // UPDATE
  router.put("/:id", (req, res) => {
    collection
      .updateOne(
        {_id: ObjectID(req.params.id)},
        {$set: req.body}
      )
      .then(() => collection.find().toArray())
      .then((data) => res.json(data))
  });

  // DESTROY
  router.delete("/:id", (req, res) => {
    collection
      .deleteOne({_id: ObjectID(req.params.id)})
      .then(() => collection.find().toArray())
      .then((data) => res.json(data))
  });

  return router;

};

module.exports = createRouter;
