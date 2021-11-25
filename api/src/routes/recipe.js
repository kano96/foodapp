const { Router } = require("express");
const { Recipe, Diet } = require("../db");

const router = Router();

router.post("/recipe", async (req, res) => {
  const { name, summary, score, healthScore, diets, steps, img } = req.body;

  try {
    const newRecipe = await Recipe.create({
      name,
      summary,
      img,
      score: parseFloat(score),
      healthScore: parseFloat(healthScore),
      steps,
    });
    const diet = await Diet.findAll({
      where: {
        name: diets,
      },
    });
    newRecipe.addDiet(diet);
    return res.send({ msg: "success" });
  } catch (e) {
    return res.send({ msg: e });
  }
});

module.exports = router;
