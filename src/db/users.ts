import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const Usermodel = mongoose.model("User", userSchema);
export const getUsers = () => Usermodel.find();
export const getUserbyEmail = (email: String) => Usermodel.findOne({ email });
export const getUserbySessionToken = (sessionToken: String) =>
  Usermodel.findOne({
    "authentication.sessionToken": sessionToken,
  });

export const getuserID = (id: String) => Usermodel.findById(id);
export const createUser = (values: Record<string, any>) =>
  new Usermodel(values).save().then((user) => user.toObject());
export const deleteUserbyID = (id: String) =>
  Usermodel.findOneAndDelete({ _id: id });
export const updateUSerbyiD = (id: String, values: Record<string, any>) =>
  Usermodel.findByIdAndUpdate(id, values);
