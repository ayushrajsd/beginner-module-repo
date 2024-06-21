const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.send({
      success: true,
      message: "User registered successfully, Please Login",
    });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log("req received", req.body, user);
    const token = jwt.sign(
      { userId: user._id, role: "batman" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    if (!user) {
      return res.send({
        success: false,
        message: "User not found. Please register",
      });
    }
    if (req.body.password !== user.password) {
      return res.send({
        success: false,
        message: "Sory, Invalid password",
      });
    }
    res.send({
      success: true,
      message: "User Logged in",
      data: token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getCurrentUser = async (req, res) => {
  console.log("reached get current user ")
    console.log("req.body user id in get current user", req.body);
  const user = await User.findById(req.body.userId).select("-password");

  res.send({
    success: true,
    message: "You are authorized to go to the protected route!",
    data: user,
  });
};

module.exports = {
  register,
  login,
  getCurrentUser,
};
