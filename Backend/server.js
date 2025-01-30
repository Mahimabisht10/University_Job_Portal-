const express = require("express");
const connectDB = require("./config/db")
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes');
const paymentRoutes = require('./routes/payment');
 const app = express();
//  const User = require("./models/user")
 
app.use(cors());
app.use(express.json());


// app.use('/api', patientRoutes);
// app.use('/pay', paymentRoutes);


 
 connectDB()
  .then(()=>{
    console.log("Database connection established...");

    app.listen(777,()=> {
      console.log("Server is successfully listing on port 7777...");
      
   });
   
    
}).catch(err=>{
   console.error("Database cannot be connected");
   
})
