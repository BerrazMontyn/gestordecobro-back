const { response } = require("express");
const { Categories } = require("../database.js");

const createCategory = async (req, res = response) => {
  try {
    const { name, subCategories } = req.body;

    const categoryFound = await Categories.findOne({ where: { name: name } });
    if (categoryFound) {
      res.status(409).send({ msg: "La categoría ya existe" });
    }
    const category = await Categories.create({ name, subCategories });
    res.status(201).json({ msg: "Categoría creada", category });
  } catch (error) {
    console.log("ERROR en createCategory");
    res.status(500).send({ msg: error.message });
  }
};

const getCategories = async (req, res = response) => {
  try {
    const allCategories = await Categories.findAll();

    if (!allCategories.length) {
      return res.json({ msg: "No hay Categorías", allCategories });
    }
    res.json({ msg: "Todas las categorías", allCategories });
  } catch (error) {
    console.log("ERROR en getCategories");
    res.status(500).send({ msg: error.message });
  }
};

const updateCategory = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const categoryFound = await Categories.findByPk(id);
    if (!categoryFound) {
      return res.status(404).send({ msg: "La categoría no existe" });
    }
    await categoryFound.update({ name });
    res.json({ msg: "Categoría actualizada", categoryFound });
  } catch (error) {
    console.log("ERROR en updateCategory");
    res.status(500).send({ msg: error.message });
  }
};

const deleteCategory = async (req, res = response) => {
  try {
    const { id } = req.params;

    const categoryFound = await Categories.findByPk(id);
    if (!categoryFound) {
      return res.status(404).send({ msg: "La categoría no existe" });
    }
    await categoryFound.destroy();
    res.send({ msg: "Categoría eliminada" });
  } catch (error) {
    console.log("ERROR en deleteCategory");
    res.status(500).send({ msg: error.message });
  }
};

const addSubCategories = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { subCategories } = req.body;

    const categoryFound = await Categories.findByPk(id);
    if (!categoryFound) {
      return res.status(404).send({ msg: "La categoría no existe" });
    }
    await categoryFound.update({ subCategories });
    res.json({ msg: "SubCategoría agregada", categoryFound });
  } catch (error) {
    console.log("ERROR en addSubCategory");
    res.status(500).send({ msg: error.message });
  }
};

module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  addSubCategories,
};
