import { Request, Response } from "express";
import { LoginUserBody } from "../types/user";

export const loginUser=(req:Request<{}, {}, LoginUserBody>, res:Response)=>{

    const {email, password} = req.body;
    if (!email || !password) {
       return res.status(400).json({
          message: "Email and password are required",
          statusCode: 400,
        });
    }

    res.status(200).json({
      message: `User ${email} Logged in successfully`
    });
}