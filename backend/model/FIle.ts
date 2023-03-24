import mongoose, { Document } from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    sizeInBytes: {
      type: Number,
      required: true,
    },
    sender: {
      type: String,
    },
    receiver: {
      type: String,
    },
  },
  { timestamps: true }
);

interface iFile extends Document {
  fileName: string;
  secure_url: string;
  sizeInBytes: string;
  format: string;
  sender: string;
  receiver: string;
}

export default mongoose.model<iFile>("File", fileSchema);
