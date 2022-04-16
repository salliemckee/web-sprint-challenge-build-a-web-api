// add middlewares here related to actions
const Action = require("./actions-model");

function validateActionId(req, res, next) {
  Action.get(req.params.id)
    .then((action) => {
      if (!action) {
        res.status(404).json({ message: "action not found" });
      } else {
        next();
      }
    })
    .catch((error) => {
      res.status(500);
    });
}

module.exports = { validateActionId };
