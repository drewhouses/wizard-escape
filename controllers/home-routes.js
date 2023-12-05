const router = require("express").Router();
const withAuth = require("../utils/auth");

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

router.get("/game", (req, res) => {
  res.render("intro", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
