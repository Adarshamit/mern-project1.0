const express=require("express");
const app=express()
const mongoose = require('mongoose');
const PORT = process.env.PORT  || 4000;
const dotenv =require("dotenv");
dotenv.config();

const cors = require("cors");

app.use(cors());

const userRouter = require ("./routes/userRoute.js");

app.use(express.json());

mongoose
  .connect(
    process.env.URI
  )
  .then(() => console.log("Connected to database"))
  .catch(() => console.log("Could not connect to database"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  app.use(userRouter);