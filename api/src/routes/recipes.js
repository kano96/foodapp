const { Recipe, Diet } = require("../db.js");
const router = require("express").Router();
const { API_KEY } = process.env;

const getApi = async (name) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`
  );
  if (name) {
    const search = await data
      .filter((r) => {
        r.title === name;
      })
      .map((r) => ({
        id: r.id,
        name: r.title,
        img: r.image,
        diets: r.diets,
        type: r.dishTypes,
      }));
    return search.length ? search : [];
  } else {
    const info = await data.map((r) => ({
      id: r.id,
      name: r.title,
      img: r.image,
      diets: r.diets,
      type: r.dishTypes,
    }));
    return info;
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
    const data = await Recipe.findAll({
      include: Diet,
    });
    return data;
  }
};

const allData = async (name) => {
  if (name) {
    const api = await getApi(name);
    const db = await getData(name);
    return [...api, ...db];
  } else {
    const api = await getApi();
    const db = await getData();
    return [...api, ...db];
  }
};

router.get("/recipes", async (req, res) => {
  if (req.query) {
    const { name } = req.query;
    const d = await allData(name);
    d.length
      ? res.json(d)
      : res.status(404).send({ msg: "No se encontraron resultados" });
  } else {
    try {
      const d = await allData();
      return res.status(200).json(d);
    } catch {
      return res.send({ msg: "Fallo en obtener la info" });
    }
  }
});

const getRApi = (id) => {
  const recipe = fetch(
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
