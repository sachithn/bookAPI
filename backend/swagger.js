import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation for my project",
    },
  },
  apis: ["./routes/*.js"], // Path to your API route files
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };