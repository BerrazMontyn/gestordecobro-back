const server = require("./src/app.js");
const { conn } = require("./src/database.js");
require("dotenv").config();

const jsonCustomers = require("./src/json/preCustomers.json");
const { preloadAdmin, preloadCustomers } = require("./src/utils/index");

const port = process.env.PORT;

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    preloadAdmin();
    preloadCustomers(jsonCustomers);
    console.log(`Server listening on port: ${port}`);
  });
});
