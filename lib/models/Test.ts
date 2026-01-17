import mongoose, { Document, Model } from "mongoose";

// TypeScript interfaces for question variants
type QBase = {
  id: number;
  type: "single_choice" | "multi_choice" | "sequence" | "matching" | "open";
  text: string;
  imageUrl?: string;
  points?: number;
};

type SingleOption = { id: number; text: string; correct: boolean };
type SequenceItem = { id: number; text: string; order: number };
type PairItem = { id: number; left: string; right: string };

export type SingleQuestion = QBase & { type: "single_choice"; options: SingleOption[] };
export type MultiQuestion = QBase & { type: "multi_choice"; options: SingleOption[] };
export type SequenceQuestion = QBase & { type: "sequence"; options: SequenceItem[] };
export type MatchingQuestion = QBase & { type: "matching"; pairs: PairItem[] };
export type OpenQuestion = QBase & { type: "open"; answers: string[] };

export interface ITest extends Document {
  title: string;
  description: string | null;
  authorId: mongoose.Types.ObjectId;
  visibility: "private" | "public";
  storeResponses: boolean;
  ownResultView: "full" | "score_only" | "nothing";
  timed?: boolean;
  timeLimitMinutes?: number | null;
  dateWindowEnabled?: boolean;
  openFrom?: Date | null;
  openTo?: Date | null;
  questions: Array<SingleQuestion | MultiQuestion | SequenceQuestion | MatchingQuestion | OpenQuestion>;
}

// Mongoose sub-schemas
const questionOpts = { discriminatorKey: "type", _id: false } as const;

const BaseQuestionSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    points: { type: Number, required: false, default: 1 },
    type: { type: String, required: true },
    text: { type: String, required: true },
    imageUrl: { type: String, required: false },
  },
  questionOpts
);

const SingleQuestionSchema = new mongoose.Schema(
  {
    options: [
      {
        id: { type: Number, required: true },
        text: { type: String, required: true },
        correct: { type: Boolean, required: true },
      },
    ],
  },
  { _id: false }
);

const MultiQuestionSchema = new mongoose.Schema(
  {
    options: [
      {
        id: { type: Number, required: true },
        text: { type: String, required: true },
        correct: { type: Boolean, required: true },
      },
    ],
  },
  { _id: false }
);

const SequenceQuestionSchema = new mongoose.Schema(
  {
    options: [
      {
        id: { type: Number, required: true },
        text: { type: String, required: true },
        order: { type: Number, required: true },
      },
    ],
  },
  { _id: false }
);

const MatchingQuestionSchema = new mongoose.Schema(
  {
    pairs: [
      {
        id: { type: Number, required: true },
        left: { type: String, required: true },
        right: { type: String, required: true },
      },
    ],
  },
  { _id: false }
);

const OpenQuestionSchema = new mongoose.Schema(
  {
    answers: [
      {
        type: String,
      },
    ],
  },
  { _id: false }
);

// Main Test schema — questions array uses base schema and will be discriminated
const TestSchema = new mongoose.Schema<ITest>(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    authorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    visibility: { type: String, enum: ["private", "public"], default: "private" },
    storeResponses: { type: Boolean, default: false },
    ownResultView: { type: String, enum: ["full", "score_only", "nothing"], default: "full" },
    timed: { type: Boolean, default: false },
    timeLimitMinutes: { type: Number, required: false },
    dateWindowEnabled: { type: Boolean, default: false },
    openFrom: { type: Date, required: false },
    openTo: { type: Date, required: false },
    questions: [BaseQuestionSchema],
  }
);

// Apply discriminators for the question array
// Note: for array discriminators use TestSchema.path('questions').discriminator(...)
;(TestSchema.path("questions") as any).discriminator("single_choice", SingleQuestionSchema as any);
;(TestSchema.path("questions") as any).discriminator("multi_choice", MultiQuestionSchema as any);
;(TestSchema.path("questions") as any).discriminator("sequence", SequenceQuestionSchema as any);
;(TestSchema.path("questions") as any).discriminator("matching", MatchingQuestionSchema as any);
;(TestSchema.path("questions") as any).discriminator("open", OpenQuestionSchema as any);

const Test: Model<ITest> = mongoose.models.Test || mongoose.model<ITest>("Test", TestSchema);
export default Test;