const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Player } = require("../models");

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

router.get("/game/dungeon", (req, res) => {
  res.render("room", {
    logged_in: req.session.logged_in,
  });
});

// router.get("/game/dungeon/:id", async (req, res) => {
//   const playerData = await Player.findByPk(req.params.id);
//   const playerInfo = playerData.get({ plain: true });
//   res.render("room", {
//     logged_in: req.session.logged_in,
//   });
// });

module.exports = router;
