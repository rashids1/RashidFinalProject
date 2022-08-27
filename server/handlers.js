const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAllEvents = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("workout4all");

  try {
    console.log("connected");
    const allEvents = await db.collection("events").find().toArray();
    res.status(200).json({ status: 200, data: allEvents });
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, Message: "Nothing was found", Error: err });
  }

  client.close();
  console.log("disconenected!");
};

module.exports = { getAllEvents };
