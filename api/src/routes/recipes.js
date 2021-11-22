const { Router } = require("express");
const { Recipe, Diet } = require("../db.js");
const axios = require("axios").default;
const { API_KEY } = process.env;

const router = Router();

const getApi = async () => {
  const api = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`
  );
  const data = await api.data.results.map((r) => {
    return {
      id: r.id,
      name: r.title,
      img: r.image,
      diets: r.diets,
      type: r.dishTypes,
    };
  });
  return data;
};

const getData = async () => {
  const data = await Recipe.findAll({
    include: Diet,
  });

  return data;
};

const allData = async () => {
  try {
    const apiInfo = await getApi();
    const dbInfo = await getData();
    const data = [...apiInfo, ...dbInfo];
    return data;
  } catch (e) {
    return `Error: ${e}`;
  }
};

router.get("/recipes", async (req, res) => {
  const search = await allData();
  if (typeof search === "string")
    return res.status(404).send({ msg: `Error: ${search}` });
  const { name } = req.query;
  if (name && typeof name === "string") {
    const filteredData = search.filter((r) =>
      r.name.toLowerCase().includes(name.toLowerCase())
    );
    filteredData.length
      ? res.status(200).send(filteredData)
      : res.status(404).send({ msg: "Sin resultados" });
  } else {
    res.status(200).send(search);
  }
});

// const getRApi = (id) => {
//   const recipe = axios
//     .get(
//       `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
//     )
//     .then((r) => {
//       return {
//         id: r.id,
//         name: r.title,
//         img: r.image,
//         type: r.dishTypes,
//         diets: r.diets,
//         summary: r.summary,
//         score: r.spoonacularScore,
//         healthScore: r.healthScore,
//         steps: r.analyzedInstructions[0].steps.map((s) => s.step),
//       };
//     })
//     .catch((reason) => {
//       return { msg: `falló por ${reason}` };
//     });
//   return recipe;
// };

// const getRDB = async (id) => {
//   const recipe = await Recipe.findByPk(id, { include: Diet });
//   return recipe ? recipe : null;
// };

// router.get("/recipes/:id", (req, res) => {
//   const { id } = req.params;
//   const num = parseInt(id);
//   if (num === NaN) {
//     const result = getRDB(id);
//     return result
//       ? res.status(200).json(result)
//       : res.status(404).send({ msg: "No se encontró la receta" });
//   } else {
//     const result = getRApi(num);
//     return result
//       ? res.status(200).json(result)
//       : res.status(404).send({ msg: "No se encontró la receta" });
//   }
// });

module.exports = router;
