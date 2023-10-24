import mongoose from "mongoose";

export const connectDb = async (req, res) => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://admin:admin@nodeexpressprojects.ihknmfx.mongodb.net/jwt?retryWrites=true&w=majority"
    );
    console.log("connection successful");
  } catch (error) {
    console.log(error);
  }
};
