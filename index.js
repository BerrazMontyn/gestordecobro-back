const server = require("./src/app.js");
const { conn } = require("./src/database.js");
require("dotenv").config();

const { preloadAdmin } = require("./src/utils/index");

const port = process.env.PORT;

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    preloadAdmin();
    console.log(`Server listening on port: ${port}`);
  });
});
