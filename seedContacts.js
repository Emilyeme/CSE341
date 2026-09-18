import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Contact from "./models/contacts.js";

dotenv.config();

const contacts = [
  {
    firstName: "Emily",
    lastName: "Emerson",
    email: "emilyemerson@gmail.com",
    favoriteColor: "Blue",
    birthday: "2002-05-15"
  },
  {
    firstName: "John",
    lastName: "Smith",
    email: "johnsm@gmail.com",
    favoriteColor: "Green",
    birthday: "1998-08-20"
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarahjohn@gmail.com",
    favoriteColor: "Purple",
    birthday: "2000-12-10"
  }
];

const seedContacts = async () => {
  try {
    await connectDB();

    await Contact.deleteMany({});

    await Contact.insertMany(contacts);

    console.log("✅ Contacts added to MongoDB successfully!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error adding contacts:", error.message);
    process.exit(1);
  }
};

seedContacts();