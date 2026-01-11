import { Request, Response, NextFunction } from "express";

export const goodByeController = (req: Request,res: Response,next: NextFunction) => {
  const { name } = req.query;

  if (!name || typeof name !== "string") {
    return res.status(400).json({
      message: "Query parameter name is required and must be a string",
      statusCode: 400,
    });
  }

  res.status(200).send(`Goodbye, ${name}!`);
};
