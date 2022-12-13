import { Schema, model } from "mongoose";
import Application from "./Application";

export interface PropertyType {
  appId: Schema.Types.ObjectId;
  address: String;
  state: String;
  sellerName: String;
  finalSalesPrice: number;
  city: String;
  zipcode: number;
  buyerName: String;
  ClosingDate: Date;
  isShortSale: boolean;
}

const PropertySchema = new Schema<PropertyType>({
  appId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Application,
    unique: true,
  },

  address: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 35,
  },

  state: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 15,
  },
  sellerName: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 15,
  },
  finalSalesPrice: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 25,
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

  buyerName: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 15,
  },
  ClosingDate: {
    type: Date,
    required: true,
  },
  isShortSale: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const Property = model<PropertyType>("Property", PropertySchema);
export default Property;
