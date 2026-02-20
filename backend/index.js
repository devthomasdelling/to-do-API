const express = require("express");
const cors = require("cors");
const taskRouters = require("./routers/taskRouters");
const errorMiddleware = require("./middleware/errorMiddleware");
require("dotenv").config();
require("./config/db")();


const app = express();
app.use(express.json());

app.use("/tasks", taskRouters);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("servidor rodando na porta 3000");
});
