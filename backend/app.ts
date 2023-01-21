import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import router from "./routes/file";

const app = express();
dotenv.config();

connectDB()

app.use(cors());
app.use(express.json())

const PORT = process.env.PORT;

app.get("/", (req,res)=>{
  res.send("Welcome to the home page")
})

app.use(router)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
