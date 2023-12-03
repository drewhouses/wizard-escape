const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/start", (req, res) => {
  res.render("start", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
