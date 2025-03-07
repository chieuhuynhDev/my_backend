import express from "express";
import authRouter from "./routes/auth.js";
import imageRouter from "./routes/image.js";
import userRouter from "./routes/user.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/images", imageRouter);
app.use("/api/user", userRouter);

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});
