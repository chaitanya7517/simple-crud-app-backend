
import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.routes.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/product',productRoute)


app.get("/", async (req, res) => {
  res.send("Hello api");
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database connected!!");
    app.listen(3000, () => {
      console.log("server is running on 3000");
    });
  })
  .catch(() => {
    console.log("connection fail!!");
});
