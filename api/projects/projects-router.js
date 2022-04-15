// Write your "projects" router here!
const express = require("express");
const Projects = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.get(req.params.id)
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
