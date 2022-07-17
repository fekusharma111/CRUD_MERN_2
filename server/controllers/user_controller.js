import User from "../models/user_Schema.js";

export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
export const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json(users);
  } catch (error) {
    res.status(402).json({ message: error });
  }
};
export const getUsers = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(203).json(user);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const editUser = async (req, res) => {
  let user = req.body;
  //   console.log(req.params.id);

  const eeditUsers = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, eeditUsers);
    // console.log(editUser);

    res.status(200).json(eeditUsers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User Deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
