import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(404).send("token not found");
    }
    const decode = jwt.verify(token, "asalshasakgsagas");
    const user = await User.findOne({ _id: decode.user.id });
    if (!user) {
      throw new Error("user not found");
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
