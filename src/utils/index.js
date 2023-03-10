const { Admin, Customers, Services } = require("../database.js");

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

const preloadServices = async (data) => {
  try {
    await Services.bulkCreate(data);
  } catch (error) {
    console.error("ERROR en preloadServices");
  }
};

module.exports = {
  preloadAdmin,
  preloadCustomers,
  preloadServices,
};
