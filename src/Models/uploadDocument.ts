import { Schema, model } from "mongoose";
import Application from "./Application";

export interface uploadDocumentType {
  appId: Schema.Types.ObjectId;
  purchaseAgrement: Buffer;
  brokerOfRecord: Buffer;

  //   profileImage: {
  //     data: Buffer;
  //     contentType: String;
  //   };

  //   bankName: String;
  //   accountHolder: String;
  //   accountType: String;
  //   accountNumber: number;
  //   routing: string;
  //   isAddressSame: boolean;
  //   statementAddress: String;
  //   state: String;
  //   city: String;
  //   zipCode: number;
}

const uploadDocumentSchema = new Schema<uploadDocumentType>({
  appId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Application,
    unique: true,
  },
  purchaseAgrement: {
    data: Buffer,
    contentType: String,
    required: true,
  },
  brokerOfRecord: {
    data: Buffer,
    contentType: String,
    required: true,
  },
});
const uploadDocument = model<uploadDocumentType>(
  "uploadDocument",
  uploadDocumentSchema
);
export default uploadDocument;
