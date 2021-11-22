const { Router } = require("express");
const { Diet } = require("../db.js");

const router = Router();

const getTypes = async () => {
  const types = await Diet.findAll();
  return types;
};

router.get("/types", async (req, res) => {
  const data = await getTypes();
  data.length
    ? res.status(200).send(data)
    : res.status(404).send({ msg: "No se encontraron los tipos" });
});

module.exports = router;
