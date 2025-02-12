require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeRegisterRoute = require("./Routes/EmployeeRegisterRoute");
const AuthRoute = require("./Routes/AuthRoute.js");
const breakRoutes = require("./Routes/BreakRoute.js");

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: "http://147.93.119.175:3000", 
    credentials: true, 
  })
);

app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Routes
app.use(EmployeeRegisterRoute);
app.use(AuthRoute);
app.use(breakRoutes);

// Default Route
app.get("/", async (req, res) => {
  res.status(200).json({ message: "This is a backend data.!" });
});

// Server Listening
const IP_ADDRESS = "147.93.119.175"; // Replace with your IP address
const PORT = 5000;

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Backend server running on http://${IP_ADDRESS}:${PORT}`);
});