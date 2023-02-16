const preAdmin = require("../json/preAdmin.json");
const { Admin } = require("../database.js");

const preloadAdmin = async () => {
  try {
    let dataAdmin = preAdmin.map((admin) => {
      return {
        user: admin.user,
        password: admin.password,
      };
    });

    for (const user of dataAdmin) {
      createAdmin(user);
    }
    return dataAdmin;
    
  } catch (error) {
    console.log("ERROR en preloadAdmin", error);
  }
};

const createAdmin = async (data) => {
  try {
    const { user, password } = data;

    const savedAdmin = await Admin.create({
      user,
      password,
    });
    return savedAdmin;

  } catch (error) {
    console.log("ERROR en createAdmin", error);
  }
};

module.exports = { preloadAdmin, createAdmin };
