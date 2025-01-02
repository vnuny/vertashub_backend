import { Request, Response, NextFunction } from "express";
import { catchError } from "../../../lib/errors";

export default function InstagramOauthCallback(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { code, error } = req.query;
  try {
    res.json({ code, error });
  } catch (error) {
    catchError(error, next);
  }
}
