import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Image Sharing API",
      version: "1.0.0",
      description: "API documentation for the Image Sharing backend",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"], // Đường dẫn đến các file chứa JSDoc comments
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
