const server = require("./src/app.js");
const { conn } = require("./src/database.js");
require("dotenv").config();

const port = process.env.PORT;

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
});
