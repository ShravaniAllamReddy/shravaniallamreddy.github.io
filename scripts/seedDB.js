const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Contacts collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactcontacts"
);

const contactSeed = [
  {
    name: "shravs",
    email: "shravs@gmail.com",
    subject: "Regarding a job opportunity",
    message: "Hi, when is the right time to connect"
  },
  
];

db.Contact
  .remove({})
  .then(() => db.Contact.collection.insertMany(contactSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
