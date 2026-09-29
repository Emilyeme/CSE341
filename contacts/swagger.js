import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CSE 341 Contacts API",
      version: "1.0.0",
      description: "API for managing contacts"
    },
    servers: [
      {
        url: "https://cse341-mkb0.onrender.com"
      }
    ]
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;