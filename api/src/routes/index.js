const { Router } = require("express");
const { API_KEY } = process.env;
const recipes = require("./recipes");
const recipe = require("./recipe");
const type = require("./types.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApi = async () => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`
  );
  const info = await data.map((r) => ({
    id: r.id,
    name: r.title,
    img: r.image,
    diets: r.diets,
  }));
  return info;
};

const getData = async () => {
  const data = await Recipe.findAll();
  const info = await data.map((r) => ({
    id: r.id,
    name: r.title,
    diets: r.diets,
  }));
  return info;
};

const allData = async () => {
  const api = await getApi();
  const db = await getData();
  return [...api, ...db];
};

module.exports = router;
