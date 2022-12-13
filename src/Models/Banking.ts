import { Schema, model } from "mongoose";
import Application from "./Application";

export interface BankingType {
  appId: Schema.Types.ObjectId;
  bankName: String;
  accountHolder: String;
  accountType: String;
  accountNumber: number;
  routing: string;
  isAddressSame: boolean;
  statementAddress: String;
  state: String;
  city: String;
  zipCode: number;
}

const BankingSchema = new Schema<BankingType>({
  appId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Application,
    unique: true,
  },

  bankName: {
    type: String,
    required: true,
  },
  accountHolder: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 15,
  },
  accountType: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 15,
  },
  accountNumber: {
    type: Number,
    required: true,
    minlength: 6,
    maxlength: 25,
  },
  routing: {
    type: String,
    required: true,
  },
  isAddressSame: {
    type: Boolean,
    required: true,
    default: false,
  },
  statementAddress: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
    minlength: 6,
    maxlength: 8,
  },
});
const Banking = model<BankingType>("Banking", BankingSchema);
export default Banking;
