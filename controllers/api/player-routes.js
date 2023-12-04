const router = require("express").Router();
const { Player } = require("../../models");

router.post("/", async (req, res) => {
  console.log("In backend character route");
  try {
    const characterData = await Player.create(req.body);
    console.log(characterData);
    res.status(200).json(characterData);
  } catch (err) {
    res.status(400).json({ message: "backend went wrong" });
  }
});

module.exports = router;
