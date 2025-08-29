import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: [2, "username must be at least 2 characters"],
      maxLength: [25, "username must be at most 25 characters"],
    },

    email: {
      type: String,
      unique: true,
      required: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address format",
      ],
    },

    PhoneNumber: {
      type: String,
      require: true,
      match: [/^0[5-7]\d{8}$/, "Invalid Phone Number"],
    },

    password: {
      type: String,
      required: true,
    },

    userType: {
      type: String,
      required: true,
      enum: ["attendee", "manager", "admin"],
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },

    DateOfBirth: {},
    Gender: {
      type: String,
      enum: ["male", "female"],
    },
    Location: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
