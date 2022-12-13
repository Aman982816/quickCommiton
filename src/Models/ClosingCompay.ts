import { Schema, model } from "mongoose";
import Application from "./Application";

export interface ClosingCompanyType {
  appId: Schema.Types.ObjectId;
  closingCompanyName: String;
  address: String;
  state: String;
  contactName: String;
  phone: number;
  EscrowNumber: String;
  city: String;
  zipCode: number;
  email: string;
}

const ClosingCompanySchema = new Schema<ClosingCompanyType>({
  appId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Application,
    unique: true,
  },

  closingCompanyName: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 35,
  },

  address: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 15,
  },
  state: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 15,
  },

  contactName: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 16,
  },

  EscrowNumber: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 15,
  },
  zipCode: {
    type: Number,
    required: true,
    minlength: 6,
    maxlength: 8,
  },
  email: {
    type: String,
    required: true,
  },
});
const ClosingCompany = model<ClosingCompanyType>(
  "ClosingCompany",
  ClosingCompanySchema
);
export default ClosingCompany;
