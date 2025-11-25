const bcrypt = require('bcrypt');
const User = require("../models/users");
const env = require('../config/env')


 const getUsers = async (req, res) => {
  try{  
  const Users =  await User.find({});
    res.status(200).json(Users);
  } catch(error) {
    res.status(404).json({"message": error.message})
  }
  }

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const userData = await User.findById(id); 

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

 const createUsers= async (req, res) => {
   try {
    const { name,email,admissionNumber,password,role, club} = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(env.BCRYPT_SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create new user
    const user = new User({
      name,
      email,
      role,
      admissionNumber,
      password:hashedPassword,
      club,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

 const updateUsers= async (req, res) =>{
 try {const { id}  = req.params;
    const queriedUser = await User.findByIdAndUpdate(id,
      req.body,
      {new: true, runValidators:true}
    )
    if(!queriedUser)  return res.status(404).json({ message: "User not found" });
  
    res.status(500).json({ message: "Server error" });
  }catch(error) {
     res.status(500).json({ message: err.message });
  }
};
 const deleteUsers = async (req, res) =>{
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = {
    createUsers,
    getSingleUser,
    getUsers,
    deleteUsers,
    updateUsers
}