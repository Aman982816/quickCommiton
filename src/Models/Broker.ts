import { Schema, model } from "mongoose";
import Application from "./Application";

interface BrokerType {
  appId: Schema.Types.ObjectId;
  address: String;
  state: String;
  phone: number;
  city: String;
  zipcode: number;
  email: String;
  borkerCompanyName: String;
  bFirstName: String;
  bLastName: String;
  bcellPhone: number;
  bemail: String;
}

const BrokerSchema = new Schema<BrokerType>({
  appId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Application,
    unique: true,
  },

  address: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 15,
  },
  city: {
    type: String,
    required: true,
  },

  zipcode: {
    type: Number,
    required: true,
    minlength: 6,
    maxlength: 8,
  },

  email: {
    type: String,
    required: true,
  },
  borkerCompanyName: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 35,
  },
  bFirstName: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 15,
  },
  bLastName: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 15,
  },
  bcellPhone: {
    type: Number,
    required: true,
    minlength: 4,
    maxlength: 15,
  },
  bemail: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 25,
  },
});
const Broker = model<BrokerType>("Broker", BrokerSchema);
export default Broker;
