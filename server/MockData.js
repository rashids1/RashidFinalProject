const { v4: uuidv4 } = require("uuid");

const date = new Date();

const events = [
  {
    _id: uuidv4(),
    title: "Pilates in Parc Angrignon with Mario",
    description:
      "Come workout with us in Parc Angrignon  24th of september at 5pm Bring your towel!",
    date: "2022,09,24",
    trainer: "Mario",
    dateCreated: date,
    requiresPayment: false,
    userIdsJoined: [],
    price: 0,
    adress: "250 wellington",
    city: "Montreal",
    province: "Qc",
    country: "Canada",
  },
  {
    _id: uuidv4(),
    title: "Outdoor boxing cardio With Elena",
    description:
      "Come Burn some calories with us in Parc Laval  sunday 22 october 2022 at 5pm Bring your towel!",
    date: "2022,10,22",
    trainer: "Elena",
    dateCreated: date,
    requiresPayment: false,
    userIdsJoined: [],
    price: 0,
    adress: "404 street",
    city: "Montreal",
    province: "Qc",
    country: "Canada",
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
