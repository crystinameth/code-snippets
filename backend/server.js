import express, { json } from "express";
import cors from "cors";
import snippetsRoutes from "./routes/snippetsRoutes.js";
import db from "../backend/config/db.js";

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Alternative approach
// (allow requests from anywhere)
// The commented out code for that
// can be found below

// app.use(cors());

app.use(json());

app.use("/api", snippetsRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "STATUS: HEALTHY" });
});

//Database connection
db.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Error connecting to the database:", err));
