// external imports
const mongoose = require("mongoose");

async function dbConnect() {
  try {
    // Connect to the MongoDB database using the environment variable set by Heroku
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB Atlas!");
  } catch (error) {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  }
}

module.exports = dbConnect;
