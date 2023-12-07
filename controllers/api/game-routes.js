const router = require("express").Router();

router.get("/", async (req, res) => {
  //This render will handle the start.handlebars template
  res.render("start");
});

module.exports = router;
