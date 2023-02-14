const { response } = require("express");
const { Categories } = require("../database.js");

const createCategories = async (req, res = response) => {
  try {
    const { name } = req.body;

    const category = await Categories.create({ name });

    res.status(201).json({ msg: "Categoría creada", category });
  
  } catch (error) {
    console.log("ERROR in createCategories", error);
    res.status(500).send({ msg: error.message });
  }
};

module.exports = { createCategories };
