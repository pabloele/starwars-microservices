const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req,res) => {
  const newFilm = await Film.create();
  response(res, 201, newFilm);
    // res.status(200).send("Creando film");
};