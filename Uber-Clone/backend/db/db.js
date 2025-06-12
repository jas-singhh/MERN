const mongoose = require("mongoose");

/**
 * Establishes a connection to the MongoDB database using Mongoose.
 * Uses the connection string from the environment variable `MONGO_CONNECTION_STRING`.
 * Logs a success message upon successful connection, or logs an error if the connection fails.
 */
function connectToDb() {
  mongoose
    .connect(process.env.MONGO_CONNECTION_STRING || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => console.log("Error: ", err));
}

module.exports = connectToDb;
