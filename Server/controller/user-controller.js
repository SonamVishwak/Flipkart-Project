import Product from "../model/product-schema.js";
import User from "../model/user-schema.js";

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).json({ message: "Username already exist" });
    }
    const user = request.body;
    console.log(user);
    const newuser = new User(user);
    await newuser.save();
    response.status(200).json({ message: newuser });
  } catch (error) {
    response.status(500).json({
      message: error,
    });
  }
};

export const userLogin = async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;
    let user = await User.findOne({ username: username, password: password });
    if (user) {
      console.log(user);
      return response.status(200).json({ message: user });
    } else {
      return response.status(401).json({ message: "Invalid login" });
    }
  } catch (error) {
    return response.status(500).json({ message: error });
  }
};
