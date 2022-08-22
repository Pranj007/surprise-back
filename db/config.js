const mongoose = require("mongoose");
const url = `mongodb+srv://PranavJayachandran:qwertyuiop@cluster0.soefifz.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. ${err}`);
  });
