const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("mongo ok"))
    .catch((err) => console.log(err));
};
