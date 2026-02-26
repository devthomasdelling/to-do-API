const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/task.routes");
const authRoutes = require("./routes/auth.routes")
const errorMiddleware = require("./middleware/error.middleware");

const app = express();
app.use(express.json());

app.use("/tasks", taskRoutes)
app.use("/auth", authRoutes)

app.use(errorMiddleware);

module.exports = app;