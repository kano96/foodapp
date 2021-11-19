//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Diet } = require("./src/db.js");

// Syncing all the models at once.

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
  var gluten = Diet.create({
    name: "Gluten Free",
    description:
      "Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).",
  });

  var ketogenic = Diet.create({
    name: "Ketogenic",
    description:
      "The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.",
  });

  var vegetarian = Diet.create({
    name: "Vegetarian",
    description:
      "No ingredients may contain meat or meat by-products, such as bones or gelatin.",
  });
  var lacto_vegetarian = Diet.create({
    name: "Lacto-Vegetarian",
    description:
      "All ingredients must be vegetarian and none of the ingredients can be or contain egg.",
  });
  var ovo_vegetarian = Diet.create({
    name: "Ovo-Vegetarian",
    description:
      "All ingredients must be vegetarian and none of the ingredients can be or contain dairy.",
  });
  var vegan = Diet.create({
    name: "Vegan",
    description:
      "No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.",
  });
  var pescetarian = Diet.create({
    name: "Pescetarian",
    description:
      "Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.",
  });
  var paleo = Diet.create({
    name: "Paleo",
    description:
      "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.",
  });
  var primal = Diet.create({
    name: "Primal",
    description:
      "Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.",
  });
  var lowFodmap = Diet.create({
    name: "Low FODMAP",
    description:
      "FODMAP stands for 'fermentable oligo-, di-, mono-saccharides and polyols.' Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products)",
  });
  var whole30 = Diet.create({
    name: "Whole30",
    description:
      "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.",
  });

  Promise.all([
    gluten,
    ketogenic,
    vegetarian,
    lacto_vegetarian,
    ovo_vegetarian,
    vegan,
    pescetarian,
    paleo,
    primal,
    lowFodmap,
    whole30,
  ]).then((res) => {
    console.log("Categorías precargadas");
  });
});
