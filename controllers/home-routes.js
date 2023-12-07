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

router.get("/game/:id", async (req, res) => {
  const playerData = await Player.findByPk(req.params.id);
  const player = playerData.get({ plain: true });
  res.render("intro", {
    player,
    logged_in: req.session.logged_in,
  });
}); //swap with bottom if not work

// router.get("/game", (req, res) => {
//   res.render("intro", {
//     logged_in: req.session.logged_in,
//   });
// });

router.get("/game/dungeon/:id", async (req, res) => {
  const playerData = await Player.findByPk(req.params.id);
  const player = playerData.get({ plain: true });
  res.render("room", {
    player,
    logged_in: req.session.logged_in,
  });
}); //swap with bottom if not work

// router.get("/game/dungeon", (req, res) => {
//   res.render("room", {
//     logged_in: req.session.logged_in,
//   });
// });

router.get("/game/library/:id", async (req, res) => {
  const playerData = await Player.findByPk(req.params.id);
  const player = playerData.get({ plain: true });
  res.render("library", {
    player,
    logged_in: req.session.logged_in,
  });
}); //swap with bottom if not work

// router.get("/game/library", (req, res) => {
//   res.render("library", {
//     logged_in: req.session.logged_in,
//   });
// });

router.get("/game/escape/:id", async (req, res) => {
  const playerData = await Player.findByPk(req.params.id);
  const player = playerData.get({ plain: true });
  res.render("escape-room", {
    player,
    logged_in: req.session.logged_in,
  });
}); //swap with bottom if not work

// router.get("/game/escape", (req, res) => {
//   res.render("escape-room", {
//     logged_in: req.session.logged_in,
//   });
// });

router.get("/game/ending/:id", async (req, res) => {
  const playerData = await Player.findByPk(req.params.id);
  const player = playerData.get({ plain: true });
  res.render("ending", {
    player,
    logged_in: req.session.logged_in,
  });
}); //swap with bottom if not work :PP

// router.get("/game/ending", (req, res) => {
//   res.render("ending", {
//     logged_in: req.session.logged_in,
//   });
// });

module.exports = router;
