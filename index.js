const server = require("./src/app.js");
const { conn } = require("./src/database.js");
require("dotenv").config();

const jsonAdmin = require("./src/json/preAdmin.json");
const jsonCustomers = require("./src/json/preCustomers.json");
const jsonCategories = require("./src/json/preCategories.json");
const {
  preloadAdmin,
  preloadCustomers,
  preloadCategories,
} = require("./src/utils/index");

const port = process.env.PORT;

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    preloadAdmin(jsonAdmin);
    preloadCustomers(jsonCustomers);
    preloadCategories(jsonCategories);
    console.log(`Server listening on port: ${port}`);
  });
});
