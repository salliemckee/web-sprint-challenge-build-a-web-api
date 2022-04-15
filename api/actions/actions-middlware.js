// add middlewares here related to actions
const Action = require("./actions-model");

// function validateActionId(req, res) {
//   // const actions = req.body;
//   Action.get(req.params.id)
//     .then((action) => {
//       if (!action) {
//         res.status(404);
//       } else {
//         req.action = action;
//       }
//     })
//     .catch((error) => {
//       res.status(500);
//     });

//   try {
//     const action =  Action.get(req.params.id);
//     if (!action) {
//       res.status(404);
//     } else {
//       req.action = action;
//     }
//   } catch (err) {
//     res.status(500);
//   }
// }

// module.exports = { validateActionId };
