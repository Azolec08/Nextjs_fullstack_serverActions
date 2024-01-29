const mongoose = require("mongoose");

const Connection = {};

export const connectToDb = async () => {
  try {
    if (Connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    Connection.isConnected = db.connections[0].readyState;
    console.log("Connect to db");
  } catch (error) {
    console.log("Failed to connect to db");
  }
};
