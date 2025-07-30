import User from "../model/user.model.js";
import bcrypt from 'bcrypt';

export const signUp = async (req, res) => {
  try {
    const { fullname, email, passcode } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exists" }); // ✅ added return
    }

    const hashPasscode = await bcrypt.hash(passcode, 10);

    const newUser = new User({
      fullname,
      email,
      passcode: hashPasscode// ✅ stored correctly
    });

    await newUser.save();

    res.status(201).json({ message: "User Created Successfully...", user:newUser  });

  } catch (error) {
    console.log("Signup Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const login = async (req, res) => {
  try {
    const { email, passcode } = req.body;

    const user = await User.findOne({ email: email.trim() }); // ✅ await added
    if (!user) {
      console.log("User Doesn't Exist");
      return res.status(400).json({ message: "User not found" }); // ✅ return added
    }

    const isMatch = await bcrypt.compare(passcode.trim(), user.passcode); // ✅ await and trim

    if (!isMatch) {
      console.log("Incorrect Password");
      return res.status(401).json({ message: "Invalid credentials" }); // ✅ better message
    }

    console.log("Login successful");
    res.status(200).json({
      message: "Login successful",
      name: user.fullname,
      id: user._id,
    });

  } catch (error) {
    console.log("Login error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};