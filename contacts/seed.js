import dotenv from "dotenv";
import fs from "fs";
import connectDB from "./config/db.js";
import Professional from "./models/professional.js";

dotenv.config();

const imageBase64 = fs.readFileSync(
  "./professional_image_base64.txt",
  "utf8"
);

const professionalData = {
  professionalName: "Emily Emerson",

  base64Image: imageBase64,

  nameLink: {
    firstName: "Emily",
    url: "https://www.linkedin.com/in/emily-emerson-27a28729b/"
  },

  primaryDescription:
    "I am a web development student with an interest in building useful and user-friendly applications.",

  workDescription1:
    "I am developing my skills in web development, JavaScript, Node.js, Express, and database technologies.",

  workDescription2:
    "My goal is to continue growing my technical skills and eventually specialize in cybersecurity.",

  linkTitleText: "Find me online",

  linkedInLink: {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/emily-emerson-27a28729b/"
  },

  githubLink: {
    text: "GitHub",
    link: "https://github.com/Emilyeme/CSE341"
  }
};

const seedDatabase = async () => {
  try {
    await connectDB();

    await Professional.deleteMany({});

    await Professional.create(professionalData);

    console.log("✅ Professional information added to MongoDB!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error adding data:", error.message);
    process.exit(1);
  }
};

seedDatabase();