import { NextFunction, Request, Response } from "express";
import "dotenv/config";

export function GetInstagramOauthHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const url = `https://instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_CLIENT}&redirect_uri=${process.env.INSTAGRAM_REDIRECT_URI}&scope=business_basic,business_content_publish,business_manage_comments,business_manage_messages&response_type=code`;
  res.redirect(url);
}
