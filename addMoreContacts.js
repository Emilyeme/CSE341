import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Contact from "./models/contacts.js";

dotenv.config();

const newContacts = [
  {
    firstName: "Michael",
    lastName: "Taylor",
    email: "michaeltaylor@gmail.com",
    favoriteColor: "Yellow",
    birthday: "1997-04-18"
  },
  {
    firstName: "Grace",
    lastName: "Williams",
    email: "gracewilliams@gmail.com",
    favoriteColor: "Pink",
    birthday: "2001-07-22"
  },
  {
    firstName: "Daniel",
    lastName: "Anderson",
    email: "danielanderson@gmail.com",
    favoriteColor: "Black",
    birthday: "1996-11-05"
  },
  {
    firstName: "Rachel",
    lastName: "Thomas",
    email: "rachelthomas@gmail.com",
    favoriteColor: "Purple",
    birthday: "2003-02-14"
  },
  {
    firstName: "James",
    lastName: "Martin",
    email: "jamesmartin@gmail.com",
    favoriteColor: "Green",
    birthday: "1999-09-30"
  }
];

const addMoreContacts = async () => {
  try {
    await connectDB();

    await Contact.insertMany(newContacts);

    console.log("✅ Five more contacts added successfully!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error adding contacts:", error.message);
    process.exit(1);
  }
};

addMoreContacts();