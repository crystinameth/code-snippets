import express, { json } from "express";
import cors from "cors";
import snippetsRoutes from './routes/snippetsRoutes.js';
import db from '../backend/config/db.js';

const PORT = process.env.PORT;
const app = express();

//Middleware
app.use(cors());
app.use(json());

//Routes
app.use("/api", snippetsRoutes);

//Database connection
db.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Error connecting to the database:", err));
