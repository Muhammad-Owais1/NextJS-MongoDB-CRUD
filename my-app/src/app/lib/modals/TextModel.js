import mongoose from "mongoose";

const { schema } = mongoose;

const textSchema = new schema(
  {
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const textModel =
  mongoose.models.Texts || mongoose.model("Texts", textSchema);
