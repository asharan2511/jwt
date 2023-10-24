import User from "../models/user.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  const { email, name, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(200).send("user found");
  }
  const create = await User.create({
    name,
    email,
    password,
  });
  res.status(200).send("user created successfully");
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ message: "User not found", success: false });
  }
  const token = jwt.sign(
    { user: { name: user.name, id: user._id } },
    "asalshasakgsagas",
    { expiresIn: "1d" }
  );
  if (!token) {
    return res.staus(404).send("simething went wrong");
  }
  res.cookie("jwt", token, {
    expires: new Date(Date.now() + 600000),
    httpOnly: true,
  });
  res.status(200).send("logg success");
};

export const aboutMe = async (req, res) => {
  res.status(200).send(req.user.name);
};
