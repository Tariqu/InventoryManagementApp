const mongoose = require("mongoose");
const DB_URL = require("./config").DB_URL;

module.exports = function() {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  mongoose.connection.on("connected", e => {
    console.log("Connected Successfully...");
  });
  mongoose.connection.on("error", err => {
    console.log("Error : " + err);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Mongodb Disconnected Successfully...");
  });
  process.on("SIGINT", () => {
    mongoose.connection.close();
    console.log("Mongodb disconnected by Application");
    console.log(process.pid);
    process.kill(process.pid);
    process.exit(0);
  });
};
