// const mongoose = require('mongoose// const connectDB = async () => {//     await mongoose.connect("mongodb+srv:tripathidiya673:Ywi1nmlzEW2QrHg8@cluster0.gumlx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");//// module.exports = connectDB;


const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://tripathidiya673:Ywi1nmlzEW2QrHg8@cluster0.gumlx.mongodb.net/yourDatabaseName?retryWrites=true&w=majority', 
        // { useNewUrlParser: true, useUnifiedTopology: true }

    );
};

 module.exports = connectDB;

// # MONGO_URI="mongodb+srv:tripathidiya673:Ywi1nmlzEW2QrHg8@cluster0.gumlx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// # PORT= 8000;

