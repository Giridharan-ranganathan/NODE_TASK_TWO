const express = require('express');
const parser = require("body-parser");
const HTTP_SERVER = express();

HTTP_SERVER.use(parser.json());

//Listen to start the Server
HTTP_SERVER.listen(5000,"localhost",() => {
    console.log("server Started")
})

//POST THE DATA TO CREATE ROOM
HTTP_SERVER.post('/createRoom' , (request,response) => {
    response.status(201).json({
      message: "File created successfully",
      Number_of_seats_available : "255",
      amenities_in_room : "Tv , Wifi , AC",
      Price_of_the_room : "12k"
    });
})

//POST THE DATA TO CREATING BOOKING
HTTP_SERVER.post('/createBooking' , (request,response) => {
  response.status(201).json({
    "message" : "Room Booked Successfully",
    "Name" : "Giri Dharan",
    "Date" : "11/11/1111",
    "start time" : "12.00 Am - 11/11/1111",
    "End time" : "12.00 PM - 12/11/1111",
    "Room N0" : "000"
  })
})


//GET ALL ROOMS DATA
HTTP_SERVER.get('/allRooms' , (request,response) => {
  const allRooms = require("./data/allRooms.json");
  response.status(200).json(allRooms);
})

//GET ALL CUSTOMER DATA
HTTP_SERVER.get('/allCustomer' , (request,response) => {
  const allCust = require("./data/allCoustomer.json");
  response.status(200).json(allCust);
})


// GETING CUSTOMER DETAILS USING BOOKING DETAILS
HTTP_SERVER.get("/bookings/:bookingId", (request, response) => {
  // console.log("PARAMS", request.params.bookingId);
  // console.log("QUERY", request.query);
  return response.status(200).json({
    message: "Booking fetched successfully",
  });
});
