import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectoDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongodb is already connected ");
    retuen;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;

    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
