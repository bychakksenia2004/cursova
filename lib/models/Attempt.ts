import mongoose, { Document, Model } from "mongoose";

export interface IAttempt extends Document {
  userId: mongoose.Types.ObjectId | string | null;
  testId: mongoose.Types.ObjectId | string;
  answers: any;
  totalScore: number;
  totalPossible: number;
  perQuestion: any[];
  createdAt: Date;
}

const AttemptSchema = new mongoose.Schema<IAttempt>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "User" },
    testId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Test" },
    answers: { type: mongoose.Schema.Types.Mixed, required: false },
    totalScore: { type: Number, required: true },
    totalPossible: { type: Number, required: true },
    perQuestion: { type: Array, required: true },
    createdAt: { type: Date, default: () => new Date() },
  },
  { timestamps: false }
);

const Attempt: Model<IAttempt> = mongoose.models.Attempt || mongoose.model<IAttempt>("Attempt", AttemptSchema);
export default Attempt;
