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
      }));
    return search.length ? search : [];
  } else {
    const info = await data.map((r) => ({
      id: r.id,
      name: r.title,
      img: r.image,
      diets: r.diets,
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

const getRApi = async (id) => {
  const recipe = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
  );
};

router.get("/recipes/:id", (req, res) => {});

module.exports = router;
