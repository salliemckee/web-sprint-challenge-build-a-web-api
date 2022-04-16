// Write your "actions" router here!
const express = require("express");
const { validateActionId } = require("./actions-middlware");
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

router.get("/:id", validateActionId, (req, res) => {
  Actions.get(req.params.id)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});

// router.post("/", (req, res)=>{
//     Actions.insert(req.body).then(()=> {
//         if ()
//     }).catch()
// })

router.delete("/:id", async (req, res) => {
  try {
    const action = await Actions.get(req.params.id);
    if (!action) {
      res.status(404).json({ message: "the action does not exist" });
    } else {
      await Actions.remove(req.params.id);
      res.json(action);
    }
  } catch (error) {
    res.status(500).json({ message: "Error removing action" });
  }
});

module.exports = router;
