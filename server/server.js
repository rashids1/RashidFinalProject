"use strict";

// ecxamples of importting functions from other files like handlers
// const { getUsers } = require("./exercises/exercise-1.3");
// const { addUser } = require("./exercises/exercise-1.4");
// const {
//   createGreeting,
//   deleteGreeting,
//   updateGreeting,
// } = require("./exercises/exercise-2");
// const { getGreeting } = require("./exercises/exercise-2");
// const { getGreetings } = require("./exercises/exercise-2");

const express = require("express");
const morgan = require("morgan");
const {
  getAllEvents,
  pushUserToDataBase,
  getUserInformation,
  getEventInformation,
  joinEvent,
  getEventInformationById,
} = require("./handlers");

const PORT = process.env.PORT || 8000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //endpoints examples

  .get("/allEvents", getAllEvents)
  .get("/users/:userId", getUserInformation)
  .get("/events/:eventId", getEventInformation)
  .get("/event/:_id", getEventInformationById)
  .post("/newUser", pushUserToDataBase)
  .post("/joinEvent", joinEvent)
  // .post("/exercise-1/users", addUser)
  // .post("/exercise-2/greeting", createGreeting)
  // .get("/exercise-2/greeting/:_id", getGreeting)
  // .get("/exercise-2/greeting", getGreetings)
  // .delete("/exercise-2/greeting/:_id", deleteGreeting)
  // .patch("/exercise-2/greeting/:_id", updateGreeting)

  // handle 404s

  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
