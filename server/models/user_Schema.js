import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
import validator from "validator";

const Userschema = mongoose.Schema({
  name: {
    type: String,
    validate(value) {
      if (!validator.isAlpha(value)) {
        throw new Error("Alphabets only");
      }
    },
  },

  username: String,
  email: String,
  phone: String,
});

autoIncrement.initialize(mongoose.connection);
Userschema.plugin(autoIncrement.plugin, "User");
const User = mongoose.model("User", Userschema);
export default User;
