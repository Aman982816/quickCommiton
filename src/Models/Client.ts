import { Schema, model } from "mongoose";
import Application from "./Application";

interface client {
  appId: Schema.Types.ObjectId;
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  HomeAddress: String;
  city: String;
  state: String;
  zipcode: number;
}

const ClientSchema = new Schema<client>({
  appId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Application,
    unique: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
  },
  HomeAddress: {
    type: String,
    required: true,
  },
  city: {
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
  zipcode: {
    type: Number,
    required: true,
    minlength: 6,
    maxlength: 8,
  },
});
const Client = model<client>("Client", ClientSchema);
export default Client;
