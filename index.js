const express = require("express");
const serverless = require('serverless-http');
const mongo = require("./shared");
const roomsRouter = require("./router/createRoom");
const bookingsRouter = require("./router/bookings");
const app = express();
const router = express.Router();
app.use(express.json());
mongo.connect();

app.use("/",(req,res,next)=>{    
    next();
   // res.send("Welcome to hall booing");
});

app.use("/rooms",roomsRouter);
app.use("/bookings",bookingsRouter);

app.use('/.netlify/functions/server', router);

app.listen("3003");

module.exports = app;
module.exports.handler = serverless(app);