// Write your "projects" router here!
const express = require("express");
const { validateProjectId } = require("./projects-middleware");
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

router.get("/:id", validateProjectId, (req, res) => {
  Projects.get(req.params.id)
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/", (req, res) => {
  if (!req.body.name || !req.body.description) {
    res.status(400).json({ message: "name and description required" });
  }
  Projects.insert(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((error) => {
      res.status(500);
    });
});

router.put("/:id", validateProjectId, (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({ message: "name and description required" });
  } else {
    Projects.update(req.params.id, req.body)
      .then((project) => {
        if (!project) {
          res
            .status(404)
            .json({ message: "The specified project does not exist" });
        } else {
          return res.status(400).json(project);
        }
      })
      .catch((error) => {
        res.status(500);
      });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);
    if (!project) {
      res.status(404).json({ message: "the project does not exist" });
    } else {
      await Projects.remove(req.params.id);
      res.json(project);
    }
  } catch (error) {
    res.status(500).json({ message: "Error removing project" });
  }
});

module.exports = router;
