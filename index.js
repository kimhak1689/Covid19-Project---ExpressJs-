const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routers/index");
require("dotenv").config(); //env

const connectDB = require('./db/connect');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use("/uploads",express.static('uploads'));


app.use(cors({
  origin: '*'
}));


//user
app.use('/api', router);

//testing when server running
app.get('/',(req,res)=>{
  res.send("Hello start")
})



const startServer = async () => {
  try {
    await connectDB(process.env.DB_URL);
    app.listen(3001,()=>{
      console.log('Server is running on http://localhost:3001/');
    })
  } catch (error) {
    console.log("Error Connection database: "+error)
  }
}
  
startServer();