const { response } = require("express");
const { Admin } = require("../database.js");

const getAdmin = async (req, res = response) => {
  try {
    const { id } = req.params;

    const adminFound = await Admin.findByPk(id);
    res.json({ msg: "Admin encontrado", adminFound });
    
  } catch (error) {
    console.log("ERROR EN getAdmin");
    res.status(500).send({ msg: error.message });
  }
};

module.exports = { getAdmin };
