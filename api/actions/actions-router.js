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

router.get("/:id", (req, res) => {
  Actions.get(req.params.id)
    .then((action) => {
      console.log(action);
      if (!action) {
        res.status(404);
      } else {
        res.status(200).json(action);
      }
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

module.exports = router;
