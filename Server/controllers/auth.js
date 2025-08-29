import { ErrorHandler } from "../utils/error.js";
import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(ErrorHandler(400, "all fields are required"));
  }
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(ErrorHandler(400, "email or password are wrong"));
    }

    const checkPassword = bcryptjs.compareSync(password, user.password);

    if (!checkPassword) {
      return next(ErrorHandler(400, "email or password are wrong"));
    }

    const token = jwt.sign(
      {
        id: user._id,
        userType: user.userType,
      },
      process.env.JWTSECRET,
      { expiresIn: "30d" }
    );

    const { password: pass, ...rest } = user._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
export const register = async (req, res, next) => {
  const { username, email, phoneNumber, password, confirmePassword, userType } =
    req.body;

  if (
    !username ||
    !email ||
    !phoneNumber ||
    !password ||
    !confirmePassword ||
    !userType
  ) {
    return next(ErrorHandler(400, "all fields are required"));
  }
  console.log("test");

  try {
    const user = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (user) {
      return next(ErrorHandler(400, "user already exists"));
    }

    if (password !== confirmePassword) {
      return next(ErrorHandler(400, "passwords do not match"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      username,
      email,
      phoneNumber,
      password: hashedPassword,
      userType,
    });

    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};
