const { Router } = require("express");
const { Recipe, Diet } = require("../db");

const router = Router();

router.post("/recipe", async (req, res) => {
  const { name, summary, score, healthScore, diets, steps } = req.body;

  Recipe.create({
    name,
    summary,
    score: parseFloat(score),
    healthScore: parseFloat(healthScore),
    steps,
  })
    .then((newRecipe) => newRecipe.setDiets(diets))
    .then((r) => res.json({ msg: "success" }))
    .catch((e) => {
      console.log(e);
      return res.status(500).send({ msg: "Algo salió mal" });
    });
});

module.exports = router;
