const doent = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const driverRoutes = require("./routes/driver.routes");
const cookieParser = require("cookie-parser");

const app = express();

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/drivers", driverRoutes);

app.get("/", (req, res) => {
    res.send("Hello World");
})

module.exports = app;