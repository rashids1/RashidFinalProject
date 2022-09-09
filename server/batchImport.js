const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid");
const { events, Users } = require("./MockData.js");

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("workout4all");
  try {
    console.log("connected");
    const importData = await db.collection("events").insertMany(events);
  } catch (err) {
    console.log("error:", err.stack);
  }
  client.close();
  console.log("disconenected!");
};

batchImport();
