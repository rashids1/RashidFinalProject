const { MongoClient } = require("mongodb");
// const greetings = require("./data/greetings.json");
const { events, Users } = require("./MockData.js");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("workout4all");
    await db.collection("events").insertMany(events);
    console.log("connected");
  } catch (err) {
    console.log("error:", err.stack);
  }
  client.close();
  console.log("disconenected!");
};

// batchImport();
