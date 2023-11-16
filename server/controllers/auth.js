import User from "../models/auth.js";

export const signup = async (req, res) => {
  const { firstName, lastName, phoneno, location, aadharNo, password } =
    req.body;
  console.log(firstName);
  const newUser = new User({
    firstName,
    lastName,
    phoneno,
    location,
    aadharNo,
  });
  try {
    const registeredUser = await User.register(newUser, password);
    req.logIn(registeredUser, async (err) => {
      if (err) return err;
      res.status(201).json(registeredUser);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
