const { Router } = require("express");
const recipes = require("./recipes");
const recipe = require("./recipe");
const types = require("./types.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(recipes);
router.use(types);
router.use(recipe);

module.exports = router;
