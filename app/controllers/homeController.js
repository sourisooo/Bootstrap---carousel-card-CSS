const pokedexModel = require("../datamapper");

const homeController = {
  async index(req, res) {

    const data = await pokedexModel.getll();

    // console.log(data);

    res.render('index', {data});
  },
};

module.exports = homeController;
