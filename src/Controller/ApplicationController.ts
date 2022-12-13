import { Request, Response } from "express";
import Application, { ApplicationType } from "../Models/Application";

export const Register = async (req: Request, res: Response) => {
  try {
    // console.log(req.user);

    const RegisterdApplication = await Application.create({
      ...req.body,
    });

    //sending Application in User response
    res.json({
      message: " Application Successfully Registerd",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
export const Edit = async (req: Request, res: Response) => {
  try {
    const {
      userid,
      isCompleted,
      isClientCompleted,
      isSaleCompleted,
      isBrokerCompleted,
      isBankingCompleted,
      isDocumentUploaded,
      amount,
      status,
    } = req.body;
    // Create a newNote object

    interface updatingApplicationTypes {
      isCompleted: {
        date?: Date;
        iscomplete?: boolean;
      };
      isClientCompleted?: boolean;
      isSaleCompleted?: boolean;
      isBrokerCompleted?: boolean;
      isBankingCompleted?: boolean;
      isDocumentUploaded?: boolean;
      amount?: number;
      status?: String;
    }

    const updatingApplication: updatingApplicationTypes = {
      isCompleted,
      isClientCompleted,
      isSaleCompleted,
      isBrokerCompleted,
      isBankingCompleted,
      isDocumentUploaded,
      amount,
      status,
    };

    if (isCompleted) {
      updatingApplication.isCompleted = req.body.isCompleted;
    }
    if (isClientCompleted) {
      updatingApplication.isClientCompleted = req.body.isClientCompleted;
    }
    if (isSaleCompleted) {
      updatingApplication.isSaleCompleted = req.body.isSaleCompleted;
    }
    if (isBankingCompleted) {
      updatingApplication.isBankingCompleted = req.body.isBankingCompleted;
    }
    if (isDocumentUploaded) {
      updatingApplication.isDocumentUploaded = req.body.isDocumentUploaded;
    }
    if (amount) {
      updatingApplication.amount = req.body.amount;
    }
    if (status) {
      updatingApplication.status = req.body.status;
    }

    //finding Application of the user by Userid

    // let userid: any = req.body.id;

    if (
      !userid ||
      userid.length === 0 ||
      userid == null ||
      userid == "undefined"
    ) {
      res.json({
        message: " Please Provide a valid Userid  ",
        status: false,
      });
    } else {
      const trackApp: any = await Application.find({ userid });

      // console.log("trackapp application", trackApp.userid);

      const updatedApplication: any = await Application.findOneAndUpdate(
        userid,
        { $set: updatingApplication },
        { new: true }
      );
      console.log(" updated application is ", updatedApplication);

      if (updatedApplication.length == 0 || !updatedApplication) {
        return res.status(400).json({
          error: "Application not found ",
          success: false,
        });
      } else {
        //sending ClosingCompany details in response
        res.json({
          message: " Application Updated Successfully ",
          status: true,
        });
      }
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
export const Get = async (req: Request, res: Response) => {
  try {
    const { userid } = req.body;

    console.log(userid);
    //finding Appllication

    const ApplicationInDb = await Application.find({ userid });
    console.log(ApplicationInDb.length);

    if (ApplicationInDb.length == 0 || !ApplicationInDb) {
      return res.status(400).json({
        error: "Application not found ",
        success: false,
      });
    }

    //sending Appllication User response
    res.json({
      message: "fetched Successfully ",
      data: ApplicationInDb,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
