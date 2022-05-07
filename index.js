const express = require("express");
const mongo = require("./shared");
const roomsRouter = require("./router/createRoom");
const bookingsRouter = require("./router/bookings");
const app = express();

app.use(express.json());
mongo.connect();

app.use("/",(req,res,next)=>{    
    next();
   // res.send("Welcome to hall booing");
});

app.use("/rooms",roomsRouter);
app.use("/bookings",bookingsRouter);

app.listen("3003");