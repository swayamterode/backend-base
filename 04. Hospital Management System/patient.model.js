import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    diagnosedWith: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    gender: {
      type: String,
      required: true,
      enum: ["M", "F", "Others"],
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    contact: { type: Number, required: true },
    email: { type: String, required: true },
    medicalReports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalReport",
      },
    ],
    whichHospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
  },
  { timestamps: true },
);

export const Patient = mongoose.model("Patient", patientSchema);
