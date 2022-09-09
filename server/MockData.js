const { v4: uuidv4 } = require("uuid");

const date = new Date();

const events = [
  {
    _id: uuidv4(),
    title: "Pilates in Parc du Bois-Franc with Mario",
    description:
      "Come workout with us in Parc du Bois-Franc 24th of september at 5pm Bring your towel!",
    date: "2022,09,24",
    trainer: "Mario",
    dateCreated: date,
    requiresPayment: false,
    userIdsJoined: [],
    price: 0,
    adress: "2145 Chinook St",
    city: "Montreal",
    province: "Qc",
    country: "Canada",
    coordinates: [45.515999, -73.711639],
  },
  {
    _id: uuidv4(),
    title: "Outdoor boxing cardio With Elena",
    description:
      "Come Burn some calories with us in Parc Hartenstein sunday 22 october 2022 at 5pm Bring your towel!",
    date: "2022,10,22",
    trainer: "Elena",
    dateCreated: date,
    requiresPayment: false,
    userIdsJoined: [],
    price: 0,
    adress: "1505 Cardinal St",
    city: "Montreal",
    province: "Qc",
    country: "Canada",
    coordinates: [45.5178, -73.6912],
  },
];

const users = [
  {
    _id: uuidv4(),
    FullName: "Jake Paul",
    email: "jakepaul2022@gmail.com",
    IsTrainer: false,
    IdsOfEventsJoined: [2274, 2279, 3275],
    memberSince: date,
    IdsOffEventsCreated: [],
    premiumMembership: false,
  },
  {
    _id: uuidv4(),
    FullName: "Bob Paul",
    email: "bobpaul2022@gmail.com",
    IsTrainer: false,
    IdsOfEventsJoined: [2279, 3275],
    memberSince: date,
    IdsOffEventsCreated: [],
    premiumMembership: false,
  },
  {
    _id: uuidv4(),
    FullName: "Ahmed Sobot",
    email: "ahmedSobot2022@gmail.com",
    IsTrainer: true,
    IdsOfEventsJoined: [2279, 3275],
    memberSince: date,
    IdsOffEventsCreated: [2279, 3275],
    premiumMembership: false,
  },
];

module.exports = { events, users, date };
