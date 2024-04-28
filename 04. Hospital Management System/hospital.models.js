import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    contact: { type: Number, required: true },
    email: { type: String, required: true },
    doctors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
      },
    ],
    patients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
      },
    ],
    specialization: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
