const express = require("express");
const User = require("../models/userModel");
const { register, login, getCurrentUser } = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");

const userRouter = express.Router();
// Register a user
userRouter.post("/register", register);

userRouter.post("/login", login);

userRouter.get('/get-current-user',auth, getCurrentUser)

module.exports = userRouter;
