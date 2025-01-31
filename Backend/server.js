// // const express = require("express");
// import express from 'express';
// import connectDB from './config/db.js';
// // const connectDB = require("./config/db")
// // const cors = require('cors');
// import cors from 'cors'
// // const { User } = require("./models/User");
// import User from './models/User.js';  // Correct import with .js extension


// // const patientRoutes = require('./routes/patientRoutes');
// // const paymentRoutes = require('./routes/payment');
//  const app = express();
// //  const User = require("./models/user")
 
// app.use(cors());
// app.use(express.json());


// // app.use('/api', patientRoutes);
// // app.use('/pay', paymentRoutes);

// app.post('/api/users', async (req, res) => {
//   try {
//     const { name, email, age } = req.body;

//     // Create a new user
//     const newUser = new User({
//       name,
//       email,
//       age,
//     });

//     // Save user to MongoDB
//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully', user: newUser });
//   } catch (err) {
//     console.error('Error creating user:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });


 
// connectDB()
// .then(() => {
//   console.log("Database connection established...");
//   app.listen(3000, () => {
//     console.log("Server is successfully listening on port 777...");
//   });
// })
// .catch((err) => {
//   console.error("Database cannot be connected", err);
// });



import express  from "express";
import cookieParser from "cookie-parser";
// import User from './models/User.js';  // Add .js extension for local files
import User from "./models/User.js"
import cors from "cors"
const app=express();
 

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const corsOptions={
  origin:'http//localhost:5173',
  Credentials:true
}


app.post('/api/users', async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // Create a new user
    const newUser = new User({
      name,
      email,
      age,
    });

    // Save user to MongoDB
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.use(cors(corsOptions));
const PORT=3000;
app.listen(PORT,()=>{
  console.log(`server running at port ${PORT}`)
})




