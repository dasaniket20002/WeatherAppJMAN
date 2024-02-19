// import neccessary frameworks
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Users.js");
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/;

// new userv register function
const register = async (req, res) => {
  try {
    const { name, email = email.toLowerCase(), password, city } = req.body;

    // return error status if the new user email already exists
    const user = await User.findOne({ email: email });
    if (user) return res.status(201).json({ msg: "User already exists!" });

    // if (!passwordRegex.test(password)) {
    //   return res.status(400).json({ error: "Password does not meet criteria." });
    // }

    // salt and hash the password before storing
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // copy the user details in order to store in the db
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      city,
    });

    // user saved successfully
    const savedUser = await newUser.save();
    console.log("User Registered Successfully");
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// user login function
const login = async (req, res) => {
  try {
    const { email = email.toLowerCase(), password } = req.body;

    // no existing user email from the requested email
    const user = await User.findOne({ email: email });
    if (!user) return res.status(201).json({ msg: "User does not exist. " });

    // invalid passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(202).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const userObject = user.toObject();
    delete userObject.password;

    // sucessfull user login
    console.log("User logged in successfully");
    res.status(200).json({ token, user: userObject });
  } catch (err) {
    res.status(400).json({ error: err.message });
    console.log(err.message);
  }
};

module.exports = { register, login };
