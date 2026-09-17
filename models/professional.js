import mongoose from "mongoose";

const professionalSchema = new mongoose.Schema({
  professionalName: {
    type: String,
    required: true
  },

  base64Image: {
    type: String,
    required: false
  },

  nameLink: {
    firstName: String,
    url: String
  },

  primaryDescription: String,

  workDescription1: String,

  workDescription2: String,

  linkTitleText: String,

  linkedInLink: {
    text: String,
    link: String
  },

  githubLink: {
    text: String,
    link: String
  }
});

const Professional = mongoose.model(
  "Professional",
  professionalSchema
);

export default Professional;