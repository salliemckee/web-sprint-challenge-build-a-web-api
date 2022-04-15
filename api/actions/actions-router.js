// Write your "actions" router here!
const express = require("express");
const Actions = require("./actions-model");
const router = express.Router();

router.get("/", (req, res) => {
  Actions.get(req.params.id)
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
