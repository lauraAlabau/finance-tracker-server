import { Schema, model } from "mongoose";

interface FinanceRecord {
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  payment: string;
}

const FinanceRecordSchema = new Schema<FinanceRecord>({
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
});

export const FinanceRecordModel = model<FinanceRecord>(
  "FinanceRecord",
  FinanceRecordSchema
);
