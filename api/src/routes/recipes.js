const { Router } = require("express");
const { Recipe, Diet } = require("../db.js");
const axios = require("axios");
const { Op } = require("sequelize");
const { API_KEY } = process.env;

const router = Router();

const getApi = async (name) => {
  if (name) {
    const data = await axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`
      )
      .then((response) => response.data.results)
      .then((data) => {
        data
          .filter((r) => r.title.toLowerCase().includes(name.toLowerCase()))
          .map((r) => ({
            id: r.id,
            name: r.title,
            img: r.image,
            diets: r.diets,
            type: r.dishTypes,
          }));
      })
      .catch((e) => ({ msg: e }));
    return data;
  } else {
    console.log("entré a getApi sin name");
    const data = await axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`
      )
      .then((response) => console.log(response.data.results))
      .then((data) => {
        data.map((r) => ({
          id: r.id,
          name: r.title,
          img: r.image,
          diets: r.diets,
          type: r.dishTypes,
        }));
        console.log(data.slice(0, 9));
      })
      .catch((e) => ({ msg: e }));
    console.log(...data);
    return data;
  }
};

const getData = async (name) => {
  if (name) {
    const data = await Recipe.findAll({
      where: {
        name: {
          [Op.substring]: name,
        },
      },
    });
    return data.length ? data : [];
  } else {
    console.log("entré a getData sin name");
    const data = await Recipe.findAll({
      include: Diet,
    });
    console.log(...data);
    return data;
  }
};

const allData = async () => {
  console.log("entré a allData");
  const apiInfo = await getApi();
  const dbInfo = await getData();
  return apiInfo;
};

router.get("/recipes", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const search = await allData(name);
    return res.json(search);
  } else {
    console.log("no hay nombre");
    const recipes = await allData(name);
    console.log("recipes " + recipes);
    return res.json(recipes);
  }
});

const getRApi = (id) => {
  const recipe = axios
    .get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    )
    .then((r) => {
      return {
        id: r.id,
        name: r.title,
        img: r.image,
        type: r.dishTypes,
        diets: r.diets,
        summary: r.summary,
        score: r.spoonacularScore,
        healthScore: r.healthScore,
        steps: r.analyzedInstructions[0].steps.map((s) => s.step),
      };
    })
    .catch((reason) => {
      return { msg: `falló por ${reason}` };
    });
  return recipe;
};

const getRDB = async (id) => {
  const recipe = await Recipe.findByPk(id, { include: Diet });
  return recipe ? recipe : null;
};

router.get("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const num = parseInt(id);
  if (num === NaN) {
    const result = getRDB(id);
    return result
      ? res.status(200).json(result)
      : res.status(404).send({ msg: "No se encontró la receta" });
  } else {
    const result = getRApi(num);
    return result
      ? res.status(200).json(result)
      : res.status(404).send({ msg: "No se encontró la receta" });
  }
});

module.exports = router;
