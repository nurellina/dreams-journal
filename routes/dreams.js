const router = require("express").Router();
let Dream = require("../models/dream.model");

router.route("/").get((req, res) => {
  Dream.find()
    .then((dreams) => res.json(dreams))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const type = req.body.type;
  const date = Date.parse(req.body.date);

  const newDream = new Dream({
    username,
    description,
    type,
    date,
  });

  newDream
    .save()
    .then(() => res.json("Dream added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
  Dream.findById(req.params.id)
    .then((dream) => res.json(dream))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Dream.findByIdAndDelete(req.params.id)
    .then(() => res.json("Dream deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/update/:id").post((req, res) => {
  Dream.findById(req.params.id)
    .then((dream) => {
      dream.username = req.body.username;
      dream.description = req.body.description;
      dream.type = req.body.type;
      dream.date = Date.parse(req.body.date);

      dream
        .save()
        .then(() => res.json("Dream updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
