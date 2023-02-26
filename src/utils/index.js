const { Admin, Customers, Categories } = require("../database.js");

//________________________________________________________//

const preloadAdmin = async (admin) => {
  try {
    await Admin.bulkCreate(admin);
  } catch (error) {
    console.error("ERROR en preloadAdmin");
  }
};

//________________________________________________________//

const preloadCustomers = async (data) => {
  try {
    await Customers.bulkCreate(data);
  } catch (error) {
    console.error("ERROR en preloadCustomers");
  }
};

//________________________________________________________//

const preloadCategories = async (data) => {
  try {
    await Categories.bulkCreate(data);
  } catch (error) {
    console.error("ERROR en preloadCategories");
  }
};

//________________________________________________________//

module.exports = {
  preloadAdmin,
  preloadCustomers,
  preloadCategories,
};
