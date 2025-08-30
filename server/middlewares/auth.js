import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/error.js";
import { asyncError } from "./error.js";


export const isAuthenticated = asyncError(async (req, res, next) => {
  console.log('Request Cookies:', req.cookies);

  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler('Not Logged In', 401));

  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData._id);

    if (!req.user) return next(new ErrorHandler('User not found', 401));

    console.log('Authenticated User:', req.user);
    next();
  } catch (error) {
    console.error('Token Verification Error:', error);
    next(new ErrorHandler('Invalid Token', 401));
  }
});
//console.log('Decoded Token:', decodedData);


export const isAdmin = asyncError(async (req, res, next) => {
  if (req.user.role !== "admin")
    return next(new ErrorHandler("Only Admin allowed", 401));
  next();
});