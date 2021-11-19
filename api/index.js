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
      "Eliminar el gluten significa evitar el trigo, la cebada, el centeno y otros cereales que contienen gluten y los alimentos elaborados con ellos (o que pueden haber sido contaminados de forma cruzada).",
  });

  var ketogenic = Diet.create({
    name: "Ketogenic",
    description:
      "La dieta cetogénica se basa más en la proporción de grasas, proteínas y carbohidratos en la dieta que en ingredientes específicos. En términos generales, los alimentos ricos en grasas y proteínas son aceptables y los alimentos ricos en carbohidratos no lo son. La fórmula que utilizamos tiene un contenido de grasa del 55-80%, un contenido de proteínas del 15-35% y menos del 10% de carbohidratos. ",
  });

  var vegetarian = Diet.create({
    name: "Vegetarian",
    description:
      "Ningún ingrediente puede contener carne o subproductos cárnicos, como huesos o gelatina.",
  });
  var lacto_vegetarian = Diet.create({
    name: "Lacto-Vegetarian",
    description:
      "Todos los ingredientes deben ser vegetarianos y ninguno de los ingredientes puede ser o contener huevo.",
  });
  var ovo_vegetarian = Diet.create({
    name: "Ovo-Vegetarian",
    description:
      "Todos los ingredientes deben ser vegetarianos y ninguno de los ingredientes puede ser o contener lácteos.",
  });
  var vegan = Diet.create({
    name: "Vegan",
    description:
      "Ningún ingrediente puede contener carne o subproductos cárnicos, como huesos o gelatina, ni puede contener huevos, lácteos o miel.",
  });
  var pescetarian = Diet.create({
    name: "Pescetarian",
    description:
      "Todo está permitido, excepto la carne y los subproductos cárnicos: algunos pescetarios comen huevos y productos lácteos, otros no.",
  });
  var paleo = Diet.create({
    name: "Paleo",
    description:
      "Los ingredientes permitidos incluyen carne (especialmente de animales alimentados con pasto), pescado, huevos, verduras, algunos aceites (por ejemplo, aceite de coco y de oliva) y, en cantidades más pequeñas, frutas, nueces y batatas. También permitimos miel y jarabe de arce (popular en los postres Paleo, pero los seguidores estrictos de Paleo pueden no estar de acuerdo). Los ingredientes no permitidos incluyen legumbres (por ejemplo, frijoles y lentejas), cereales, productos lácteos, azúcar refinada y alimentos procesados.",
  });
  var primal = Diet.create({
    name: "Primal",
    description:
      "Muy similar a Paleo, excepto que se permiten los lácteos: piense en leche cruda y entera, mantequilla, ghee, etc.",
  });
  var lowFodmap = Diet.create({
    name: "Low FODMAP",
    description:
      "FODMAP significa 'oligosacáridos, di, monosacáridos y polioles fermentables'. Nuestra ontología sabe qué alimentos se consideran ricos en este tipo de carbohidratos (por ejemplo, legumbres, trigo y productos lácteos) ",
  });
  var whole30 = Diet.create({
    name: "Whole30",
    description:
      "Los ingredientes permitidos incluyen carne, pescado / mariscos, huevos, verduras, fruta fresca, aceite de coco, aceite de oliva, pequeñas cantidades de frutos secos y nueces / semillas. Los ingredientes no permitidos incluyen edulcorantes agregados (naturales y artificiales, excepto pequeñas cantidades de jugo de fruta), lácteos (excepto mantequilla clarificada o ghee), alcohol, granos, legumbres (excepto judías verdes, guisantes dulces y chícharos) y aditivos alimentarios. , como carragenina, MSG y sulfitos.",
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
