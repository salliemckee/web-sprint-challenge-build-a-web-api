// add middlewares here related to projects
const Project = require("./projects-model");

function validateProjectId(req, res, next) {
  Project.get(req.params.id)
    .then((project) => {
      if (!project) {
        res.status(404).json({ message: "project not found" });
      } else {
        next();
      }
    })
    .catch((error) => {
      res.status(500);
    });
}

module.exports = { validateProjectId };
