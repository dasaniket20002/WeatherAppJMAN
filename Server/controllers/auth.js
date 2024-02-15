const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Users.js");
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/;

const register = async (req, res) => {
  try {
    const {
      name,
      email= email.toLowerCase(),
      password,
      city,
    } = req.body;

    const user = await User.findOne({ email: email });
    if (user) return res.status(400).json({ msg: "User already exists!" });

    // if (!passwordRegex.test(password)) {
    //   return res.status(400).json({ error: "Password does not meet criteria." });
    // }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
      city
    });

    const savedUser = await newUser.save();
    console.log("User Registered Successfully")
    res.status(200).json(savedUser);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const login = async (req, res) => {
  try {
    const { email = email.toLowerCase(), password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const userObject = user.toObject();
    delete userObject.password;

    console.log("User logged in successfully")
    res.status(200).json({ token, user: userObject });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message);
  }
};

module.exports = {register, login};