import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is Missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: " User already exist with this email.",
        sucess: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    return res.status(201).json({
      message: "Account created sucessfully",
      sucess: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is Missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        sucess: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        sucess: false,
      });
    }
    // check user role
    if (role != user.role) {
      return res.status(400).json({
        message: "Accound dosen't exist with current role",
        sucess: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res.status(200).cookie(
      "token",
      token,
      { maxAge: 1 * 24 * 60 * 1000, httpOnly: true, sameSite: "strict" }.json({
        message: `Welcome back &{user.fullname} `,
        user,
        sucess: true,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie(
      "token",
      "",
      { maxAge: 0 }.json({
        message: "Logged sucessfully",
        sucess: true,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const updatProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, bio, skills } = req.body;
    const file = req.file;
    if (!fullname || !email || !phoneNumber || !password || !bio || !skills) {
      return res.status(400).json({
        message: "Something is Missing",
        success: false,
      });
    }

    // cloudinary

    const skillsArray = skills.split(" ");
    const userId = req.id;
    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }
    //updating data
    user.fullname = fullname;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.profilr.bio = bio;
    user.profile.skills = skillsArray;

    await user.save()
    user = {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile,
      };
return res.status(200).json({
    message:"Profile Updated Sucessfully",
    user,
    sucess:true
})
  } catch (error) {
    console.log(error);
  }
};
