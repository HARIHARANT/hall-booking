const express = require("express");
const mongo = require("./shared");
const roomsRouter = require("./router/createRoom");
const bookingsRouter = require("./router/bookings");
const cors =require("cors");
const dotenv =require("dotenv");
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
mongo.connect();

app.use("/",(req,res,next)=>{    
    next();
   //res.send("Welcome to hallss");
});

app.use("/rooms",roomsRouter);
app.use("/bookings",bookingsRouter);

app.listen(process.env.PORT || 5000);